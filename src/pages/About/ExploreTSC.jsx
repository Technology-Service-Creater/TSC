import React from 'react';
import ExploreButton from './ExploreButton';

const ExploreTSC = ({ headings }) => {
  return (
    <>
      <div className="flex flex-col mb-12 ">
        {/* Heading */}
        <div
          className="
    flex max-w-[314px] sm:max-w-md md:max-w-lg 
    h-[60px] text-neutral-800 text-3xl sm:text-4xl md:text-5xl 
    font-bold font-['Poppins'] leading-tight tracking-wide 
    mx-auto mb-8 sm:mb-12 text-center
    px-4 sm:px-6 md:px-8
  "
        >
          Explore TSC
        </div>
        <div
          className="
    w-full max-w-3xl 
    mx-4 sm:mx-6 md:mx-8 lg:mx-auto
    bg-black 
    px-4 sm:px-6 md:px-8  
    py-6 sm:py-8 
    rounded-2xl 
    flex flex-wrap justify-center gap-6 sm:gap-8
  "
        >
          {headings.map(hd => (
            <ExploreButton key={hd.heading} element={hd} />
          ))}
        </div>
        {/* Buttons Container */}
        {/* <div
          className="
    w-full max-w-3xl mx-auto 
    bg-black 
    px-4 sm:px-6  md:px-8  
    py-6 sm:py-8 
    rounded-2xl 
    flex flex-wrap justify-center gap-6 sm:gap-8
  "
        >
          {headings.map(hd => (
            <ExploreButton key={hd.heading} element={hd} />
          ))}
        </div> */}
      </div>

      {/* <div className="flex flex-col mb-12">
        <div className="flex max-w-[314px] h-[60px]   sm:max-w-md md:max-w-lg text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] leading-tight tracking-wide mx-auto mb-8 sm:mb-12 text-center ">
          Explore TSC
        </div>
        <div className="w-full max-w-3xl mx-auto bg-black px-2 sm:px-6  py-6 sm:py-8 rounded-2xl flex flex-wrap justify-center gap-6 sm:gap-8">
          {headings.map(hd => (
            <ExploreButton key={hd.heading} element={hd} />
          ))}
        </div>
      </div> */}

      {/* <div className="flex flex-col mb-12">
        <div className="flex w-[314px] h-[60px] text-neutral-800 text-5xl font-bold font-['Poppins'] leading-[60px] tracking-wide mx-auto mb-12">
          Explore TSC
        </div>
        <div className="flex max-w-[855px] h-[232px] bg-black mx-auto px-[24px] py-[16px] text-white flex-wrap gap-10 pl-24  ">
          {headings.map(hd => (
            <ExploreButton key={hd.heading} element={hd} />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default ExploreTSC;
