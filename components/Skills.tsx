import React from 'react';
import { SKILL_GROUPS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-2">
          <span role="img" aria-label="zap">⚡</span> My Technical Skills
        </h2>
        <div className="w-24 h-1 bg-teal-500 dark:bg-teal-400 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, index) => (
            <div 
              key={index} 
              className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20 dark:border-slate-700 transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{group.icon}</span>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{group.title}</h3>
              </div>
              <div className="space-y-4 flex-grow">
                {group.subgroups.map((subgroup, subIndex) => (
                  <div key={subIndex}>
                    <h4 className="font-semibold text-md text-teal-600 dark:text-teal-400 mb-2">{subgroup.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {subgroup.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};