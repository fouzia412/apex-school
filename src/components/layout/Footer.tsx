import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, 
  ArrowUp, Send, Clock, Globe, Heart, GraduationCap, Award
} from 'lucide-react';
import { footerLinks, socialLinks, contactInfo } from '@/config/navigation';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import apexLogo from '@/assets/apex-logo.jpg';

const socialIconMap: Record<string, React.ReactNode> = {
  Facebook: <Facebook className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
  Instagram: <Instagram className="w-5 h-5" />,
  Youtube: <Youtube className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
};

export const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-b from-apex-black via-apex-black-light to-apex-black text-primary-foreground overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {/* Floating Icons */}
        <motion.div
          className="absolute top-32 right-1/4"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <GraduationCap className="w-8 h-8 text-secondary/20" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-1/4"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <Award className="w-6 h-6 text-secondary/20" />
        </motion.div>
      </div>

      {/* Wave Separator */}
      {/* <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div> */}

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 pt-32 pb-12">
        <motion.div
          className="relative bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                Stay Updated with <span className="text-secondary">APEX School</span>
              </h3>
              <p className="text-primary-foreground/70">
                Subscribe to our newsletter for latest news, events, and announcements.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary transition-colors"
                required
              />
              <Button type="submit" variant="gold" size="lg" className="px-6">
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={apexLogo} 
                alt="APEX School Logo" 
                className="h-16 object-contain bg-white rounded-lg p-2"
              />
            </motion.div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Ignite. Inspire. Achieve. The APEX Way. Nurturing future leaders through academic excellence, holistic development, and a commitment to values that inspire lifelong learning.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all border border-white/10 hover:border-primary"
                  aria-label={social.label}
                >
                  {socialIconMap[social.icon]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-secondary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-secondary" />
              Academics
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-secondary" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-secondary transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary/70 group-hover:text-primary" />
                  <span>{contactInfo.phone}</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-secondary transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary/70 group-hover:text-primary" />
                  <span>{contactInfo.email}</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3 text-primary-foreground/70"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary/70" />
                <span>{contactInfo.addresses[0]}</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 text-primary-foreground/70"
              >
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary/70" />
                <span>{contactInfo.hours}</span>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left flex items-center gap-2">
              © {new Date().getFullYear()} APEX - The School of Excellence.
               {/* Made with 
              <Heart className="w-4 h-4 text-primary fill-primary" /> 
              for Education */}
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-primary text-primary-foreground shadow-glow flex items-center justify-center z-50 hover:shadow-lg transition-shadow"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};