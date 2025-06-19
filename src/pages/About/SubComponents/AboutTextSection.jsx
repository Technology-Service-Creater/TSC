import React from 'react';

const AboutTextSection = ({ heading, description, image }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-w-[1190px] h-auto lg:h-[687px] mx-6 lg:mx-[125px] my-10 lg:my-14 ">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start mb-8 lg:mb-0">
          <div className="flex flex-col max-w-[586px] px-4 lg:px-0">
            <div className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] leading-snug lg:leading-[60px] mb-6">
              {heading}
            </div>
            <div className="text-neutral-800 text-lg sm:text-xl md:text-2xl font-medium font-['Montserrat'] leading-relaxed tracking-wide">
              {description}
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2">
          {/* For small screens: use <img> */}
          <img
            src={image}
            alt="Section Visual"
            className="block lg:hidden w-full h-auto object-contain"
          />

          {/* For large screens: use background image */}
          <div
            className="hidden lg:block w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default AboutTextSection;
