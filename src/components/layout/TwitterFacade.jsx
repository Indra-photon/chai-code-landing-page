import React, { useState, useEffect, useRef } from 'react';

/**
 * TwitterFacade - A lightweight placeholder for Twitter embeds
 * 
 * This component displays a placeholder for a tweet and only loads the actual
 * Twitter widget when:
 * 1. The user clicks on the placeholder, or
 * 2. The component scrolls into the viewport (if lazyLoad is true)
 * 
 * This significantly improves page performance by reducing initial load time
 * and avoiding the heavy JavaScript execution from Twitter's embed script.
 */
const TwitterFacade = ({ 
  tweetId, 
  className = "", 
  lazyLoad = true 
}) => {
  const [loadTweet, setLoadTweet] = useState(!lazyLoad);
  const containerRef = useRef(null);
  const [tweetData, setTweetData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load the Twitter widget script
  const loadTwitterScript = () => {
    if (window.twttr) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    if (!lazyLoad) {
      setLoadTweet(true);
    } else {
      // Intersection Observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !loadTweet) {
            // When component enters viewport and tweet isn't loaded yet
            setLoadTweet(true);
          }
        },
        { 
          threshold: 0.1, // Trigger when at least 10% of the component is visible
          rootMargin: '100px' // Start loading when within 100px of viewport
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, [lazyLoad, loadTweet]);

  // When loadTweet changes to true, initialize the Twitter widget
  useEffect(() => {
    if (loadTweet && tweetId) {
      setIsLoading(true);
      
      // Load Twitter's script
      loadTwitterScript().then(() => {
        if (window.twttr && containerRef.current) {
          // Clear the container
          containerRef.current.innerHTML = '';
          
          // Create a new div for the tweet
          const tweetContainer = document.createElement('div');
          containerRef.current.appendChild(tweetContainer);
          
          // Render the tweet
          window.twttr.widgets.createTweet(tweetId, tweetContainer, {
            theme: 'dark',
            dnt: true
          }).then(() => {
            setIsLoading(false);
          });
        }
      });
    }
  }, [loadTweet, tweetId]);

  // Function to handle click on the placeholder
  const handlePlaceholderClick = () => {
    setLoadTweet(true);
  };

  // Create a simple placeholder for the tweet
  return (
    <div 
      ref={containerRef}
      className={`twitter-facade ${className}`}
      onClick={!loadTweet ? handlePlaceholderClick : undefined}
      style={{ 
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    >
      {!loadTweet ? (
        // Placeholder shown before real tweet loads
        <div 
          className="twitter-placeholder"
          style={{
            backgroundColor: '#15202b',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid #38444d',
            color: '#fff',
            cursor: 'pointer',
            minHeight: '150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Twitter logo */}
          <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '40px', height: '40px', fill: '#1d9bf0', marginBottom: '12px' }}>
            <g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g>
          </svg>
          
          <span style={{ fontWeight: 'bold' }}>Click to load tweet</span>
          <span style={{ fontSize: '0.9em', opacity: 0.7, marginTop: '6px' }}>Tweet #{tweetId}</span>
        </div>
      ) : isLoading ? (
        // Loading indicator
        <div 
          style={{
            backgroundColor: '#15202b',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid #38444d',
            color: '#fff',
            minHeight: '150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="loading-spinner" style={{
            width: '30px',
            height: '30px',
            border: '3px solid rgba(29, 155, 240, 0.3)',
            borderTop: '3px solid #1d9bf0',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '12px'
          }}></div>
          
          <span>Loading tweet...</span>
          
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : null}
    </div>
  );
};

export default TwitterFacade;