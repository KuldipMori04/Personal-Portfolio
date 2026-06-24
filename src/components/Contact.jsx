import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#0f0f1a]">
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
            Contact
          </span>
          <h2 className="section-title">Let's Build <span className="gradient-text">Together</span></h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a MERN stack project in mind? Let's connect and bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[#14141f] rounded-2xl p-6 border border-white/5">
              <h3 className="text-2xl font-bold mb-4 text-text-light">Contact Information</h3>
              <p className="text-text-muted mb-6">
                Ready to start your next MERN stack project? Let's discuss your requirements.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '📧', label: 'Email', value: 'buddy@example.com' },
                  { icon: '📍', label: 'Location', value: 'Remote / Anywhere' },
                  { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: '⚡', label: 'Expertise', value: 'MERN Stack' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm text-text-muted">{item.label}</p>
                      <p className="font-semibold text-text-light">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {['🐦', '💼', '📸', '🐙'].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-[#14141f] rounded-full flex items-center justify-center 
                           text-2xl hover:bg-primary hover:text-white transition-colors border border-white/5"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-[#14141f] rounded-2xl p-8 space-y-4 border border-white/5"
          >
            <div>
              <label className="block text-sm font-semibold mb-2 text-text-light">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0a0a0f] rounded-xl border border-white/10 
                         focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none 
                         transition-all text-text-light"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-text-light">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0a0a0f] rounded-xl border border-white/10 
                         focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none 
                         transition-all text-text-light"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-text-light">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-[#0a0a0f] rounded-xl border border-white/10 
                         focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none 
                         transition-all resize-none text-text-light"
                placeholder="Tell me about your MERN stack project..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white 
                       rounded-xl font-semibold transition-all duration-300 
                       shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;