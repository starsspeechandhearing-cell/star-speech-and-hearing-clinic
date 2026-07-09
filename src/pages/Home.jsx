import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, Award, Brain, Star, MapPin,
  MessageSquare, BookOpen, Activity, Ear, Baby, GraduationCap, Zap, Mic, Utensils, Users, CheckCircle,
  Eye, Target
} from 'lucide-react';
import speechTherapyImg from '../assets/WhatsAppImage2026-07-09at2.00.51PM.jpeg';
import specialEducationImg from '../assets/special eduction.png';
import occupationalTherapyImg from '../assets/Screenshot 2026-07-07 122109.png';
import childDevelopmentImg from '../assets/WhatsApp Image 2026-07-03 at 11.55.10 AM (1).jpeg';
import achievement1Img from '../assets/WhatsAppImage2026-07-03at11.28.38AM.jpeg';
import achievement3Img from '../assets/Screenshot 2026-07-07 161846.png';
import achievement2Img from '../assets/WhatsApp Image 2026-07-03 at 11.29.06 AM.jpeg';
import hearingAidImg from '../assets/WhatsAppImage2026-07-09at3.11.36PM.jpeg';

import welcomeClinicImg from '../assets/ZjHqchk9OVVHU7YmRil49rraVA2hlnUBDF86xlYde8z-Sg7BK7mPX10-FP2ufiWuaJddZwzJXHqzY3Trd6oHYXEjayUi8AROFXBb6qhImDvlHKXRbNnKoLLkrQXpBIHor25Q84KLKLGLGjOSulXsxThhVL1X1IasPQ431azHKZw.jpg';
import { Button } from '../components/Buttons/Button';

// Section 2: Specializations Data
const specializations = [
  {
    title: "Speech & Language Therapy",
    description: "Assessment and therapy for speech delays, articulation issues, and expressive/receptive language difficulties.",
    icon: MessageSquare,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600",
    slug: "speech-therapy"
  },
  {
    title: "Special Education",
    description: "Customized educational support designed to address individual academic challenges and diverse learning pathways.",
    icon: BookOpen,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600",
    slug: "special-education"
  },
  {
    title: "Occupational Therapy",
    description: "Enhancing fine motor skills, sensory integration, coordination, and independence in daily life activities.",
    icon: Activity,
    color: "from-teal-500/10 to-teal-500/20",
    iconColor: "text-teal-600",
    slug: "occupational-therapy"
  },
  {
    title: "Hearing Assessment & Rehab",
    description: "Comprehensive audiological testing, evaluation, digital hearing aid fitting, and auditory training.",
    icon: Ear,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600",
    slug: "hearing-aid-fitting"
  },
  {
    title: "Early Intervention",
    description: "Supporting infants and toddlers experiencing developmental delays during crucial formative years.",
    icon: Baby,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600",
    slug: "early-intervention"
  },
  {
    title: "Autism Spectrum Support",
    description: "Specialized, highly engaging therapy programs focused on social communication and sensory regulation.",
    icon: Brain,
    color: "from-teal-500/10 to-teal-500/20",
    iconColor: "text-teal-600",
    slug: "autism-therapy"
  },
  {
    title: "Learning Disability Support",
    description: "Targeted strategies for dyslexia, dysgraphia, and dyscalculia to help students excel academically.",
    icon: GraduationCap,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600",
    slug: "remedial-therapy"
  },
  {
    title: "ADHD Management",
    description: "Improving focus, organizational skills, behavior management, and impulse control via tailored diets/routines.",
    icon: Zap,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600",
    slug: "adhd-therapy"
  },
  {
    title: "Stammering & Voice Therapy",
    description: "Fluency training and vocal exercise programs to build speech clarity and self-confidence.",
    icon: Mic,
    color: "from-teal-500/10 to-teal-500/20",
    iconColor: "text-teal-600",
    slug: "fluency-therapy"
  },
  {
    title: "Feeding & Oral Motor Therapy",
    description: "Addressing swallowing challenges, sensory food aversion, and oral muscular coordination.",
    icon: Utensils,
    color: "from-blue-500/10 to-blue-500/20",
    iconColor: "text-blue-600",
    slug: "swallowing-therapy"
  },
  {
    title: "Parent Guidance & Counseling",
    description: "Equipping families with sensory home programs, communication techniques, and emotional support.",
    icon: Users,
    color: "from-purple-500/10 to-purple-500/20",
    iconColor: "text-purple-600",
    slug: "parent-training"
  }
];

