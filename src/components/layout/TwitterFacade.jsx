import React, { useState, useEffect, useRef } from 'react';

const TwitterFacade = ({ tweetId, className = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const tweetContainerRef = useRef(null);

  useEffect(() => {
    
    if (!tweetId) {
      setIsLoading(false);
      return;
    }

    // Function to load the Twitter script
    const loadTwitterScript = () => {
      if (window.twttr) {
        renderTweet();
        return;
      }

      console.log("Loading Twitter script...");
      const script = document.createElement('script');
      script.src = "https://platform.twitter.com/widgets.js";
      script.charset = "utf-8";
      script.async = true;
      script.onload = () => {
        renderTweet();
      };
      script.onerror = (err) => {
        setIsLoading(false);
      };
      document.head.appendChild(script);
    };

    // Function to render the tweet
    const renderTweet = () => {
      if (!tweetContainerRef.current) {
        setIsLoading(false);
        return;
      }
      
      if (!window.twttr) {
        setIsLoading(false);
        return;
      }

      
      window.twttr.widgets.createTweet(
        tweetId,
        tweetContainerRef.current,
        {
          theme: 'dark',
          dnt: true
        }
      ).then((el) => {
        if (el) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      }).catch(err => {
        setIsLoading(false);
      });
    };

    const timer = setTimeout(() => {
      loadTwitterScript();
    }, 1000);

    return () => clearTimeout(timer);
  }, [tweetId]); 

  return (
    <div className={`twitter-facade ${className} rounded-xl overflow-hidden bg-[#15202b] border border-[#38444d] relative`}
    >
      {isLoading && (
        <diV className='flex-col justify-center items-center h-full w-full'>
          <div className="text-center text-white text-base font-medium w-full p-2">
            <span>Loading tweet...</span>
          </div>
          <div className='flex justify-center items-center w-full'>
            <div 
              className="loading-spinner w-5 h-5 border-4 border-[rgba(29,155,240,0.2)] border-t-[#1d9bf0] rounded-full animate-spin mb-4"
            ></div>
          </div>
        </diV>
      )}

        <div 
          ref={tweetContainerRef} 
        ></div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default TwitterFacade;