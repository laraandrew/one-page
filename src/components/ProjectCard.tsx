import React from 'react';

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  logo: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, role, description, logo, url }) => {
  return (
    <a href={url} className="block transform transition duration-200 hover:scale-105">
      <div className="bg-violet-500 rounded-lg p-2 flex justify-around drop-shadow-lg hover:bg-violet-600 cursor-pointer flex-wrap">
        <img src={logo} alt={`${title} logo`} className="w-40 h-auto self-center py-2" />
        <div className="max-w-xs flex-col text-black py-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="font-medium text-m text-gray-300 mb-6">{role}</p>
          <div className="bg-slate-400 opacity-60 rounded-2xl p-6">
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
