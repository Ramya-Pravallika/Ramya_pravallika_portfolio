import React from 'react';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { PERSONAL_INFO } from '../constants';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">My Resume</h2>
        <div className="w-24 h-1 bg-teal-500 dark:bg-teal-400 mx-auto mb-8"></div>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          Interested in my detailed professional background? You can download my full resume to learn more about my experience, skills, and qualifications.
        </p>
        <a 
          href="/api/resume"
          download={PERSONAL_INFO.resumeFile}
          className="inline-flex items-center gap-3 bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 dark:hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <DocumentArrowDownIcon className="h-6 w-6" />
          Download Resume
        </a>
      </div>
    </section>
  );
};