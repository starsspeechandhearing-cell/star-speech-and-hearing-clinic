import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-poppins font-semibold text-sm transition-all duration-300 rounded-custom px-6 py-3.5 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg focus:ring-primary',
    teal: 'bg-medical-teal text-white hover:bg-medical-teal-hover shadow-md hover:shadow-lg focus:ring-medical-teal',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    outlineTeal: 'border-2 border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white focus:ring-medical-teal',
    white: 'bg-white text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow focus:ring-primary',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
