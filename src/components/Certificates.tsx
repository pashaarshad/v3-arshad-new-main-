'use client';

import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      organization: 'Coursera',
      date: 'January 2024',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'React Advanced Patterns',
      organization: 'Udemy',
      date: 'February 2024',
      icon: '⚛️'
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      organization: 'Amazon Web Services',
      date: 'March 2024',
      icon: '☁️'
    },
    {
      id: 4,
      title: 'Python Programming',
      organization: 'Google',
      date: 'April 2024',
      icon: '🐍'
    },
    {
      id: 5,
      title: 'UI/UX Design',
      organization: 'Adobe',
      date: 'May 2024',
      icon: '🎨'
    },
    {
      id: 6,
      title: 'Data Structures & Algorithms',
      organization: 'MIT OpenCourseWare',
      date: 'June 2024',
      icon: '💻'
    }
  ];

  return (
    <section 
      id="certificates" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-8 sm:mb-12 text-center">
          <span className="text-accent-secondary">Certificates</span> & Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-card-bg backdrop-blur-sm border border-card-border p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-card-bg-hover transition-all duration-300 transform hover:scale-105 border-l-4 border-l-accent-secondary group"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-accent-secondary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary mb-1 sm:mb-2 font-medium">
                {cert.organization}
              </p>
              <p className="text-xs sm:text-sm text-text-tertiary">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
