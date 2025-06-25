import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Submenu = ({ isOpen, onClose, services, industries, industryDetailsMap }) => {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [hoveredDetail, setHoveredDetail] = useState(null);

  // Prevent page scroll when submenu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Blurred background overlay (only below navbar and top bar) */}
      <div
        className={`fixed left-0 right-0 top-[104px] bottom-0 z-40 bg-white/40 backdrop-blur-sm transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed left-0 right-0 top-[104px] z-50 w-full transition-all duration-300 ease-in-out opacity-100 translate-y-0 pointer-events-auto`}
        style={{ borderRadius: '0 0 1rem 1rem' }} // rounded-b-xl for bottom corners only
        onMouseLeave={() => {
          setHoveredIndustry(null);
          setHoveredDetail(null);
          onClose();
        }}
      >
        <div className="max-w-screen-xl mx-auto w-full rounded-xl overflow-visible bg-white font-[Montserrat] border border-gray-200 shadow-2xl shadow-gray-300/50 overflow-y-auto max-h-[80vh]">
          {/* What we do heading with white bg */}
          <div className="bg-white px-8 py-4 rounded-xl relative overflow-hidden rounded-t-xl">
            <div
              className="absolute left-0 top-0 bottom-0 w-1 h-full bg-gradient-to-b from-[#A468DA] to-[#149BF5]"
              style={{ maxHeight: '100%' }}
            ></div>
            <span className="text-3xl font-[Poppins] font-extrabold text-[#222] transform transition-all duration-300 ease-in-out hover:scale-105">
              What We Do
            </span>
          </div>
          <div className="flex flex-nowrap min-h-[300px] divide-x divide-gray-200 overflow-visible">
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
              <h3 className="text-2xl font-[Montserrat] mb-4 font-normal text-[#222]">
                Industries
              </h3>
              <ul className="space-y-2">
                {industries.map((industry, index) => {
                  const hasDetails =
                    industryDetailsMap[industry] && industryDetailsMap[industry].length > 0;
                  return (
                    <li key={index}>
                      {hasDetails ? (
                        <div className="flex items-center">
                          <Link
                            to={`/industries/${industry
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, '-')
                              .replace(/(^-|-$)/g, '')}`}
                            className="flex-1 text-sm text-gray-800 rounded-md transition-colors px-3 py-1 hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10 hover:text-[#A468DA]"
                            onClick={onClose}
                            onMouseEnter={() => setHoveredIndustry(industry)}
                          >
                            {industry}
                          </Link>
                          <button
                            type="button"
                            onMouseEnter={() => setHoveredIndustry(industry)}
                            onFocus={() => setHoveredIndustry(industry)}
                            className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-[#A468DA] transition-colors"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      ) : (
                        <Link
                          to={`/industries/${industry
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, '-')
                            .replace(/(^-|-$)/g, '')}`}
                          className="block text-sm text-gray-800 rounded-md transition-colors px-3 py-1 hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10 hover:text-[#A468DA]"
                          onClick={onClose}
                          onMouseEnter={() => setHoveredIndustry(industry)}
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
            <div className="flex-1 p-8 flex items-start justify-start overflow-visible">
              <div
                className={`w-full rounded-xl bg-gradient-to-b from-[#A468DA]/10 to-[#149BF5]/10 flex flex-col justify-start items-start shadow-inner border border-[#A468DA]/20 ${!hoveredIndustry ? 'hidden' : ''} overflow-y-auto max-h-[60vh]`}
                onMouseEnter={() => setHoveredIndustry(hoveredIndustry)}
              >
                {hoveredIndustry && industryDetailsMap[hoveredIndustry] ? (
                  <div className="p-4">
                    <h3 className="text-base font-bold mb-3 text-[#222] break-words whitespace-normal max-w-xs">
                      {hoveredIndustry}
                    </h3>
                    <ul className="space-y-1">
                      {industryDetailsMap[hoveredIndustry].map((detail, idx) => {
                        // Convert industry and detail to kebab-case for URL
                        const toKebabCase = str =>
                          str
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, '-')
                            .replace(/(^-|-$)/g, '');
                        const industryKebab = toKebabCase(hoveredIndustry);
                        const detailKebab = toKebabCase(detail);
                        return (
                          <li
                            key={idx}
                            onMouseEnter={() => setHoveredDetail(detail)}
                            onMouseLeave={() => setHoveredDetail(null)}
                          >
                            <Link
                              to={`/industries/${industryKebab}/${detailKebab}`}
                              className={`block text-sm text-gray-700 rounded-md transition-all duration-200 px-2 py-1 hover:bg-gradient-to-r hover:from-[#A468DA]/10 hover:to-[#149BF5]/10 hover:text-[#A468DA] hover:font-medium break-words whitespace-normal max-w-xs ${hoveredDetail === detail ? 'bg-gradient-to-r from-[#A468DA]/10 to-[#149BF5]/10 text-[#A468DA] font-medium' : ''}`}
                              onClick={onClose}
                            >
                              {detail}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submenu;
