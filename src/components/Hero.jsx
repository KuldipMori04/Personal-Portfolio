import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');

    // Path to your CV file (place your CV in the public folder)
    // For example: public/cv/buddy-cv.pdf
    link.href = '/cv/buddy-cv.pdf';

    // Set download filename
    link.download = 'Buddy_MERN_Stack_Developer_CV.pdf';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Animated Background - Dark Theme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full 
                      bg-gradient-radial from-primary/10 to-transparent animate-float" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full 
                      bg-gradient-radial from-primary-light/5 to-transparent animate-float 
                      animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/5 to-transparent 
                      animate-pulse-slow" />
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full 
                     font-semibold text-sm mb-6 border border-primary/20"
          >
            👋 Welcome to my world
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6"
          >
            MERN Stack{' '}
            <span className="gradient-text">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-text-muted max-w-lg mb-8"
          >
            I'm a passionate MERN stack developer with 1.5+ years of experience
            building full-stack web applications. I specialize in MongoDB, Express.js,
            React, and Node.js.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="btn-primary-dark"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-outline-dark"
            >
              Let's Talk
            </motion.a>

            {/* Download CV Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(108, 92, 231, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-gradient-to-r from-[#6c5ce7] via-[#a29bfe] to-[#6c5ce7] 
           bg-[length:200%_auto] hover:bg-[length:100%_auto] 
           text-white rounded-full font-semibold shadow-lg 
           shadow-primary/30 hover:shadow-primary/50 
           transition-all duration-500 flex items-center gap-2
           animate-gradient"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-8 mt-12 flex-wrap"
          >
            {[
              { number: '1.5+', label: 'Years Experience' },
              { number: '15+', label: 'Projects Completed' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-bold text-primary">{stat.number}</p>
                <p className="text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* MERN Stack Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech) => (
              <span key={tech}
                className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold 
                             rounded-full border border-primary/20 shadow-lg shadow-primary/5">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary-light/20 
                          animate-spin-slow" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 to-transparent 
                          animate-float" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-[#1a1a2e] rounded-2xl shadow-2xl 
                            flex items-center justify-center flex-col p-6 border border-primary/20">
                <div className="text-6xl mb-3">🚀</div>
                <p className="text-sm font-bold text-center text-primary">MERN Stack</p>
                <p className="text-xs text-text-muted text-center">Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Tags */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 bg-[#1a1a2e] px-4 py-2 rounded-full shadow-xl border border-primary/20"
          >
            <span className="text-sm font-semibold text-text-light">⚛️ React</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 bg-[#1a1a2e] px-4 py-2 rounded-full shadow-xl border border-primary/20"
          >
            <span className="text-sm font-semibold text-text-light">🟢 Node.js</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -left-8 bg-[#1a1a2e] px-4 py-2 rounded-full shadow-xl border border-primary/20"
          >
            <span className="text-sm font-semibold text-text-light">🍃 MongoDB</span>
          </motion.div>
          <motion.div
            animate={{ x: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-1/3 -right-6 bg-[#1a1a2e] px-4 py-2 rounded-full shadow-xl border border-primary/20"
          >
            <span className="text-sm font-semibold text-text-light">⚡ Express</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;