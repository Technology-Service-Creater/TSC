import React from 'react';
import TestimonialCarousel from '../TestimonialCarousel';
import { ArrowUp } from 'lucide-react';

const SectionTestimonials = () => (
  <div className="bg-white pt-0">
    <div className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] p-6 sm:p-10 bg-[#1E2222] text-white">
      Our Testimonials
    </div>
    <div className="max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-8 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-2">
      <div className="flex items-end gap-2">
        <span className="text-base sm:text-lg font-[Poppins] font-bold text-[#222]">
          Rating & Review
        </span>
      </div>
    </div>
    <div className="px-2 sm:px-8 md:px-16">
      <TestimonialCarousel />
    </div>
    <div className="max-w-2xl md:max-w-4xl mx-auto mt-12 mb-8 px-2 sm:px-4">
      <div className="border border-[#1E2222] rounded-xl py-8 sm:py-10 px-2 sm:px-12 flex flex-col items-center text-center">
        <h1 className="font-[Poppins] font-bold text-2xl sm:text-3xl mb-2 sm:mb-4">
          Career at TSC
        </h1>
        <h2 className="font-[Montserrat] font-normal text-base sm:text-lg mb-6 sm:mb-8">
          We invite you to supercharge your potential. Find what inspires and drives you. Find your
          Spark.
        </h2>
        <button
          aria-label="Visit career page"
          className="uppercase font-[Montserrat] font-normal bg-[#1E2222] text-white px-6 sm:px-8 py-2 rounded-full flex items-center gap-2 sm:gap-3 text-sm sm:text-base hover:bg-[#333] transition"
        >
          Visit a career page{' '}
          <ArrowUp className="size-5 sm:size-6 text-black transform rotate-45 bg-white rounded-full" />
        </button>
      </div>
    </div>
  </div>
);

export default SectionTestimonials;
