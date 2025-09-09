import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('error');
    }
  };


  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-2">Get In Touch</h2>
        <div className="w-24 h-1 bg-teal-500 dark:bg-teal-400 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Let's Work Together 🚀</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-2 font-semibold">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">{PERSONAL_INFO.email}</a>
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-all transform hover:scale-110">
                <GithubIcon />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-all transform hover:scale-110">
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <form className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 text-slate-800 dark:text-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 text-slate-800 dark:text-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 text-slate-800 dark:text-white" required></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            <div className="h-6 mt-2 text-center">
              {status === 'success' && <p className="text-sm text-green-600 dark:text-green-400">Message sent successfully!</p>}
              {status === 'error' && <p className="text-sm text-red-600 dark:text-red-400">Failed to send message. Please try again.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};