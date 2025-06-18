import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessBranches = ({ displayElement }) => {
  let { heading, description, image, link } = displayElement;

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-[590px] h-[300px] rounded-3xl outline-1 outline-offset-[-1px] outline-black p-[25px]">
        <div className="flex text-black text-3xl font-medium font-['Poppins'] leading-10 mb-[18px]">
          {heading}
        </div>
        <div className="w-[560px] h-0  outline-2 outline-offset-[-1px] outline-gray-500/50 mb-4"></div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ">
            <div className="flex w-[260px] h-[120px] text-neutral-800/80 text-base font-medium font-['Montserrat'] tracking-wide mb-[12px]   ">
              <p className="line-clamp-5">{description}</p>
            </div>
            <button
              onClick={() => navigate({ link })}
              className=" flex w-[227px] h-[44px] px-[40px] py-[15px] bg-[#000000BF] text-slate-50 text-xl font-medium  uppercase leading-normal tracking-wide justify-center items-center"
            >
              <div className="">Know More</div>
            </button>
          </div>
          <div className="flex">
            <img className="w-[200px] h-[184px]" src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessBranches;
