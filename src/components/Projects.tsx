'use client';

import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management with drag-and-drop functionality.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with beautiful visualizations and forecasts.',
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Modern social networking app with real-time messaging and notifications.',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations and modern design.',
      gradient: 'from-teal-400 to-blue-500'
    },
    {
      id: 6,
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot powered by AI for customer support automation.',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-8 sm:mb-12 text-center">
          <span className="text-accent-secondary">Featured</span> Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-card-bg backdrop-blur-sm border border-card-border rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className={`h-36 sm:h-40 md:h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                <button 
                  className="text-accent-primary font-semibold hover:text-accent-hover transition-colors text-sm sm:text-base flex items-center gap-2 group-hover:gap-3"
                  suppressHydrationWarning
                >
                  View Details 
                  <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
