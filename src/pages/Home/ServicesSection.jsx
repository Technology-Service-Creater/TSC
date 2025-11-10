import React from 'react';
import ServicePill from './ServicePill';
import ImageCarousel from '../../components/common/ImageCarousel';
import PropTypes from 'prop-types';

function ServicesSection({
  services,
  selectedService,
  setSelectedService,
  images,
  visibleCount,
  startIdx,
  handlePrev,
  handleNext,
  canGoLeft,
  canGoRight,
  progress,
}) {
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl mb-4">
            Our Services
          </div>
          <div className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-6 leading-tight">
            Comprehensive Development <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
              Solutions Tailored for You
            </span>
          </div>
          <div className="font-[Montserrat] font-normal text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Our services encompass a wide range of development solutions tailored to your needs.
            From web to mobile. We ensure your projects are executed with precision and creativity.
          </div>
        </div>
        {/* Services Pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12">
          {services.map((service, idx) => (
            <ServicePill
              key={idx}
              title={service.title}
              selected={selectedService === idx}
              onClick={() => setSelectedService(idx)}
            />
          ))}
        </div>
        {/* Image Carousel Section */}
        <ImageCarousel
          images={images}
          visibleCount={visibleCount}
          startIdx={startIdx}
          handlePrev={handlePrev}
          handleNext={handleNext}
          canGoLeft={canGoLeft}
          canGoRight={canGoRight}
          progress={progress}
        />

        {/* Services */}
      </div>
      {/* Achievements Section */}
      <section className="py-10 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-60">
          <div className="flex flex-col lg:flex-row items-center justify-around text-center space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Years of Excellence */}
            <div className="flex items-center gap-4">
              <p className="text-3xl sm:text-4xl p-4 sm:p-6 rounded-full font-bold text-gray-800 bg-radial from-blue-300 to-blue-100">
                5+
              </p>
              <p className="text-lg sm:text-2xl max-w-[8rem] text-gray-600">Years of Excellence</p>
            </div>
            {/* Success Rate */}
            <div className="flex items-center gap-4">
              <p className="text-3xl sm:text-4xl p-4 sm:p-6 rounded-full font-bold text-gray-800 bg-radial from-blue-300 to-blue-100">
                100%
              </p>
              <p className="text-lg sm:text-2xl max-w-[8rem] text-gray-600">Success Rate</p>
            </div>

            {/* Thriving Projects */}
            <div className="flex items-center gap-4">
              <p className="text-3xl sm:text-4xl p-4 sm:p-6 rounded-full font-bold text-gray-800 bg-radial from-blue-300 to-blue-100">
                200+
              </p>
              <p className="text-lg sm:text-2xl max-w-[8rem] text-gray-600">Thriving Projects</p>
            </div>

            {/* Let's Talk Button */}
            <div className="mt-8 lg:mt-0">
              <button className="bg-gradient-to-b from-purple-500 to-blue-500 text-white px-6 py-3 w-auto rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition duration-300">
                LET&apos;S TALK
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

ServicesSection.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedService: PropTypes.number.isRequired,
  setSelectedService: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  visibleCount: PropTypes.number.isRequired,
  startIdx: PropTypes.number.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  canGoLeft: PropTypes.bool.isRequired,
  canGoRight: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ServicesSection;
