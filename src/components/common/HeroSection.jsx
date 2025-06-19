import React from 'react';

const HeroSection = ({ contentHeading, contentDescription, contentImage }) => {
  return (
    <div className="relative w-full min-h-[320px] h-[40vh] sm:h-[380px] md:h-[480px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${contentImage})` }}
        aria-hidden="true"
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-10"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-11/12 max-w-2xl mx-auto text-center px-4 py-10 sm:py-14 md:py-20 bg-white/10 backdrop-blur-[4px] rounded-2xl shadow-xl border border-white/20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] leading-tight mb-4 md:mb-6 text-white drop-shadow-lg">
          {contentHeading}
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium font-['Montserrat'] leading-normal tracking-wide text-white/90 drop-shadow">
          {contentDescription}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
