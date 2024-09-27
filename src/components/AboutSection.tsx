// src/components/AboutSection.tsx
import React from 'react';
import ImageURL from '../assets/imgURL';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-950 flex justify-center items-center py-8">
      <div className='bg-yellow-200 rounded-3xl flex justify-between max-w-fit my-8 flex-wrap'>
        <img src={ImageURL.aboutURL} alt={`about me logo`} className="h-64 w-80 rounded-xl" />
        <div className='space-y-4 my-8 text-left flex-col text-black pr-8'>
          <h2 className="text-3xl font-bold">Who am I?</h2>
          <p className="text-lg max-w-lg">Graduated from F&M, I have spent years honing my skills in UI/UX design, development, and project management. My journey has taken me from working on cutting-edge projects with NATO to designing innovative solutions at startups.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
