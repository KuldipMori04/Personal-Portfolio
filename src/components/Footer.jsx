import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0f] text-white border-t border-white/5">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Buddy<span className="text-primary">.</span>
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              MERN Stack Developer building full-stack applications with 
              MongoDB, Express.js, React, and Node.js.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-light">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} 
                     className="text-text-muted hover:text-primary transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-light">Tech Stack</h3>
            <ul className="space-y-2">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript'].map((tech) => (
                <li key={tech} className="text-text-muted text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-light">Get in Touch</h3>
            <div className="space-y-3">
              <p className="text-text-muted text-sm">📧 buddy@example.com</p>
              <p className="text-text-muted text-sm">📍 Remote</p>
              <p className="text-text-muted text-sm">📱 +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Buddy. All rights reserved. Made with 💜 & MERN Stack
          </p>
          <div className="flex gap-3">
            {['🐦', '💼', '📸', '🐙'].map((social) => (
              <a key={social} href="#" 
                 className="w-10 h-10 bg-[#14141f] rounded-full flex items-center justify-center 
                          text-lg hover:bg-primary hover:text-white transition-all 
                          duration-300 hover:scale-110 border border-white/5">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-primary-light 
                   text-white rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 
                   transition-all duration-300 flex items-center justify-center text-2xl z-50"
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;