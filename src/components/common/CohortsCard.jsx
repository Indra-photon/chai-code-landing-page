
// import React from 'react';
// import Card from './Card';
// import Button from './Button';
// import Badge from './Badge';
// import YouTube from 'react-youtube';
// import Container from '../layout/Container';

// const CohortsCard = ({ 
//   title, 
//   description, 
//   price,
//   originalPrice,
//   discount,
//   startDate,
//   duration,
//   isLive = false,
//   videoId,
//   tags = [],
//   codeSnippet,
//   className = '',
//   onBuyClick,
//   onLearnMoreClick
// }) => {
  
//   return (
//       <Card className={`flex flex-col h-full ${className} group relative`}>
//       {/* Live badge */}
//       {isLive && (
//         <Badge text="LIVE" className="absolute top-2 right-2 z-10 bg-success/20 text-success" />
//       )}
      
//       {videoId && (
//         <div className="aspect-video w-full mb-4 overflow-hidden relative">
//           <YouTube
//             videoId={videoId}
//             className="w-full h-full"
//             opts={{
//               width: '100%',
//               height: '100%',
//               playerVars: {
//                 modestbranding: 1,
//                 rel: 0
//               }
//             }}
//           />
//         </div>
//       )}
      
//       {/* Content */}
//       <div className="flex-grow flex flex-col">
//         <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//         <p className="text-text-secondary text-sm mb-3 flex-grow">{description}</p>
        
//         {/* Tags */}
//         {tags.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-3">
//             {tags.map((tag, index) => (
//               <Badge key={index} text={tag} className="bg-slate-700 text-cyan-300 text-xs" />
//             ))}
//           </div>
//         )}
        
//         {/* Schedule information */}
//         {(startDate || duration) && (
//           <div className="mb-3 text-xs">
//             {startDate && (
//               <div className="flex items-center text-text-secondary mb-1">
//                 <span className="mr-2">🗓️</span>
//                 <span>Starts: {startDate}</span>
//               </div>
//             )}
//             {duration && (
//               <div className="flex items-center text-text-secondary">
//                 <span className="mr-2">⏱️</span>
//                 <span>Duration: {duration}</span>
//               </div>
//             )}
//           </div>
//         )}
        
//         {codeSnippet && (
//           <div className="bg-black rounded-md p-2 mb-4 overflow-hidden">
//             <pre className="text-xs text-cyan-300 overflow-x-auto">{codeSnippet}</pre>
//           </div>
//         )}
        
//         {/* Price */}
//         {price && (
//           <div className="mt-auto">
//             <div className="flex items-center mb-3">
//               <div className="text-xl font-bold text-white">
//                 {price} INR
//               </div>
//               {originalPrice && (
//                 <div className="flex items-center ml-2">
//                   <span className="text-text-secondary text-sm line-through mr-2">{originalPrice} INR</span>
//                 </div>
//               )}
//                {/* Discount badge */}
//               {discount > 0 && (
//                 <div className=" bg-cyan-200 text-black text-xs font-bold px-2 py-1 rounded-md">
//                   {discount}% OFF
//                 </div>
//               )}
//             </div>
//             <Button 
//               variant="secondary" 
//               onClick={onBuyClick || onLearnMoreClick} 
//               className="w-full justify-center"
//             >
//               Learn More
//             </Button>
//           </div>
//         )}
//       </div>
      
//       {/* Glow effect on hover */}
//       <div className="absolute inset-x-0 bottom-0">
//         <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
//         <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
//       </div>
//     </Card>
    
//   );
// };

// export default CohortsCard;

import React from 'react';
import Card from './Card';
import Button from './Button';
import Badge from './Badge';
import YouTubeFacade from '../layout/YouTubeFacade';
import Container from '../layout/Container';

const CohortsCard = ({ 
  title, 
  description, 
  price,
  originalPrice,
  discount,
  startDate,
  duration,
  isLive = false,
  videoId,
  tags = [],
  codeSnippet,
  className = '',
  onBuyClick,
  onLearnMoreClick
}) => {
  
  return (
      <Card className={`flex flex-col h-full ${className} group relative`}>
      {/* Live badge */}
      {isLive && (
        <Badge text="LIVE" className="absolute top-2 right-2 z-10 bg-success/20 text-success" />
      )}
      
      {videoId && (
        <div className="aspect-video w-full mb-4 overflow-hidden relative">
          <YouTubeFacade
            videoId={videoId}
            title={title}
            lazyLoad={true}
          />
        </div>
      )}
      
      {/* Content */}
      <div className="flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-3 flex-grow">{description}</p>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <Badge key={index} text={tag} className="bg-slate-700 text-cyan-300 text-xs" />
            ))}
          </div>
        )}
        
        {/* Schedule information */}
        {(startDate || duration) && (
          <div className="mb-3 text-xs">
            {startDate && (
              <div className="flex items-center text-text-secondary mb-1">
                <span className="mr-2">🗓️</span>
                <span>Starts: {startDate}</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center text-text-secondary">
                <span className="mr-2">⏱️</span>
                <span>Duration: {duration}</span>
              </div>
            )}
          </div>
        )}
        
        {codeSnippet && (
          <div className="bg-black rounded-md p-2 mb-4 overflow-hidden">
            <pre className="text-xs text-cyan-300 overflow-x-auto">{codeSnippet}</pre>
          </div>
        )}
        
        {/* Price */}
        {price && (
          <div className="mt-auto">
            <div className="flex items-center mb-3">
              <div className="text-xl font-bold text-white">
                {price} INR
              </div>
              {originalPrice && (
                <div className="flex items-center ml-2">
                  <span className="text-text-secondary text-sm line-through mr-2">{originalPrice} INR</span>
                </div>
              )}
               {/* Discount badge */}
              {discount > 0 && (
                <div className=" bg-cyan-200 text-black text-xs font-bold px-2 py-1 rounded-md">
                  {discount}% OFF
                </div>
              )}
            </div>
            <Button 
              variant="secondary" 
              onClick={onBuyClick || onLearnMoreClick} 
              className="w-full justify-center"
            >
              Learn More
            </Button>
          </div>
        )}
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-x-0 bottom-0">
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>
    </Card>
    
  );
};

export default CohortsCard;