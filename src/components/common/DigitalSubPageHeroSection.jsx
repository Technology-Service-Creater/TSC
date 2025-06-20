import React from 'react';

const DigitalSubPageHeroSection = ({ title, description, bgImage }) => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] max-h-[700px] min-h-[320px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10"></div>

      <div className="relative z-20 flex flex-col items-start justify-center h-full text-start px-4 sm:px-8 md:px-12 max-w-[95vw] md:max-w-[90vw] lg:max-w-[1300px] mx-auto py-8">
        <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold font-poppins max-w-full md:max-w-[800px] text-white leading-tight mb-4">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-2xl  text-justify font-montserrat max-w-full md:max-w-[780px] text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DigitalSubPageHeroSection;
