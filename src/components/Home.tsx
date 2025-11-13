'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Home = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6 },
      '-=0.4'
    )
    .fromTo(
      socialRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    );
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <h1 
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight"
            >
              ARSHAD PASHA
            </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl sm:text-2xl md:text-3xl text-text-secondary mb-6 sm:mb-8 px-4 font-light"
        >
          <span className="text-accent-secondary font-semibold">Full Stack Web Developer</span>
          <span className="mx-3 text-text-tertiary">|</span>
          <span className="text-accent-primary">AI/ML & Data Science Enthusiast</span>
        </p>

        <p className="text-base sm:text-lg md:text-xl text-text-tertiary mb-8 px-4 max-w-3xl mx-auto leading-relaxed">
          Motivated Full Stack Developer with expertise in ReactJS, NextJS, and MySQL. 
          Experienced in delivering <span className="text-accent-secondary font-semibold">10+ real-world projects</span>, 
          RPA workflows, and secure applications. Passionate about building scalable, automated, and secure digital solutions.
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-primary/50"
          >
            View Projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-accent-secondary text-accent-secondary px-8 py-3 rounded-full font-semibold hover:bg-accent-secondary hover:text-bg-primary transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/arshadpasha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-accent-primary transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://github.com/pashaarshad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-accent-secondary transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://arshadpasha.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-accent-primary transition-colors duration-300 transform hover:scale-110"
            aria-label="Website"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              loop={true}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <SwiperSlide>
                <div className="relative group overflow-hidden">
                  <img 
                    src="/arshad_infosysLogo.jpg" 
                    alt="Arshad Pasha - Infosys" 
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative group overflow-hidden">
                  <img 
                    src="/arshad_sap_home.jpg" 
                    alt="Arshad Pasha - SAP" 
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
