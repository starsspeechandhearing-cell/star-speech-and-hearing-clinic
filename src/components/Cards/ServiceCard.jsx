import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-custom overflow-hidden border border-slate-100 shadow-soft hover-lift flex flex-col h-full"
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="bg-blue-50 text-blue-600 font-poppins text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">
            {service.category}
          </span>
        </div>
        <h3 className="font-poppins font-bold text-lg text-[#1E293B] mb-2 line-clamp-1">
          {service.title}
        </h3>
        <p className="font-inter text-sm text-slate-500 mb-6 line-clamp-3 flex-grow">
          {service.summary}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-sm font-bold text-primary hover:text-medical-teal transition-colors group/link mt-auto cursor-pointer"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
