import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Ear, Cpu, Headphones, Activity, BookOpen, PenTool, Baby,
  GraduationCap, Mic, Volume2, MessageCircle, Utensils, Brain, Heart,
  Sparkles, Zap, Users, Monitor, Calendar, ArrowRight,
  ClipboardCheck, Stethoscope, FileText, Target, TrendingUp, Trophy,
  Shield, Award, UserCheck, HeartHandshake
} from 'lucide-react';

// ─── Animation Variants ────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Gradient Divider Component ────────────────────────────────────
const GradientDivider = () => (
  <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mx-auto rounded-full" />
);

// ─── Section Heading Component ─────────────────────────────────────
const SectionHeading = ({ badge, title, subtitle }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    className="text-center mb-16 space-y-4"
  >
    {badge && (
      <motion.div variants={fadeInUp}>
        <span className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
          {badge}
        </span>
      </motion.div>
    )}
    <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
      {title}
    </motion.h2>
    <motion.div variants={fadeInUp}>
      <GradientDivider />
    </motion.div>
    {subtitle && (
      <motion.p variants={fadeInUp} className="text-slate-500 font-inter text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

// ─── Services Data (20 services) ──────────────────────────────────
const colorCycle = [
  { bg: 'from-blue-500/10 to-blue-500/20', icon: 'text-blue-600' },
  { bg: 'from-purple-500/10 to-purple-500/20', icon: 'text-purple-600' },
  { bg: 'from-teal-500/10 to-teal-500/20', icon: 'text-teal-600' },
];

const servicesOffered = [
  {
    title: 'Speech and Language Therapy',
    description: 'Comprehensive assessment and therapy for speech delays, articulation issues, and expressive/receptive language difficulties in children and adults.',
    Icon: MessageSquare,
  },
  {
    title: 'Hearing Aid Trial & Fitting',
    description: 'Expert hearing evaluation, personalized hearing aid selection, trial, and precise digital fitting for optimal hearing restoration.',
    Icon: Ear,
  },
  {
    title: 'CI Mapping',
    description: 'Professional cochlear implant programming and mapping sessions to optimize sound quality and auditory performance.',
    Icon: Cpu,
  },
  {
    title: 'Hearing Aid Accessories',
    description: 'Wide range of premium hearing aid accessories including batteries, domes, tubes, cleaning kits, and wireless connectivity devices.',
    Icon: Headphones,
  },
  {
    title: 'Occupational Therapy',
    description: 'Enhancing fine motor skills, sensory integration, coordination, and independence in daily life activities for all ages.',
    Icon: Activity,
  },
  {
    title: 'Special Education',
    description: 'Customized educational support designed to address individual academic challenges, learning disabilities, and diverse learning pathways.',
    Icon: BookOpen,
  },
  {
    title: 'Remedial Therapy',
    description: 'Targeted educational therapy to help children overcome learning difficulties in reading, writing, and mathematics.',
    Icon: PenTool,
  },
  {
    title: 'Early Intervention Program',
    description: 'Supporting infants and toddlers with developmental delays during crucial formative years with evidence-based early therapy.',
    Icon: Baby,
  },
  {
    title: 'School Readiness Program',
    description: 'Preparing children for academic success with structured programs covering cognitive, social, and pre-academic skills.',
    Icon: GraduationCap,
  },
  {
    title: 'Voice Therapy',
    description: 'Specialized therapy for voice disorders including hoarseness, vocal nodules, and pitch/volume regulation issues.',
    Icon: Mic,
  },
  {
    title: 'Fluency Therapy',
    description: 'Evidence-based treatment for stuttering and other fluency disorders, building confidence in everyday communication.',
    Icon: Volume2,
  },
  {
    title: 'Articulation Therapy',
    description: 'Targeted therapy to correct speech sound errors, helping individuals pronounce sounds clearly and accurately.',
    Icon: MessageCircle,
  },
  {
    title: 'Swallowing Therapy',
    description: 'Assessment and rehabilitation of swallowing difficulties (dysphagia) in children and adults for safe, effective feeding.',
    Icon: Utensils,
  },
  {
    title: 'Aphasia Therapy',
    description: 'Specialized language rehabilitation for individuals with aphasia due to stroke, brain injury, or neurological conditions.',
    Icon: Brain,
  },
  {
    title: 'Post Stroke Rehabilitation',
    description: 'Comprehensive recovery programs addressing speech, language, cognitive, and motor challenges after stroke events.',
    Icon: Heart,
  },
  {
    title: 'Autism Spectrum Disorder Intervention',
    description: 'Specialized therapy programs focused on social communication, sensory regulation, and behavioral support for individuals on the spectrum.',
    Icon: Sparkles,
  },
  {
    title: 'ADHD Support',
    description: 'Structured therapy and behavioral strategies to improve attention, focus, executive functioning, and self-regulation skills.',
    Icon: Zap,
  },
  {
    title: 'Parent Training Program',
    description: 'Empowering parents with strategies, techniques, and confidence to support their child\'s therapy goals at home effectively.',
    Icon: Users,
  },
  {
    title: 'Online Therapy Services',
    description: 'Convenient virtual therapy sessions including Speech Therapy, Occupational Therapy, and Special Education from the comfort of home.',
    Icon: Monitor,
  },
  {
    title: 'Saturday Activities',
    description: 'Engaging weekend programs including Group Therapy sessions, Smart Class interactive learning, and Music Class for holistic development.',
    Icon: Calendar,
  },
];


// ─── Hearing Care Products Data ────────────────────────────────────
const hearingProducts = [
  {
    title: 'Invisible Hearing Aids',
    description: 'Ultra-discreet, custom-molded hearing aids that sit deep in the ear canal. Virtually invisible to others while delivering crystal-clear, natural sound quality.',
    Icon: Ear,
    color: { bg: 'from-blue-500/10 to-blue-500/20', icon: 'text-blue-600' },
  },
  {
    title: 'BTE Hearing Aids',
    description: 'Behind-The-Ear hearing aids offering powerful amplification, long battery life, and durability. Ideal for moderate to severe hearing loss across all age groups.',
    Icon: Headphones,
    color: { bg: 'from-purple-500/10 to-purple-500/20', icon: 'text-purple-600' },
  },
  {
    title: 'RITE Hearing Aids',
    description: 'Receiver-In-The-Ear aids combining sleek design with superior sound quality. Lightweight, comfortable, and equipped with the latest wireless technology.',
    Icon: Volume2,
    color: { bg: 'from-teal-500/10 to-teal-500/20', icon: 'text-teal-600' },
  },
];

// ─── Why Choose Us Data ────────────────────────────────────────────
const whyChooseUs = [
  {
    title: 'Personalized Therapy Plans',
    description: 'Every therapy plan is uniquely designed based on detailed assessments, individual goals, and the specific needs of each client.',
    Icon: Target,
    color: { bg: 'from-blue-500/10 to-blue-500/20', icon: 'text-blue-600' },
  },
  {
    title: 'Certified Professionals',
    description: 'Our team comprises licensed speech-language pathologists, audiologists, occupational therapists, and special educators.',
    Icon: Award,
    color: { bg: 'from-purple-500/10 to-purple-500/20', icon: 'text-purple-600' },
  },
  {
    title: 'Evidence-Based Treatment',
    description: 'We utilize clinically proven, research-backed therapeutic techniques and the latest advancements in rehabilitation science.',
    Icon: Shield,
    color: { bg: 'from-teal-500/10 to-teal-500/20', icon: 'text-teal-600' },
  },
  {
    title: 'Family-Centered Care',
    description: 'We believe therapy is most effective when families are active partners. We provide training, resources, and ongoing support to caregivers.',
    Icon: HeartHandshake,
    color: { bg: 'from-blue-500/10 to-blue-500/20', icon: 'text-blue-600' },
  },
];

// ─── Therapy Process Steps Data ────────────────────────────────────
const therapySteps = [
  {
    title: 'Assessment',
    description: 'Comprehensive evaluation using standardized tests, observations, and clinical interviews to understand your unique needs.',
    Icon: ClipboardCheck,
    color: 'bg-blue-600',
  },
  {
    title: 'Diagnosis',
    description: 'Our specialists analyze assessment results to provide an accurate diagnosis and clearly explain findings to you and your family.',
    Icon: Stethoscope,
    color: 'bg-purple-600',
  },
  {
    title: 'Personalized Therapy Plan',
    description: 'A customized, goal-oriented therapy plan is created with specific milestones, timelines, and measurable outcomes.',
    Icon: FileText,
    color: 'bg-teal-600',
  },
  {
    title: 'Therapy Sessions',
    description: 'Regular one-on-one or group therapy sessions using evidence-based techniques in a supportive, engaging environment.',
    Icon: UserCheck,
    color: 'bg-blue-600',
  },
  {
    title: 'Progress Monitoring',
    description: 'Continuous tracking and periodic reassessments to measure progress, adjust goals, and ensure optimal therapy outcomes.',
    Icon: TrendingUp,
    color: 'bg-purple-600',
  },
  {
    title: 'Successful Outcomes',
    description: 'Celebrating milestones and achievements as you reach your therapy goals and gain confidence in communication and daily life.',
    Icon: Trophy,
    color: 'bg-teal-600',
  },
];


// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export const Services = () => {
  return (
    <div className="overflow-hidden">

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 1 – SERVICES INTRO                                  */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="pt-8 pb-16 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              OUR SERVICES
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-black text-slate-900 leading-tight">
            Comprehensive Therapy &amp; Hearing Care Services
          </motion.h1>

          <motion.div variants={fadeInUp}>
            <GradientDivider />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl font-inter font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-relaxed"
          >
            Personalized therapy and rehabilitation programs designed to help children and adults communicate, learn, and live with confidence.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-slate-500 font-inter text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At Stars Speech and Hearing Clinic, we offer over 20 specialized services spanning speech-language pathology, audiology, occupational therapy, and special education. Our multidisciplinary team works collaboratively to create individualized treatment plans that address your unique needs and empower you on your journey to better communication and overall well-being.
          </motion.p>
        </motion.div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 2 – SERVICES OFFERED                                */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="WHAT WE DO"
            title="Services We Offer"
            subtitle="From pediatric therapy to adult rehabilitation, our comprehensive range of 20+ services addresses every aspect of communication and hearing health."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {servicesOffered.map((service, index) => {
              const colorSet = colorCycle[index % 3];
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-soft hover-lift group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorSet.bg} flex items-center justify-center mb-5`}>
                    <service.Icon className={`w-6 h-6 ${colorSet.icon}`} />
                  </div>
                  <h3 className="font-poppins font-bold text-slate-900 text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-inter text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold font-poppins ${colorSet.icon} group-hover:gap-2.5 transition-all duration-300`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 4 – HEARING CARE PRODUCTS                           */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="HEARING CARE"
            title="Hearing Care Products"
            subtitle="Premium digital hearing solutions from leading global manufacturers, expertly fitted by our audiologists."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {hearingProducts.map((product) => (
              <motion.div
                key={product.title}
                variants={fadeInUp}
                className="bg-white border border-slate-100 rounded-[24px] p-10 shadow-soft hover-lift text-center group"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${product.color.bg} flex items-center justify-center mx-auto mb-6`}>
                  <product.Icon className={`w-9 h-9 ${product.color.icon}`} />
                </div>
                <h3 className="font-poppins font-bold text-slate-900 text-xl mb-3">
                  {product.title}
                </h3>
                <p className="text-slate-500 font-inter text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold font-poppins ${product.color.icon} group-hover:gap-2.5 transition-all duration-300`}
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 5 – WHY CHOOSE OUR SERVICES                        */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#F8FCFF] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="WHY US"
            title="Why Choose Our Services"
            subtitle="What sets Stars Speech and Hearing Clinic apart in delivering exceptional therapy and hearing care."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-soft hover-lift text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color.bg} flex items-center justify-center mx-auto mb-5`}>
                  <item.Icon className={`w-7 h-7 ${item.color.icon}`} />
                </div>
                <h3 className="font-poppins font-bold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-inter text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* SECTION 6 – THERAPY PROCESS TIMELINE                        */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-slate-100 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            badge="THE JOURNEY"
            title="Our Therapy Process"
            subtitle="A clear, structured path from your first visit to successful outcomes — every step guided by our expert team."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            {/* Vertical connecting line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 rounded-full" />

            <div className="space-y-10">
              {therapySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="relative flex items-start gap-6 sm:gap-8"
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 ${step.color} rounded-full flex items-center justify-center shrink-0 shadow-lg`}>
                    <span className="text-white font-poppins font-black text-sm sm:text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="bg-white border border-slate-100 rounded-[24px] p-6 sm:p-8 shadow-soft flex-1 hover-lift">
                    <div className="flex items-center gap-3 mb-2">
                      <step.Icon className={`w-5 h-5 ${step.color === 'bg-blue-600' ? 'text-blue-600' : step.color === 'bg-purple-600' ? 'text-purple-600' : 'text-teal-600'}`} />
                      <h3 className="font-poppins font-bold text-slate-900 text-base sm:text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 font-inter text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};
