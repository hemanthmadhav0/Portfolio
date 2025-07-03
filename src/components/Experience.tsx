import React from 'react';
import { Briefcase, Calendar, MapPin, Award, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI-ML Virtual Internship',
      company: 'AWS Academy',
      duration: 'Nov 2023',
      location: 'Remote',
      description: 'Hands-on experience with AWS tools to develop and deploy machine learning models, focusing on data preprocessing, model training, and scalable deployment.',
      skills: ['AWS', 'Machine Learning', 'Data Preprocessing', 'Model Deployment'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Java Full Stack Internship',
      company: 'KodNest',
      duration: 'Apr 2024',
      location: 'Remote',
      description: 'End-to-end training in Java full-stack development, including backend logic, database design, and frontend UI integration.',
      skills: ['Java', 'Full Stack Development', 'Database Design', 'UI Integration'],
      color: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Briefcase size={16} className="mr-2" />
            My journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Experience & Internships</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 md:ml-20 group">
                {/* Timeline dot */}
                <div className={`absolute -left-28 top-8 w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 border border-slate-200/50 group-hover:border-blue-200 group-hover:bg-white">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Briefcase size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-1">{exp.title}</h3>
                          <div className="flex items-center text-slate-600 font-medium">
                            <Award size={18} className="mr-2 text-blue-500" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end text-slate-600 lg:ml-6">
                      <div className="flex items-center mb-2 bg-slate-100 px-3 py-1 rounded-full">
                        <Calendar size={16} className="mr-2 text-blue-500" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center bg-slate-100 px-3 py-1 rounded-full">
                        <MapPin size={16} className="mr-2 text-green-500" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 text-lg leading-relaxed mb-6">{exp.description}</p>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <Zap size={18} className="text-yellow-500 mr-2" />
                      <span className="font-semibold text-slate-700">Key Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 shadow-lg`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;