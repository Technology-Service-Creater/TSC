import React from 'react';
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <>
      <div>
        <div className="relative bg-[url('/Images/home_hero.png')] bg-cover bg-center bg-no-repeat h-[500px] sm:h-[550px] lg:h-[616px] overflow-hidden">
          {/* Dark backdrop overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-center gap-4 sm:gap-6 h-full w-full lg:w-[60%] px-6 sm:pl-8 lg:pl-40 text-white">
            {/* Main heading with enhanced styling */}
            <div className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Seamless Services,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
                Ultimate Convenience!
              </span>
            </div>

            {/* Subtitle with improved typography */}
            <div className="font-[Montserrat] font-normal text-base sm:text-lg lg:text-lg text-gray-200 max-w-lg lg:max-w-xl leading-relaxed">
              We craft innovative digital solutions tailored to your needs. Our expert team ensures
              seamless execution, top-notch quality, and continuous support to drive your success.
            </div>

            {/* Enhanced CTA button */}
            <div className="mt-2 sm:mt-4">
              <button className="font-[Montserrat] font-semibold flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white text-sm sm:text-base hover:shadow-2xl hover:shadow-[#A468DA]/30 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#A468DA] focus:ring-opacity-50 active:scale-95">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#A468DA]/20 to-[#149BF5]/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-[#149BF5]/20 to-[#A468DA]/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
