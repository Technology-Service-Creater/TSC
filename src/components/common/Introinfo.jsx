import React from 'react';

export default function IntroInfo({ title, description }) {
  return (
    <div
      className={`max-w-7xl mx-auto my-10 px-6 py-10 md:px-8 md:py-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl flex flex-col justify-center items-center gap-6 shadow-sm`}
    >
      <h2 className="text-center text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] leading-tight">
        {title}
      </h2>
      <div className={`w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full`}></div>
      <p className="text-center text-gray-600 text-base md:text-lg font-['Montserrat'] leading-relaxed tracking-wide">
        {description}
      </p>
    </div>
  );
}
