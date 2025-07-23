import React from 'react';
import { Target, Code, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Career Objectives</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Driven B.Tech Artificial Intelligence and Data Science student with a strong foundation 
              in UI/UX design and real-world problem solving through platforms like Vibe Coding. 
              Passionate about building innovative tech solutions that address practical challenges. 
              Eager to apply my skills in dynamic projects and contribute meaningfully to both team 
              and individual goals in the tech industry.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Target className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Problem Solver</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Experienced in identifying real-world challenges and developing innovative solutions
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Code className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Tech Enthusiast</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Proficient in AI, Data Science, and modern web development technologies
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Lightbulb className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Innovator</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Patent holder with multiple awards in hackathons and innovation challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 rounded-2xl shadow-2xl"></div>
            <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">19</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Years Old</div>
                <div className="mt-6 space-y-2">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Currently Pursuing</div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">B.Tech AI & DS</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">CGPA: 7.87</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;