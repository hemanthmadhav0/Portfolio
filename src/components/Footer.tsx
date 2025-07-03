import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <button 
            onClick={scrollToTop}
            className="group inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mb-8 hover:scale-110 transform shadow-2xl"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
          
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Rajulapati Hemanth Madhav
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Aspiring Full Stack Developer passionate about creating innovative solutions and contributing to the tech community.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:rajulapatihemanthmadhav@gmail.com" className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
              <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://github.com/hemanthmadhav0" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
              <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://linkedin.com/in/hemanth-madhav-rajulapati" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
              <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-blue-200 flex items-center justify-center text-lg mb-2">
              Made with <Heart size={20} className="text-red-400 mx-2 animate-pulse" /> by Hemanth Madhav
            </p>
            <p className="text-blue-300 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;