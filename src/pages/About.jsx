import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Award, ShieldCheck, Heart, Smile, MessageSquare, Ear,
  Activity, BookOpen, Baby, GraduationCap, Briefcase, Users,
  Utensils, CheckCircle, Mic
} from 'lucide-react';
import annithaProfileImg from '../assets/WhatsAppImage2026-07-07at2.43.50PM.jpeg';
import consultantImg from '../assets/WhatsApp Image 2026-07-08 at 11.47.44 AM.jpeg';

// ─── Animation Variants (same as Homepage) ─────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// ─── Gradient Divider (same as Homepage) ────────────────────────────
const GradientDivider = () => (
  <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mx-auto rounded-full" />
);

// ─── Data ───────────────────────────────────────────────────────────
const expertiseItems = [
  {
    title: "Speech & Language Therapy",
    description: "Assessment and therapy for speech delays, articulation issues, and expressive/receptive language difficulties.",
    icon: MessageSquare,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600"
  },
  {
    title: "Hearing Assessment",
    description: "Comprehensive audiological testing, evaluation, digital hearing aid fitting, and auditory training.",
    icon: Ear,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600"
  },
  {
    title: "Occupational Therapy",
    description: "Enhancing fine motor skills, sensory integration, coordination, and independence in daily life activities.",
    icon: Activity,
    color: "from-teal-500/10 to-teal-500/20",
    iconColor: "text-teal-600"
  },
  {
    title: "Special Education",
    description: "Customized educational support designed to address individual academic challenges and diverse learning pathways.",
    icon: BookOpen,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600"
  },
  {
    title: "Early Intervention",
    description: "Supporting infants and toddlers experiencing developmental delays during crucial formative years.",
    icon: Baby,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600"
  },
  {
    title: "Oral Placement Therapy",
    description: "Evidence-based oral motor assessment and therapeutic techniques for speech clarity and feeding skills.",
    icon: Mic,
    color: "from-teal-500/10 to-teal-500/20",
    iconColor: "text-teal-600"
  },
  {
    title: "Swallowing Rehabilitation",
    description: "Addressing swallowing challenges, sensory food aversion, and oral muscular coordination.",
    icon: Utensils,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600"
  },
  {
    title: "Parent Guidance",
    description: "Equipping families with sensory home programs, communication techniques, and emotional support.",
    icon: Users,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600"
  }
];

const journeyItems = [
  {
    title: "Clinical Internship",
    organization: "Narayana Health",
    description: "Gained comprehensive clinical hands-on experience in the assessment, diagnostics, and management of dysphagia and adult language disorders.",
    period: "Clinical Internship",
    icon: GraduationCap,
    color: "border-blue-100 bg-blue-50/30",
    iconColor: "text-blue-600"
  },
  {
    title: "Professional Experience",
    organization: "Ganga Hospital",
    description: "Worked as a speech therapist providing advanced clinical speech rehabilitation services.",
    period: "Professional Career",
    icon: Briefcase,
    color: "border-purple-100 bg-purple-50/30",
    iconColor: "text-purple-600"
  },
  {
    title: "Smile Train Initiative",
    organization: "Specialized Cleft Lip & Palate Management",
    description: "Acquired specialized knowledge and intensive clinical exposure in the speech and motor rehabilitation of individuals with cleft lip and palate.",
    period: "Clinical Exposure",
    icon: ShieldCheck,
    color: "border-teal-100 bg-teal-50/30",
    iconColor: "text-teal-600"
  },
  {
    title: "Oral Placement Therapy Certification",
    organization: "Completed Specialization Course",
    description: "Completed the Oral Placement Therapy Course in 2024 to further enhance expertise in oral motor assessment and evidence-based therapeutic techniques.",
    period: "2024",
    icon: Award,
    color: "border-blue-100 bg-blue-50/30",
    iconColor: "text-blue-600"
  }
];

const whyChooseUs = [
  {
    title: "Certified Speech Language Pathologist",
    description: "All therapies are provided by a certified, licensed, and highly experienced clinical professional.",
    icon: Award,
    color: "border-blue-100 bg-blue-50/30"
  },
  {
    title: "Evidence-Based Therapy",
    description: "We use only proven, research-backed techniques and certifications to deliver effective treatment.",
    icon: ShieldCheck,
    color: "border-purple-100 bg-purple-50/30"
  },
  {
    title: "Personalized Care",
    description: "Therapeutic interventions are customized to match the unique developmental goals of each patient.",
    icon: Heart,
    color: "border-teal-100 bg-teal-50/30"
  },
  {
    title: "Child-Friendly Environment",
    description: "A comfortable, engaging, and welcoming setting to ensure positive therapy experiences.",
    icon: Smile,
    color: "border-blue-100 bg-blue-50/30"
  }
];

