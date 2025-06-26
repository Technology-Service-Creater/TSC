import React from 'react';

export default function IntroInfo({ title, description }) {
  return (
    <section className="w-full relative my-8 md:my-12 lg:my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl flex flex-col justify-center items-start gap-6 shadow-sm p-6 md:p-8 lg:p-12">
        <h2 className="text-left text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] leading-tight">
          {title}
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
        <div className="text-left text-gray-600 text-base md:text-lg font-['Montserrat'] leading-relaxed tracking-wide">
          {description}
        </div>
      </div>
    </section>
  );
}
