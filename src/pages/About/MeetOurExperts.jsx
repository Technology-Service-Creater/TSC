import React from 'react';

const MeetOurExperts = ({ mapList }) => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 py-6 rounded-[20px] mb-12">
        <div className="flex bg-black w-full h-14 sm:h-[56px] justify-center items-center mb-8 sm:mb-12 rounded-xl">
          <div className="text-white text-2xl sm:text-3xl font-medium leading-[40px] sm:leading-[50px] tracking-wide">
            Meet Our Experts
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-[104px]">
          {mapList.map(expert => (
            <div
              key={expert.name}
              className="flex flex-col w-full max-w-[350px] h-auto mx-auto px-2 py-1 rounded-2xl bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]"
            >
              <div className="flex mb-6">
                <img
                  className="w-full max-w-[340px] h-[180px] sm:h-[200px] md:h-[239px] rounded-2xl object-cover"
                  src={expert.image}
                  alt=""
                />
              </div>
              <div className="flex flex-row mb-6 justify-between">
                <div className="flex flex-col w-2/3">
                  <div className="flex text-black text-lg sm:text-xl font-medium font-['Montserrat'] leading-[30px] sm:leading-[50px] tracking-tight mb-2 sm:mb-[15px]">
                    {expert.name}
                  </div>
                  <div className="flex text-black/50 text-sm sm:text-base font-medium font-['Montserrat'] leading-[30px] sm:leading-[50px] tracking-tight">
                    {expert.position}
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 sm:h-12 sm:w-12"
                    src="/Images/linekdinSymbol.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="self-stretch h-0 outline-2 outline-offset-[-1px] outline-gray-500/50 mb-6"></div>
              <div className="flex w-full text-neutral-800 text-sm sm:text-base font-medium font-['Montserrat'] tracking-wide">
                {expert.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 py-6 rounded-[20px] ">
        <div className="flex bg-black w-[1200px] h-[56px] justify-center  items-center  mb-12  ">
          <div className="text-white text-3xl font-medium  leading-[50px] tracking-wide">
            Meet Our Experts
          </div>
        </div>
        <div className="w-full grid grid-cols-3 h-[953px] gap-[104px]    ">
          {mapList.map(expert => (
            <div
              key={expert.name}
              className="flex w-[350px] h-[450px] flex-col px-2 py-1 rounded-2xl bg-white x] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]"
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

              <div className="self-stretch h-0  outline-2 outline-offset-[-1px] outline-gray-500/50 mb-[24px]"></div>
              <div className="flex w-[236px] h-[40px] text-neutral-800 text-base font-medium font-['Montserrat'] tracking-wide">
                {expert.description}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default MeetOurExperts;
