import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Buttons/Button';

const patientStories = [
  {
    name: "Meera Krishnan",
    relation: "Mother of Aarav (Age 4)",
    therapy: "Speech & Autism Therapy",
    quote: "Aarav was struggling with single words at age 3. Within 6 months of occupational gym exercises and speech sessions under Dr. Priya, he is speaking full sentences and interacting beautifully in preschool. We are forever grateful!",
    rating: 5
  },
  {
    name: "Ramesh Subramanian",
    relation: "Self-Care Client (Age 52)",
    therapy: "Hearing Aid Fitting & Trials",
    quote: "My hearing loss made social dinners a nightmare. The audiologists at Stars gave me a digital RIC hearing aid trial. The clarity, Bluetooth capabilities, and absolute invisible design has given me my social confidence back.",
    rating: 5
  },
  {
    name: "Sunitha Venkat",
    relation: "Mother of Shruti (Age 6)",
    therapy: "Special Education & Fine Motor Development",
    quote: "Shruti had writing difficulties and struggled with homework timelines. The remedial therapy and sensory integration classes here have dramatically improved her handwriting and attention in class. Excellent clinical care!",
    rating: 5
  },
  {
    name: "Anand Raghavan",
    relation: "Father of Vikram (Age 8)",
    therapy: "Fluency / Stuttering Therapy",
    quote: "Vikram was feeling insecure in class because of his stammering. The speech modification drills and anxiety-control sessions have taught him to speak naturally. He recently won a speech competition!",
    rating: 5
  }
];

export const Testimonials = () => {
  const [reviews, setReviews] = useState(patientStories);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      const newReview = {
        name: data.name,
        relation: data.relation || "Family Friend",
        therapy: data.therapy || "Clinical Support",
        quote: data.message,
        rating: 5
      };
      setReviews([newReview, ...reviews]);
      reset();
    }, 1200);
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO BANNER */}
      <section className="bg-primary text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-medical-teal opacity-60" />
        <div className="max-w-4xl mx-auto text-center relative space-y-4">
          <div className="inline-block bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
            Patient Feedback
          </div>
          <h1 className="font-poppins font-black text-4xl sm:text-5xl leading-tight">
            Stories of Hope & Progress
          </h1>
          <p className="font-inter text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Read real feedback from parents, children, and adult patients who have transformed their lives through Stars Speech Clinic.
          </p>
        </div>
      </section>

      {/* 2. REVIEWS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((story, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-custom p-8 shadow-soft text-left flex flex-col justify-between hover-lift relative overflow-hidden"
            >
              {/* Quote Mark Design */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 rotate-180 -z-10" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center text-amber-400 space-x-0.5">
                  {Array.from({ length: story.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-inter text-sm sm:text-base text-slate-600 leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-50 mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary/10 to-medical-teal/10 text-primary flex items-center justify-center font-bold font-poppins">
                  {story.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-sm text-slate-800 leading-none">{story.name}</h4>
                  <span className="font-inter text-xs text-slate-400 mt-1 block">{story.relation}</span>
                  <div className="inline-block bg-primary/5 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1.5 uppercase tracking-wide">
                    {story.therapy}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SHARE YOUR STORY FORM */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100 text-left">
        <div className="max-w-xl mx-auto bg-white border border-slate-100 rounded-custom p-8 sm:p-10 shadow-lg">
          <div className="text-center space-y-3 mb-8">
            <h3 className="font-poppins font-black text-2xl text-slate-800">Share Your Story</h3>
            <p className="font-inter text-sm text-slate-500">Your feedback helps other families find the right clinical assistance. We would love to hear from you.</p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4 animate-fadeIn"
            >
              <div className="w-12 h-12 rounded-full bg-success-green/10 text-success-green flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-poppins font-bold text-lg text-slate-800">Review Submitted!</h4>
              <p className="font-inter text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                Thank you. Your review has been added to our live testimonials grid.
              </p>
              <Button variant="outline" className="mt-2" onClick={() => setIsSubmitted(false)}>
                Submit Another Review
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-inter">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Priya"
                  className="bg-slate-50 border border-slate-100 rounded-custom px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary w-full"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Relationship</label>
                  <input
                    type="text"
                    placeholder="e.g. Mother of Rahul"
                    className="bg-slate-50 border border-slate-100 rounded-custom px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary w-full"
                    {...register('relation')}
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Therapy Area</label>
                  <input
                    type="text"
                    placeholder="e.g. Speech Therapy"
                    className="bg-slate-50 border border-slate-100 rounded-custom px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary w-full"
                    {...register('therapy')}
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Your Message / Story</label>
                <textarea
                  placeholder="Tell us about your progress..."
                  rows="4"
                  className="bg-slate-50 border border-slate-100 rounded-custom px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary w-full"
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full py-4 text-base font-bold"
                disabled={loading}
              >
                {loading ? 'Posting review...' : 'Post Testimonial Review'}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
