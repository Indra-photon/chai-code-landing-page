import React from 'react';
import Container from '../layout/Container';
import CohortsCard from '../common/CohortsCard';

const Cohorts = () => {
  // Example cohort data - you would replace this with your actual data
  const cohorts = [
    {
      id: 1,
      title: 'Full Stack Data Science 1.0',
      description: 'From Python basics to project deployment',
      price: '6,999',
      originalPrice: '8,999',
      discount: 22,
      videoId: 'Kjd-SWpe1do',
      isLive: true,
      startDate: 'April 12, 2025',
      duration: '6 months',
      tags: ['Python', 'TensorFlow', 'Pandas', '+1'],
      codeSnippet: `import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\n\ndf = pd.read_csv('data.csv')`,
      language: 'python'
    },
    {
      id: 2,
      title: 'GenAI with Python | Concept to deployment',
      description: 'Development side of AI application',
      price: '4,999',
      originalPrice: '7,999',
      discount: 38,
      videoId: 'VNb_LawBBWU',
      isLive: true,
      startDate: 'April 7, 2025',
      duration: '1-2 months',
      tags: ['Python', 'LLMs', 'Transformers', '+1'],
      codeSnippet: `from transformers import AutoModelForCausalLM, AutoTokenizer\ntokenizer = AutoTokenizer.from_pretrained("gpt2")\nmodel = AutoModelForCausalLM.from_pretrained("gpt2"))`,
      language: 'python'
    },
    {
      id: 3,
      title: 'DevOps for developers 1.0',
      description: 'Perfect guide to get started with DevOps',
      price: '4,999',
      originalPrice: '7,999',
      discount: 38,
      videoId: 'oBLpqSHc3lA',
      isLive: true,
      startDate: 'April 15, 2025',
      duration: '1-2 months',
      tags: ['Docker', 'Kubernetes', 'CI/CD', '+1'],
      codeSnippet: `version: '3'\nservices:\n  web:\n    image: nginx:alpine\n    ports:`,
      language: 'yaml'
    },
    {
      id: 4,
      title: 'Web Dev Cohort 1.0',
      description: 'Ultimate guide to build software on web',
      price: '6,999',
      originalPrice: '8,999',
      discount: 22,
      videoId: 'yG8JMlldoCE',
      isLive: true,
      startDate: 'January 11, 2025',
      duration: '6 months',
      tags: ['JavaScript', 'React', 'Node.js', '+1'],
      codeSnippet: `import React, { useState, useEffect } from 'react';\n\nfunction App() {\n  const [data, setData] = useState([]);\n  useEffect(() => {`,
      language: 'javascript'
    },
    {
      id: 5,
      title: 'Coding Hero 2025',
      description: 'Our Community focused program for students',
      price: '299',
      originalPrice: '599',
      discount: 50,
      videoId: 'KzptgbkiB1M',
      isLive: true,
      startDate: 'Constantly going',
      duration: 'Always running',
      tags: ['HTML', 'CSS', 'JavaScript', '+1'],
      codeSnippet: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Website</title>`,
      language: 'html'
    }
  ];

  return (
    <Container>
      <section id="cohorts" className="py-16 relative overflow-hidden">
      <div className="side-text">Cohorts</div>
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-amber/5 rounded-full blur-3xl -z-10"></div>
      
     
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cohorts
          </h2>
          
          <div className="relative h-1 w-1/4 mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Join <span className='text-cyan-300'>ChaiCode Cohorts</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
          {cohorts.map(cohort => (
            <CohortsCard
              key={cohort.id}
              title={cohort.title}
              description={cohort.description}
              price={cohort.price}
              originalPrice={cohort.originalPrice}
              discount={cohort.discount}
              videoId={cohort.videoId}
              isLive={cohort.isLive}
              startDate={cohort.startDate}
              duration={cohort.duration}
              tags={cohort.tags}
              codeSnippet={cohort.codeSnippet}
              onBuyClick={() => console.log(`Buy clicked for ${cohort.title}`)}
              onLearnMoreClick={() => console.log(`Learn More clicked for ${cohort.title}`)}
            />
          ))}
        </div>
   
    </section>
    </Container>
  );
};

export default Cohorts;