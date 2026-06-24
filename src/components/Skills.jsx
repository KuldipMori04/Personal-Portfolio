import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // All skills for marquee
  const allSkills = [
    // Languages & Frameworks
    { name: 'HTML5', icon: '🌐', color: '#E34F26' },
    { name: 'CSS3', icon: '🎨', color: '#1572B6' },
    { name: 'Tailwind CSS', icon: '💨', color: '#06B6D4' },
    { name: 'JavaScript', icon: '📜', color: '#F7DF1E' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
    { name: 'React.js', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Express.js', icon: '⚡', color: '#000000' },
    { name: 'MongoDB', icon: '🍃', color: '#4DB33D' },
    { name: 'React Hooks', icon: '🪝', color: '#61DAFB' },
    { name: 'Redux', icon: '🔄', color: '#764ABC' },
    { name: 'RESTful APIs', icon: '🔗', color: '#6c5ce7' },
    { name: 'JWT Authentication', icon: '🔐', color: '#00C853' },
    { name: 'App Script', icon: '📈', color: '#4285F4' },
    { name: 'Middleware', icon: '⚙️', color: '#FF6D00' },
    { name: 'SQL', icon: '🗄️', color: '#4479A1' },
    { name: 'MongoDB Compass', icon: '🧭', color: '#4DB33D' },
    { name: 'VS Code', icon: '💻', color: '#007ACC' },
    { name: 'Postman', icon: '📮', color: '#FF6C37' },
    { name: 'Git', icon: '📊', color: '#F05032' },
    { name: 'GitHub', icon: '🐙', color: '#181717' },
    { name: 'Axios', icon: '📡', color: '#5A29E4' },
    { name: 'Google Sheet Automation', icon: '📊', color: '#0F9D58' },
  ];

  // Skills with categories for cards
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'React.js', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '⚡' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'App Script', icon: '📈' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'React Hooks', icon: '🪝' },
        { name: 'Redux', icon: '🔄' },
        { name: 'Tailwind CSS', icon: '💨' },
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '⚡' },
        { name: 'RESTful APIs', icon: '🔗' },
        { name: 'JWT Authentication', icon: '🔐' },
        { name: 'Middleware', icon: '⚙️' },
      ]
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'SQL', icon: '🗄️' },
      ]
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: [
        { name: 'VS Code', icon: '💻' },
        { name: 'Postman', icon: '📮' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'MongoDB Compass', icon: '🧭' },
      ]
    },
    {
      title: 'Other Skills',
      icon: '🚀',
      skills: [
        { name: 'Stripe Integration', icon: '💳' },
        { name: 'Google Sheet Automation', icon: '📊' },
        { name: 'Environment Variables', icon: '🔑' },
        { name: 'Axios', icon: '📡' },
      ]
    }
  ];

  // Split skills into two groups for two lines
  const halfLength = Math.ceil(allSkills.length / 2);
  const firstLineSkills = allSkills.slice(0, halfLength);
  const secondLineSkills = allSkills.slice(halfLength);

  // Triple the arrays for seamless scrolling
  const scrollingFirstLine = [...firstLineSkills, ...firstLineSkills, ...firstLineSkills];
  const scrollingSecondLine = [...secondLineSkills, ...secondLineSkills, ...secondLineSkills];

  return (
    <section id="skills" className="py-20 bg-[#0f0f1a]">
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
            My Skills
          </span>
          <h2 className="section-title">MERN Stack <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle mx-auto mt-4">
            Full-stack development with MongoDB, Express.js, React, and Node.js.
            Plus automation, Google Sheets, and modern web technologies.
          </p>
        </motion.div>

        {/* SKILLS MARQUEE - Two Lines Continuous Scrolling */}
        <div className="mb-16">
          {/* Line 1 */}
          <div className="relative overflow-hidden bg-[#14141f] rounded-t-2xl border border-white/5 border-b-0 py-4">
            <div
              className="flex gap-10 animate-marquee-skills"
              style={{
                width: 'max-content',
                animation: 'marqueeSkills 40s linear infinite',
              }}
            >
              {scrollingFirstLine.map((skill, index) => (
                <div
                  key={`line1-${index}`}
                  className="flex items-center gap-3 whitespace-nowrap px-3"
                >
                  <span className="text-2xl md:text-3xl">{skill.icon}</span>
                  <span className="text-sm md:text-base font-semibold text-text-light">
                    {skill.name}
                  </span>
                  <span
                    className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="text-primary mx-1">✦</span>
                </div>
              ))}
            </div>
          </div>

          {/* Line 2 - Moving in Opposite Direction */}
          <div className="relative overflow-hidden bg-[#14141f] rounded-b-2xl border border-white/5 border-t-0 py-4">
            <div
              className="flex gap-10 animate-marquee-skills-reverse"
              style={{
                width: 'max-content',
                animation: 'marqueeSkillsReverse 45s linear infinite',
              }}
            >
              {scrollingSecondLine.map((skill, index) => (
                <div
                  key={`line2-${index}`}
                  className="flex items-center gap-3 whitespace-nowrap px-3"
                >
                  <span className="text-2xl md:text-3xl">{skill.icon}</span>
                  <span className="text-sm md:text-base font-semibold text-text-light">
                    {skill.name}
                  </span>
                  <span
                    className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="text-primary mx-1">✦</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pause Control */}
          <div
            className="flex justify-center mt-4"
            onMouseEnter={() => {
              const marquees = document.querySelectorAll('.animate-marquee-skills, .animate-marquee-skills-reverse');
              marquees.forEach(m => m.style.animationPlayState = 'paused');
            }}
            onMouseLeave={() => {
              const marquees = document.querySelectorAll('.animate-marquee-skills, .animate-marquee-skills-reverse');
              marquees.forEach(m => m.style.animationPlayState = 'running');
            }}
          >
            <span className="text-xs text-text-muted hover:text-primary transition-colors px-3 py-1 
                       border border-white/10 rounded-full hover:border-primary/30 cursor-pointer">
              ⏸️ Hover to Pause Skills
            </span>
          </div>
        </div>

        {/* SKILLS CATEGORIES - Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-text-light">
            Skills <span className="gradient-text">Categories</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-[#14141f] rounded-2xl p-6 border border-white/5 
                         hover:border-primary/30 transition-all duration-300
                         shadow-xl hover:shadow-2xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                  <span className="text-3xl">{category.icon}</span>
                  <h4 className="text-lg font-bold text-text-light">{category.title}</h4>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="flex items-center gap-1.5 text-sm text-text-muted 
                               bg-[#0a0a0f] px-3 py-1.5 rounded-full border border-white/5
                               hover:border-primary/30 hover:text-primary transition-all duration-300"
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee Animation CSS */}
      <style>{`
        @keyframes marqueeSkills {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes marqueeSkillsReverse {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-skills {
          animation: marqueeSkills 40s linear infinite;
        }

        .animate-marquee-skills-reverse {
          animation: marqueeSkillsReverse 45s linear infinite;
        }

        .animate-marquee-skills:hover,
        .animate-marquee-skills-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;