import React from 'react';
import ImageURL from '../assets/imgURL';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-950 flex justify-center items-center py-8">
      <div className='bg-yellow-200 rounded-3xl flex flex-col md:flex-row justify-between items-center md:space-x-16 max-w-4xl p-8 my-8'>
        {/* Image Section */}
        <img 
          src={ImageURL.aboutURL} 
          alt={`about me logo`} 
          className="h-64 w-64 md:h-64 md:w-80 rounded-xl mb-6 md:mb-0"
        />

        {/* Text Section */}
        <div className='space-y-4 text-left flex-col text-black'>
          <h2 className="text-3xl font-bold">Who am I?</h2>
          <p className="text-lg max-w-lg">
            Graduated from F&M, I have spent years honing my skills in UI/UX design, development, and project management. My journey has taken me from working on cutting-edge projects with NATO to designing innovative solutions at startups.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
