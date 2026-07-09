import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Calendar, ArrowUp } from 'lucide-react';
export const FloatingActionButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white text-primary border border-slate-200 flex items-center justify-center shadow-lg hover:bg-slate-50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919080515327?text=Hi%20Stars%20Speech%20and%20Hearing%20Clinic,%20I%20would%20like%20to%20schedule%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-success-green text-white flex items-center justify-center shadow-lg hover:brightness-105 transition-all cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </motion.a>

      {/* Book Appointment CTA Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="/contact"
          className="w-12 h-12 rounded-full bg-medical-teal text-white flex items-center justify-center shadow-lg hover:bg-medical-teal-hover transition-all cursor-pointer"
          aria-label="Book Appointment"
        >
          <Calendar className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
};
