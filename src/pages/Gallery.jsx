import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    category: "Clinic",
    title: "Reception & Consultation Desk",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Therapies",
    title: "One-on-One Speech stimulation",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Children",
    title: "Interactive Cognitive play",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "Equipment",
    title: "Diagnostic Audiometry Booth",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    category: "Events",
    title: "Parent counselling Saturday seminar",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    category: "Summer Camp",
    title: "Group communication summer camp",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    category: "Clinic",
    title: "Fully-equipped Sensory Gym",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    category: "Therapies",
    title: "Fine Motor handwriting training",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["All", "Clinic", "Therapies", "Children", "Equipment", "Events", "Summer Camp"];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="overflow-hidden">
      {/* 1. HERO BANNER */}
      <section className="bg-primary text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-medical-teal opacity-60" />
        <div className="max-w-4xl mx-auto text-center relative space-y-4">
          <div className="inline-block bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
            Clinic Gallery
          </div>
          <h1 className="font-poppins font-black text-4xl sm:text-5xl leading-tight">
            Stars Media & Activities
          </h1>
          <p className="font-inter text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Take a visual tour of our clean workspaces, sensory chambers, diagnostic audiology systems, and parent-child social camps.
          </p>
        </div>
      </section>

      {/* 2. GALLERY MASONRY LIST */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-slate-100 pb-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-poppins font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid Masonry */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-custom shadow-soft aspect-[4/5] border border-slate-100 bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="font-poppins font-bold text-[10px] uppercase tracking-wider text-medical-teal mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-poppins font-bold text-white text-base leading-tight">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};
