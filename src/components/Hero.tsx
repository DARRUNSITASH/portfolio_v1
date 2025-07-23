import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, Code, Database, Brain, Palette } from 'lucide-react';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['AI & Data Science', 'Web Development', 'UI/UX Design', 'IoT Systems', 'Machine Learning'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs with complex animations */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/20 dark:from-blue-500/20 dark:to-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/30 to-pink-400/20 dark:from-purple-500/20 dark:to-pink-500/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-blue-400/15 dark:from-indigo-500/15 dark:to-blue-500/10 rounded-full blur-3xl animate-float-gentle"></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-bl from-emerald-400/25 to-teal-400/15 dark:from-emerald-500/15 dark:to-teal-500/10 rounded-full blur-2xl animate-float-up"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-tr from-orange-400/25 to-yellow-400/15 dark:from-orange-500/15 dark:to-yellow-500/10 rounded-full blur-2xl animate-float-down"></div>
        
        {/* Subtle moving particles */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-blue-400/60 dark:bg-blue-300/40 rounded-full animate-particle-1"></div>
        <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-purple-400/60 dark:bg-purple-300/40 rounded-full animate-particle-2"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-cyan-400/60 dark:bg-cyan-300/40 rounded-full animate-particle-3"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-pink-400/60 dark:bg-pink-300/40 rounded-full animate-particle-4"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-20 left-20 text-blue-400/30 dark:text-blue-300/20 animate-bounce" size={32} style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <Database className="absolute top-32 right-32 text-green-400/30 dark:text-green-300/20 animate-bounce" size={28} style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <Brain className="absolute bottom-32 left-32 text-purple-400/30 dark:text-purple-300/20 animate-bounce" size={36} style={{ animationDelay: '2s', animationDuration: '3s' }} />
        <Palette className="absolute bottom-20 right-20 text-pink-400/30 dark:text-pink-300/20 animate-bounce" size={30} style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            <span className="text-blue-600 dark:text-blue-400">Darrunsitash</span> M
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-4">
            B.Tech AI & Data Science Student
          </div>

          {/* Dynamic Skills Display */}
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 h-8">
            Specializing in{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold transition-all duration-500">
              {skills[currentSkill]}
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building innovative tech solutions through AI, Data Science, 
            and UI/UX design. Transforming ideas into reality with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <a 
              href="/DARRUN RESUME.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

        </div>
      </div>
      
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;