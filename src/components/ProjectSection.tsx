// src/components/ProjectSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import ImageURL from '../assets/imgURL.ts';


const ProjectSection: React.FC = () => {
  return (
    <section className="md:p-8 bg-gray-800 lg:p-32">
      <div className="bg-gray-600 mb-6 p-10 rounded-lg w-full">
        <h2 className="text-3xl font-bold">What I've done</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <ProjectCard 
          title="Forge" 
          role="Co-Founder" 
          description="I founded this start-up based in Los Angeles. Using React Native, supabase, Figma to upload our social media for lifters." 
          logo={ImageURL.moggerLogo}
          url='/comingsoon'
        />
        <ProjectCard 
          title="North Atlantic Treaty Organization" 
          role="Lead Software Engineer Intern" 
          description="Planned, built, collaborated and tested a trip-wire robot intended for landline-detection in former battlegrounds." 
          logo={ImageURL.natoLogo}
          url='https://www.fandm.edu/stories/nato-professors-demining-robots.html'
        />
        <ProjectCard 
          title="Go Adventure" 
          role="Creator" 
          description="A personal project created as a travel app to help with everything from weather, packing, documents and more." 
          logo={ImageURL.gaLogo}
          url='https://github.com/laraandrew/GoAdventure'
        />
        <ProjectCard 
          title="Pumphouse Crew" 
          role="Volunteer Project Manager and SWE" 
          description="Created a volunteer time-tracking app for a non-profit. Used Android studio, Figma, Firebase. Available on the Play Store." 
          logo={ImageURL.tcwLogo}
          url='https://thecommonwheel.com/'
        />
        <ProjectCard 
          title="Code Ninjas" 
          role="Code and Robotics teacher" 
          description="Taught kids between the ages of 5-12 code including Scratch, Javascript to C#. I likewise taught lego robotics at a local Elementary school where they competed in a battle-bot competition." 
          logo={ImageURL.cnLogo}
          url='https://www.codeninjas.com'
        />
        <ProjectCard 
          title="Keep Youth Doing Something (KYDS) Inc." 
          role="Code and Robotics teacher" 
          description="Taught kids between the ages of 5-12 code including Scratch, Javascript to C#. I likewise taught lego robotics at a local Elementary school where they competed in a battle-bot competition." 
          logo={ImageURL.cnLogo}
          url='https://www.codeninjas.com'
        />
      </div>
    </section>
  );
}

export default ProjectSection;
