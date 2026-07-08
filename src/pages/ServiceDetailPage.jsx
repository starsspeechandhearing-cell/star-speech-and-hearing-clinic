import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ShieldCheck, Heart, Info, ClipboardList, HelpCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { FAQAccordion } from '../components/FAQ/FAQ';
import { AppointmentCTA } from '../components/AppointmentCTA/AppointmentCTA';
import { ServiceCard } from '../components/Cards/ServiceCard';

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  
  // Find matching service
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Find related services (same category, excluding current service)
  const relatedServices = servicesData
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  // JSON-LD Medical Schema for SEO
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": service.title,
    "description": service.summary,
    "provider": {
      "@type": "MedicalClinic",
      "name": "Stars Speech and Hearing Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "34/176- A, Raju Naidu St, Sivananda Colony, Tatabad",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641012",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Helmet SEO */}
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://starsspeechhearing.com/services/${service.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:image" content={service.heroImage} />
        <meta property="og:url" content={`https://starsspeechhearing.com/services/${service.slug}`} />
        <meta property="og:type" content="article" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* 1. HERO BANNER */}
      <section className="relative py-20 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${service.heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-primary/80 opacity-90" />
        
        <div className="max-w-5xl mx-auto relative z-10 space-y-4 text-left">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 font-inter">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold truncate max-w-[150px] sm:max-w-xs">{service.title}</span>
          </div>
          
          <div className="inline-block bg-medical-teal text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            {service.category}
          </div>
          
          <h1 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {service.title}
          </h1>
          <p className="font-inter text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            {service.summary}
          </p>
        </div>
      </section>

      {/* 2. BODY CONTENT SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
            {/* Overview */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Info className="w-5 h-5 text-primary" />
                <h3 className="font-poppins font-black text-xl text-slate-800 uppercase tracking-wider">Clinical Overview</h3>
              </div>
              <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Symptoms / Indicators */}
            <div className="space-y-4 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-custom">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <h3 className="font-poppins font-black text-xl text-slate-800 uppercase tracking-wider">When to Seek Help</h3>
              </div>
              <p className="font-inter text-slate-500 text-sm leading-relaxed mb-4">
                Consult with our clinical team if you or your family member notice any of the following symptoms:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-inter text-slate-600 text-sm">
                {service.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 mr-2.5 shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-success-green" />
                <h3 className="font-poppins font-black text-xl text-slate-800 uppercase tracking-wider">Key Benefits of Therapy</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-inter text-slate-600 text-sm">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-success-green mt-2 mr-2.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment Journey (Timeline) */}
            <div className="space-y-6 pt-6">
              <div className="flex items-center space-x-2">
                <ClipboardList className="w-5 h-5 text-primary" />
                <h3 className="font-poppins font-black text-xl text-slate-800 uppercase tracking-wider">Clinical Treatment Process</h3>
              </div>
              
              {/* Timeline steps */}
              <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative text-left">
                    {/* Circle Bullet */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-white" />
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">Step {idx + 1}</span>
                    <h4 className="font-poppins font-bold text-base text-slate-800 mt-1">{step.split('(')[0]}</h4>
                    {step.includes('(') && (
                      <p className="font-inter text-slate-500 text-xs sm:text-sm mt-0.5">({step.split('(')[1]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-6 pt-6">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-medical-teal" />
                  <h3 className="font-poppins font-black text-xl text-slate-800 uppercase tracking-wider">Frequently Asked Questions</h3>
                </div>
                <FAQAccordion faqs={service.faqs} />
              </div>
            )}

          </div>

          {/* Right Sidebar: Quick Contact & Category Info */}
          <div className="lg:col-span-4 space-y-8 text-left">
            {/* Category Quick Details */}
            <div className="bg-slate-50 border border-slate-100 rounded-custom p-6 space-y-4">
              <h4 className="font-poppins font-black text-base text-slate-800">Specialty Category</h4>
              <div className="p-3 bg-white rounded-custom border border-slate-100 font-poppins font-bold text-sm text-primary text-center">
                {service.category}
              </div>
              <p className="font-inter text-xs text-slate-400 leading-relaxed">
                This service belongs to the {service.category} clinic segment. Programs are coordinated by our licensed speech pathologists, special educators, and therapists.
              </p>
            </div>

            {/* Direct helpline card */}
            <div className="bg-gradient-to-tr from-primary to-medical-teal text-white rounded-custom p-6 space-y-4 shadow-md">
              <h4 className="font-poppins font-bold text-lg">Need Immediate Guidance?</h4>
              <p className="font-inter text-xs text-white/80 leading-relaxed">
                Connect with our frontdesk team to clear doubts regarding diagnostic checkups, fees, or therapy scheduling.
              </p>
              <div className="pt-2 space-y-2">
                <a href="tel:+919080515327" className="flex items-center justify-center font-bold text-xs bg-white text-primary py-3 rounded-custom hover:bg-slate-50 transition-colors">
                  Call: +91 90805 15327
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-left space-y-2">
              <h3 className="font-poppins font-black text-2xl text-slate-800">Related Programs</h3>
              <p className="font-inter text-slate-500 text-sm">Similar therapeutic interventions in the {service.category} category.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((rService) => (
                <ServiceCard key={rService.slug} service={rService} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. BOOK CTA */}
      <AppointmentCTA />
    </div>
  );
};
