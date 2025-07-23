import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Internship Completion - UI/UX Design',
      organization: 'Cognifyz Technologies',
      description: 'Gained hands-on experience in user-centric interface design and prototyping.'
    },
    {
      title: 'Internship Completion - Web Development',
      organization: 'Cognifyz Technologies',
      description: 'Developed web applications, gained exposure to frontend and backend development.'
    },
    {
      title: 'Oracle Java Explorer Badge',
      organization: 'Oracle',
      description: 'Completed 7+ hours of Java training including OOPs using Oracle Cloud and NetBeans with 100% score.'
    },
    {
      title: 'R for Data Science',
      organization: 'IBM/Simplilearn',
      description: 'Covered data wrangling, visualization, and statistical computing using R.'
    },
    {
      title: 'Tableau Desktop Specialist Certification',
      organization: 'Tableau',
      description: 'Demonstrated skills in data visualization and dashboard creation using Tableau.'
    },
    {
      title: 'Python for Data Science',
      organization: 'Simplilearn',
      description: 'Built expertise in data analysis and Python programming for data science applications.'
    },
    {
      title: 'Data Science with Python',
      organization: 'Simplilearn',
      description: 'Comprehensive training in data science methodologies using Python.'
    },
    {
      title: 'Machine Learning Using Python',
      organization: 'Simplilearn',
      description: 'Advanced training in ML algorithms and implementation using Python.'
    },
    {
      title: 'SQL Fundamentals Badge',
      organization: 'LetsUpgrade',
      description: 'Gained proficiency in querying, data management, and relational databases.'
    },
    {
      title: 'Git & GitHub Bootcamp',
      organization: 'LetsUpgrade',
      description: 'Learned collaborative development and version control fundamentals.'
    },
    {
      title: 'Figma, Canva, Google Sheets Bootcamps',
      organization: 'LetsUpgrade',
      description: 'Mastered practical tools for design, data handling, and presentations.'
    },
    {
      title: 'Flutter, Appsheet, Tailwind CSS Bootcamps',
      organization: 'LetsUpgrade',
      description: 'Acquired no-code/low-code mobile and web development skills.'
    },
    {
      title: 'Foundations: Programming Refresher',
      organization: 'Various Platforms',
      description: 'Strengthened understanding of programming logic and core computing principles.'
    },
    {
      title: 'Data Scientist Master Program Certificate',
      organization: 'Simplilearn',
      description: 'Comprehensive certification covering machine learning, statistics, and data analytics.'
    },
    {
      title: 'C for Beginners',
      organization: 'Great Learning',
      description: 'Acquired strong foundation in the C programming language.'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Certificates</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Award className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-gray-100 font-bold mb-1">
                    {certificate.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                    {certificate.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {certificate.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Continuously learning and expanding my knowledge through various platforms and institutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;