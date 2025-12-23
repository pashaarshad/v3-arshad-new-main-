'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Tech icons with their image URLs (using devicons CDN)
const techIcons = [
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>(0);
  const rotationRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 10, y: 15 }); // Base auto-rotation velocity

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });

      gsap.from(sphereRef.current, {
        scrollTrigger: {
          trigger: sphereRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth animation loop
  useEffect(() => {
    let lastTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (isHovering) {
        // Smooth interpolation towards target rotation when hovering
        const smoothFactor = 0.08; // Lower = smoother
        rotationRef.current.x += (targetRotationRef.current.x - rotationRef.current.x) * smoothFactor;
        rotationRef.current.y += (targetRotationRef.current.y - rotationRef.current.y) * smoothFactor;
      } else {
        // Auto-rotate with smooth velocity
        rotationRef.current.x += velocityRef.current.x * deltaTime;
        rotationRef.current.y += velocityRef.current.y * deltaTime;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sphereRef.current) return;
    
    const rect = sphereRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalized mouse position (-1 to 1)
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    // Set target rotation based on mouse position
    // Moving right increases Y rotation (rotates right)
    // Moving down increases X rotation (rotates down)
    const sensitivity = 50;
    targetRotationRef.current.y = rotationRef.current.y + x * sensitivity;
    targetRotationRef.current.x = rotationRef.current.x + y * sensitivity;
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Smoothly continue from current rotation
    targetRotationRef.current = { ...rotationRef.current };
  };

  // Calculate 3D position for each icon on the sphere
  const getIconPosition = (index: number, total: number) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    
    const baseX = Math.cos(theta) * Math.sin(phi);
    const baseY = Math.sin(theta) * Math.sin(phi);
    const baseZ = Math.cos(phi);
    
    // Apply rotation
    const rotX = rotationRef.current.x * (Math.PI / 180);
    const rotY = rotationRef.current.y * (Math.PI / 180);
    
    // Rotate around Y axis
    const x1 = baseX * Math.cos(rotY) - baseZ * Math.sin(rotY);
    const z1 = baseX * Math.sin(rotY) + baseZ * Math.cos(rotY);
    
    // Rotate around X axis
    const y2 = baseY * Math.cos(rotX) - z1 * Math.sin(rotX);
    const z2 = baseY * Math.sin(rotX) + z1 * Math.cos(rotX);
    
    const radius = 180;
    const scale = (z2 + 1.5) / 2.5;
    const opacity = Math.max(0.3, (z2 + 1) / 2);
    
    return {
      x: x1 * radius,
      y: y2 * radius,
      z: z2,
      scale,
      opacity,
    };
  };

  const [, setTick] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTick(t => t + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-16 text-center"
        >
          Technical <span className="text-accent-secondary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Services Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent-primary font-semibold text-lg uppercase tracking-wider">Services</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
                I offer a Full-cycle of <span className="text-accent-secondary">Web Development</span> Services
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                With more than <span className="text-accent-primary font-semibold">1+ years</span> of experience, 
                I have been accomplishing projects with modern Web Development, new generation programming languages, 
                and Full Stack development to deliver cost-effective solutions.
              </p>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-5 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-text-primary">Full Stack Development</h4>
                </div>
                <p className="text-text-tertiary text-sm">End-to-end web applications with React, Next.js, and Node.js</p>
              </div>

              <div className="bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-5 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-green-500 to-green-700 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-text-primary">UI/UX Design</h4>
                </div>
                <p className="text-text-tertiary text-sm">Beautiful, responsive interfaces with modern design principles</p>
              </div>

              <div className="bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-5 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-text-primary">AI/ML Integration</h4>
                </div>
                <p className="text-text-tertiary text-sm">Integrating AI APIs and ML models into applications</p>
              </div>

              <div className="bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-5 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-text-primary">Cybersecurity</h4>
                </div>
                <p className="text-text-tertiary text-sm">Secure applications with encryption and ethical hacking practices</p>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive 3D Sphere */}
          <div 
            ref={sphereRef}
            className="relative w-full h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-accent-primary/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Tech icons sphere */}
            <div className="relative w-[400px] h-[400px]">
              {techIcons.map((tech, index) => {
                const pos = getIconPosition(index, techIcons.length);
                // Calculate how far back the icon is (0 = front, 1 = back)
                const backAmount = (1 - pos.z) / 2;
                return (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="absolute pointer-events-none"
                    style={{
                      left: `calc(50% + ${pos.x}px)`,
                      top: `calc(50% + ${pos.y}px)`,
                      transform: `translate(-50%, -50%) scale(${pos.scale})`,
                      opacity: pos.opacity,
                      zIndex: Math.round((pos.z + 1) * 10),
                    }}
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-lg"
                      style={{
                        filter: pos.z < 0 
                          ? `grayscale(${0.3 + backAmount * 0.5}) brightness(${1 - backAmount * 0.3}) opacity(${0.7 - backAmount * 0.2})` 
                          : 'none',
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Center decoration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 border-2 border-accent-primary/30 rounded-full animate-ping-slow"></div>
              <div className="absolute w-16 h-16 border border-accent-secondary/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
