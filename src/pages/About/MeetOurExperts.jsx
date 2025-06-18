import React from 'react';

const MeetOurExperts = ({ mapList }) => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 py-6 bg-[#F5FEFF] rounded-[20px]">
        <div className="flex bg-black w-[1200px] h-[56px] justify-center  items-center  mb-12  ">
          <div className="text-white text-3xl font-medium  leading-[50px] tracking-wide">
            Meet Our Experts
          </div>
        </div>
        <div className="w-full grid grid-cols-3 h-[953px] gap-[124px] mb-[53px]   ">
          {mapList.map(expert => (
            <div
              key={expert.name}
              className="flex w-[350px] h-[450px] flex-col  rounded-2xl bg-white "
            >
              <div className="flex mb-6">
                <img className="w-[340px] h-[239px] rounded-2xl " src={expert.image} alt="" />
              </div>
              <div className="flex flex-row mb-[30px] justify-between">
                <div className="flex flex-col w-[199px]  ">
                  <div className="flex h-[14px] text-black text-xl font-medium font-['Montserrat'] leading-[50px] tracking-tight mb-[15px]">
                    {expert.name}
                  </div>
                  <div className="flex text-black/50 text-base font-medium font-['Montserrat'] leading-[50px] tracking-tight">
                    {expert.position}
                  </div>
                </div>
                <div className="flex items-center">
                  <img className="h-12 w-12" src="/Images/linekdinSymbol.png" alt="" />
                </div>
              </div>
              {/* <div className="flex w-full h-2 bg-gray-400"></div> */}
              <div className="self-stretch h-0  outline-2 outline-offset-[-1px] outline-gray-500/50 mb-[24px]"></div>
              <div className="flex w-[236px] h-[40px] text-neutral-800 text-base font-medium font-['Montserrat'] tracking-wide">
                {expert.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetOurExperts;
