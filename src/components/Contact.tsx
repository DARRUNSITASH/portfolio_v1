import React from 'react';
import { Mail, Phone, MapPin, Calendar, User, Globe } from 'lucide-react';

const Contact = () => {
  const personalDetails = [
    { label: 'Name', value: 'Darrunsitash M', icon: User },
    { label: 'Age', value: '19', icon: Calendar },
    { label: 'Gender', value: 'Male', icon: User },
    { label: 'Nationality', value: 'Indian', icon: Globe },
    { label: 'Languages', value: 'Tamil, English', icon: Globe }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, 
              and potential collaborations. Feel free to reach out for any inquiries 
              about my work, projects, or if you'd like to connect professionally.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Email</p>
                  <a 
                    href="mailto:darrunsitash.ad23@krct.ac.in" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    darrunsitash.ad23@krct.ac.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Phone</p>
                  <a 
                    href="tel:+919566612510" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +91 9566612510
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Personal Details</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="grid grid-cols-1 gap-4">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-4 py-2">
                    <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm">
                      <detail.icon className="text-blue-600 dark:text-blue-400" size={16} />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{detail.label}:</span>
                      <span className="ml-2 font-semibold text-gray-900 dark:text-gray-100">{detail.value}</span>
                    </div>
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

export default Contact;