import React from 'react';

const WhatIsTSCSection = ({ bgImage }) => {
  return (
    <>
      <div className="relative w-full h-[400px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-10 pointer-events-none"></div>

        <div className="relative z-20 max-w-[1190px] h-full mx-4 md:mx-8 lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Poppins'] leading-snug lg:leading-[40px] mb-6">
              What is{' '}
              <span className="relative inline-block">
                Technology Service Creater
                <span className="absolute left-0 right-0 -bottom-2 h-2 rounded-full bg-gradient-to-r from-[#6E41F6] via-[#6E41F6] to-[#5AACFF]"></span>
              </span>
            </h2>
            <p className="text-white/90 text-base sm:text-lg lg:text-lg font-medium font-['Montserrat'] leading-relaxed tracking-tight">
              Technology Service Creater (TSC) is a dynamic wing of TWC focused on delivering
              innovative, scalable, and intelligent digital services that solve real-world problems.
              We specialize in custom digital solutions, digital platforms, automation, data
              intelligence, and smart service systems for businesses, institutions, and governments.
            </p>
          </div>

          <div className="w-[40%]">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-4 md:gap-6">
                <img
                  src="/Images/logo.png"
                  alt="TSC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsTSCSection;
