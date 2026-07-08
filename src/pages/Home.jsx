import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Award, Heart, Brain, Star, MapPin, Phone, Mail, Clock, Send,
  MessageSquare, BookOpen, Activity, Ear, Baby, GraduationCap, Zap, Mic, Utensils, Users, CheckCircle
} from 'lucide-react';
import { Button } from '../components/Buttons/Button';
import specialEducationImg from '../assets/special eduction.png';
import occupationalTherapyImg from '../assets/Screenshot 2026-07-07 122109.png';
import childDevelopmentImg from '../assets/WhatsApp Image 2026-07-03 at 11.55.10 AM (1).jpeg';
import musicTherapyImg from '../assets/WhatsApp Image 2026-07-03 at 3.06.26 PM.jpeg';
import achievement1Img from '../assets/WhatsAppImage2026-07-03at11.28.38AM.jpeg';
import achievement3Img from '../assets/Screenshot 2026-07-07 161846.png';
import achievement2Img from '../assets/WhatsApp Image 2026-07-03 at 11.29.06 AM.jpeg';

// Section 2: Specializations Data
const specializations = [
  {
    title: "Speech & Language Therapy",
    description: "Assessment and therapy for speech delays, articulation issues, and expressive/receptive language difficulties.",
    icon: MessageSquare,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600",
  },
  {
    title: "Special Education",
    description: "Customized educational support designed to address individual academic challenges and diverse learning pathways.",
    icon: BookOpen,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600",
  },
  {
    title: "Occupational Therapy",
    description: "Enhancing fine motor skills, sensory integration, coordination, and independence in daily life activities.",
    icon: Activity,
    color: "from-teal-500/10 to-teal-500/20",
    iconColor: "text-teal-600",
  },
  {
    title: "Hearing Assessment & Rehab",
    description: "Comprehensive audiological testing, evaluation, digital hearing aid fitting, and auditory training.",
    icon: Ear,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600",
  },
  {
    title: "Early Intervention",
    description: "Supporting infants and toddlers experiencing developmental delays during crucial formative years.",
    icon: Baby,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600",
  },
  {
    title: "Autism Spectrum Support",
    description: "Specialized, highly engaging therapy programs focused on social communication and sensory regulation.",
    icon: Brain,
    color: "from-teal-500/10 to-teal-500/20",
    iconColor: "text-teal-600",
  },
  {
    title: "Learning Disability Support",
    description: "Targeted strategies for dyslexia, dysgraphia, and dyscalculia to help students excel academically.",
    icon: GraduationCap,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600",
  },
  {
    title: "ADHD Management",
    description: "Improving focus, organizational skills, behavior management, and impulse control via tailored diets/routines.",
    icon: Zap,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600",
  },
  {
    title: "Stammering & Voice Therapy",
    description: "Fluency training and vocal exercise programs to build speech clarity and self-confidence.",
    icon: Mic,
    color: "from-teal-500/10 to-teal-500/20",
    iconColor: "text-teal-600",
  },
  {
    title: "Feeding & Oral Motor Therapy",
    description: "Addressing swallowing challenges, sensory food aversion, and oral muscular coordination.",
    icon: Utensils,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600",
  },
  {
    title: "Parent Guidance & Counseling",
    description: "Equipping families with sensory home programs, communication techniques, and emotional support.",
    icon: Users,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600",
  }
];

// Section 7: Student Achievements Data
const achievements = [
  {
    title: "Speech & Fluency Milestone",
    story: "Aarav joined with severe expressive speech delay. Within 6 months of speech therapy, he progressed from single words to speaking full sentences with clear articulation.",
    highlight: "Graduated to mainstream schooling",
    tagColor: "bg-blue-100 text-blue-800",
    image: achievement1Img
  },
  {
    title: "Sensory Integration Progress",
    story: "Riya struggled with sensory overload and fine motor tasks. Occupational therapy swings and play routines helped improve her balance and handwriting significantly.",
    highlight: "Completed independent writing tasks",
    tagColor: "bg-purple-100 text-purple-800",
    image: achievement2Img
  },
  {
    title: "Autism Communication Breakthrough",
    story: "Kabir used minimal eye contact and experienced frequent meltdowns. Parent-coached training combined with PECS and play therapy helped him communicate his daily needs calmly.",
    highlight: "Reduced sensory meltdowns by 80%",
    tagColor: "bg-teal-100 text-teal-800",
    image: achievement3Img
  }
];

