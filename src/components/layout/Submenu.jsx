import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Submenu = ({ isOpen, onClose, services, industries, industryDetailsMap }) => {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  if (!isOpen) return null;

  return (
    <div
      className={`fixed left-0 right-0 top-28 z-50 w-full transition-all duration-200 ease-in-out opacity-100 translate-y-0 pointer-events-auto`}
      onMouseLeave={() => {
        setHoveredIndustry(null);
        onClose();
      }}
    >
      <div className="max-w-screen-xl mx-auto w-full shadow-lg rounded-xl overflow-hidden bg-white font-[Montserrat]">
        {/* What we do heading with white bg */}
        <div className="bg-white px-8 py-4">
          <span className="text-3xl font-[Poppins] font-extrabold text-[#222]">What we do</span>
        </div>
        <div className="flex flex-nowrap min-h-[300px] divide-x divide-gray-200">
          {/* Services Section */}
          <div className="flex-1 p-8">
            <h3 className="text-lg font-bold mb-4 text-[#222]">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/what-we-do/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-sm text-gray-800 rounded-md transition-colors px-3 py-2 hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10 hover:text-[#A468DA]"
                    onClick={onClose}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Industries Section */}
          <div className="flex-1 p-8">
            <h3 className="text-lg font-bold mb-4 text-[#222]">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onMouseEnter={() => setHoveredIndustry(industry)}
                    onFocus={() => setHoveredIndustry(industry)}
                    className="flex items-center w-full text-left text-sm text-gray-800 rounded-md transition-colors px-3 py-2 hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10 hover:text-[#A468DA] group"
                  >
                    <span className="flex-1">{industry}</span>
                    <ChevronRight
                      size={16}
                      className="ml-2 text-gray-400 group-hover:text-[#A468DA]"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Industry Details Section */}
          <div className="flex-1 p-8 min-w-[220px] flex items-start justify-start">
            <div className="w-full rounded-xl bg-gradient-to-b from-[#A468DA]/10 to-[#149BF5]/10 p-4 flex flex-col justify-start items-start shadow-inner">
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
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
