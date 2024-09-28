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
      <div className="bg-white rounded-lg p-2 flex justify-around drop-shadow-lg hover:bg-violet-400 cursor-pointer flex-wrap text-black">
        <img src={logo} alt={`${title} logo`} className="w-40 h-auto self-center py-4" />
        <div className="max-w-xs flex-col  py-4 text-center">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="font-medium text-l mb-6">{role}</p>
          <div className="bg-black opacity-60 rounded-2xl p-6 text-white">
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
