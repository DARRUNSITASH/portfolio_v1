import React from 'react';
import { Trophy, Award, FileText, Lightbulb, Medal, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Winner - Best Business Idea, Startup Mela 7.0',
      organization: 'St. Joseph\'s Institute of Management',
      prize: '₹20,000 cash prize - Top winner in Track 1',
      type: 'winner',
      icon: Trophy
    },
    {
      title: 'Winner - EDII-TN TNSI Hackathon 2024',
      organization: 'Among top 5 teams out of 25,000+ ideas',
      prize: '₹1 Lakh grant',
      type: 'winner',
      icon: Trophy
    },
    {
      title: 'Winner - HackXelerate\'25',
      organization: 'KPRIET',
      prize: 'Top 15 spot among 2000+ entries with AI Career Navigator project',
      type: 'winner',
      icon: Trophy
    },
    {
      title: 'German Utility Patent - Smart Pill Water Bottle',
      organization: 'Healthcare monitoring system innovation',
      prize: 'Patent Filed',
      type: 'patent',
      icon: Lightbulb
    },
    {
      title: 'Patent Published - Smart Sprinkler Irrigation System',
      organization: 'Automated irrigation using IoT sensors',
      prize: 'Patent Published',
      type: 'patent',
      icon: Lightbulb
    },
    {
      title: 'Overall Champion - CITA 2K25',
      organization: 'Periyar Maniammai Institute',
      prize: 'Short Film, Paper Presentation, and overall trophy',
      type: 'winner',
      icon: Medal
    },
    {
      title: '2nd Place - Paper Presentation & Photography',
      organization: 'TECH MERAKI 3.0, PSNA',
      prize: 'Demonstrated academic depth and creative talent',
      type: 'runner-up',
      icon: Award
    },
    {
      title: '2nd Prize - Mathematics Week',
      organization: 'KRCT',
      prize: 'Awarded for paper on Ramanujan\'s contributions',
      type: 'runner-up',
      icon: Award
    },
    {
      title: '1st Prize - Project Expo',
      organization: 'CARE Techfest\'24',
      prize: 'Recognized for innovation',
      type: 'winner',
      icon: Trophy
    },
    {
      title: '2nd Prize - Essay Writing',
      organization: 'CARE Techfest\'24',
      prize: 'Recognized for analytical writing',
      type: 'runner-up',
      icon: Award
    },
    {
      title: '2nd Prize - UI/UX Contest',
      organization: 'Freshers Day \'23, KRCT',
      prize: 'Honored for design thinking and user experience insights',
      type: 'runner-up',
      icon: Award
    },
    {
      title: '3rd Place - National Hackathon',
      organization: 'ISYSWAY Technologies, Thanjavur',
      prize: 'Demonstrated strong teamwork and coding proficiency',
      type: 'third',
      icon: Award
    },
    {
      title: 'Top 10 Participant - SindhanAI\'25 Hackathon',
      organization: 'SRM TRP College',
      prize: 'Earned distinction in 24-hour AI-themed event',
      type: 'participant',
      icon: Star
    },
    {
      title: 'Paper Presentation - INTERPRONIX 2K25',
      organization: 'K. Ramakrishnan College',
      prize: 'Participated in national-level technical symposium',
      type: 'participant',
      icon: FileText
    }
  ];

  const prototypes = [
    {
      category: 'Healthcare Innovations',
      projects: [
        'Portable Low-Cost Neonatal Incubator - Designed and built a compact, affordable incubator to support neonatal care in resource-limited settings',
        'Umbilical Monitoring System - Engineered a non-invasive system to continuously monitor umbilical parameters for neonatal health tracking',
        'Smart Pill Water Bottle (Patent) - Innovated healthcare monitoring system'
      ]
    },
    {
      category: 'Engineering Solutions',
      projects: [
        'Traditional Tile Making Machine - Revived and mechanized a traditional tile-making process with ergonomic and efficient design improvements',
        'Auto Stove Off Mechanism - Created a safety device that automatically turns off gas stoves based on inactivity or timer triggers',
        'Electromagnetic Solar Panel Lock - Developed a solar panel fixing system using electromagnetic locks for easy installation and anti-theft security',
        'Solar Panel Lifting Machine - Designed a solar panel lifting system to adjust tilt and angle for optimized solar tracking and maintenance'
      ]
    }
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'winner':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-700';
      case 'runner-up':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700';
      case 'third':
        return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-700';
      case 'patent':
        return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-700';
      case 'participant':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${getTypeStyles(achievement.type)}`}>
                  <achievement.icon size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{achievement.organization}</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTypeStyles(achievement.type)}`}>
                    {achievement.prize}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Notable Projects & Prototypes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {prototypes.map((category, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">{category.category}</h4>
                <ul className="space-y-3">
                  {category.projects.map((project, projectIndex) => (
                    <li key={projectIndex} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;