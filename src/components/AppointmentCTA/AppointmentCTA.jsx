import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../Buttons/Button';

export const AppointmentCTA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    // Simulate API post
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      reset();
    }, 1500);
  };

  return (
    <section id="appointment-booking" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-medical-teal/5 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-medical-teal/10 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
            Book Today
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl text-slate-800 leading-tight">
            Schedule an Appointment at <span className="text-primary">Stars Clinic</span>
          </h2>
          <p className="font-inter text-slate-500 leading-relaxed text-sm sm:text-base">
            Take the first step toward overcoming communication, language, sensory, or hearing challenges. Our experienced clinical staff will guide you through diagnostic assessments and custom rehabilitation programs.
          </p>
          <div className="space-y-4 pt-4 font-inter text-sm">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-primary shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Direct Clinical Line</p>
                <a href="tel:+919080515327" className="font-bold text-slate-700 hover:text-primary">+91 90805 15327</a>
              </div>
            </div>
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-success-green shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">WhatsApp Booking</p>
                <a href="https://wa.me/919080515327" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-700 hover:text-success-green">+91 90805 15327</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <div className="glassmorphism rounded-custom p-8 sm:p-10 border border-white/40 shadow-xl relative">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-success-green/10 text-success-green flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-slate-800">Booking Requested!</h3>
                <p className="font-inter text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. A clinic administrator will contact you via phone or email shortly to confirm your scheduled slot.
                </p>
                <Button variant="outline" className="mt-4" onClick={() => setIsSubmitted(false)}>
                  Request Another Appointment
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-inter">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center">
                      <User className="w-3.5 h-3.5 mr-1 text-slate-400" /> Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="bg-white border border-slate-200 rounded-custom px-4 py-3 text-sm focus:outline-none focus:border-primary w-full"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <span className="text-xs text-red-500 font-semibold">{errors.name.message}</span>}
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center">
                      <Phone className="w-3.5 h-3.5 mr-1 text-slate-400" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="bg-white border border-slate-200 rounded-custom px-4 py-3 text-sm focus:outline-none focus:border-primary w-full"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: { value: /^[0-9+ ]{10,15}$/, message: 'Invalid phone format' }
                      })}
                    />
                    {errors.phone && <span className="text-xs text-red-500 font-semibold">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center">
                      <Mail className="w-3.5 h-3.5 mr-1 text-slate-400" /> Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="bg-white border border-slate-200 rounded-custom px-4 py-3 text-sm focus:outline-none focus:border-primary w-full"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                      })}
                    />
                    {errors.email && <span className="text-xs text-red-500 font-semibold">{errors.email.message}</span>}
                  </div>

                  {/* Service Selection */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                      Select Service
                    </label>
                    <select
                      className="bg-white border border-slate-200 rounded-custom px-4 py-3 text-sm focus:outline-none focus:border-primary w-full appearance-none cursor-pointer"
                      {...register('service', { required: 'Please select a service' })}
                    >
                      <option value="">-- Choose Therapy --</option>
                      <option value="Speech Therapy">Speech Therapy</option>
                      <option value="Occupational Therapy">Occupational Therapy</option>
                      <option value="Autism Therapy">Autism / Sensory integration</option>
                      <option value="Hearing Assessment">Hearing Assessment</option>
                      <option value="Hearing Aids">Digital Hearing Aids</option>
                      <option value="Special Education">Special Education</option>
                    </select>
                    {errors.service && <span className="text-xs text-red-500 font-semibold">{errors.service.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" /> Preferred Date
                    </label>
                    <input
                      type="date"
                      className="bg-white border border-slate-200 rounded-custom px-4 py-3 text-sm focus:outline-none focus:border-primary w-full cursor-pointer"
                      {...register('date', { required: 'Preferred date is required' })}
                    />
                    {errors.date && <span className="text-xs text-red-500 font-semibold">{errors.date.message}</span>}
                  </div>

                  {/* Preferred Time */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" /> Preferred Slot
                    </label>
                    <select
                      className="bg-white border border-slate-200 rounded-custom px-4 py-3 text-sm focus:outline-none focus:border-primary w-full appearance-none cursor-pointer"
                      {...register('time', { required: 'Preferred slot is required' })}
                    >
                      <option value="">-- Choose Slot --</option>
                      <option value="9:30 AM - 11:30 AM">Morning (9:30 AM - 11:30 AM)</option>
                      <option value="11:30 AM - 1:30 PM">Midday (11:30 AM - 1:30 PM)</option>
                      <option value="3:00 PM - 5:00 PM">Afternoon (3:00 PM - 5:00 PM)</option>
                      <option value="5:00 PM - 7:00 PM">Evening (5:00 PM - 7:00 PM)</option>
                    </select>
                    {errors.time && <span className="text-xs text-red-500 font-semibold">{errors.time.message}</span>}
                  </div>
                </div>

                {/* Message/Notes */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center">
                    <MessageSquare className="w-3.5 h-3.5 mr-1 text-slate-400" /> Message / Notes
                  </label>
                  <textarea
                    placeholder="Tell us about the patient's concerns (optional)"
                    rows="3"
                    className="bg-white border border-slate-200 rounded-custom px-4 py-3 text-sm focus:outline-none focus:border-primary w-full"
                    {...register('message')}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-4 text-base font-bold shadow-lg"
                  disabled={loading}
                >
                  {loading ? 'Submitting Request...' : 'Submit Booking Request'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
