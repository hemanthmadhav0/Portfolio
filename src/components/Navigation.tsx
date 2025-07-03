import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">
            Hemanth Madhav
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-700 hover:text-blue-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-blue-600 transition-colors text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-700 hover:text-blue-600 transition-colors text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-blue-600 transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-blue-600 transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;