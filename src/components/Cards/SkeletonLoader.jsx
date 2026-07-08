import React from 'react';

export const SkeletonLoader = ({ variant = 'card', count = 1 }) => {
  const renderSkeleton = (index) => {
    if (variant === 'card') {
      return (
        <div key={index} className="bg-white rounded-custom p-6 border border-slate-100 shadow-soft animate-pulse flex flex-col space-y-4">
          <div className="w-full h-48 bg-slate-200 rounded-custom"></div>
          <div className="h-6 bg-slate-200 rounded w-3/4"></div>
          <div className="h-4 bg-slate-200 rounded w-full"></div>
          <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          <div className="h-10 bg-slate-200 rounded w-1/3 mt-4"></div>
        </div>
      );
    }
    
    if (variant === 'page') {
      return (
        <div key={index} className="max-w-7xl mx-auto px-6 py-12 animate-pulse space-y-8">
          <div className="h-12 bg-slate-200 rounded w-1/3"></div>
          <div className="w-full h-80 bg-slate-200 rounded-custom"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="h-6 bg-slate-200 rounded w-full"></div>
              <div className="h-6 bg-slate-200 rounded w-5/6"></div>
              <div className="h-6 bg-slate-200 rounded w-4/5"></div>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-slate-200 rounded-custom"></div>
              <div className="h-32 bg-slate-200 rounded-custom"></div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={variant === 'card' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" : "w-full"}>
      {Array.from({ length: count }).map((_, i) => renderSkeleton(i))}
    </div>
  );
};
