import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewProject }) => {
  return (
    <div className="group h-96 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Face */}
        <div className="absolute inset-0">
          <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={project.dashboardImage} alt={project.title} />
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/60 px-6 py-4 text-center text-slate-200 flex flex-col justify-end">
             <span className="inline-block bg-teal-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-2">{project.domain}</span>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
        
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-white dark:bg-slate-800 px-6 py-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">
          <div className="flex-grow flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
            <div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm">Tools Used:</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tools.map((tool, index) => (
                  <span key={index} className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium px-2 py-1 rounded-full">{tool}</span>
                ))}
              </div>
            </div>
          </div>
          <button onClick={() => onViewProject(project)} className="w-full bg-teal-500 dark:bg-teal-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors duration-300 mt-4">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};