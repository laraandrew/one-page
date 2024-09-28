import React from 'react';
import ImageURL from '../assets/imgURL';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-950 flex justify-center items-center py-8">
      {/* Wrapper for the content, ensuring it's responsive */}
      <div className='bg-yellow-200 rounded-3xl flex flex-col md:flex-row justify-between items-center md:space-x-16 max-w-4xl my-8'>
        {/* Image Section */}
        <img 
          src={ImageURL.aboutURL} 
          alt={`about me logo`} 
          className="w-max md:h-64 rounded-xl mb-6 md:m-0 md:rounded-l-3xl"
        />

        {/* Text Section */}
        <div className='space-y-4 text-center text-black p-4'>
          <h2 className="text-3xl font-bold">Who am I?</h2>
          <p className="text-lg max-w-lg md:m-8">
            Graduated from F&M, I have spent years honing my skills in UI/UX design, development, and project management. My journey has taken me from working on cutting-edge projects with NATO to designing innovative solutions at startups.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
