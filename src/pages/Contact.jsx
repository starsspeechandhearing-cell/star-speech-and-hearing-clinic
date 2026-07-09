import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, Mail, MapPin, Clock, Send, ShieldCheck, 
  Heart, Smile, Award, CheckCircle2 
} from 'lucide-react';
import { Button } from '../components/Buttons/Button';
import { FAQAccordion } from '../components/FAQ/FAQ';

// ─── Animation Variants ────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// ─── Gradient Divider ──────────────────────────────────────────────
const GradientDivider = () => (
  <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mx-auto rounded-full" />
);

export const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid Phone Number';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid Email Address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return; // Prevent multiple submissions
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      setErrors({});

      // Format WhatsApp message
      const formattedMessage = `📌 New Appointment Request\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email || 'N/A'}\n🧒 Age: N/A\n🩺 Service: ${formData.subject}\n📅 Preferred Date: N/A\n🕒 Preferred Time: N/A\n💬 Message:\n${formData.message}`;

      // Simulate a processing state
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
        // Clear form
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });

        // Redirect to WhatsApp
        const whatsappUrl = `https://wa.me/919080515327?text=${encodeURIComponent(formattedMessage)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1000);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // FAQ Data
  const contactFaqs = [
    {
      q: 'How do I book an appointment?',
      a: 'You can book an appointment by filling out the message form on this page, calling us directly at +91 90805 15327, or sending us a message on WhatsApp. We will confirm your slot within 24 hours.'
    },
    {
      q: 'What services do you provide?',
      a: 'We offer comprehensive diagnostic and rehabilitation services including Speech & Language Therapy, Audiological Evaluations, hearing aid fittings, Occupational Therapy, Special Education, Early Intervention, and parent training.'
    },
    {
      q: 'Do you provide online therapy?',
      a: 'Yes, we offer secure online teletherapy options for speech therapy and special education guidance, allowing you to access quality care from home.'
    },
    {
      q: 'What should I bring for the first visit?',
      a: 'Please bring any previous medical reports, discharge summaries, audiological test results, developmental assessment reports, or teacher feedback sheets if available.'
    },
    {
      q: 'How long does therapy usually take?',
      a: 'The duration of therapy varies based on the type and severity of the condition. Typically, therapy sessions are scheduled 2 to 3 times a week, and progress is reviewed every 3 months.'
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://starsspeechhearing.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://starsspeechhearing.in/contact"
      }
    ]
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Stars Speech and Hearing Clinic | Coimbatore",
    "description": "Contact Stars Speech and Hearing Clinic to book appointments for speech therapy, hearing assessment, occupational therapy, and special education services.",
    "url": "https://starsspeechhearing.in/contact"
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="overflow-hidden bg-[#F8FCFF] text-slate-800">
      <Helmet>
        <title>Contact Stars Speech and Hearing Clinic | Coimbatore</title>
        <meta name="description" content="Contact Stars Speech and Hearing Clinic to book appointments for speech therapy, hearing assessment, occupational therapy, and special education services." />
        <meta name="keywords" content="contact Stars Speech and Hearing Clinic, appointment speech therapy Coimbatore, audiology appointment, Coimbatore clinic address" />
        <link rel="canonical" href="https://starsspeechhearing.in/contact" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Stars Speech and Hearing Clinic" />
        <meta name="theme-color" content="#0F4C81" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Stars Speech and Hearing Clinic | Coimbatore" />
        <meta property="og:description" content="Contact Stars Speech and Hearing Clinic to book appointments for speech therapy, hearing assessment, occupational therapy, and special education services." />
        <meta property="og:image" content="https://starsspeechhearing.in/seo/home-banner.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://starsspeechhearing.in/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stars Speech and Hearing Clinic" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Stars Speech and Hearing Clinic | Coimbatore" />
        <meta name="twitter:description" content="Contact Stars Speech and Hearing Clinic to book appointments for speech therapy, hearing assessment, occupational therapy, and special education services." />
        <meta name="twitter:image" content="https://starsspeechhearing.in/seo/home-banner.jpg" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>
      </Helmet>
      
      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 1 – CONTACT US (INTRO)                              */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="pt-8 pb-16 px-6 max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block">
            CONTACT US
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-poppins font-black text-slate-900 leading-tight mt-4 mb-3"
        >
          Let's Connect
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl font-poppins font-semibold text-purple-600 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6 max-w-2xl"
        >
          We're here to answer your questions and help you begin your therapy journey.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-inter text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl"
        >
          Whether you are looking for speech therapy, occupational therapy, hearing assessment, special education, or early intervention services, our team is here to guide you with personalized care.
        </motion.p>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 2 – CONTACT INFORMATION                             */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1: Phone */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-soft hover-lift flex flex-col items-center text-center space-y-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-blue-500/20 text-blue-600 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-bold text-slate-900 text-lg">Phone</h3>
            <div className="text-slate-500 text-sm font-inter space-y-1">
              <p className="font-semibold text-slate-700">Call Us</p>
              <a href="tel:+919080515327" className="hover:text-primary transition-colors block">
                +91 90805 15327
              </a>
            </div>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-soft hover-lift flex flex-col items-center text-center space-y-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500/10 to-purple-500/20 text-purple-600 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-bold text-slate-900 text-lg">Email</h3>
            <div className="text-slate-500 text-sm font-inter space-y-1">
              <p className="font-semibold text-slate-700">Email Us</p>
              <a href="mailto:starsspeechandhearing@gmail.com" className="hover:text-purple-600 transition-colors block break-all">
                starsspeechandhearing@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Card 3: Location */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-soft hover-lift flex flex-col items-center text-center space-y-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-500/10 to-teal-500/20 text-teal-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-bold text-slate-900 text-lg">Location</h3>
            <div className="text-slate-500 text-sm font-inter space-y-1">
              <p className="font-semibold text-slate-700">Clinic Address</p>
              <p className="leading-relaxed">34/176- A, Raju Naidu St, Sivananda Colony, Tatabad, Coimbatore, TN 641012</p>
            </div>
          </motion.div>

          {/* Card 4: Working Hours */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-soft hover-lift flex flex-col items-center text-center space-y-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-blue-500/20 text-blue-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-bold text-slate-900 text-lg">Working Hours</h3>
            <div className="text-slate-500 text-sm font-inter space-y-1">
              <p><span className="font-semibold text-slate-700">Mon - Sat:</span> 9:30 AM - 9:00 PM</p>
              <p><span className="font-semibold text-slate-700">Sunday:</span> Closed</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 3 – SEND US A MESSAGE (FORM)                         */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section id="message-form" className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 space-y-4"
          >
            <span className="text-xs font-poppins font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-4 py-2 rounded-full inline-block">
              SEND MESSAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
              Send Us A Message
            </h2>
            <GradientDivider />
          </motion.div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-100 rounded-[24px] p-8 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-slate-900">Message Sent Successfully!</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                Thank you for contacting Stars Speech and Hearing Clinic. Our clinical counselor will review your inquiry and get in touch with you shortly.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="teal" className="mt-4">
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <motion.form 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="font-poppins font-bold text-sm text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-custom border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-100'} px-5 py-3.5 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 transition-all`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs font-semibold">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-2 text-left">
                  <label htmlFor="phone" className="font-poppins font-bold text-sm text-slate-700">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-custom border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-100'} px-5 py-3.5 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 transition-all`}
                    placeholder="Enter your contact number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs font-semibold">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="font-poppins font-bold text-sm text-slate-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-custom border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-100'} px-5 py-3.5 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 transition-all`}
                    placeholder="Enter your email (optional)"
                  />
                  {errors.email && <p className="text-red-500 text-xs font-semibold">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-2 text-left">
                  <label htmlFor="subject" className="font-poppins font-bold text-sm text-slate-700">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-custom border ${errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-100'} px-5 py-3.5 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 transition-all`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && <p className="text-red-500 text-xs font-semibold">{errors.subject}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 text-left">
                <label htmlFor="message" className="font-poppins font-bold text-sm text-slate-700">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-custom border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-100'} px-5 py-3.5 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 transition-all resize-none`}
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && <p className="text-red-500 text-xs font-semibold">{errors.message}</p>}
              </div>

              <div className="text-center pt-2">
                <Button type="submit" variant="primary" className="min-w-[200px]" disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 4 – GOOGLE MAP & LANDMARKS                          */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F8FCFF]">
        <div className="max-w-7xl mx-auto">
          {/* Map Frame wrapper */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[450px] rounded-[32px] overflow-hidden border border-slate-100 shadow-soft"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.0487739572403!2d76.95830645763597!3d11.023984311076495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f700427a0e45%3A0xe2bb3d1e48313566!2sStars%20speech%20and%20hearing%20clinic!5e0!3m2!1sen!2sin!4v1783441730678!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Map location of Stars Speech and Hearing Clinic"
            />
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 5 – WHY CONTACT US                                  */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <span className="text-xs font-poppins font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-4 py-2 rounded-full inline-block">
              OUR HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
              Why Contact Us
            </h2>
            <GradientDivider />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Certified Specialists",
                description: "Licensed speech therapists, audiologists, and occupational therapists directing patient care.",
                icon: Award,
                color: "from-blue-500/10 to-blue-500/20 text-blue-600"
              },
              {
                title: "Personalized Care",
                description: "Interventions and target plans customized directly around patient diagnostic reports.",
                icon: Heart,
                color: "from-purple-500/10 to-purple-500/20 text-purple-600"
              },
              {
                title: "Child-Friendly Environment",
                description: "Engaging and comfortable pediatric setup to optimize treatment and comfort levels.",
                icon: Smile,
                color: "from-teal-500/10 to-teal-500/20 text-teal-600"
              },
              {
                title: "Evidence-Based Therapy",
                description: "Rehabilitation methodologies strictly guided by peer-reviewed clinical research.",
                icon: ShieldCheck,
                color: "from-blue-500/10 to-blue-500/20 text-blue-600"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-soft hover-lift flex flex-col items-center text-center space-y-4 h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color.split(' ')[0]} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-7 h-7 ${item.color.split(' ')[1]}`} />
                  </div>
                  <h3 className="font-poppins font-bold text-slate-900 text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-inter text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 6 – FREQUENTLY ASKED QUESTIONS                       */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F8FCFF]">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <span className="text-xs font-poppins font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-4 py-2 rounded-full inline-block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
              Frequently Asked Questions
            </h2>
            <GradientDivider />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <FAQAccordion faqs={contactFaqs} />
          </motion.div>
        </div>
      </section>


    </div>
  );
};
