import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ImageCard from '../../pages/Home/ImageCard';
import PropTypes from 'prop-types';

function ImageCarousel({
  images,
  visibleCount,
  startIdx,
  handlePrev,
  handleNext,
  canGoLeft,
  canGoRight,
  progress,
}) {
  const visibleImages = images.slice(startIdx, startIdx + visibleCount);
  return (
    <div className="flex flex-col items-center">
      {/* Images Row */}
      <div
        className={`flex gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto ${visibleCount === 1 ? 'justify-center' : ''}`}
      >
        {visibleImages.map(img => (
          <ImageCard key={img.src} img={img} visibleCount={visibleCount} />
        ))}
      </div>
      <div className="flex items-center w-full max-w-6xl mx-auto mt-8">
        <div className="flex-1 relative h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#A468DA] to-[#149BF5] transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex gap-3 ml-6">
          <button
            onClick={handlePrev}
            disabled={!canGoLeft}
            aria-label="Previous images"
            className="p-3 rounded-full bg-gray-900 text-white shadow-lg hover:bg-[#A468DA] transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoRight}
            aria-label="Next images"
            className="p-3 rounded-full bg-gray-900 text-white shadow-lg hover:bg-[#149BF5] transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      desc: PropTypes.string,
    })
  ).isRequired,
  visibleCount: PropTypes.number.isRequired,
  startIdx: PropTypes.number.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  canGoLeft: PropTypes.bool.isRequired,
  canGoRight: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ImageCarousel;
