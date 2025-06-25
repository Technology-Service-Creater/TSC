import { ChevronUp, ChevronDown, Search, Menu, X, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Submenu from './Submenu';

// Navbar improved for sticky/blur/submenu/mobile UX
const Navbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedIndustriesMobile, setExpandedIndustriesMobile] = useState([]);
  const submenuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);

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
    'Marketing Analysis & Research',
    'Legal and Compliance',
    'Design Services',
  ];

  // Map of industry details
  const industryDetailsMap = {
    'Digital Marketing & Online Growth': [
      'Search Engine Optimization (SEO)',
      'Search Engine Marketing (SEM)',
      'Social Media Marketing (SMM)',
      'Content Marketing',
      'Email Marketing',
      'Pay-Per-Click (PPC) Advertising',
      'App Store Optimization (ASO)',
      'Online Reputation Management (ORM)',
      'Influencer Marketing',
      'Affiliate Marketing',
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
      'Trade Show Displays & Experiences',
    ],
    'Email & Performance Marketing': [
      'Campaign Automation',
      'Lead Nurturing & Segmentation',
      'AI-Powered Personalization',
      'CRM-Integrated Email Marketing',
      'Web & Mobile Analytics',
      'Product & Content Analytics',
      'AI-Driven Marketing Analytics',
      'Performance Tracking & Reporting',
      'A/B Testing & Optimization',
      'Transactional Emails & Newsletters',
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
      'AI-Powered Chatbots & Customer Support',
      'Predictive Marketing',
      'AI-Driven Personalization',
      'Automated Ad Campaigns',
    ],
    'Visual & Video Marketing': [
      'Corporate files & Promotional Videos',
      'Aerial Photography & videography',
      'Digital Experience & Branding',
      'Storytelling & Branding Video',
    ],
    'Traditional & Offline Marketing': [
      'Print Advertising',
      'Out-of-Home (OOH) Advertising',
      'Direct Mail Campaigns',
      'Retail & In-Store Marketing',
      'Product Packaging & Design',
    ],
    'Social Media & Community Engagement': [
      'Platform-Specific Strategies',
      'Social Listening & Consumer Insights',
      'Crisis Management & Reputation Handling',
      'User-Generated Content (UGC)',
    ],
    'Software Development': [
      'Artificial Intelligence & Machine Learning',
      'Cybersecurity',
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
    ],
    'Event Services & Marketing': [
      'Brand Acts',
      'Event Marketing',
      'Employee Experience',
      'Integrated Marketing',
      'Sponsorship Activation',
      'Digital Experience',
      'Experience Content',
      'Broadcast Design',
      'Trade Show Displays & Experiences',
      'Weddings',
      'Corporate Events',
      'Conventions & Trade Shows',
      'Music Festivals & Concerts',
      'Sports Events',
      'Meetings & Incentives',
      'Social Galas & Fundraisers',
      'Product Launches',
      'Experiential Marketing',
      'Virtual & Hybrid Events',
    ],
    'Marketing Analysis & Research': [
      'Industry Trends and Forecasting',
      'Competitive Analysis',
      'Customer Segmentation',
    ],
    'Legal and Compliance': [
      'Intellectual Property Protection',
      'Regulatory Compliance',
      'Contract Management',
      'Transfer Pricing',
      'Indirect Taxes',
      'Tax Compliance & Reporting',
      'Legal advisory and business Risk Advisory ',
      'Cybersecurity & Data Privacy',
      'Governance, Risk, and Compliance (GRC)',
      'Financial & Regulatory Risk',
    ],
    'Design Services': [
      'Graphic Design',
      'Logo Redesign & Refresh',
      'Social Media Graphics',
      'Digital Design',
      'Motion Graphics Design',
      'Fashion Design',
    ],
  };

  // Build searchable pages list
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    // Services
    ...services.map(service => ({
      name: service,
      path: `/what-we-do/services/${service.toLowerCase().replace(/\s+/g, '-')}`,
    })),
    // Industries and their details
    ...industries.map(industry => ({
      name: industry,
      path: `/industries/${industry
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')}`,
    })),
    ...industries.flatMap(industry =>
      (industryDetailsMap[industry] || []).map(detail => ({
        name: `${industry} - ${detail}`,
        path: `/industries/${industry
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')}/${detail
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')}`,
      }))
    ),
  ];

  // Search logic
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    setSearchResults(pages.filter(page => page.name.toLowerCase().includes(q)));
  }, [searchQuery]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle navigation
  const handleResultClick = path => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    navigate(path);
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

  // Reset expandedIndustriesMobile when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) setExpandedIndustriesMobile([]);
  }, [isMobileMenuOpen]);

  // Helper for active route
  const isActive = path => location.pathname === path;

  return (
    <>
      {/* Sticky container for top bar + navbar. Fixes submenu/blur gap issues. */}
      <div className="sticky top-0 z-50 bg-white">
        {/* Top Bar - Only visible on tablet and desktop */}
        <div className="hidden sm:block w-full font-[Montserrat] font-normal bg-white border-b border-gray-200 text-[#222] py-2 px-4 sm:px-6 lg:px-10">
          <div className="max-w-screen-xl mx-auto flex flex-wrap justify-end gap-1.5 md:gap-8 lg:px-10 items-center">
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
        <nav className="font-[Montserrat] font-normal w-full px-2 sm:px-4 lg:px-6 border-b border-gray-200 py-1.5">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center h-16">
            <Link to={'/'} className="flex items-center gap-2">
              <img src="/Images/logo.png" alt="logo" className="h-14 max-w-full w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-3 md:gap-4 lg:gap-8 whitespace-nowrap">
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
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white"
                  onClick={() => setIsSearchOpen(open => !open)}
                  type="button"
                >
                  <Search size={16} />
                  Search
                </button>
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <input
                      ref={searchInputRef}
                      type="text"
                      className="w-full px-5 py-3 text-base border-b border-gray-100 focus:outline-none"
                      placeholder="Search pages..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                    <ul className="max-h-60 overflow-y-auto">
                      {searchResults.length === 0 && searchQuery && (
                        <li className="px-4 py-2 text-gray-400">No results found</li>
                      )}
                      {searchResults.map((result, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10 cursor-pointer whitespace-normal break-words"
                          onClick={() => handleResultClick(result.path)}
                        >
                          {result.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors
                      hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20
                      ${isSubmenuOpen ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
                    `}
                  >
                    What we do {isSubmenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {isSubmenuOpen && (
                    <div className="pl-4 space-y-4 mt-2">
                      {/* Services Section */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm text-gray-500 px-4">Services</h3>
                        <div className="space-y-1">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              to={`/what-we-do/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-4 py-2.5 text-sm hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20 rounded-md truncate"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsSubmenuOpen(false);
                              }}
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Industries Section with Details */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm text-gray-500 px-4">Industries</h3>
                        <div className="space-y-1">
                          {industries.map((industry, index) => (
                            <div key={index} className="space-y-1">
                              <div className="flex items-center">
                                <Link
                                  to={`/industries/${industry
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, '-')
                                    .replace(/(^-|-$)/g, '')}`}
                                  className="flex-1 px-4 py-2.5 text-sm hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20 rounded-md truncate"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsSubmenuOpen(false);
                                  }}
                                >
                                  {industry}
                                </Link>
                                {industryDetailsMap[industry] &&
                                  industryDetailsMap[industry].length > 0 && (
                                    <button
                                      onClick={() => {
                                        setExpandedIndustriesMobile(prev =>
                                          prev.includes(industry)
                                            ? prev.filter(i => i !== industry)
                                            : [...prev, industry]
                                        );
                                      }}
                                      className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-[#A468DA] transition-colors"
                                    >
                                      <ChevronRight
                                        size={16}
                                        className={`transform transition-transform duration-200 ${
                                          expandedIndustriesMobile.includes(industry)
                                            ? 'rotate-90'
                                            : ''
                                        }`}
                                      />
                                    </button>
                                  )}
                              </div>
                              {expandedIndustriesMobile.includes(industry) && (
                                <div className="pl-4 space-y-1 bg-gradient-to-r from-[#A468DA]/5 to-[#149BF5]/5 rounded-md p-2 mt-1">
                                  {industryDetailsMap[industry]?.map((detail, idx) => (
                                    <Link
                                      key={idx}
                                      to={`/industries/${industry
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]+/g, '-')
                                        .replace(/(^-|-$)/g, '')}/${detail
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]+/g, '-')
                                        .replace(/(^-|-$)/g, '')}`}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:text-[#A468DA] truncate"
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsSubmenuOpen(false);
                                      }}
                                    >
                                      {detail}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Other main links for mobile */}
                <div className="space-y-1">
                  <Link
                    to="/about"
                    className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors
                      hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20
                      ${isActive('/about') ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/careers"
                    className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors
                      hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20
                      ${isActive('/careers') ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    to="/contact"
                    className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors
                      hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20
                      ${isActive('/contact') ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-bold' : ''}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>

                <button
                  className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white w-full justify-center text-sm mt-4"
                  onClick={() => setIsSearchOpen(open => !open)}
                  type="button"
                >
                  <Search size={16} />
                  Search
                </button>
                {isSearchOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-start justify-center pt-24">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-xl mx-auto p-4">
                      <div className="flex items-center mb-2">
                        <input
                          ref={searchInputRef}
                          type="text"
                          className="w-full px-5 py-3 text-base border border-gray-200 rounded focus:outline-none"
                          placeholder="Search pages..."
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                        />
                        <button
                          className="ml-2 text-gray-500"
                          onClick={() => setIsSearchOpen(false)}
                        >
                          <X size={20} />
                        </button>
                      </div>
                      <ul className="max-h-60 overflow-y-auto">
                        {searchResults.length === 0 && searchQuery && (
                          <li className="px-4 py-2 text-gray-400">No results found</li>
                        )}
                        {searchResults.map((result, idx) => (
                          <li
                            key={idx}
                            className="px-4 py-2 hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10 cursor-pointer whitespace-normal break-words"
                            onClick={() => handleResultClick(result.path)}
                          >
                            {result.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
