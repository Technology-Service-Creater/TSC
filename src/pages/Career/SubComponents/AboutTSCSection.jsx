import React from 'react';

const AboutTSCSection = () => (
  <div className="w-full flex flex-col gap-4 md:gap-8 items-center py-8 md:py-14">
    {/* Why TSC Section */}
    <section
      className="w-full max-w-6xl h-auto md:h-96 mx-auto flex flex-col md:flex-row items-stretch gap-4 md:gap-0 rounded-2xl overflow-hidden"
      style={{ background: '#F3F2FA' }}
    >
      <div className="flex-1 flex flex-col justify-center p-4 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] mb-2 text-[#181A1B]">
          Why TSC?
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-['Montserrat'] text-[#181A1B]">
          We prioritize excellence, innovation, and customer satisfaction. Our expert team ensures
          top-quality services tailored to your needs, helping you achieve success effortlessly.
        </p>
      </div>
      <div className="flex-1 min-h-[180px] md:min-h-0 flex items-stretch order-1 md:order-none p-4 md:p-0">
        <img
          src={'Images/tsc.png'}
          alt="Why TSC"
          className="w-full object-cover rounded-xl min-h-[180px] max-h-[220px] md:min-h-0 md:max-h-none"
        />
      </div>
    </section>
    {/* Connect and Grow Section */}
    <section
      className="w-full max-w-6xl h-auto md:h-96 mx-auto flex flex-col-reverse md:flex-row items-stretch gap-4 md:gap-0 rounded-2xl overflow-hidden"
      style={{ background: '#F3F2FA' }}
    >
      <div className="flex-1 min-h-[180px] md:min-h-0 flex items-stretch p-4 md:p-0">
        <img
          src={'Images/connect.jpg'}
          alt="Connect and Grow"
          className="w-full object-cover rounded-xl min-h-[180px] max-h-[220px] md:min-h-0 md:max-h-none"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center p-4 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] mb-2 text-[#181A1B]">
          Connect and Grow
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-['Montserrat'] text-[#181A1B]">
          Partner with us to unlock new opportunities. We provide innovative solutions and expert
          support to help your business thrive in a competitive world.
        </p>
      </div>
    </section>
  </div>
);

export default AboutTSCSection;
