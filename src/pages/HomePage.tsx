// src/pages/HomePage.tsx
import React from 'react';
import HeroSection from '../components/HeroSection.tsx';
import AboutSection from '../components/AboutSection.tsx';
import ContactSection from '../components/ContactSection.tsx';
import ProjectSection from '../components/ProjectSection.tsx';
import TechCarousel from '../components/TechCarousel.tsx';
import ImageURL from '../assets/imgURL.ts';

  


const HomePage: React.FC = () => {
  return (
    <div id='hero'>
      <HeroSection title="Andrew Lara" subtitle="Designer, Developer, Leader" bgImageUrl={ImageURL.heroURL} />
      <main>
        <AboutSection />
        <div id='projects'>
          <ProjectSection />
        </div>
        <div>
          <TechCarousel />
        </div>
        <div id='contact'>
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
