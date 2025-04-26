// // import React from 'react';
// // import Container from '../layout/Container';


// // const TopicsCloud = () => {
// //   // The buttons from the image, exactly as shown
// //   // First row topics
// //   const firstRowTopics = [
// //     { name: 'Docker', href: '#docker' },
// //     { name: 'MCP Server', href: '#mcp-server' },
// //     { name: 'Kubernetes', href: '#kubernetes' },
// //     { name: 'Python', href: '#python' },
// //     { name: 'React Native', href: '#react-native' }
// //   ];

// //   // Second row topics
// //   const secondRowTopics = [
// //     { name: 'Django', href: '#django' },
// //     { name: 'NextJS', href: '#nextjs' }
// //   ];

// //   // Third row topics - empty in the image
// //   const thirdRowTopics = [];

// //   return (
// //     <section className="py-16 bg-black relative overflow-hidden">
// //       <Container>
// //         <div className="flex flex-col items-center text-center mb-12">
// //           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
// //             Topics Cloud
// //           </h2>
          
// //           <div className="relative h-1 w-1/4 mb-6">
// //             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
// //             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
// //           </div>
          
// //           <p className="text-xl text-text-secondary mb-8">
// //             You can find videos and courses on topics and much more
// //           </p>
// //         </div>

// //         {/* Topic Cloud Layout with Connecting Lines */}
// //         <div className="relative pb-16">
// //           {/* Left side button */}
// //           <div className="absolute left-16 top-32 transform -translate-y-1/2">
// //             <div className="border border-slate-700 rounded-lg p-4 bg-black/50 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300">
// //               <p className="text-white font-medium text-center">Link to youtube<br />videos</p>
// //             </div>
            
// //             {/* Connecting lines to the topics */}
// //             <svg className="absolute top-1/2 right-0 w-[300px] h-[200px]" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
// //               {/* Horizontal line to Docker */}
// //               <path d="M0 50 L300 50" stroke="#334155" strokeWidth="1" />
              
// //               {/* Diagonal line up to React Native */}
// //               <path d="M0 50 L300 0" stroke="#334155" strokeWidth="1" />
              
// //               {/* Diagonal line down to Django */}
// //               <path d="M0 50 L300 150" stroke="#334155" strokeWidth="1" />
// //             </svg>
// //           </div>

// //           {/* Topic buttons arranged in a cloud-like formation */}
// //           <div className="flex justify-center mt-20">
// //             <div className="max-w-5xl w-full">
// //               {/* First row of topics */}
// //               <div className="flex justify-center gap-4 mb-10 relative">
// //                 {firstRowTopics.map((topic, index) => (
// //                   <a 
// //                     key={index} 
// //                     href={topic.href}
// //                     className="border border-slate-700 rounded-lg px-6 py-3 bg-black/50 backdrop-blur-sm text-white hover:border-cyan-500 transition-colors duration-300"
// //                   >
// //                     {topic.name}
// //                   </a>
// //                 ))}
// //               </div>

// //               {/* Second row of topics */}
// //               <div className="flex justify-center">
// //                 <div className="flex justify-start gap-4 w-1/2">
// //                   {secondRowTopics.map((topic, index) => (
// //                     <a 
// //                       key={index} 
// //                       href={topic.href}
// //                       className="border border-slate-700 rounded-lg px-6 py-3 bg-black/50 backdrop-blur-sm text-white hover:border-cyan-500 transition-colors duration-300"
// //                     >
// //                       {topic.name}
// //                     </a>
// //                   ))}
// //                 </div>
// //                 <div className="w-1/2">
// //                   {/* Empty space for the right side of second row */}
// //                 </div>
// //               </div>

// //               {/* Third row - empty in the image but placeholder for future topics */}
// //               <div className="flex justify-center gap-4 mt-10 h-20">
// //                 {thirdRowTopics.map((topic, index) => (
// //                   <a 
// //                     key={index} 
// //                     href={topic.href}
// //                     className="border border-slate-700 rounded-lg px-6 py-3 bg-black/50 backdrop-blur-sm text-white hover:border-cyan-500 transition-colors duration-300"
// //                   >
// //                     {topic.name}
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Decorative bottom border */}
// //           <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber to-transparent mt-16"></div>

