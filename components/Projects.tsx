import React, { useState, useMemo } from 'react';
import { projects } from '../constants';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

interface ProjectsProps {
  onViewProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onViewProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const domains = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.domain)))], []);
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(project => project.domain === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-2">🔬 Projects Showcase</h2>
        <div className="w-24 h-1 bg-teal-500 dark:bg-teal-400 mx-auto mb-8"></div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {domains.map(domain => (
            <button
              key={domain}
              onClick={() => setActiveFilter(domain)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeFilter === domain
                  ? 'bg-teal-500 dark:bg-teal-400 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewProject={onViewProject} />
          ))}
        </div>
      </div>
    </section>
  );
};