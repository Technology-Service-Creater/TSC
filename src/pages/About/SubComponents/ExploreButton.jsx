import React from 'react';

import { FaCircleArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const ExploreButton = ({ element }) => {
  const { heading, link } = element;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="relative group w-full max-w-xs sm:max-w-md md:max-w-[314px] h-16 sm:h-[70px] md:h-[84px]
                 flex items-center justify-center cursor-pointer rounded-[20px]
                  transition-shadow hover:shadow-lg  bg-white text-black"
    >
      {/* Animated overlay from bottom to top */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-1 left-0 w-full h-full bg-black scale-y-0  scale-x-0 group-hover:scale-y-105 group-hover:scale-x-105 rounded-full group-hover:rounded-[20px] origin-bottom transition-transform duration-500 ease-in-out" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-row px-4 sm:px-8 py-4 sm:py-6 w-full items-center transition-colors duration-500 group-hover:text-white md:mx-[30px]  ">
        <div className="flex-1 text-base sm:text-lg md:text-xl font-medium font-['Montserrat'] uppercase leading-normal tracking-wide truncate">
          {heading}
        </div>
        <div className="flex-shrink-0 ml-2">
          <FaCircleArrowRight className=" -rotate-45 rounded-2xl w-6 h-6 transition-transform duration-300 group-hover:rotate-0" />
        </div>
      </div>
    </div>
  );
};

export default ExploreButton;
