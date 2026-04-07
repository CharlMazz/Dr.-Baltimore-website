import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Youtube, Twitter, Facebook, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Training', href: '#training' },
    { name: 'Camps', href: '#glute-camps' },
    { name: 'Shop', href: '#shop' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/dr.baltimore/' },
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/justin.inman.758' },
    { icon: <Youtube size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-black tracking-tighter text-white"
        >
          DR. <span className="text-primary">BALTIMORE</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-white/60 hover:text-white transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-tighter transition-all transform hover:scale-105">
            Join Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-white hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex space-x-6">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} className="text-white/60">
                    {social.icon}
                  </a>
                ))}
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