// //           {/* First row of topic buttons */}
// //           <div className="flex flex-wrap justify-center gap-4 mb-6">
// //             {firstRowTopics.map((topic, index) => (
// //               <a 
// //                 key={index} 
// //                 href={topic.href}
// //                 className="border border-slate-700 rounded-lg px-6 py-3 bg-slate-800/40 backdrop-blur-sm text-white hover:border-cyan-500 transition-colors duration-300"
// //               >
// //                 {topic.name}
// //               </a>
// //             ))}
// //           </div>

// //           {/* Second row of topic buttons */}
// //           <div className="flex flex-wrap justify-center gap-4 mb-6">
// //             {secondRowTopics.map((topic, index) => (
// //               <a 
// //                 key={index} 
// //                 href={topic.href}
// //                 className="border border-slate-700 rounded-lg px-6 py-3 bg-slate-800/40 backdrop-blur-sm text-white hover:border-cyan-500 transition-colors duration-300"
// //               >
// //                 {topic.name}
// //               </a>
// //             ))}
// //           </div>

// //           {/* Third row of topic buttons */}
// //           {/* <div className="flex flex-wrap justify-center gap-4">
// //             {bottomRowTopics.map((topic, index) => (
// //               <a 
// //                 key={index} 
// //                 href={topic.href}
// //                 className="border border-slate-700 rounded-lg px-6 py-3 bg-slate-800/40 backdrop-blur-sm text-white hover:border-cyan-500 transition-colors duration-300"
// //               >
// //                 {topic.name}
// //               </a>
// //             ))}
// //           </div> */}
// //         </div>
        
// //         {/* Decorative bottom border */}
// //         <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber to-transparent mt-12"></div>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default TopicsCloud;

// import React from 'react';
// import Container from '../layout/Container';

// const TopicsCloud = () => {
//   // The buttons from the image, exactly as shown
//   // First row topics
//   const firstRowTopics = [
//     { name: 'Docker', href: '#docker' },
//     { name: 'MCP Server', href: '#mcp-server' },
//     { name: 'Kubernetes', href: '#kubernetes' },
//     { name: 'Python', href: '#python' },
//     { name: 'React Native', href: '#react-native' }
//   ];

//   // Second row topics
//   const secondRowTopics = [
//     { name: 'Django', href: '#django' },
//     { name: 'NextJS', href: '#nextjs' }
//   ];

//   // Third row topics - empty in the image
//   const thirdRowTopics = [];

//   return (
//     <section className="py-16 relative overflow-hidden">
//       <Container>
//         <div className="flex flex-col items-center text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Topics Cloud
//           </h2>
          
//           <div className="relative h-1 w-1/4 mb-6">
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
//           </div>
          
//           <p className="text-xl text-text-secondary mb-8">
//             You can find videos and courses on topics and much more
//           </p>
//         </div>

//         {/* Topic Cloud Layout with Connecting Lines */}
//         <div className="relative pb-20">
//           {/* Left side button */}
//           <div className="absolute left-16 top-32 transform -translate-y-1/2">
//             <div className="border border-slate-700 rounded-lg p-4 bg-black/50 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300">
//               <p className="text-white font-medium text-center">Link to youtube<br />videos</p>
//             </div>
            
//             {/* Connecting lines to the topics */}
//             <svg className="absolute top-1/2 right-0 w-[300px] h-[200px]" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//               {/* Horizontal line to Docker */}
//               <path d="M0 50 L300 50" stroke="#334155" strokeWidth="1" />
              
//               {/* Diagonal line up to React Native */}
//               <path d="M0 50 L300 0" stroke="#334155" strokeWidth="1" />
              
//               {/* Diagonal line down to Django */}
//               <path d="M0 50 L300 150" stroke="#334155" strokeWidth="1" />
//             </svg>
//           </div>

