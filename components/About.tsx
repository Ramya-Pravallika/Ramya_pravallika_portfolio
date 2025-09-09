import React from 'react';
import { BriefcaseIcon, AcademicCapIcon, UserIcon } from '@heroicons/react/24/solid';
import { EXPERIENCE } from '../constants';

export const About: React.FC = () => {
  const getIcon = (type: 'work' | 'education' | 'internship') => {
    switch (type) {
      case 'work': return <BriefcaseIcon className="h-4 w-4 text-teal-500 dark:text-teal-400" />;
      case 'education': return <AcademicCapIcon className="h-4 w-4 text-teal-500 dark:text-teal-400" />;
      case 'internship': return <UserIcon className="h-4 w-4 text-teal-500 dark:text-teal-400" />;
      default: return <BriefcaseIcon className="h-4 w-4 text-teal-500 dark:text-teal-400" />;
    }
  }

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-2">About Me</h2>
        <div className="w-24 h-1 bg-teal-500 dark:bg-teal-400 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Intro */}
          <div className="lg:pr-8">
             <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Who I Am</h3>
             <div className="text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed text-lg">
                <p>
                    Hi, I’m Pravallika 👋 — an Analytics Engineer with a strong passion for turning raw data into meaningful insights that drive real business value. Over the past few years, I’ve worked on projects ranging from data science and machine learning to geospatial analytics for Apple Maps, ensuring 100% quality and high productivity across multiple initiatives.
                </p>
                <p>
                    My toolkit includes SQL, Python (Pandas, NumPy, Matplotlib), Power BI, Tableau, and Microsoft Azure, along with expertise in data preparation, ETL workflows, statistical analysis, and dashboard storytelling. I enjoy solving real-world problems in domains like Retail, Finance, Supply Chain, and Geospatial Analytics, and I thrive when I can simplify complex data into clear, actionable insights.
                </p>
                <p>
                    Currently, I’m serving my notice period and am available to join immediately. I’m also actively exploring new opportunities in Data Analyst and Business Analyst roles, where I can contribute to data-driven decisions, collaborate with cross-functional teams, and continue growing my expertise in analytics.
                </p>
                <p>
                    If you’re looking for someone who can combine technical depth with business understanding, let’s connect — I’d love to bring my skills and passion to your team!
                </p>
             </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">My Journey</h3>
            <div className="relative border-l-2 border-teal-500/30 dark:border-teal-400/30 pl-8">
              {EXPERIENCE.map((item, index) => (
                <div key={index} className="mb-10 ml-4">
                  <div className="absolute -left-4 mt-1.5 h-8 w-8 bg-slate-50 dark:bg-slate-900 rounded-full border-2 border-teal-500 dark:border-teal-400 flex items-center justify-center">
                    {getIcon(item.type)}
                  </div>
                  <time className="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">{item.year}</time>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h4>
                  <p className="text-md font-medium text-slate-700 dark:text-slate-300 mb-2">{item.company}</p>
                  <p className="text-base font-normal text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};