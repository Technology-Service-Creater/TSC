import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Submenu = ({ isOpen, onClose, services, industries, industryDetailsMap }) => {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  if (!isOpen) return null;

  return (
    <div
      className={`fixed left-0 right-0 top-28 z-50 w-full transition-all duration-300 ease-in-out opacity-100 translate-y-0 pointer-events-auto`}
      onMouseLeave={() => {
        setHoveredIndustry(null);
        onClose();
      }}
    >
      <div className="max-w-screen-xl mx-auto w-full rounded-xl overflow-hidden bg-white font-[Montserrat] border border-gray-200 shadow-2xl shadow-gray-300/50">
        {/* What we do heading with white bg */}
        <div className="bg-white px-8 py-4 relative">
          <div className="absolute left-0 top-0 bottom-2 w-1 bg-gradient-to-b from-[#A468DA] to-[#149BF5]"></div>
          <span className="text-3xl font-[Poppins] font-extrabold text-[#222] transform transition-all duration-300 ease-in-out hover:scale-105">
            What We Do
          </span>
        </div>
        <div className="flex flex-nowrap min-h-[300px] divide-x divide-gray-200">
          {/* Services Section */}
          <div className="flex-1 px-8 py-2">
            <h3 className="text-2xl font-[Montserrat] mb-4 font-normal text-[#222]">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/what-we-do/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-sm text-gray-800 rounded-md transition-colors px-3 py-1 hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10 hover:text-[#A468DA]"
                    onClick={onClose}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Industries Section */}
          <div className="flex-1 px-8 py-2">
            <h3 className="text-2xl font-[Montserrat] mb-4 font-normal text-[#222]">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry, index) => {
                const hasDetails =
                  industryDetailsMap[industry] && industryDetailsMap[industry].length > 0;
                return (
                  <li key={index}>
                    {hasDetails ? (
                      <button
                        type="button"
                        onMouseEnter={() => setHoveredIndustry(industry)}
                        onFocus={() => setHoveredIndustry(industry)}
                        className="flex items-center w-full text-left text-sm text-gray-800 rounded-md transition-colors px-3 py-1 hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10 hover:text-[#A468DA] group"
                      >
                        <span className="flex-1">{industry}</span>
                        <ChevronRight
                          size={16}
                          className="ml-2 text-gray-400 group-hover:text-[#A468DA]"
                        />
                      </button>
                    ) : (
                      <Link
                        to={`/what-we-do/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-sm text-gray-800 rounded-md transition-colors px-3 py-1 hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10 hover:text-[#A468DA]"
                        onClick={onClose}
                        onMouseEnter={() => setHoveredIndustry(industry)}
                        onMouseLeave={() => setHoveredIndustry(null)}
                      >
                        {industry}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Industry Details Section - Full Width */}
          <div className="flex-1 p-8 flex items-start justify-start">
            <div
              className={`w-full rounded-xl bg-gradient-to-b from-[#A468DA]/10 to-[#149BF5]/10 p-4 flex flex-col justify-start items-start shadow-inner border border-[#A468DA]/20 ${!hoveredIndustry ? 'hidden' : ''}`}
            >
              {hoveredIndustry && industryDetailsMap[hoveredIndustry] ? (
                <>
                  <h3 className="text-base font-bold mb-3 text-[#222]">{hoveredIndustry}</h3>
                  <ul className="space-y-1">
                    {industryDetailsMap[hoveredIndustry].map((detail, idx) => (
                      <li key={idx} className="text-sm text-[#222]">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </>
              ) : hoveredIndustry ? (
                <div className="text-sm text-gray-500 italic">
                  No additional details available for {hoveredIndustry}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
