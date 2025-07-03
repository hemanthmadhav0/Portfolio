import React from 'react';
import { GraduationCap, Award, User, Calendar } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <User size={16} className="mr-2" />
            Get to know me
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Bio Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <User size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Hello! I'm Hemanth Madhav</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">My name is Rajulapati Hemanth Madhav. I came from Machilipatnam. I have recently completed my B.Tech in Computer Science and Engineering from Sri Vasavi Institute of Engineering and Technology with a CGPA of 7.0 (2024). I enjoy watching movies, playing outdoor games, and listening to music. My values include respect and gratefulness. My career goal is to secure a strong position in the software sector.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-16 bg-blue-200"></div>
                  <h4 className="font-semibold text-slate-800 text-lg">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-slate-600 font-medium">Sri Vasavi Institute of Engineering and Technology</p>
                  <div className="flex items-center mt-2">
                    <Calendar size={16} className="text-blue-500 mr-2" />
                    <span className="text-sm text-blue-600 font-medium">2024 • CGPA: 7.0</span>
                  </div>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-16 bg-blue-200"></div>
                  <h4 className="font-semibold text-slate-800">Intermediate (MPC)</h4>
                  <p className="text-slate-600 font-medium">Sri Chaitanya Junior College</p>
                  <div className="flex items-center mt-2">
                    <Calendar size={16} className="text-blue-500 mr-2" />
                    <span className="text-sm text-blue-600 font-medium">2020 • CGPA: 8.75</span>
                  </div>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-blue-300 rounded-full"></div>
                  <h4 className="font-semibold text-slate-800">SSC</h4>
                  <p className="text-slate-600 font-medium">Master E.K Bala Bhanu Vidyalayam</p>
                  <div className="flex items-center mt-2">
                    <Calendar size={16} className="text-blue-500 mr-2" />
                    <span className="text-sm text-blue-600 font-medium">2018 • CGPA: 8.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Certifications</h3>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <h4 className="font-semibold text-slate-800 text-lg mb-2">Python Full Stack Course</h4>
                <p className="text-slate-600 font-medium mb-3">Naresh i Technologies</p>
                <div className="flex items-center">
                  <Calendar size={16} className="text-purple-500 mr-2" />
                  <span className="text-sm text-purple-600 font-medium">2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;