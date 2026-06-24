import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce with MERN stack, payment integration, and admin panel',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
      icon: '🛒',
      color: 'from-blue-600 to-purple-600',
    },
    {
      title: 'Real-Time Chat App',
      description: 'Real-time messaging application with Socket.io and JWT authentication',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      icon: '💬',
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Task Management Dashboard',
      description: 'Project management tool with drag-and-drop, user roles, and analytics',
      tech: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS', 'DnD'],
      icon: '📋',
      color: 'from-orange-600 to-red-600',
    },
    {
      title: 'Social Media API',
      description: 'RESTful API with authentication, posts, comments, and user profiles',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mongoose'],
      icon: '🌐',
      color: 'from-pink-600 to-rose-600',
    },
  ];

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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#14141f] rounded-2xl overflow-hidden border border-white/5 
                       hover:border-primary/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="text-4xl mb-2">{project.icon}</div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-text-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#0a0a0f] rounded-full text-xs 
                                              font-medium text-text-muted border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className="inline-block px-6 py-2 bg-primary text-white rounded-full 
                           text-sm font-semibold hover:bg-primary-dark transition-colors"
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;