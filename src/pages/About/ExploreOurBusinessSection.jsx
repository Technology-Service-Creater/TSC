import React from 'react';
import BusinessBranches from './BusinessBranches';

const ExploreOurBusinessSection = ({ mapInfo }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex w-full h-[80px] bg-black text-white items-center justify-center mb-[60px]">
          <div className="text-slate-50 text-5xl font-bold font-['Poppins'] leading-[60px] ">
            Explore our business
          </div>
        </div>
        <div className="flex flex-row flex-wrap w-[1220px] h-[640px] mx-auto ">
          {mapInfo.map(elem => (
            <BusinessBranches key={elem.heading} displayElement={elem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreOurBusinessSection;
