import React, { useState } from 'react';

const MissionVisionSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const isMission = activeTab === 'mission';

  const mission = {
    heading:
      'To empower businesses and individuals with next-generation technology services that are scalable, reliable, and future-ready.',
    image: '/Images/OurMission.jpg',
    bullets: [
      'We aim to bridge the digital divide by delivering affordable IT solutions, cloud systems, AI-driven platforms, and end-to-end digital transformation services.',
      'Our solutions help organizations unlock growth and innovation while improving efficiency and customer experience.',
    ],
  };

  const vision = {
    heading:
      'To become a global leader in technology services, driving the digital economy through innovation, talent, and customer-centric solutions that seamlessly adopt cutting-edge technologies.',
    image: '/Images/AIDrivenMarketAnalytics-2.png',
    bullets: [
      'We envision TSC as a trusted innovation partner that empowers individuals, businesses, governments, and communities to build a smarter, connected, and sustainable future.',
      'We will continuously push boundaries while staying grounded in real-world impact and inclusivity.',
    ],
  };

  const content = isMission ? mission : vision;

  return (
    <section
      className={`w-full ${isMission ? 'bg-[#F5FEFF]' : 'bg-[#1f2423]'} py-10 md:py-14 lg:py-16`}
    >
      <div className="max-w-[1190px] mx-4 md:mx-8 lg:mx-auto">
        {/* Tabs */}
        <div className="flex items-center justify-center mb-10">
          <div className="relative inline-flex bg-[#F5FEFF] rounded-full p-1">
            <button
              type="button"
              onClick={() => setActiveTab('mission')}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold font-['Poppins'] ${
                isMission
                  ? 'bg-gradient-to-r from-[#6E41F6] to-[#5AACFF] text-white shadow'
                  : 'text-[#2A2A2A]'
              }`}
            >
              Mission
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vision')}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold font-['Poppins'] ${
                !isMission
                  ? 'bg-gradient-to-r from-[#6E41F6] to-[#5AACFF] text-white shadow'
                  : 'text-[#2A2A2A]'
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
          <div className="order-2">
            <img
              src={content.image}
              alt={`${activeTab} visual`}
              className="w-full h-80 rounded-xl object-cover"
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
