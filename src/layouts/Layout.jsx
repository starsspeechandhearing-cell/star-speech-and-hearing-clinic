import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { FloatingActionButtons } from '../components/Buttons/FloatingActionButtons';

export const Layout = () => {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  
  // Custom scroll progress spring configuration
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Automatically scroll to the top of the viewport when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFF] text-[#1E293B]">
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Floating Action Elements */}
      <FloatingActionButtons />

      {/* Footer */}
      <Footer />
    </div>
  );
};