// Section 8: Awards Data
const awards = [
  {
    year: "FROM 2023",
    title: "Awarded 1st Prize for Oral Presentation",
    description: "Awarded for the topic \"Does The Origin Of Acoustic Tumour Correlate With ABR And VEMP\" presented in TAN-ISHA 2015.",
    authority: "MED-EL INDIA"
  },
  {
    year: "2019-2022",
    title: "Awarded 3rd Prize for Oral Poster Presentation",
    description: "Awarded for the topic \"Effect of Temporal Variation in Vowel Perception in Children with Cochlear Implant\" presented in CIGI-CON 2014.",
    authority: "ASLP-ASIA PACIFIC"
  },
  {
    year: "2017-2019",
    title: "Awarded 2nd Prize for Poster Presentation",
    description: "Awarded for the topic \"Does psychogenic hearing loss leave an impact on treated organic pathology\" presented in TAN-ISHA 2016.",
    authority: "MASLP"
  },
  {
    year: "2012-2016",
    title: "Measurement of Ecochg",
    description: "Measurement of Ecochg using intra-cochlear electrode during cochlear implant surgery, dissertation.",
    authority: "BASLP"
  }
];

// Section 9: Why Choose Us Data
const features = [
  {
    title: "Qualified Professionals",
    description: "All therapies are conducted by certified, licensed, and highly experienced clinical professionals.",
    icon: Award,
    color: "border-blue-100 bg-blue-50/30"
  },
  {
    title: "Individual Therapy Plans",
    description: "Therapeutic interventions are customized to match the unique developmental goals of each patient.",
    icon: Brain,
    color: "border-purple-100 bg-purple-50/30"
  },
  {
    title: "Child Friendly Therapy Environment",
    description: "A comfortable, engaging, and welcoming play-based setting to ensure positive therapy experiences.",
    icon: Baby,
    color: "border-teal-100 bg-teal-50/30"
  },
  {
    title: "Evidence-Based Intervention",
    description: "We use only proven, research-backed techniques and standardized clinical methods.",
    icon: Shield,
    color: "border-blue-100 bg-blue-50/30"
  },
  {
    title: "Parent Training Program",
    description: "We empower parents with the training, tools, and resources needed to support therapy at home.",
    icon: Users,
    color: "border-purple-100 bg-purple-50/30"
  },
  {
    title: "Regular Progress Review",
    description: "We conduct ongoing assessments and share detailed progress reviews to track improvement.",
    icon: Activity,
    color: "border-teal-100 bg-teal-50/30"
  },
  {
    title: "Multi-Disciplinary Team Approach",
    description: "Our audiologists, speech therapists, and educators collaborate to provide holistic care.",
    icon: Zap,
    color: "border-blue-100 bg-blue-50/30"
  },
  {
    title: "Convenient Location",
    description: "Our state-of-the-art clinic is conveniently located in Sivananda Colony, Coimbatore.",
    icon: MapPin,
    color: "border-purple-100 bg-purple-50/30"
  }
];

// Section 10: Testimonials Data
const testimonials = [
  {
    parent: "Meera & Rajesh (Parents of Aarav)",
    service: "Speech & Language Therapy",
    review: "Finding Stars Clinic was a blessing. The therapists are incredibly patient and warm. Aarav actually looks forward to his sessions, and his speech progress has changed our lives.",
    rating: 5
  },
  {
    parent: "Suresh Kumar (Parent of Riya)",
    service: "Sensory Integration Therapy",
    review: "The occupational therapy gym here is world-class. My daughter had tactile sensitivity and balance issues, but the swings and sensory activities have made her extremely confident.",
    rating: 5
  },
  {
    parent: "Anitha Venkatesh (Parent of Kabir)",
    service: "Special Education Support",
    review: "We tried multiple centers before finding Stars. Their parent counseling and structured homework programs gave us the tools to support our son effectively at home.",
    rating: 5
  }
];

