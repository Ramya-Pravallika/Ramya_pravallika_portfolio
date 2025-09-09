import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { LinkIcon } from '@heroicons/react/24/outline';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-2">Courses & Certifications</h2>
        <div className="w-24 h-1 bg-teal-500 dark:bg-teal-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20 dark:border-slate-700 text-center flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="mb-4">
                <span className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{cert.issuer}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 flex-grow">{cert.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{cert.program}</p>
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors"
                >
                  View Credential <LinkIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
