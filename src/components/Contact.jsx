import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    emailjs.init('nn2b9YhQ6cbrc9W7H');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        // TO EMAIL: This is YOUR email where you'll receive messages
        email: 'kuldipmori16@gmail.com',  // <-- CHANGE TO YOUR EMAIL

        // FROM NAME: The person who filled the form
        from_name: formData.name,

        // REPLY TO: The visitor's email (so you can reply to them)
        from_email: formData.email,

        // MESSAGE: The actual message
        title: formData.message,

        // NAME: For the greeting in the email
        name: formData.name,
      };


      const response = await emailjs.send(
        'service_x50cjya',
        'template_s9nl48t',
        templateParams
      );

      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: '✅ Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });

        // 👇 ADD THIS - Remove message after 3 seconds
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 3000);
      }
    } catch (error) {
      console.error('❌ EmailJS Error:', error);

      setStatus({
        type: 'error',
        message: '❌ Failed to send message. Please try again or email me directly.'
      });

      // 👇 ADD THIS - Remove error message after 3 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 3000);

      // Fallback to mailto
      const subject = `Message from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      window.open(`mailto:kuldipmori16@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    } finally {
      setIsLoading(false);
    }
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
                  { icon: Mail, label: 'Email', value: 'kuldipmori16@gmail.com', link: 'mailto:kuldipmori16@gmail.com' },
                  { icon: MapPin, label: 'Location', value: 'Ahmedabad, Gujarat, India' },
                  { icon: Phone, label: 'Phone', value: '+91 9510539399' },
                  { icon: '⚡', label: 'Expertise', value: 'MERN Stack Developer' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    {typeof item.icon === 'string' ? (
                      <span className="text-2xl">{item.icon}</span>
                    ) : (
                      <item.icon size={24} className="text-primary" />
                    )}
                    <div>
                      <p className="text-sm text-text-muted">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="font-semibold text-text-light hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-text-light">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Mail, label: 'Email', href: 'mailto:kuldipmori16@gmail.com' },
                { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kuldip-mori-b30b9923a/', target: '_blank' },
                { icon: FaGithub, label: 'GitHub', href: 'https://github.com/KuldipMori04', target: '_blank' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target={social.target || '_self'}
                    rel={social.target === '_blank' ? 'noopener noreferrer' : ''}
                    className="w-12 h-12 bg-[#14141f] rounded-full flex items-center justify-center 
                             hover:bg-primary hover:text-white transition-colors border border-white/5
                             text-text-muted hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon size={22} />
                  </motion.a>
                );
              })}
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
                         transition-all text-text-light placeholder:text-text-muted/50"
                placeholder="Enter your full name"
                disabled={isLoading}
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
                         transition-all text-text-light placeholder:text-text-muted/50"
                placeholder="your.email@example.com"
                disabled={isLoading}
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
                         transition-all resize-none text-text-light placeholder:text-text-muted/50"
                placeholder="Tell me about your project, ideas, or how I can help you..."
                disabled={isLoading}
              />
            </div>

            {status.message && (
              <div className={`p-3 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                {status.message}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white 
                       rounded-xl font-semibold transition-all duration-300 
                       shadow-lg shadow-primary/30 hover:shadow-primary/50
                       disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message 🚀'
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;