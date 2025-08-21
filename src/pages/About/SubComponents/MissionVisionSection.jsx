import React, { useState } from 'react';

const MissionVisionSection = ({ mission, vision }) => {
  const [activeTab, setActiveTab] = useState('mission');

  const isMission = activeTab === 'mission';

  const content = isMission ? mission : vision;

  return (
    <section
      className={`w-full ${isMission ? 'bg-white' : 'bg-[#1f2423]'} py-10 md:py-14 lg:py-16`}
    >
      <div className="max-w-7xl mx-4 md:mx-8 lg:mx-auto">
        {/* Tabs */}
        <div className="flex items-center justify-center mb-10">
          <div className="relative inline-flex rounded-full px-0 border-2 border-[#A468DA] border-r-[#149BF5] border-l-[#149BF5]">
            <button
              type="button"
              onClick={() => setActiveTab('mission')}
              className={`px-6 md:px-20 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold font-['Poppins'] ${
                isMission
                  ? 'bg-gradient-to-r from-[#6E41F6] to-[#5AACFF] text-white shadow'
                  : 'font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent'
              }`}
            >
              Mission
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vision')}
              className={`px-6 md:px-20 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold font-['Poppins'] ${
                !isMission
                  ? 'bg-gradient-to-r from-[#6E41F6] to-[#5AACFF] text-white shadow'
                  : 'font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent'
              }`}
            >
              Vision
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* Left text */}
          <div className="order-1">
            <h3
              className={`${
                isMission ? 'text-neutral-900' : 'text-white'
              } text-xl md:text-xl font-bold font-['Poppins'] leading-relaxed`}
            >
              {content.heading}
            </h3>
          </div>

          {/* Center image */}
          <div className="order-2 flex justify-center">
            <img
              src={content.image}
              alt={`${activeTab} visual`}
              className="w-full h-auto max-h-80 rounded-xl object-cover"
            />
          </div>

          {/* Right bullets */}
          <div className="order-3 lg:self-end">
            <ul
              className={`list-disc pl-5 space-y-2 text-[15px] md:text-base font-['Montserrat'] ${
                isMission ? 'text-neutral-800' : 'text-white/90'
              }`}
            >
              {content.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
