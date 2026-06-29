import React from 'react';
import { motion } from 'framer-motion';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiStripe,
  SiSocketdotio,
  SiTailwindcss,
  SiJsonwebtokens,
  SiSupabase
} from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'APP SYNC SUTRA',
      description: 'Full-stack WooCommerce store analyzer with MERN stack, payment integration, and admin panel',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
      // icon: '🛒',
      color: 'from-blue-600 to-purple-600',
      image: '/AppSyncSutra.png',
      techIcons: [SiMongodb, SiExpress, SiReact, SiNodedotjs, SiStripe]
    },
    {
      title: 'Sync Sutra Landing Page',
      description: 'Static landing page for Sync Sutra with responsive design and animations',
      tech: ['React'],
      // icon: '💬',
      color: 'from-green-600 to-emerald-600',
      image: '/LandingSyncSutra.png',
      techIcons: [SiReact]
    },
    {
      title: 'Sync Sutra Admin Panel',
      description: 'Admin panel for Sync Sutra with user management, analytics, and dashboard features',
      tech: ['React', 'Tailwind CSS'],
      color: 'from-orange-600 to-red-600',
      image: '/AdminSyncSutra.png',
      techIcons: [SiReact, SiTailwindcss]
    },
    {
      title: 'Luxus Digital',
      description: 'Full-stack digital marketing agency website with MERN stack, real-time data, and analytics',
      tech: ['Node.js', 'Express.js', 'Supabase', 'JWT'],
      color: 'from-pink-600 to-rose-600',
      image: '/Luxus.png',
      techIcons: [SiNodedotjs, SiExpress, SiSupabase, SiJsonwebtokens]
    },
  ];

  // Duplicate projects for seamless scrolling
  const scrollingProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="py-20 bg-[#0a0a0f]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full 
                         font-semibold text-sm mb-4 border border-primary/20">
            Portfolio
          </span>
          <h2 className="section-title">MERN Stack <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle mx-auto mt-4">
            Full-stack applications built with MongoDB, Express.js, React, and Node.js.
          </p>
        </motion.div>

        {/* Auto-Scrolling Projects Marquee */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex gap-6 animate-marquee-projects"
            style={{
              width: 'max-content',
              animation: 'marqueeProjects 40s linear infinite',
            }}
          >
            {scrollingProjects.map((project, index) => (
              <div
                key={index}
                className="w-[380px] md:w-[420px] flex-shrink-0 bg-[#14141f] rounded-2xl 
                         overflow-hidden border border-white/5 hover:border-primary/30 
                         transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Big Image Section */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" object-contain transition-transform duration-500 
                             hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60`} />


                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techIcons.map((Icon, idx) => (
                      <span key={idx} className="p-1.5 bg-[#0a0a0f] rounded-lg border border-white/5">
                        <Icon className="w-4 h-4 text-text-muted" />
                      </span>
                    ))}
                  </div>

                  {/* Tech Names */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-[#0a0a0f] rounded-full text-[10px] 
                                                font-medium text-text-muted border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#"
                    className="inline-block w-full text-center px-4 py-2.5 bg-gradient-to-r 
                             from-primary to-primary-light text-white rounded-xl 
                             text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 
                             transition-all duration-300"
                  >
                    View Project →
                  </motion.a>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none"></div>
        </div>

        {/* Pause Control */}
        <div
          className="flex justify-center mt-4"
          onMouseEnter={() => {
            const marquee = document.querySelector('.animate-marquee-projects');
            if (marquee) marquee.style.animationPlayState = 'paused';
          }}
          onMouseLeave={() => {
            const marquee = document.querySelector('.animate-marquee-projects');
            if (marquee) marquee.style.animationPlayState = 'running';
          }}
        >
          <span className="text-xs text-text-muted hover:text-primary transition-colors px-3 py-1 
                       border border-white/10 rounded-full hover:border-primary/30 cursor-pointer">
            ⏸️ Hover to Pause Projects
          </span>
        </div>
      </div>

      {/* Marquee Animation CSS */}
      <style>{`
        @keyframes marqueeProjects {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-marquee-projects {
          animation: marqueeProjects 40s linear infinite;
        }

        .animate-marquee-projects:hover {
          animation-play-state: paused;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;