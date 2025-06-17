import { ChevronUp, ChevronDown, Search, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Submenu from './Submenu';

const Navbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const submenuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  // List of services
  const services = [
    'Search Engine Optimization (SEO)',
    'Social Media Marketing (SMM)',
    'Pay-Per-Click (PPC) Advertising',
    'Online Reputation Management (ORM)',
    'Web Development',
    'Mobile App Development',
    'AI & Machine Learning',
    'AI-Powered Chatbots & Customer Support',
    'Automated Ad Campaigns',
    'Conversion Rate Optimization (CRO)',
    'Customer Retention & Loyalty Programs',
    'User Experience (UX) Research',
    'Web & Mobile Prototyping',
    'Competitive Analysis',
    'Customer Segmentation',
    'Cybersecurity & Data Privacy',
    'Regulatory Compliance',
  ];

  // List of industries
  const industries = [
    'Digital Marketing & Online Growth',
    'Customer Experience & Marketing Strategy',
    'Integrated Marketing & Brand Communications',
    'Email & Performance Marketing',
    'Experiential & Event-Based Marketing',
    'E-Commerce & Growth Marketing',
    'AI & Automation in Marketing',
    'Visual & Video Marketing',
    'Traditional & Offline Marketing',
    'Social Media & Community Engagement',
    'Software Development',
    'Event Services & Marketing',
    'Market Analysis and Research',
    'Legal and Compliance',
    'Design Services',
  ];

  // Map of industry details
  const industryDetailsMap = {
    'Digital Marketing & Online Growth': [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Content Marketing',
      'Email Marketing',
    ],
    'Customer Experience & Marketing Strategy': [
      'Brand Positioning',
      'Market Research & Analytics',
      'Consumer Insights',
      'Customer Journey Mapping',
      'Personalization & Customer Experience (CX)',
      'Pricing Strategy',
    ],
    'Integrated Marketing & Brand Communications': [
      'Advertising Campaigns',
      'Public Relations (PR)',
      'Corporate Communications',
      'Event Marketing & Sponsorship',
      'Trade Show Displays & Experiences',
    ],
    'Email & Performance Marketing': [
      'Campaign Automation',
      'Lead Nurturing & Segmentation',
      'AI-Powered Personalization',
      'CRM-Integrated Email Marketing',
      'Web & Mobile Analytics',
      'Product & Content Analytics',
      'Audience Marketing Analytics',
      'Performance Tracking & Reporting',
      'A/B Testing & Optimization',
    ],
    'Experiential & Event-Based Marketing': [
      'Sponsorship Activation',
      'Virtual & Hybrid Events',
      'Product Launches & Brand Activations',
      'Consumer Engagement & Brand Experiences',
    ],
    'E-Commerce & Growth Marketing': [
      'Conversion Rate Optimization (CRO)',
      'Customer Retention & Loyalty Programs',
      'Subscription-Based Marketing',
      'Upselling & Cross-selling Strategies',
    ],
    'AI & Automation in Marketing': [
      'Chatbots & Customer Support',
      'Predictive Marketing',
      'AI-Driven Personalization',
      'Automated Ad Campaigns',
    ],
    'Visual & Video Marketing': [
      'Artificial Intelligence & Machine Learning',
      'AI and Data Science',
      'Trajectory AI',
      'Generative AI',
      'AI Powered Business Intelligence',
    ],
    'Traditional & Offline Marketing': [
      'Cybersecurity',
      'Influencer Marketing',
      'Affiliate Marketing',
      'App Store Optimization (ASO)',
      'Online Reputation Management (ORM)',
    ],
    'Social Media & Community Engagement': [
      'Web Development',
      'Full-stack Development',
      'Integration with Apps (iOS/Android)',
      'Website Optimization & Performance',
    ],
    'Software Development': [
      'Digital Marketing & Online Growth',
      'Customer Experience & Marketing Strategy',
      'Integrated Marketing & Brand Communications',
      'Email & Performance Marketing',
      'Experiential & Event-Based Marketing',
      'E-Commerce & Growth Marketing',
      'AI & Automation in Marketing',
      'Visual & Video Marketing',
      'Traditional & Offline Marketing',
      'Social Media & Community Engagement',
      'Software Development',
      'Event Services & Marketing',
      'Market Analysis and Research',
      'Legal and Compliance',
      'Design Services',
    ],
    'Event Services & Marketing': [
      'Digital Marketing & Online Growth',
      'Customer Experience & Marketing Strategy',
      'Integrated Marketing & Brand Communications',
      'Email & Performance Marketing',
      'Experiential & Event-Based Marketing',
      'E-Commerce & Growth Marketing',
      'AI & Automation in Marketing',
      'Visual & Video Marketing',
      'Traditional & Offline Marketing',
      'Social Media & Community Engagement',
      'Software Development',
      'Event Services & Marketing',
      'Market Analysis and Research',
      'Legal and Compliance',
      'Design Services',
    ],
    'Market Analysis and Research': [
      'Digital Marketing & Online Growth',
      'Customer Experience & Marketing Strategy',
      'Integrated Marketing & Brand Communications',
      'Email & Performance Marketing',
      'Experiential & Event-Based Marketing',
      'E-Commerce & Growth Marketing',
      'AI & Automation in Marketing',
      'Visual & Video Marketing',
      'Traditional & Offline Marketing',
      'Social Media & Community Engagement',
      'Software Development',
      'Event Services & Marketing',
      'Market Analysis and Research',
      'Legal and Compliance',
      'Design Services',
    ],
    'Legal and Compliance': [
      'Digital Marketing & Online Growth',
      'Customer Experience & Marketing Strategy',
      'Integrated Marketing & Brand Communications',
      'Email & Performance Marketing',
      'Experiential & Event-Based Marketing',
      'E-Commerce & Growth Marketing',
      'AI & Automation in Marketing',
      'Visual & Video Marketing',
      'Traditional & Offline Marketing',
      'Social Media & Community Engagement',
      'Software Development',
      'Event Services & Marketing',
      'Market Analysis and Research',
      'Legal and Compliance',
      'Design Services',
    ],
    'Design Services': [
      'Digital Marketing & Online Growth',
      'Customer Experience & Marketing Strategy',
      'Integrated Marketing & Brand Communications',
      'Email & Performance Marketing',
      'Experiential & Event-Based Marketing',
      'E-Commerce & Growth Marketing',
      'AI & Automation in Marketing',
      'Visual & Video Marketing',
      'Traditional & Offline Marketing',
      'Social Media & Community Engagement',
      'Software Development',
      'Event Services & Marketing',
      'Market Analysis and Research',
      'Legal and Compliance',
      'Design Services',
    ],
  };

  // Close submenu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsSubmenuOpen(false);
      }
    }
    if (isSubmenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSubmenuOpen]);

  // Helper for active route
  const isActive = path => location.pathname === path;

  return (
    <>
      {/* Top Bar - Always visible */}
      <div className="w-full bg-white border-b border-gray-200 text-[#222] py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-end gap-4 md:gap-12 items-center">
          <a
            href="#"
            className="text-sm md:text-base hover:text-[#A468DA] transition-colors whitespace-nowrap"
          >
            For Companies
          </a>
          <a
            href="#"
            className="text-sm md:text-base hover:text-[#A468DA] transition-colors whitespace-nowrap"
          >
            Events
          </a>
          <a
            href="#"
            className="text-sm md:text-base hover:text-[#A468DA] transition-colors whitespace-nowrap"
          >
            Become a master
          </a>
          <a
            href="#"
            className="text-sm md:text-base hover:text-[#A468DA] transition-colors whitespace-nowrap"
          >
            Blogs
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="font-[Montserrat] font-normal max-w-screen-xl mx-auto my-3 px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img src="/Images/logo.png" alt="logo" className="h-10 w-10" />
            <Link to="/" className="font-[Poppins] font-extrabold text-2xl md:text-3xl">
              TSC
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={() => setIsSubmenuOpen(open => !open)}
                className={`flex items-center cursor-pointer active:scale-95 px-4 py-2 rounded-lg transition-colors
                  hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10
                  ${isSubmenuOpen ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
                `}
                type="button"
                aria-expanded={isSubmenuOpen}
                aria-haspopup="true"
              >
                What we do {isSubmenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <div ref={submenuRef}>
                <Submenu
                  isOpen={isSubmenuOpen}
                  onClose={() => setIsSubmenuOpen(false)}
                  services={services}
                  industries={industries}
                  industryDetailsMap={industryDetailsMap}
                />
              </div>
            </div>
            <Link
              to="/about"
              className={`cursor-pointer active:scale-95 px-4 py-2 rounded-lg transition-colors
                hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10
                ${isActive('/about') ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
              `}
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className={`cursor-pointer active:scale-95 px-4 py-2 rounded-lg transition-colors
                hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10
                ${isActive('/careers') ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
              `}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={`cursor-pointer active:scale-95 px-4 py-2 rounded-lg transition-colors
                hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10
                ${isActive('/contact') ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
              `}
            >
              Contact Us
            </Link>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white">
              <Search size={16} />
              Search
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                className="text-gray-500 hover:text-[#A468DA]"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="space-y-4">
              {/* What we do collapsible section */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                  className={`w-full flex items-center justify-between px-4 py-2 rounded-md text-base font-medium transition-colors
                    hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20
                    ${isSubmenuOpen ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
                  `}
                >
                  What we do {isSubmenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {isSubmenuOpen && (
                  <div className="pl-4 space-y-2">
                    <h3 className="font-semibold text-sm text-gray-500">Services</h3>
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={`/what-we-do/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-base hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20 rounded-md"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsSubmenuOpen(false);
                        }}
                      >
                        {service}
                      </Link>
                    ))}
                    <h3 className="font-semibold text-sm text-gray-500 mt-4">Industries</h3>
                    {industries.map((industry, index) => (
                      <Link
                        key={index}
                        to={`/what-we-do/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-base hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20 rounded-md"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsSubmenuOpen(false);
                        }}
                      >
                        {industry}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Other main links for mobile */}
              <Link
                to="/about"
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors
                  hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20
                  ${isActive('/about') ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors
                  hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20
                  ${isActive('/careers') ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors
                  hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20
                  ${isActive('/contact') ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white w-full justify-center">
                <Search size={16} />
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
