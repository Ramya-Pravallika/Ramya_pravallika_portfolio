import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Project } from '../types';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform scale-95 transition-transform duration-300 animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <style>{`.animate-fade-in { animation: fadeIn 0.3s ease-out; } @keyframes fadeIn { 0% { opacity: 0; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1); } }`}</style>
        <div className="p-6 md:p-8 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
            <XMarkIcon className="h-8 w-8" />
          </button>
          
          <span className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-sm font-semibold px-3 py-1 rounded-full mb-2">{project.domain}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">{project.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2 border-l-4 border-teal-500 dark:border-teal-400 pl-3">Problem Statement</h3>
                <p className="text-slate-600 dark:text-slate-400">{project.problemStatement}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2 border-l-4 border-teal-500 dark:border-teal-400 pl-3">Solution</h3>
                <p className="text-slate-600 dark:text-slate-400">{project.solution}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2 border-l-4 border-teal-500 dark:border-teal-400 pl-3">Key Insights</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                  {project.insights.map((insight, index) => <li key={index}>{insight}</li>)}
                </ul>
              </div>
            </div>
            <div>
              <img src={project.dashboardImage} alt={`${project.title} dashboard`} className="rounded-lg shadow-md mb-6 w-full h-auto object-cover" />
              <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3 text-center">Illustrative Data</h3>
               <div className="w-full h-64 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={project.chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                      <XAxis dataKey="name" tick={{ fill: 'rgb(100 116 139)' }} />
                      <YAxis tick={{ fill: 'rgb(100 116 139)' }} />
                      <Tooltip 
                        contentStyle={{ 
                            backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                            borderColor: '#334155',
                            color: '#e2e8f0'
                        }} 
                        itemStyle={{ color: '#94a3b8' }}
                      />
                      <Legend wrapperStyle={{ color: '#64748b' }} />
                      <Bar dataKey="value" fill="#2dd4bf" />
                    </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};