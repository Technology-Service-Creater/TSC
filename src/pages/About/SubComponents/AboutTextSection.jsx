import React from 'react';

const AboutTextSection = ({ heading, description, image }) => {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1190px] h-auto lg:h-[687px] mx-4 md:mx-8 lg:mx-auto py-10 lg:py-14 items-center gap-8 lg:gap-16">
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start mb-8 lg:mb-0">
        <div className="flex flex-col max-w-[586px] px-6 py-8">
          <h2 className="text-neutral-800 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Poppins'] leading-snug lg:leading-[60px] mb-6">
            {heading}
          </h2>
          <p className="text-neutral-800 text-base sm:text-lg lg:text-lg font-medium font-['Montserrat'] leading-relaxed tracking-wide">
            {description}
          </p>
        </div>
      </div>
      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img
          src={image}
          alt="Section Visual"
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default AboutTextSection;
