import React from 'react';

const SectionWhyChooseUs = () => (
  <div className="py-12 px-3 sm:px-8 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10 lg:mb-16">
        <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-lg sm:text-2xl lg:text-3xl mb-3">
          Why Choose Us?
        </div>
        <div className="font-[Poppins] font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 leading-tight">
          Comprehensive Development <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
            Solutions Tailored for You
          </span>
        </div>
        <div className="font-[Montserrat] font-normal text-sm sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
          Our team brings unparalleled expertise and dedication to every project. We prioritize
          quality and provide ongoing support to ensure your success.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
          <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-lg sm:text-2xl lg:text-3xl mb-3 text-center lg:text-left">
            Excellence
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 text-center lg:text-left">
              <div className="font-[Poppins] font-bold text-xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 leading-tight">
                Expertise
              </div>
              <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                Skilled professionals committed to your project&rsquo;s success.
              </div>
            </div>
            <div className="flex-1 mt-4 sm:mt-0 text-center lg:text-left">
              <div className="font-[Poppins] font-bold text-xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 leading-tight">
                Quality
              </div>
              <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                Delivering top-notch services that exceed expectations.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 order-1 lg:order-2">
          <img
            src="/Images/img6.png"
            alt="Team working on digital solutions"
            className="rounded-xl object-cover w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img
            src="/Images/img7.jpg"
            alt="Celebrating project achievements"
            className="rounded-xl object-cover w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="text-center mb-6 sm:mb-8">
            <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-lg sm:text-2xl lg:text-3xl mb-3">
              Achievements
            </div>
            <div className="font-[Poppins] font-bold text-2xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
              Our Impact in Numbers
            </div>
            <div className="font-[Montserrat] font-normal text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We take pride in delivering exceptional results. Our commitment to excellence is
              reflected in our impressive statistics.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 items-start text-center sm:text-left">
            <div className="flex-1">
              <div className="font-[Poppins] font-bold text-2xl sm:text-4xl text-gray-900 mb-1">
                95%
              </div>
              <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                Customer satisfaction rate based on recent surveys.
              </div>
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <div className="font-[Poppins] font-bold text-2xl sm:text-4xl text-gray-900 mb-1">
                200
              </div>
              <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                Projects successfully completed in the last year.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SectionWhyChooseUs;
