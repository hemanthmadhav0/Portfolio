import React from 'react';
import { ExternalLink, Github, Brain, Shield, AlertTriangle, Rocket, Code, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Driver Drowsiness Detection Using AI Techniques',
      description: 'A real-time safety solution using AI to monitor driver behaviors like blinking, yawning, and head movements to detect signs of drowsiness and issue alerts to prevent accidents.',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'AI'],
      features: [
        'Real-time face detection and tracking',
        'Eye blink pattern analysis',
        'Yawning detection algorithm',
        'Head movement monitoring',
        'Alert system for drowsiness detection'
      ],
      icon: Brain,
      category: 'AI/ML Project',
      gradient: 'from-purple-600 via-blue-600 to-cyan-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6 border border-white/20">
            <Rocket size={16} className="mr-2" />
            My work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-500 border border-white/20 group">
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex items-start mb-6 lg:mb-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                      <project.icon size={32} className="text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div>
                      <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-4 border border-white/20">
                        <Code size={16} className="mr-2" />
                        {project.category}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-blue-100 text-lg lg:text-xl leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Shield size={24} className="text-cyan-400 mr-3" />
                    Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <AlertTriangle size={16} className="text-white" />
                        </div>
                        <span className="text-blue-100 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-6">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="group flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
                    <Github size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                    View Code
                  </button>
                  <button className="group flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:scale-105">
                    <Eye size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 inline-block">
            <p className="text-blue-200 text-lg mb-6">More amazing projects coming soon!</p>
            <div className="flex justify-center space-x-4">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;