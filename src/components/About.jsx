import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0f]">
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
            About Me
          </span>
          <h2 className="section-title">MERN Stack <span className="gradient-text">Developer</span></h2>
          <p className="section-subtitle mx-auto mt-4">
            Building full-stack applications with MongoDB, Express.js, React, and Node.js.
            Passionate about automation, Google Sheets, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 
                            rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent 
                            rounded-3xl transform -rotate-3" />
              <div className="relative w-full h-full bg-[#14141f] rounded-3xl p-8 flex items-center 
                            justify-center border border-white/5">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden 
              border-4 border-primary/30 shadow-xl shadow-primary/20
              hover:border-primary/60 transition-all duration-300"
                  >
                    <img
                      src="/PersonalPhoto.jpeg"
                      alt="Kuldip Mori"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-text-light">Kuldip Mori</h3>
                  <p className="text-text-muted">MERN Stack Developer</p>
                  <p className="text-xs text-primary font-semibold mt-2">1.5 Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-text-light">Who Am I?</h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              I'm a passionate MERN stack developer with 1.5 years of experience
              building full-stack web applications. I specialize in:
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#14141f] p-3 rounded-xl border border-primary/10 text-center
                           hover:border-primary/30 transition-all duration-300"
                >
                  <p className="font-semibold text-primary">{tech}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-text-muted leading-relaxed">
              I've worked on multiple projects of MERN stack,
              real-time applications, RESTful APIs, and full-stack solutions.
              I also specialize in Google Sheets automation, App Script, and
              third-party integrations.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                {
                  label: 'Experience',
                  value: '1.5 Years'
                },
                {
                  label: 'Current Company',
                  value: 'Sutra Analytics PVT LTD',
                  link: 'https://sutraanalytics.com/',
                  isLink: true
                },
                {
                  label: 'Stack',
                  value: 'MERN'
                },
                {
                  label: 'Location',
                  value: 'Ahmedabad, Gujarat'
                },
              ].map((item, index) => (
                <div key={index} className="bg-[#14141f] rounded-xl p-4 border border-white/5">
                  <p className="text-xs text-text-muted">{item.label}</p>
                  {item.isLink ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:text-primary-light 
                   transition-colors duration-300 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-text-light">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;