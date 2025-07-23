import React from 'react';
import { Trophy, Award, Users, FileText, Lightbulb, Code } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: Code,
      count: 8,
      label: 'Notable Projects',
      description: 'Healthcare & Engineering Solutions',
      color: 'blue',
      items: [
        'Smart Pill Water Bottle (Patent)',
        'Neonatal Incubator',
        'Umbilical Monitoring System',
        'Traditional Tile Making Machine',
        'Auto Stove Off Mechanism',
        'Electromagnetic Solar Panel Lock',
        'Solar Panel Lifting Machine',
        'Smart Sprinkler Irrigation System (Patent)'
      ]
    },
    {
      icon: Award,
      count: 15,
      label: 'Certificates',
      description: 'Technical & Professional',
      color: 'green',
      items: [
        'Oracle Java Explorer Badge',
        'Tableau Desktop Specialist',
        'Data Scientist Master Program',
        'UI/UX Design Internship',
        'Web Development Internship',
        'And 10+ more certifications'
      ]
    },
    {
      icon: Trophy,
      count: 14,
      label: 'Achievements',
      description: 'Awards & Recognition',
      color: 'yellow',
      items: [
        'Winner - Startup Mela 7.0 (₹20,000)',
        'Winner - EDII-TN TNSI Hackathon (₹1 Lakh)',
        'Winner - HackXelerate\'25',
        'Overall Champion - CITA 2K25',
        '2 Patents Filed/Published',
        'And 9+ more achievements'
      ]
    },
    {
      icon: Users,
      count: 6,
      label: 'Workshops & Webinars',
      description: 'Learning & Development',
      color: 'purple',
      items: [
        'Cyber Warfare & Ethical Hacking',
        'IoT Using Python & Raspberry Pi',
        'Full Stack Development',
        'Data Visualization with Python',
        'E-Summit\'24',
        'Various LetsUpgrade Bootcamps'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-700',
        gradient: 'from-blue-500 to-blue-600'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-700',
        gradient: 'from-green-500 to-green-600'
      },
      yellow: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/30',
        text: 'text-yellow-600 dark:text-yellow-400',
        border: 'border-yellow-200 dark:border-yellow-700',
        gradient: 'from-yellow-500 to-yellow-600'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-700',
        gradient: 'from-purple-500 to-purple-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="statistics" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Portfolio Overview</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical journey, achievements, and continuous learning initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const colorClasses = getColorClasses(stat.color);
            return (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl ${colorClasses.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`${colorClasses.text}`} size={32} />
                    </div>
                    
                    <div className={`text-4xl font-bold bg-gradient-to-r ${colorClasses.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.count}+
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {stat.label}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {stat.description}
                    </p>
                    
                    <div className={`w-full h-1 bg-gradient-to-r ${colorClasses.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
          {stats.map((stat, index) => {
            const colorClasses = getColorClasses(stat.color);
            return (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${colorClasses.bg}`}>
                    <stat.icon className={colorClasses.text} size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">{stat.label} Highlights</h3>
                </div>
                
                <ul className="space-y-2">
                  {stat.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full ${colorClasses.bg} mt-2 flex-shrink-0`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Summary card */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Total Portfolio Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold">43+</div>
              <div className="text-sm opacity-90">Total Accomplishments</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2</div>
              <div className="text-sm opacity-90">Patents Filed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">₹1.2L+</div>
              <div className="text-sm opacity-90">Prize Money Won</div>
            </div>
            <div>
              <div className="text-3xl font-bold">19</div>
              <div className="text-sm opacity-90">Years Old</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;