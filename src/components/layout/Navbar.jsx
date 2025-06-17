import { ChevronUp, ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(null);
  const [clickedIndustry, setClickedIndustry] = useState(null);

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

  // List of industries (no nested submenu)
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

  // Map of industry details for the right column
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

  return (
    <>
      <div className="font-[Montserrat] font-normal max-w-screen-xl mx-auto flex flex-col gap-2 my-3">
        <div className="flex justify-end items-center gap-12">
          <p className="cursor-pointer active:scale-95">For Companies</p>
          <p className="cursor-pointer active:scale-95">Events</p>
          <p className="cursor-pointer active:scale-95">Become a Master</p>
          <p className="cursor-pointer active:scale-95">Blogs</p>
        </div>
      </div>
      <hr className="border-[#E5E5E5] border-b-[1px]" />
      <div className="font-[Montserrat] font-normal max-w-screen-xl mx-auto flex flex-col gap-2 my-3">
        <div className="flex justify-between items-center relative">
          <div className="flex items-center gap-2 h-10 w-10 ">
            <img src="/Images/logo.png" alt="logo" />
            <p className="font-[Poppins] font-extrabold text-3xl">TSC</p>
          </div>
          <div className="flex justify-end items-center gap-12 relative">
            <div className="relative">
              <p
                className="flex items-center cursor-pointer active:scale-95 select-none"
                onClick={() => {
                  setIsSubmenuOpen(!isSubmenuOpen);
                  setActiveIndustry(null);
                  setClickedIndustry(null);
                }}
              >
                What we do{' '}
                <ChevronUp
                  className={`${isSubmenuOpen ? 'rotate-180' : ''} transition-transform duration-300`}
                />
              </p>
              {isSubmenuOpen && (
                <div className="fixed top-[110px] left-0 right-0 w-screen bg-white shadow-lg rounded-md z-50 p-6 flex justify-center">
                  <div className="px-10 flex gap-12 w-full">
                    <div className="flex flex-col w-1/3 border-r border-gray-300 pr-6">
                      <h3 className="text-lg font-semibold mb-4">Services</h3>
                      <ul className="flex flex-col gap-2 text-sm">
                        {services.map((service, idx) => (
                          <li
                            key={idx}
                            className="cursor-pointer hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20 rounded-md px-3 py-1.5 transition-colors duration-300"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col w-1/3 border-r border-gray-300 px-6">
                      <h3 className="text-lg font-semibold mb-4">Industries</h3>
                      <ul className="flex flex-col gap-2 text-sm">
                        {industries.map((industry, idx) => (
                          <li
                            key={idx}
                            className="flex justify-between items-center cursor-pointer hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20 rounded-md px-4 py-2 transition-colors duration-300"
                            onMouseEnter={() => setActiveIndustry(industry)}
                            onClick={() => setClickedIndustry(industry)}
                            onMouseLeave={() => {
                              if (clickedIndustry !== industry) {
                                setActiveIndustry(null);
                              }
                            }}
                          >
                            <span>{industry}</span>
                            <ChevronRight size={16} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    {(activeIndustry || clickedIndustry) && (
                      <div className="flex flex-col w-fit px-6 pt-2 rounded-md bg-gradient-to-b from-[#A468DA]/10 to-[#149BF5]/10 ">
                        <h3 className="text-lg font-semibold mb-4">Details</h3>
                        <ul className="text-sm">
                          {industryDetailsMap[clickedIndustry || activeIndustry]?.map(
                            (item, idx) => (
                              <li
                                key={idx}
                                className="p-1 hover:bg-gradient-to-r hover:from-[#A468DA]/20 hover:to-[#149BF5]/20 rounded-md px-4 py-2 transition-colors duration-300"
                              >
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <p className="cursor-pointer active:scale-95">About Us</p>
            <p className="cursor-pointer active:scale-95">Careers</p>
            <p className="cursor-pointer active:scale-95">Contact Us</p>
            <p className="flex items-center gap-2 cursor-pointer active:scale-95 px-4 py-2 rounded-lg bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white">
              <Search size={16} />
              Search
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
