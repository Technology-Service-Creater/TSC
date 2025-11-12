import TestimonialCarousel from '../TestimonialCarousel';
import { ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SectionTestimonials = () => {
  const navigate = useNavigate();
  return (
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
            We invite you to supercharge your potential. Find what inspires and drives you. Find
            your Spark.
          </h2>
          <button
            aria-label="Visit career page"
            className="uppercase font-[Montserrat] font-normal bg-[#1E2222] text-white px-6 sm:px-8 py-2 rounded-full flex items-center gap-2 sm:gap-3 text-sm sm:text-base hover:bg-[#333] transition"
            onClick={() => navigate('/careers')}
          >
            Visit a career page{' '}
            <ArrowUp className="size-5 sm:size-6 text-black transform rotate-45 bg-white rounded-full" />
          </button>
        </div>
      </div>
      <div className="relative py-16 px-6 sm:px-8 lg:px-16 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Join our newsletter to get the latest guides!
          </h2>
          <div className="flex justify-center">
            <div className="relative flex items-center w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 pl-12 pr-4 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 absolute left-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0l-2 2m20-2l2 2"
                />
              </svg>
              <button className="absolute right-2 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTestimonials;
