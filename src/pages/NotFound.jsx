import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Buttons/Button';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <Helmet>
        <title>404 - Page Not Found | Stars Speech and Hearing Clinic</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="max-w-md w-full text-center space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto"
        >
          <AlertCircle className="w-10 h-10" />
        </motion.div>

        <div className="space-y-2">
          <h1 className="font-poppins font-black text-4xl text-slate-800">404 - Page Not Found</h1>
          <p className="font-inter text-sm text-slate-500 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button to="/" variant="primary" className="w-full flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button to="/services" variant="outline" className="w-full flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Explore Services
          </Button>
        </div>      </div>
    </div>
  );
};
