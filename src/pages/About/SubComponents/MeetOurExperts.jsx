import React from 'react';

const MeetOurExperts = ({ mapList }) => {
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 py-6 rounded-[20px] mb-12">
      <div className="flex bg-black w-full h-14 sm:h-[56px] justify-center items-center mb-8 sm:mb-12 rounded-xl">
        <div className="text-white text-2xl sm:text-3xl font-medium leading-[40px] sm:leading-[50px] tracking-wide">
          Meet Our Experts
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-[74px]">
        {mapList.map(expert => (
          <div
            key={expert.name}
            className="flex flex-col w-full max-w-[350px] h-auto mx-auto px-2 py-1 rounded-2xl bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]"
          >
            <div className="flex mb-3">
              <img
                className="w-full max-w-[340px] h-[180px] sm:h-[200px] md:h-[239px] rounded-2xl object-cover"
                src={expert.image}
                alt={expert.name}
              />
            </div>

            <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
              <div className="flex flex-col min-w-0">
                <div className="text-black text-base sm:text-lg md:text-xl font-semibold font-['Montserrat'] leading-tight truncate">
                  {expert.name}
                </div>
                <div className="text-black/50 text-xs sm:text-sm md:text-base font-medium font-['Montserrat'] leading-tight mt-1 truncate">
                  {expert.position}
                </div>
              </div>
              <a
                href={expert.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 ml-3 cursor-pointer"
                aria-label="LinkedIn"
              >
                <img
                  className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 object-contain"
                  src="/Images/linekdinSymbol.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className="self-stretch h-0 border-t border-gray-300 mb-4 sm:mb-6"></div>
            <div className="flex w-full text-neutral-800 text-sm sm:text-base font-medium font-['Montserrat'] tracking-wide">
              {expert.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurExperts;
