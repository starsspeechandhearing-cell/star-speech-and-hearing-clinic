import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../../assets/WhatsApp Image 2026-07-03 at 11.20.14 AM.jpeg';

export const Footer = () => {

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col space-y-4">
          <Link to="/" className="flex items-center self-start">
            <img 
              src={logoImg} 
              alt="Stars Speech and Hearing Clinic Logo" 
              className="h-16 w-auto object-contain bg-white rounded-2xl p-2 shadow-md"
            />
          </Link>
          <p className="text-sm text-slate-400 font-inter leading-relaxed pt-2">
            Stars Speech and Hearing Clinic offers premium, international-standard audiology, speech therapy, and occupational therapy services in Coimbatore, India. We empower lives through advanced care.
          </p>
          <div className="flex space-x-3 pt-3">
            <a href="https://www.facebook.com/share/1FC1nmmmos" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center text-white" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/starsspeechandhearing?igsh=MWlmY2toZWc2eGZjdQ==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-medical-teal transition-colors flex items-center justify-center text-white" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center text-white" aria-label="Linkedin">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@starsspeechandhearing?si=sXARO1bAKYvt8wmr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-red-600 transition-colors flex items-center justify-center text-white" aria-label="Youtube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.387.51A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.882.51 9.388.51 9.388.51s7.505 0 9.387-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-sm font-inter">
            <li><Link to="/" className="hover:text-medical-teal transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-medical-teal transition-colors">About Clinic</Link></li>
            <li><Link to="/services" className="hover:text-medical-teal transition-colors">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-medical-teal transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Clinic Contact & Hours */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider">Contact Details</h4>
          <ul className="space-y-3.5 text-sm font-inter">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 text-medical-teal mr-3 mt-1 shrink-0" />
              <span>34/176- A, Raju Naidu St, Sivananda Colony, Tatabad, Coimbatore, Tamil Nadu 641012</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 text-medical-teal mr-3 shrink-0" />
              <a href="tel:+919080515327" className="hover:text-medical-teal transition-colors">+91 90805 15327</a>
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 text-medical-teal mr-3 shrink-0" />
              <a href="mailto:starsspeechandhearing@gmail.com" className="hover:text-medical-teal transition-colors">starsspeechandhearing@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Therapy Services */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider">Therapy Services</h4>
          <ul className="space-y-2.5 text-sm font-inter">
            <li><Link to="/contact" className="hover:text-medical-teal transition-colors">Speech & Language Therapy</Link></li>
            <li><Link to="/contact" className="hover:text-medical-teal transition-colors">Special Education</Link></li>
            <li><Link to="/contact" className="hover:text-medical-teal transition-colors">Occupational Therapy</Link></li>
            <li><Link to="/contact" className="hover:text-medical-teal transition-colors">Hearing Assessment</Link></li>
            <li><Link to="/contact" className="hover:text-medical-teal transition-colors">Early Intervention</Link></li>
            <li><Link to="/contact" className="hover:text-medical-teal transition-colors">Autism Spectrum Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-inter">
        <span>© {new Date().getFullYear()} Stars Speech and Hearing Clinic. All Rights Reserved.</span>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
