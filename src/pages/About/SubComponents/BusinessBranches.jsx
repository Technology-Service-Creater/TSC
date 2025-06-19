import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessBranches = ({ displayElement }) => {
  let { heading, description, image, link } = displayElement;

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-[590px] h-auto rounded-3xl outline-1 outline-black p-4 sm:p-6 md:p-8 lg:p-[25px] mx-auto">
        <div className="flex text-black text-2xl sm:text-3xl font-medium font-['Poppins'] leading-9 sm:leading-10 mb-4 sm:mb-[18px]">
          {heading}
        </div>
        <div className="w-full h-0 outline-2 outline-offset-[-1px] outline-gray-500/50 mb-4"></div>
        <div className="flex  flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col mb-4 md:mb-0">
            <div className="flex w-full max-w-full sm:max-w-sm md:max-w-[330px] h-auto text-neutral-800/80 text-base font-medium font-['Montserrat'] tracking-wide mb-3">
              <p className="line-clamp-5">{description}</p>
            </div>
            <div className="flex w-full sm:mx-auto mx-auto lg:mx-0 max-w-[227px] h-[44px] px-6 py-3 bg-[#000000BF] text-slate-50 text-base sm:text-xl font-medium uppercase leading-normal tracking-wide justify-center items-center cursor-pointer">
              <button onClick={() => navigate(link)} className="">
                Know More
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-40 h-36 sm:w-48 sm:h-44 md:w-[200px] md:h-[184px] object-contain"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessBranches;
