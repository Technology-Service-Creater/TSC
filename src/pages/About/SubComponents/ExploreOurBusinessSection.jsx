import React from 'react';
import BusinessBranches from './BusinessBranches';

const ExploreOurBusinessSection = ({ mapInfo }) => {
  return (
    <>
      <div className="flex flex-col mb-12">
        <div className="flex w-full h-16 sm:h-20 bg-black text-white items-center justify-center mb-8 sm:mb-12 rounded-xl">
          <div className="text-slate-50 text-2xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] leading-tight">
            Explore our business
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 px-2 sm:px-4 ">
          {mapInfo.map(elem => (
            <BusinessBranches key={elem.heading} displayElement={elem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreOurBusinessSection;
