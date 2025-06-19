import React from 'react';

const PageHeroSection = ({ title, description, bgImage }) => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Poppins'] text-white mb-4">
          {title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-medium font-['Montserrat'] text-white/90 max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeroSection;