const expertiseList = [
  "Speech & Language Therapy",
  "Autism Spectrum Disorder (ASD)",
  "ADHD Support",
  "Learning Disabilities",
  "Hearing Assessment & Rehabilitation",
  "Voice & Fluency Therapy",
  "Feeding & Swallowing Therapy",
  "Parent Guidance & Counselling"
];

export const About = () => {
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
        "name": "About",
        "item": "https://starsspeechhearing.in/about"
      }
    ]
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Annitha G | Stars Speech and Hearing Clinic",
    "description": "Meet Annitha G, Speech-Language Pathologist and Founder of Stars Speech and Hearing Clinic, providing evidence-based speech, language, hearing, and developmental therapy in Coimbatore.",
    "url": "https://starsspeechhearing.in/about",
    "image": "https://starsspeechhearing.in/seo/annitha-founder.jpeg",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://starsspeechhearing.in/seo/annitha-founder.jpeg"
    },
    "mainEntity": {
      "@type": "Person",
      "name": "Annitha G",
      "jobTitle": "Speech-Language Pathologist & Founder",
      "image": "https://starsspeechhearing.in/seo/annitha-founder.jpeg",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "Stars Speech and Hearing Clinic",
        "url": "https://starsspeechhearing.in",
        "logo": "https://starsspeechhearing.in/images/logo.png",
        "image": "https://starsspeechhearing.in/seo/home-banner.jpg"
      }
    }
  };

  return (
    <div className="bg-[#F8FCFF] text-slate-800">
      <Helmet>
        <title>About Annitha G | Stars Speech and Hearing Clinic</title>
        <meta name="description" content="Meet Annitha G, Speech-Language Pathologist and Founder of Stars Speech and Hearing Clinic, providing evidence-based speech, language, hearing, and developmental therapy in Coimbatore." />
        <meta name="keywords" content="Annitha G, Stars Speech and Hearing Clinic, Speech Therapist Coimbatore, Speech-Language Pathologist, Coimbatore, Speech and Hearing Clinic" />
        <link rel="canonical" href="https://starsspeechhearing.in/about" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Stars Speech and Hearing Clinic" />
        <meta name="theme-color" content="#0F4C81" />

        {/* Open Graph */}
        <meta property="og:title" content="About Annitha G | Stars Speech and Hearing Clinic" />
        <meta property="og:description" content="Meet Annitha G, Speech-Language Pathologist and Founder of Stars Speech and Hearing Clinic, providing evidence-based speech, language, hearing, and developmental therapy in Coimbatore." />
        <meta property="og:image" content="https://starsspeechhearing.in/seo/annitha-founder.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://starsspeechhearing.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stars Speech and Hearing Clinic" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Annitha G | Stars Speech and Hearing Clinic" />
        <meta name="twitter:description" content="Meet Annitha G, Speech-Language Pathologist and Founder of Stars Speech and Hearing Clinic, providing evidence-based speech, language, hearing, and developmental therapy in Coimbatore." />
        <meta name="twitter:image" content="https://starsspeechhearing.in/seo/annitha-founder.jpeg" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
      </Helmet>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 1 – ABOUT US                                        */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="pt-8 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side (Content) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block">
                FOUNDER
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-poppins font-black text-slate-900 leading-tight"
            >
              I am Annitha G
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-2xl font-poppins font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"
            >
              Speech-Language Pathologist & Founder
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5 font-inter text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              <p>
                I am a <strong className="text-slate-800 font-bold">Speech-Language Pathologist</strong> and the Founder of <strong className="text-slate-800 font-bold">Stars Speech and Hearing Clinic, Coimbatore</strong>.
              </p>
              <p>
                I completed my <strong className="text-slate-800 font-bold">BASLP</strong> from the <strong className="text-slate-800 font-bold">All India Institute of Speech and Hearing (AIISH)</strong> and later earned my <strong className="text-slate-800 font-bold">MSc in Speech-Language Pathology</strong>.
              </p>
              <p>
                With clinical experience at <strong className="text-slate-800 font-bold">Narayana Health</strong> and <strong className="text-slate-800 font-bold">Ganga Hospital's Smile Train Initiative</strong>, along with <strong className="text-slate-800 font-bold">Oral Placement Therapy (OPT) Certification (2024)</strong>, I specialize in evidence-based assessment and personalized therapy for children and adults with speech, language, hearing, learning, and developmental challenges.
              </p>

              {/* Professional expertise list */}
              <div className="bg-white border border-slate-100 rounded-[24px] p-6 sm:p-8 shadow-soft space-y-4">
                <h3 className="font-poppins font-black text-lg text-slate-900">
                  Professional Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertiseList.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-teal-500 shrink-0" />
                      <span className="font-poppins font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side (Image) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="rounded-[32px] overflow-hidden shadow-lg border-4 border-white bg-white">
                <img
                  src={annithaProfileImg}
                  alt="Annitha G – Certified Speech Language Pathologist and Founder of Stars Speech and Hearing Clinic"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="mt-6 bg-white border border-slate-100 rounded-[24px] p-6 shadow-soft text-center space-y-2">
                <h3 className="font-poppins font-black text-slate-900 text-lg">Annitha G</h3>
                <p className="font-inter text-sm text-slate-500">BASLP · MSc (SLP)</p>
                <p className="font-inter text-xs text-blue-600 font-semibold">Founder & Clinical Director</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 2 – OUR CONSULTANT                                  */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F8FCFF] border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Side: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="space-y-3">
                <span className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
                  OUR CONSULTANT
                </span>
                <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 leading-tight">
                  Consultant Cochlear Implant Audiologist
                </h2>
                <h4 className="text-base sm:text-lg font-poppins font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Advanced Hearing Care & Cochlear Implant Rehabilitation
                </h4>
              </div>

              <div className="space-y-4 font-inter text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a dedicated <strong className="text-slate-800 font-semibold">Consultant Cochlear Implant Audiologist</strong> specializing in hearing healthcare and auditory rehabilitation.
                </p>
                <p>
                  I completed my <strong className="text-slate-800 font-semibold">BASLP</strong> and <strong className="text-slate-800 font-semibold">MASLP</strong> from <strong className="text-slate-800 font-semibold">MERF Institute of Speech and Hearing</strong>.
                </p>
                <p>
                  My clinical experience includes <strong className="text-slate-800 font-semibold">Heartsprings Therapy Centre, Jakarta, Indonesia</strong>, and <strong className="text-slate-800 font-semibold">Ear Solutions Pvt. Ltd.</strong>, where I received the <strong className="text-slate-800 font-semibold">Star Performer Award</strong> for excellence in patient care.
                </p>

                <div className="space-y-2 pt-2">
                  <p className="font-poppins font-bold text-slate-800">
                    Currently serving as a Cochlear Implant Audiologist at MED-EL India, specializing in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                    {[
                      "Cochlear Implant Candidacy Evaluation",
                      "Cochlear Implant Mapping",
                      "Auditory Rehabilitation",
                      "Hearing Assessments",
                      "Patient Counselling",
                      "Long-Term Hearing Outcome Management"
                    ].map((bullet, index) => (
                      <div key={index} className="flex items-start space-x-3 text-slate-700">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span className="font-poppins font-semibold text-sm leading-tight">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-5 w-full flex justify-center"
            >
              <div className="relative group w-full max-w-md rounded-[24px] overflow-hidden shadow-soft border-4 border-white bg-white hover-lift">
                <img
                  src={consultantImg}
                  alt="Consultant Cochlear Implant Audiologist"
                  className="w-full aspect-[4/5] object-cover object-top rounded-[20px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 3 – OUR EXPERTISE                                   */}
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
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
              Our Expertise
            </h2>
            <GradientDivider />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {expertiseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-soft hover-lift flex flex-col items-start text-left space-y-4 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent -z-10 group-hover:scale-110 transition-transform" />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-inter text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 4 – PROFESSIONAL JOURNEY                            */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F8FCFF]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
              Professional Journey
            </h2>
            <GradientDivider />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative border-l-2 border-dashed border-slate-200 pl-8 ml-4 sm:ml-6 space-y-8 text-left"
          >
            {journeyItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="relative bg-white border border-slate-100 rounded-[24px] p-6 sm:p-8 shadow-soft hover-lift flex flex-col sm:flex-row gap-6 items-start"
                >
                  {/* Timeline Bullet */}
                  <div className="absolute -left-[43px] top-9 w-6 h-6 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-sm" />

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color.includes('blue') ? 'from-blue-500/10 to-blue-500/20' : item.color.includes('purple') ? 'from-purple-500/10 to-purple-500/20' : 'from-teal-500/10 to-teal-500/20'} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <span className="text-xs font-bold font-poppins text-primary uppercase tracking-wide">
                      {item.period}
                    </span>
                    <h3 className="font-poppins font-bold text-slate-800 text-lg leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-poppins font-semibold text-slate-500">
                      {item.organization}
                    </p>
                    <p className="font-inter text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 5 – WHY CHOOSE US                                   */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
              Why Choose Us
            </h2>
            <GradientDivider />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`border ${feat.color} rounded-[24px] p-6 text-left space-y-4 hover-lift`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-xs">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-poppins font-bold text-slate-900 text-sm uppercase tracking-wider">
                    {feat.title}
                  </h3>
                  <p className="font-inter text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
