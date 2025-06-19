import React from 'react';
import { ArrowRight } from 'lucide-react';

function ImageCard({ img, onArrowClick }) {
  return (
    <div
      className={`relative rounded-2xl shadow-xl overflow-hidden flex items-end group cursor-pointer flex-shrink-0 bg-transparent w-[280px] sm:w-[320px] lg:w-[370px] h-[20em] sm:h-[24em] lg:h-[28em]`}
    >
      <img
        src={img.src}
        alt={img.title}
        className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl z-0 transition-transform duration-300 group-hover:scale-105"
        style={{ objectPosition: 'center' }}
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
        <div className="flex justify-between items-start px-4 sm:px-6 pt-4 sm:pt-6">
          <div></div>
          <button
            className="bg-white hover:bg-[#A468DA] text-[#222] hover:text-white rounded-full p-2 transition-all duration-300 shadow-md pointer-events-auto"
            onClick={onArrowClick}
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="bg-white/95 rounded-2xl mx-2 mb-2">
          <div className="px-4 sm:px-6 pb-6 sm:pb-8 pt-2">
            <div className="font-[Poppins] font-bold text-lg sm:text-xl lg:text-2xl mb-2 text-[#222] drop-shadow-lg">
              {img.title}
            </div>
            <div className="font-[Montserrat] text-sm sm:text-base text-gray-700 leading-snug drop-shadow-lg">
              {img.desc.split('. ').map((line, i) => (
                <div key={i}>{line.trim()}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Always show title at bottom when not hovered */}
      <div className="relative z-10 w-full bg-gradient-to-t from-black/80 to-transparent px-3 sm:px-4 py-2 sm:py-3 flex items-end rounded-b-2xl group-hover:opacity-0 transition-opacity duration-300">
        <span className="font-[Poppins] font-semibold text-base sm:text-lg text-white w-full text-left">
          {img.title}
        </span>
      </div>
    </div>
  );
}

export default ImageCard;
