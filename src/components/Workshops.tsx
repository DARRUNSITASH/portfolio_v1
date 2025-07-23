import React from 'react';
import { Users, Calendar, MapPin } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: 'Cyber Warfare & Ethical Hacking',
      duration: '3-Day National Workshop',
      organizer: 'KRCT x Ozone Cyber Security, Kerala',
      description: 'In-depth learning on cybersecurity tools, penetration testing, and digital defense strategies.'
    },
    {
      title: 'IoT Using Python & Raspberry Pi',
      duration: 'Workshop',
      organizer: 'IIT Madras (Top Engineers x Mechanica 2024)',
      description: 'Built connected systems using sensors, Python scripting, and microcontrollers.'
    },
    {
      title: 'E-Summit\'24',
      duration: 'Summit',
      organizer: 'SASTRA University',
      description: 'Attended workshops on startup ideation, pitching, and entrepreneurial strategies.'
    },
    {
      title: 'Full Stack Development Workshop',
      duration: 'Workshop',
      organizer: 'Kongunadu College of Engineering (React JS & Node JS)',
      description: 'Explored complete web development using MERN stack.'
    },
    {
      title: 'Data Visualization with Python',
      duration: 'Workshop',
      organizer: 'LetsUpgrade',
      description: 'Practical learning on turning complex data into easy-to-understand visual insights.'
    },
    {
      title: 'Various Short-term Bootcamps',
      duration: 'Multiple Sessions',
      organizer: 'LetsUpgrade',
      description: 'Attended intensive sessions across design, development, analytics, and cloud tools.'
    }
  ];

  return (
    <section id="workshops" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Workshops & Webinars</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {workshops.map((workshop, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{workshop.description}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{workshop.duration}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{workshop.organizer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;