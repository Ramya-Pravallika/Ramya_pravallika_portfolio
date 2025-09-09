import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../constants';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80; // Estimated height of the fixed header in pixels
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
          {PERSONAL_INFO.shortName}
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            {currentTheme === 'dark' ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-slate-700" />}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
           <button onClick={toggleTheme} className="p-2 mr-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            {currentTheme === 'dark' ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-slate-700" />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 dark:text-white">
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {/* FIX: Corrected typo from NAV_links to NAV_LINKS. */}
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)} 
                className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};