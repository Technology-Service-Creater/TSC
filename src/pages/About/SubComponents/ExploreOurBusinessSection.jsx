import React from 'react';
import BusinessBranches from './BusinessBranches';

const ExploreOurBusinessSection = ({ mapInfo }) => {
  return (
    <div className="flex flex-col mb-12 w-full max-w-screen-xl mx-auto px-2 sm:px-4">
      <div className="flex w-full h-16 sm:h-20 bg-black text-white items-center justify-center mb-8 sm:mb-12 rounded-xl shadow-lg">
        <div className="text-slate-50 text-2xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] leading-tight">
          Explore our business
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {mapInfo.map(elem => (
          <div
            className="bg-white/90 rounded-2xl shadow-md border border-gray-100 p-6 transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl"
            key={elem.heading}
          >
            <BusinessBranches displayElement={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreOurBusinessSection;