//           {/* Topic buttons arranged in a cloud-like formation */}
//           <div className="flex justify-center mt-20">
//             <div className="max-w-5xl w-full">
//               {/* First row of topics */}
//               <div className="flex justify-center gap-4 mb-10 relative">
//                 {firstRowTopics.map((topic, index) => (
//                   <a 
//                     key={index} 
//                     href={topic.href}
//                     className="border border-slate-700 rounded-lg px-6 py-3 bg-black/50 backdrop-blur-sm text-white hover:border-cyan-500 transition-colors duration-300"
//                   >
//                     {topic.name}
//                   </a>
//                 ))}
//               </div>

//               {/* Second row of topics */}
//               <div className="flex justify-center">
//                 <div className="flex justify-start gap-4 w-1/2">
//                   {secondRowTopics.map((topic, index) => (
//                     <a 
//                       key={index} 
//                       href={topic.href}
//                       className="border border-slate-700 rounded-lg px-6 py-3 bg-black/50 backdrop-blur-sm text-white hover:border-cyan-500 transition-colors duration-300"
//                     >
//                       {topic.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div className="w-1/2">
//                   {/* Empty space for the right side of second row */}
//                 </div>
//               </div>

//               {/* Third row - empty in the image but placeholder for future topics */}
//               <div className="flex justify-center gap-4 mt-10 h-20">
//                 {thirdRowTopics.map((topic, index) => (
//                   <a 
//                     key={index} 
//                     href={topic.href}
//                     className="border border-slate-700 rounded-lg px-6 py-3 bg-black/50 backdrop-blur-sm text-white hover:border-cyan-500 transition-colors duration-300"
//                   >
//                     {topic.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           {/* Decorative bottom border */}
//           <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber to-transparent mt-10"></div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default TopicsCloud

import React from 'react';
import Container from '../layout/Container';

const TopicsCloud = () => {
  const topics = [
    { name: 'Docker', href: '#docker', row: 1 },
    { name: 'MCP Server', href: '#mcp-server', row: 1 },
    { name: 'Kubernetes', href: '#kubernetes', row: 1 },
    { name: 'Python', href: '#python', row: 1 },
    { name: 'React Native', href: '#react-native', row: 1 },
    { name: 'Django', href: '#django', row: 2 },
    { name: 'NextJS', href: '#nextjs', row: 2 }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Topics Cloud
          </h2>
          
          <div className="relative h-1 w-1/4 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
           You can find videos and courses on topics and much more
          </h2>
          
        </div>

        <div className="relative max-w-4xl mx-auto">

          {/* Topics Container */}
          <div className="space-y-6">
            {/* First Row */}
            <div className="flex justify-center space-x-4">
              {topics.filter(topic => topic.row === 1).map((topic, index) => (
                <a 
                  key={index} 
                  href={topic.href}
                  className="relative border border-slate-700 rounded-lg px-6 py-3 
                    text-white transition-all duration-300 
                    hover:scale-105 hover:shadow-lg group
                    before:absolute before:inset-0 before:bg-gradient-to-r 
                    before:from-cyan-500/20 before:via-cyan-500/40 before:to-cyan-500/20 
                    before:rounded-lg before:opacity-0 hover:before:opacity-100
                    before:transition-opacity before:duration-300
                    overflow-hidden"
                >
                  <span className="relative z-10">{topic.name}</span>
                </a>
              ))}
            </div>

            {/* Second Row */}
            <div className="flex justify-center space-x-4">
              {topics.filter(topic => topic.row === 2).map((topic, index) => (
                <a 
                  key={index} 
                  href={topic.href}
                  className="relative rounded-lg px-6 py-3 border border-slate-700
                    text-white transition-all duration-300 
                    hover:scale-105 hover:shadow-lg group
                    before:absolute before:inset-0 before:bg-gradient-to-r 
                    before:from-cyan-500/20 before:via-cyan-500/40 before:to-cyan-500/20 
                    before:rounded-lg before:opacity-0 hover:before:opacity-100
                    before:transition-opacity before:duration-300
                    overflow-hidden"
                >
                  <span className="relative z-10">{topic.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-16"></div>
      </Container>
    </section>
  );
};

export default TopicsCloud;