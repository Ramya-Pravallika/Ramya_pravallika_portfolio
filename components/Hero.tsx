import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const useTypingEffect = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let i = 0;

    const type = () => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
        timeoutId = setTimeout(type, speed);
      } else {
        // Pause and restart
        timeoutId = setTimeout(() => {
          i = 0;
          type();
        }, 3000);
      }
    };
    
    // Start the typing animation
    type();

    // Cleanup function to clear timeout on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed]);

  return displayText;
};


export const Hero: React.FC = () => {
  const animatedText = useTypingEffect(PERSONAL_INFO.tagline);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('projects');
    
    if (targetElement) {
      const headerOffset = 80; // Align with header's smooth scroll
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };


  return (
    <section id="home" className="h-screen flex items-center justify-center animated-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative text-center bg-white/10 dark:bg-black/20 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{PERSONAL_INFO.name}</h1>
        <p className="text-xl md:text-2xl text-slate-200 font-light mb-8 min-h-[2rem]">
          {animatedText}
          <span className="animate-ping">|</span>
        </p>
        <a 
          href="#projects" 
          onClick={handleScrollToProjects}
          className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};