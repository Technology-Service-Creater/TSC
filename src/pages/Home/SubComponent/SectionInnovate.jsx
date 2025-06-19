import React from 'react';
import ImageCarousel from '../../../components/common/ImageCarousel';

const SectionInnovate = ({
  images,
  visibleCount,
  startIdx,
  handlePrev,
  handleNext,
  canGoLeft,
  canGoRight,
  progress,
}) => (
  <div className="py-16 px-6 sm:px-8 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 lg:mb-16">
        <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl mb-4">
          Innovate
        </div>
        <div className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-6 leading-tight">
          Transforming Ideas into <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
            Innovative Solutions
          </span>
        </div>
        <div className="font-[Montserrat] font-normal text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our team brings unparalleled expertise and dedication to every project. We prioritize
          quality and ongoing support to ensure your success.
        </div>
      </div>
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
    </div>
  </div>
);

export default SectionInnovate;