export const Home = () => {

  // Scroll animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-[#F8FCFF] text-slate-800">
      
      {/* SECTION 1 – WELCOME */}
      <section className="pt-8 pb-16 px-6 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4"
        >
          WELCOME TO
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-slate-900 leading-tight mb-4"
        >
          Stars Speech and Hearing Clinic
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl font-poppins font-semibold text-purple-600 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-8"
        >
          Helping Children and Adults Communicate with Confidence
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 max-w-3xl font-inter text-slate-600 text-base sm:text-lg leading-relaxed text-center"
        >
          <p>
            At Stars Speech and Hearing Clinic, we are committed to helping children and adults communicate with confidence and reach their full potential. Our experienced team provides evidence-based assessment and therapy services in a caring, supportive, and family-centered environment.
          </p>
          <p>
            We believe every child and adult deserves the opportunity to communicate, learn, and thrive. Through personalized therapy programs and compassionate care, we empower individuals to achieve meaningful developmental milestones and improve their quality of life.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 – OUR SPECIALIZATIONS */}
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
              We Specialize In
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {specializations.map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-soft hover-lift flex flex-col items-start text-left space-y-4 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent -z-10 group-hover:scale-110 transition-transform" />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${spec.color} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-7 h-7 ${spec.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-slate-900 leading-tight">
                    {spec.title}
                  </h3>
                  <p className="text-sm font-inter text-slate-500 leading-relaxed">
                    {spec.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 – SPECIAL EDUCATION */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-left">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-xs font-poppins font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full inline-block">
              Academic Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
              Special Education
            </h2>
          </div>

          <div className="w-full aspect-[16/9] rounded-[32px] overflow-hidden shadow-lg">
            <img 
              src={specialEducationImg} 
              alt="Special education student learning with developmental guidance"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
            Our Special Education services are designed for children with diverse learning needs, sensory challenges, or developmental difficulties. We provide structured, individual focus in cooperation with parents and teachers, helping each child bridge academic gaps at their own unique learning pace.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            {[
              "Personalized Learning Plans",
              "Inclusive Teaching Methods",
              "Academic Skill Development",
              "Individual Attention"
            ].map((bullet, index) => (
              <div key={index} className="flex items-center space-x-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                <span className="font-poppins font-semibold text-sm">{bullet}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 – OCCUPATIONAL THERAPY */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-left">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-poppins font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full inline-block">
                Sensory & Motor Skills
              </span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
                Occupational Therapy
              </h2>
            </div>

            <div className="w-full aspect-[16/9] rounded-[32px] overflow-hidden shadow-lg bg-white border-4 border-white">
              <img 
                src={occupationalTherapyImg} 
                alt="Occupational therapy child exercises"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
              Occupational therapy focuses on improving child and adult functional independence in daily tasks. Our child-friendly therapy center provides sensory integration training, fine motor muscle development, hand-eye coordination games, and training for daily self-care tasks. This structured approach helps children reduce sensory aversion, play more cooperatively, and build essential life skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 – CHILD DEVELOPMENT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-left">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
                Milestones & Growth
              </span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
                Child Development
              </h2>
            </div>

            <div className="w-full aspect-[16/9] rounded-[32px] overflow-hidden shadow-lg">
              <img 
                src={childDevelopmentImg} 
                alt="Children playing together and building developmental skills"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
              Early detection of delays creates the path for optimal long-term outcomes. We monitor cognitive milestones, emotional control, motor development, and social skills in children aged 0 to 12. Through individualized early intervention plans, we target specific brain developmental regions to enhance receptive communication and age-appropriate play.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 – MUSIC THERAPY */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-left">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-poppins font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full inline-block">
                Creative Rehabilitation
              </span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
                Music Therapy
              </h2>
            </div>

            <div className="w-full aspect-[16/9] rounded-[32px] overflow-hidden shadow-lg bg-white border-4 border-white">
              <img 
                src={musicTherapyImg} 
                alt="Music therapy setup showing child instruments"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
              Music stimulates multiple neural structures simultaneously. Our music therapy sessions integrate acoustic patterns, custom beats, and musical instruments to address social-communication goals, support emotional regulation, increase attention spans, and make learning speech exercises enjoyable for children.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 – STUDENT ACHIEVEMENTS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
              Student Achievements
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mx-auto rounded-full" />
            <p className="text-slate-500 text-sm sm:text-base font-inter max-w-xl mx-auto">
              Real success stories showing developmental breakthroughs and milestones graduated at Stars.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="border border-slate-100 rounded-[24px] overflow-hidden bg-white shadow-soft text-left flex flex-col justify-between hover-lift min-h-[480px]"
              >
                <div>
                  {item.image && (
                    <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50 border-b border-slate-100 p-3">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-contain rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-8 space-y-4">
                    <h3 className="font-poppins font-bold text-slate-900 text-lg leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-inter text-slate-500 text-sm leading-relaxed">
                      "{item.story}"
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <div className="pt-6 border-t border-slate-50 mt-2 flex items-center space-x-2.5 text-teal-600 font-semibold font-poppins text-xs">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 – AWARDS & RECOGNITION */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
              Awards & Recognition
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mx-auto rounded-full" />
            <p className="text-slate-500 text-sm sm:text-base font-inter max-w-xl mx-auto">
              Our clinic standards and rehabilitation methods have earned high accolades from healthcare boards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-soft text-left flex flex-col justify-between hover-lift"
              >
                <div className="space-y-4">
                  <span className="text-2xl font-poppins font-black text-blue-600 bg-blue-50/50 px-4 py-1 rounded-2xl inline-block">
                    {item.year}
                  </span>
                  <h3 className="font-poppins font-bold text-slate-900 text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-inter text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6 text-slate-400 font-inter text-[11px] font-semibold uppercase tracking-wider">
                  {item.authority}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 – WHY CHOOSE US */}
      <section className="py-24 px-6 bg-white">
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
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => {
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

      {/* SECTION 10 – PARENT TESTIMONIALS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
              Parent Testimonials
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-soft text-left flex flex-col justify-between hover-lift min-h-[300px]"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-inter text-slate-500 text-sm leading-relaxed italic">
                    "{item.review}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-50 mt-6 space-y-1">
                  <h4 className="font-poppins font-bold text-slate-900 text-sm leading-none">{item.parent}</h4>
                  <span className="text-xs text-blue-600 font-inter font-medium">{item.service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
