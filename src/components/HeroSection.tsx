// src/components/HeroSection.tsx
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  bgImageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, bgImageUrl }) => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-8xl font-semibold font-sans drop-shadow-xl">{title}</h1>
        <p className="mt-4 text-3xl">{subtitle}</p>
      </div>
    </section>
  );
}

export default HeroSection;
