import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, Cpu, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Buttons/Button';

const products = [
  {
    name: "Invisible-in-Canal (IIC)",
    type: "Invisible Auditory Solution",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    description: "Sits deep within the ear canal, making it virtually undetectable to outside observers. Custom-molded shell fits comfortably in your ear.",
    specs: [
      "Completely invisible to observers",
      "Best for mild to moderate hearing loss",
      "Automatic environmental noise regulation",
      "Custom-molded physical ear shape"
    ],
    features: "Feedback elimination, wind noise suppression, and speech highlight filters."
  },
  {
    name: "Receiver-in-Canal (RIC)",
    type: "Discreet Bluetooth Rechargeable",
    image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=600&q=80",
    description: "A highly discreet design where the processor sits behind the ear and a tiny receiver sits inside the canal. Offers maximum natural sound clarity.",
    specs: [
      "Discreet design with thin wires",
      "Rechargeable battery (up to 30 hours per charge)",
      "Direct Bluetooth streaming (calls, TV, music)",
      "Dual directional microphones"
    ],
    features: "Adaptive directionality, smartphone app volume control, and hands-free call streaming."
  },
  {
    name: "Behind-the-Ear (BTE)",
    type: "High-Power Amplification",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
    description: "The classic, ultra-durable design providing powerful sound output. Best suited for severe or profound hearing difficulties, and highly recommended for children.",
    specs: [
      "Maximum amplification output power",
      "Best for all stages of hearing loss (including profound)",
      "Robust, moisture-resistant design",
      "Easy-to-use volume toggle keys"
    ],
    features: "Telecoil integration, customized child locks, and long battery life."
  }
];

export const HearingAids = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (_data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      reset();
    }, 1500);
  };

  const scrollToEnquiry = () => {
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO BANNER */}
      <section className="bg-primary text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-medical-teal opacity-60" />
        <div className="max-w-4xl mx-auto text-center relative space-y-4">
          <div className="inline-block bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
            Product Catalog
          </div>
          <h1 className="font-poppins font-black text-4xl sm:text-5xl leading-tight">
            Premium Digital Hearing Aids
          </h1>
          <p className="font-inter text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discover cutting-edge, Bluetooth-compatible, rechargeable, and completely invisible hearing solutions from top global manufacturers.
          </p>
        </div>
      </section>

      {/* 2. PRODUCT SHOWCASE GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-16">
          {products.map((prod, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-16 last:border-0 last:pb-0">
                
                {/* Product Image */}
                <div className={`lg:col-span-5 relative ${isEven ? 'order-first' : 'order-first lg:order-last'}`}>
                  <div className="relative w-full rounded-custom overflow-hidden shadow-lg border border-slate-100 aspect-square">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Product Specifications & Details */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="text-xs font-bold text-primary tracking-wide uppercase font-poppins">{prod.type}</div>
                  <h3 className="font-poppins font-black text-2xl sm:text-3xl text-slate-800">{prod.name}</h3>
                  <p className="font-inter text-slate-500 text-sm sm:text-base leading-relaxed">{prod.description}</p>
                  
                  {/* Specifications List */}
                  <div className="space-y-3 pt-2">
                    <div className="font-poppins font-bold text-xs text-slate-400 uppercase tracking-wider">Key Specifications:</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-inter text-slate-600 text-sm">
                      {prod.specs.map((spec, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-4.5 h-4.5 text-medical-teal mr-2.5 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advanced Microchips */}
                  <div className="p-4 bg-slate-50 rounded-custom border border-slate-100 flex items-start space-x-3.5">
                    <Cpu className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <span className="font-poppins font-bold text-xs text-slate-700 uppercase tracking-wider block">Smart Signal Processor</span>
                      <p className="font-inter text-xs text-slate-400 mt-1">{prod.features}</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" onClick={scrollToEnquiry}>
                      Enquire for Price & Trial
                    </Button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. TRIAL PROCESS */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-3">
            <h3 className="font-poppins font-black text-2xl text-slate-800">Our 4-Step Hearing Trial Process</h3>
            <p className="font-inter text-slate-500 text-sm max-w-lg mx-auto">We ensure your digital hearing aid matches your ears perfectly before you invest.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {[
              { title: "1. Diagnostic Test", desc: "Detailed pure-tone audiometry screening inside our soundproof testing booth." },
              { title: "2. Style Selection", desc: "Consultation on IIC, RIC, or BTE depending on loss severity and ear dimensions." },
              { title: "3. Precision Calibration", desc: "Mapping of amplification frequency channels using digital computers." },
              { title: "4. Live Trial", desc: "Test the device in real-world clinic noise before finalizing custom shell moldings." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-custom border border-slate-100 shadow-soft">
                <div className="font-poppins font-bold text-xs text-primary mb-2 uppercase tracking-widest">Step {i + 1}</div>
                <h4 className="font-poppins font-bold text-base text-slate-850 mb-2">{step.title}</h4>
                <p className="font-inter text-xs text-slate-450 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENQUIRY LEAD FORM */}
      <section id="enquiry-form" className="py-20 px-6 max-w-3xl mx-auto text-left">
        <div className="bg-white border border-slate-100 rounded-custom p-8 sm:p-10 shadow-lg relative">
          <div className="text-center space-y-4 mb-8">
            <h3 className="font-poppins font-black text-2xl text-slate-800">Request Hearing Aid Trial</h3>
            <p className="font-inter text-sm text-slate-500">Submit your details and our audiology assistant will schedule a clinic trial session.</p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-success-green/10 text-success-green flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-poppins font-bold text-xl text-slate-800 font-black">Enquiry Submitted!</h4>
              <p className="font-inter text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                Thank you. Our audiologist will contact you shortly to confirm your booking and hearing aid requirements.
              </p>
              <Button variant="outline" className="mt-4" onClick={() => setIsSubmitted(false)}>
                Submit New Enquiry
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-inter">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="bg-slate-50 border border-slate-100 rounded-custom px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary w-full"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone"
                    className="bg-slate-50 border border-slate-100 rounded-custom px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary w-full"
                    {...register('phone', { required: 'Phone is required' })}
                  />
                  {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Product Model</label>
                  <select
                    className="bg-slate-50 border border-slate-100 rounded-custom px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary w-full appearance-none cursor-pointer"
                    {...register('model', { required: 'Model selection is required' })}
                  >
                    <option value="">-- Choose Design --</option>
                    <option value="Invisible IIC">Invisible-in-Canal (IIC)</option>
                    <option value="Receiver RIC">Receiver-in-Canal (RIC)</option>
                    <option value="Behind BTE">Behind-the-Ear (BTE)</option>
                    <option value="Not Sure">Need Consultation / Screening</option>
                  </select>
                  {errors.model && <span className="text-xs text-red-500">{errors.model.message}</span>}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Location</label>
                  <input
                    type="text"
                    value="Coimbatore Center"
                    disabled
                    className="bg-slate-100 border border-slate-100 rounded-custom px-4 py-3 text-sm text-slate-400 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Message / Specific Requirements</label>
                <textarea
                  placeholder="Share details like hearing test history or budget constraints"
                  rows="3"
                  className="bg-slate-50 border border-slate-100 rounded-custom px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary w-full"
                  {...register('message')}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full py-4 text-base font-bold shadow"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Trial Request'}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
