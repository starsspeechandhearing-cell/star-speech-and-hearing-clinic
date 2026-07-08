import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Buttons/Button';
import logoImg from '../../assets/WhatsApp Image 2026-07-03 at 11.20.14 AM.jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="w-full z-50 flex flex-col">
      {/* Top Contact Bar */}
      <div className="bg-[#0F4C81] text-white py-[22px] px-8 sm:px-10 border-b border-white/10 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-8 lg:gap-12 text-[15px] font-medium">
            <a href="tel:+919080515327" className="flex items-center hover:text-medical-teal transition-all duration-300 hover:translate-y-[-1px] group">
              <Phone className="w-[18px] h-[18px] mr-2.5 text-white/90 group-hover:text-medical-teal group-hover:scale-110 transition-all duration-300" />
              +91 90805 15327
            </a>
            <a href="mailto:starsspeechandhearing@gmail.com" className="flex items-center hover:text-medical-teal transition-all duration-300 hover:translate-y-[-1px] group">
              <Mail className="w-[18px] h-[18px] mr-2.5 text-white/90 group-hover:text-medical-teal group-hover:scale-110 transition-all duration-300" />
              starsspeechandhearing@gmail.com
            </a>
            <span className="flex items-center text-white/90 group hover:text-white transition-colors duration-300">
              <Clock className="w-[18px] h-[18px] mr-2.5 text-white/90 transition-transform group-hover:rotate-12 duration-300" />
              Mon - Sat: 9:30 AM - 9:00 PM
            </span>
          </div>
          <div className="flex items-center text-[15px] font-medium">
            <a href="https://wa.me/919080515327?text=Hi%20Stars%20Speech%2520and%2520Hearing%2520Clinic,%20I%20would%20like%20to%2520schedule%20an%20appointment." target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-success-green transition-all duration-300 hover:translate-y-[-1px] text-white font-semibold group">
              <MessageCircle className="w-[18px] h-[18px] mr-2 text-success-green group-hover:scale-110 transition-all duration-300" />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`w-full transition-all duration-300 border-b border-slate-100 ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 glassmorphism shadow-md z-45 py-3 px-10' 
          : 'bg-transparent py-8 px-10'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImg} 
              alt="Stars Speech and Hearing Clinic Logo" 
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-poppins text-base font-semibold transition-colors relative py-1 ${
                    isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-medical-teal rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Book CTA */}
          <div className="hidden lg:block">
            <a 
              href="https://wa.me/919080515327?text=Hi%20Stars%20Speech%2520and%2520Hearing%2520Clinic,%20I%20would%20like%20to%2520schedule%20an%20appointment." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="teal">
                WhatsApp Book Appointment
              </Button>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary p-1 cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-100 shadow-lg"
            >
              <div className="px-6 py-6 space-y-4 flex flex-col">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-poppins text-base font-semibold transition-colors py-2.5 px-4 rounded-xl ${
                        isActive 
                          ? 'bg-primary/5 text-primary' 
                          : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-2 border-t border-slate-100">
                  <a 
                    href="https://wa.me/919080515327?text=Hi%20Stars%20Speech%2520and%2520Hearing%2520Clinic,%20I%20would%20like%20to%2520schedule%20an%20appointment." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block w-full"
                  >
                    <Button variant="teal" className="w-full justify-center text-center">
                      WhatsApp Book Appointment
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer to push content down when Nav is fixed */}
      {isScrolled && <div className="h-[73px] lg:h-[73px] hidden lg:block" />}
    </header>
  );
};
