import React from 'react';
import { Code2, Database, GitBranch, Users, MessageSquare, Clock, Lightbulb, Cpu, Palette } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 85, icon: Code2, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 80, icon: Code2, color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML/CSS', level: 90, icon: Palette, color: 'from-orange-500 to-red-500' },
    { name: 'Django', level: 75, icon: Code2, color: 'from-green-500 to-emerald-500' },
    { name: 'MySQL', level: 70, icon: Database, color: 'from-blue-600 to-cyan-500' },
    { name: 'GitHub', level: 80, icon: GitBranch, color: 'from-gray-600 to-gray-700' },
  ];

  const softSkills = [
    { name: 'Communication', icon: MessageSquare, color: 'from-blue-500 to-cyan-500' },
    { name: 'Teamwork', icon: Users, color: 'from-green-500 to-emerald-500' },
    { name: 'Problem Solving', icon: Lightbulb, color: 'from-yellow-500 to-orange-500' },
    { name: 'Time Management', icon: Clock, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6 border border-white/20">
            <Cpu size={16} className="mr-2" />
            My expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20 hover:bg-white/15 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                <Code2 size={32} className="mr-3 text-blue-400" />
                Technical Skills
              </h3>
              <div className="space-y-8">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <skill.icon size={20} className="text-white" />
                        </div>
                        <span className="font-semibold text-white text-lg">{skill.name}</span>
                      </div>
                      <span className="text-blue-200 font-medium">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover:scale-105 relative`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20 hover:bg-white/15 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                <Users size={32} className="mr-3 text-purple-400" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="group text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative`}>
                      <skill.icon size={24} className="text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;