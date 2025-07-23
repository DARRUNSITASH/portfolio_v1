import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      qualification: 'BTech (AI&DS)',
      institution: 'K Ramakrishnan College Of Technology',
      board: 'Anna University',
      year: '2023 - 2027',
      grade: '7.87 CGPA',
      status: 'current'
    },
    {
      qualification: 'HSE (12th)',
      institution: 'Campion Anglo Indian Hr.Sec.School',
      board: 'State Board',
      year: '2022 - 2023',
      grade: '83%',
      status: 'completed'
    },
    {
      qualification: 'SSLC (10th)',
      institution: 'Campion Anglo Indian Hr.Sec.School',
      board: 'State Board',
      year: '2021 - 2022',
      grade: 'PASS',
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${edu.status === 'current' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-blue-100 dark:bg-blue-900/30'}`}>
                      <GraduationCap className={edu.status === 'current' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'} size={24} />
                    </div>
                    {edu.status === 'current' && (
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">{edu.qualification}</h3>
                </div>
                
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{edu.institution}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.board}</p>
                </div>
                
                <div className="md:col-span-1">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{edu.grade}</span>
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

export default Education;