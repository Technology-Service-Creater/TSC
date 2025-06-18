import React from 'react';

const HeroSection = ({ contentHeading, contentDescription, contentImage }) => {
  return (
    <>
      <div
        className="relative bg-cover bg-center w-full min-h-[320px] h-[40vh] sm:h-[380px] md:h-[480px] flex items-center justify-center"
        style={{ backgroundImage: `url(${contentImage})` }}
      >
        <div className="text-white rounded-lg px-4 py-8 w-11/12 max-w-2xl mx-auto text-center backdrop-blur-sm">
          <div className="text-2xl sm:text-3xl md:text-5xl font-bold font-['Poppins'] leading-tight mb-4 md:mb-6 ">
            {contentHeading}
          </div>
          <div className="text-sm sm:text-base md:text-lg font-medium font-['Montserrat'] leading-normal tracking-wide">
            {contentDescription}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
