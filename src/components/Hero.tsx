import React from 'react';
import { ArrowDown, MapPin, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="lg:w-1/2 mb-12 lg:mb-0 space-y-8">
            <div className="animate-fade-in">
              {/* Greeting with modern styling */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for opportunities
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hello, I'm
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Hemanth Madhav
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
                Aspiring Full Stack Developer
                <span className="block text-lg text-blue-200 mt-2">
                  Passionate about AI & Problem Solving
                </span>
              </p>
              
              <div className="flex items-center text-blue-200 mb-8 group">
                <MapPin size={20} className="mr-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Machilipatnam, India</span>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={scrollToProjects}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 group"
                >
                  <span className="flex items-center justify-center">
                    View My Work
                    <ArrowDown size={18} className="ml-2 group-hover:translate-y-1 transition-transform" />
                  </span>
                </button>
                
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group">
                  <span className="flex items-center justify-center">
                    <Download size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                    Resume
                  </span>
                </button>
              </div>
              
              {/* Social links */}
              <div className="flex space-x-6">
                <a href="mailto:rajulapatihemanthmadhav@gmail.com" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/hemanthmadhav0" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/hemanth-madhav-rajulapati" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Main profile container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Rotating border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full p-1 animate-spin [animation-duration:8s]">
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 rounded-full"></div>
                </div>
                
                {/* Profile image */}
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://i.postimg.cc/CxPyHH6X/profile.jpg" 
                    alt="Hemanth Madhav Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating tech icons */}
                <div className="absolute top-0 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-bounce [animation-delay:0s]">
                  Py
                </div>
                <div className="absolute top-1/4 right-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-bounce [animation-delay:1s]">
                  JS
                </div>
                <div className="absolute bottom-1/4 left-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-bounce [animation-delay:2s]">
                  AI
                </div>
                <div className="absolute bottom-0 right-1/4 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-bounce [animation-delay:3s]">
                  DB
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-blue-200 text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;