// Section 7: Student Achievements Data
const achievements = [
  {
    title: "A journey to clear speech",
    story: "Santhosh started therapy with limited speech and difficulty producing certain sounds. After six months of consistent speech therapy, he is now able to speak in complete sentences, narrate classroom experiences, and communicate with clear pronunciation. We are proud of his wonderful progress!",
    highlight: "Graduated to mainstream schooling",
    tagColor: "bg-blue-100 text-blue-800",
    image: achievement1Img
  },
  {
    title: "Building social communication skills",
    story: `Krish started therapy at 3.5 years with echolalia and challenges in social communication. After 10 months of consistent therapy, he has shown remarkable improvement. His echolalia has reduced, and he is now able to understand questions, respond appropriately, and communicate his thoughts meaningfully.

We are delighted to celebrate Krish’s successful completion of therapy and his happy discharge. We wish him continued growth, confidence, and success in his communication journey.`,
    highlight: "Successfully completed therapy & discharged",
    tagColor: "bg-purple-100 text-purple-800",
    image: achievement2Img
  },
  {
    title: "Hearing Milestones, Winning Moments",
    story: `Our young stars showcased their confidence and communication skills at the Children’s Day Competition and Talent Show. With great enthusiasm and dedication, our children secured first place in listening games, storytelling, and singing competitions.

These achievements reflect their growing listening abilities, speech and language skills, creativity, and self-confidence. We are proud of their wonderful progress and celebrate every milestone in their journey.`,
    highlight: "First place in Children's Day events",
    tagColor: "bg-teal-100 text-teal-800",
    image: achievement3Img
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

  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Stars Speech and Hearing Clinic",
    "url": "https://starsspeechhearing.in",
    "logo": "https://starsspeechhearing.in/images/logo.png",
    "image": "https://starsspeechhearing.in/seo/home-banner.jpg",
    "telephone": "+919080515327",
    "email": "starsspeechandhearing@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "34/176- A, Raju Naidu St, Sivananda Colony, Tatabad",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641012",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/1FC1nmmmos",
      "https://www.instagram.com/starsspeechandhearing?igsh=MWlmY2toZWc2eGZjdQ==",
      "https://youtube.com/@starsspeechandhearing?si=sXARO1bAKYvt8wmr"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stars Speech and Hearing Clinic",
    "url": "https://starsspeechhearing.in",
    "logo": "https://starsspeechhearing.in/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/share/1FC1nmmmos",
      "https://www.instagram.com/starsspeechandhearing?igsh=MWlmY2toZWc2eGZjdQ==",
      "https://youtube.com/@starsspeechandhearing?si=sXARO1bAKYvt8wmr"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stars Speech and Hearing Clinic",
    "url": "https://starsspeechhearing.in",
    "logo": "https://starsspeechhearing.in/images/logo.png",
    "image": "https://starsspeechhearing.in/seo/home-banner.jpg",
    "telephone": "+919080515327",
    "email": "starsspeechandhearing@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "34/176- A, Raju Naidu St, Sivananda Colony, Tatabad",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641012",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/1FC1nmmmos",
      "https://www.instagram.com/starsspeechandhearing?igsh=MWlmY2toZWc2eGZjdQ==",
      "https://youtube.com/@starsspeechandhearing?si=sXARO1bAKYvt8wmr"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Stars Speech and Hearing Clinic",
    "url": "https://starsspeechhearing.in"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://starsspeechhearing.in/"
      }
    ]
  };

  return (
    <div className="bg-[#F8FCFF] text-slate-800">
      <Helmet>
        <title>Stars Speech | Stars Speech and Hearing Clinic, Coimbatore</title>
        <meta name="description" content="Stars Speech and Hearing Clinic is one of the leading Speech Therapy and Hearing Clinics in Coimbatore providing Speech Therapy, Hearing Assessment, Occupational Therapy, Autism Therapy, ADHD Therapy, Early Intervention and Special Education." />
        <meta name="keywords" content="Stars Speech, Stars Speech Coimbatore, Stars Speech and Hearing Clinic, Speech Therapy Coimbatore, Speech Therapist Coimbatore, Hearing Clinic Coimbatore, Speech and Hearing Clinic, Occupational Therapy, Special Education, Autism Therapy, ADHD Therapy, Early Intervention, Annitha G" />
        <link rel="canonical" href="https://starsspeechhearing.in/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Stars Speech and Hearing Clinic" />
        <meta name="theme-color" content="#0F4C81" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Stars Speech | Stars Speech and Hearing Clinic, Coimbatore" />
        <meta property="og:description" content="Stars Speech and Hearing Clinic is one of the leading Speech Therapy and Hearing Clinics in Coimbatore providing Speech Therapy, Hearing Assessment, Occupational Therapy, Autism Therapy, ADHD Therapy, Early Intervention and Special Education." />
        <meta property="og:image" content="https://starsspeechhearing.in/seo/home-banner.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://starsspeechhearing.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stars Speech and Hearing Clinic" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stars Speech | Stars Speech and Hearing Clinic, Coimbatore" />
        <meta name="twitter:description" content="Stars Speech and Hearing Clinic is one of the leading Speech Therapy and Hearing Clinics in Coimbatore providing Speech Therapy, Hearing Assessment, Occupational Therapy, Autism Therapy, ADHD Therapy, Early Intervention and Special Education." />
        <meta name="twitter:image" content="https://starsspeechhearing.in/seo/home-banner.jpg" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(medicalClinicSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      {/* SECTION 1 – WELCOME */}
      <section className="pt-12 pb-20 px-6 max-w-7xl mx-auto">
        {/* Desktop & Tablet Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="md:col-span-7 space-y-6 text-left order-1">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block mb-4"
              >
                WELCOME TO
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-black text-slate-900 leading-tight mb-2"
              >
                Stars Speech and Hearing Clinic
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl font-poppins font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4"
              >
                Helping Children and Adults Communicate with Confidence
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 font-inter text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              <p>
                At Stars Speech and Hearing Clinic, we are committed to helping children and adults communicate with confidence and reach their full potential. As a leading Speech and Hearing Clinic in Coimbatore, our experienced speech therapists provide evidence-based assessment and therapy services in a caring, supportive, and family-centered environment.
              </p>
              <p>
                We believe every child and adult deserves the opportunity to communicate, learn, and thrive. Through personalized therapy programs and compassionate care, we empower individuals to achieve meaningful developmental milestones and improve their quality of life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <Button
                variant="teal"
                href="https://wa.me/919080515327?text=Hi%20Stars%20Speech%20and%20Hearing%20Clinic,%20I%20would%20like%20to%20schedule%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white border-0 font-bold px-8 py-4 text-base rounded-full shadow-lg shadow-green-500/20 hover:shadow-green-500/30 flex items-center space-x-2 gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.486 2.03 14.041 1.01 11.455 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.63.45 3.224 1.302 4.666L1.897 22l6.236-1.63c1.472.802 3.12 1.226 4.754 1.228h-.006zM17.43 14.18c-.319-.16-1.89-.933-2.185-1.041-.295-.108-.51-.163-.724.162-.215.324-.83.162-.977-.162-.295-.324-1.243-.46-2.378-1.47-1.135-1.014-1.9-2.266-2.122-2.64-.224-.376-.024-.578.163-.765.168-.168.377-.44.566-.66.19-.22.253-.376.38-.627.127-.25.063-.47-.03-.66-.095-.19-.724-1.745-.992-2.39-.262-.63-.525-.544-.724-.555-.187-.01-.403-.012-.619-.012-.215 0-.568.082-.865.407-.297.325-1.134 1.109-1.134 2.7 0 1.593 1.157 3.13 1.317 3.348.16.216 2.277 3.483 5.518 4.88.77.33 1.37.528 1.84.677.776.246 1.48.212 2.037.129.62-.093 1.89-.773 2.154-1.48.264-.709.264-1.314.185-1.442-.08-.128-.295-.21-.615-.37z"/>
                </svg>
                <span>Book Appointment</span>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="md:col-span-5 w-full flex justify-center order-2"
          >
            <div className="relative w-full max-w-md rounded-[24px] overflow-hidden shadow-soft border-4 border-white bg-white">
              <img 
                src={welcomeClinicImg} 
                alt="Stars Speech and Hearing Clinic" 
                className="w-full aspect-square object-cover rounded-[20px]"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center text-center space-y-6">
          <div className="flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block mb-3"
            >
              WELCOME TO
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl font-poppins font-black text-slate-900 leading-tight px-2"
            >
              Stars Speech and Hearing Clinic
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-sm rounded-[24px] overflow-hidden shadow-soft border-4 border-white bg-white"
          >
            <img 
              src={welcomeClinicImg} 
              alt="Stars Speech and Hearing Clinic" 
              className="w-full aspect-[16/10] object-cover rounded-[20px]"
              loading="eager"
              decoding="async"
            />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg font-poppins font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent px-4"
          >
            Helping Children and Adults Communicate with Confidence
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 font-inter text-slate-600 text-sm leading-relaxed px-4"
          >
            <p>
              At Stars Speech and Hearing Clinic, we are committed to helping children and adults communicate with confidence and reach their full potential. As a leading Speech and Hearing Clinic in Coimbatore, our experienced speech therapists provide evidence-based assessment and therapy services in a caring, supportive, and family-centered environment.
            </p>
            <p>
              We believe every child and adult deserves the opportunity to communicate, learn, and thrive. Through personalized therapy programs and compassionate care, we empower individuals to achieve meaningful developmental milestones and improve their quality of life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-2 w-full flex justify-center"
          >
            <Button
              variant="teal"
              href="https://wa.me/919080515327?text=Hi%20Stars%20Speech%20and%20Hearing%20Clinic,%20I%20would%20like%20to%20schedule%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white border-0 font-bold px-8 py-4 text-base rounded-full shadow-lg shadow-green-500/20 hover:shadow-green-500/30 flex items-center space-x-2 gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.486 2.03 14.041 1.01 11.455 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.63.45 3.224 1.302 4.666L1.897 22l6.236-1.63c1.472.802 3.12 1.226 4.754 1.228h-.006zM17.43 14.18c-.319-.16-1.89-.933-2.185-1.041-.295-.108-.51-.163-.724.162-.215.324-.83.162-.977-.162-.295-.324-1.243-.46-2.378-1.47-1.135-1.014-1.9-2.266-2.122-2.64-.224-.376-.024-.578.163-.765.168-.168.377-.44.566-.66.19-.22.253-.376.38-.627.127-.25.063-.47-.03-.66-.095-.19-.724-1.745-.992-2.39-.262-.63-.525-.544-.724-.555-.187-.01-.403-.012-.619-.012-.215 0-.568.082-.865.407-.297.325-1.134 1.109-1.134 2.7 0 1.593 1.157 3.13 1.317 3.348.16.216 2.277 3.483 5.518 4.88.77.33 1.37.528 1.84.677.776.246 1.48.212 2.037.129.62-.093 1.89-.773 2.154-1.48.264-.709.264-1.314.185-1.442-.08-.128-.295-.21-.615-.37z"/>
              </svg>
              <span>Book Appointment</span>
            </Button>
          </motion.div>
        </div>

        {/* Center-aligned Vision and Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto space-y-12 text-center"
        >
          {/* Our Vision */}
          <div className="space-y-3">
            <h3 className="font-poppins font-black text-2xl text-slate-900 tracking-tight">
              Our Vision
            </h3>
            <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full" />
            <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              To be the most trusted clinic for speech and hearing care in Coimbatore, advancing pediatric and adult rehabilitation through innovation, compassion, and personalized care at Stars Speech.
            </p>
          </div>

          {/* Our Mission */}
          <div className="space-y-3">
            <h3 className="font-poppins font-black text-2xl text-slate-900 tracking-tight">
              Our Mission
            </h3>
            <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto rounded-full" />
            <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              At Stars Speech and Hearing Clinic, our mission is to provide compassionate, evidence-based speech therapy, audiology checkups, and developmental care that empowers individuals to communicate with confidence.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION – WE SPECIALIZE IN */}
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
                <Link
                  key={idx}
                  to={`/services/${spec.slug}`}
                  className="block h-full group/card cursor-pointer hover:no-underline"
                >
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-soft hover-lift flex flex-col items-start text-left space-y-4 relative overflow-hidden group h-full"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent -z-10 group-hover:scale-110 transition-transform" />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${spec.color} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-7 h-7 ${spec.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-poppins font-bold text-slate-900 leading-tight group-hover/card:text-primary transition-colors">
                      {spec.title}
                    </h3>
                    <p className="text-sm font-inter text-slate-500 leading-relaxed">
                      {spec.description}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION – SPEECH THERAPY */}
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
              <span className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
                Communication & Language
              </span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900">
                Speech Therapy
              </h2>
            </div>

            <div className="w-full rounded-[32px] overflow-hidden shadow-lg bg-white">
              <img 
                src={speechTherapyImg} 
                alt="Speech therapy session with therapist and child"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
              Speech therapy focuses on improving speech, language, communication, and swallowing skills in children and adults. Our personalized therapy programs help individuals overcome speech delays, articulation difficulties, language challenges, fluency issues, voice problems, and communication difficulties, enabling them to express themselves confidently and effectively.
            </p>
            
            <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
              With early identification, individualized therapy plans, and family involvement, we help individuals achieve meaningful communication milestones and participate confidently at home, school, and in everyday life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {[
                "Personalized Speech Programs",
                "Early Identification & Intervention",
                "Fluency & Articulation Training",
                "Active Family Involvement"
              ].map((bullet, index) => (
                <div key={index} className="flex items-center space-x-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="font-poppins font-semibold text-sm">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100/50">
              <Link to="/services/speech-therapy" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                Learn more about our Speech Therapy programs &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION – SPECIAL EDUCATION */}
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
              decoding="async"
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

          <div className="pt-4 border-t border-slate-100/50">
            <Link to="/services/special-education" className="inline-flex items-center text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors">
              Learn more about our Special Education services &rarr;
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SECTION – OCCUPATIONAL THERAPY */}
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
                decoding="async"
              />
            </div>

            <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
              Occupational therapy focuses on improving child and adult functional independence in daily tasks. Our child-friendly therapy center provides sensory integration training, fine motor muscle development, hand-eye coordination games, and training for daily self-care tasks. This structured approach helps children reduce sensory aversion, play more cooperatively, and build essential life skills.
            </p>

            <div className="pt-4 border-t border-slate-100/50">
              <Link to="/services/occupational-therapy" className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-800 transition-colors">
                Learn more about our Occupational Therapy Gym &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION – HEARING AID SOLUTIONS */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-left">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-xs font-poppins font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Audiology & Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 leading-tight">
              World-Class Hearing Aid Solutions for Hearing Loss
            </h2>
          </div>

          <div className="w-full rounded-[32px] overflow-hidden shadow-lg bg-white">
            <img 
              src={hearingAidImg} 
              alt="World-Class Hearing Aid Solutions for Hearing Loss"
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />
          </div>

          <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
            We provide state-of-the-art, digital hearing aid technologies tailored to individual hearing needs. Our certified audiologists conduct precise assessments and offer personalized fittings for advanced, virtually invisible hearing solutions. By utilizing cutting-edge noise reduction, Bluetooth connectivity, and rechargeability features, we restore clarity, improve speech understanding, and enrich your quality of life.
          </p>

          <div className="pt-4 border-t border-slate-100/50">
            <Link to="/services/hearing-aid-fitting" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
              Explore our Digital Hearing Aid Fitting services &rarr;
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SECTION – SMART CLASS */}
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
                Smart Class
              </h2>
            </div>

            <div className="w-full aspect-[16/9] rounded-[32px] overflow-hidden shadow-lg">
              <img 
                src={childDevelopmentImg} 
                alt="Children playing together and building developmental skills"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
              Our Smart Class sessions combine interactive learning, digital tools, and engaging activities to enhance children's communication, language, cognitive, and social skills in a fun and supportive environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION – STUDENT ACHIEVEMENTS */}
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
                        decoding="async"
                      />
                    </div>
                  )}
                  <div className="p-8 space-y-4">
                    <h3 className="font-poppins font-bold text-slate-900 text-lg leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-inter text-slate-500 text-sm leading-relaxed whitespace-pre-line">
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


      {/* SECTION – WHY CHOOSE US */}
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

      {/* SECTION – PARENT TESTIMONIALS */}
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
