import React from 'react';
import { Code, Database, Brain, Palette, Settings, Shield, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C', 'Java', 'JavaScript', 'HTML', 'CSS'],
      color: 'blue'
    },
    {
      title: 'Data Science & Analytics',
      icon: Database,
      skills: ['Power BI', 'SQL', 'Matplotlib', 'Tableau', 'R'],
      color: 'green'
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['Prompting Techniques', 'LLMs', 'Model Fine-tuning', 'Machine Learning with Python', 'Data Science with Python'],
      color: 'purple'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React.js', 'Node.js', 'Flutter', 'Appsheet (No-code)', 'Tailwind CSS'],
      color: 'indigo'
    },
    {
      title: 'Embedded Systems & IoT',
      icon: Settings,
      skills: ['Arduino', 'ESP32', 'Raspberry Pi', 'Temperature Sensors', 'Humidity Sensors', 'Piezoelectric Sensors', 'MPU6050', 'IoT with Python'],
      color: 'orange'
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      skills: ['Figma', 'Canva', 'Framer', 'Design Systems', 'Prototyping'],
      color: 'pink'
    },
    {
      title: 'No-Code/Low-Code Platforms',
      icon: Wrench,
      skills: ['Windsurf', 'Bolt', 'Adalo', 'Bubble', 'Appsheet'],
      color: 'teal'
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: ['Git', 'GitHub', 'VS Code', 'ChatGPT', 'Google Sheets', 'NetBeans'],
      color: 'gray'
    },
    {
      title: 'Cybersecurity & Ethical Hacking',
      icon: Shield,
      skills: ['Penetration Testing', 'Security Tools', 'Digital Defense Strategies', 'Cyber Warfare Techniques'],
      color: 'red'
    },
    {
      title: 'Prototyping & Development',
      icon: Wrench,
      skills: ['Low-cost Hardware Prototyping', 'Patent Documentation', 'Innovation Grant Proposals', 'Product Development'],
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700',
      green: 'bg-green-100 text-green-600 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700',
      purple: 'bg-purple-100 text-purple-600 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-700',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-700',
      pink: 'bg-pink-100 text-pink-600 border-pink-200 dark:bg-pink-900/30 dark:text-pink-400 dark:border-pink-700',
      orange: 'bg-orange-100 text-orange-600 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-700',
      gray: 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600',
      red: 'bg-red-100 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700',
      teal: 'bg-teal-100 text-teal-600 border-teal-200 dark:bg-teal-900/30 dark:text-teal-400 dark:border-teal-700',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${getColorClasses(category.color)}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;