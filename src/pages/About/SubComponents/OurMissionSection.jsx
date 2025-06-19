import React from 'react';

const OurMissionSection = ({ heading1, description1, image, description2, description3 }) => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 py-6 ">
        <div className="flex bg-black w-full h-20 md:h-[80px] justify-center items-center mb-8 md:mb-12 rounded-xl">
          <div className="text-white text-2xl md:text-4xl font-bold font-['Poppins'] px-4 md:px-[89px] py-4 md:py-[28px]">
            Our Mission
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-6 md:gap-4">
          <div className="flex flex-col max-w-full lg:max-w-[320px] h-auto mb-6 lg:mb-0">
            <div className="text-black text-xl md:text-2xl font-bold font-['Poppins'] leading-7 mb-4 md:mb-8">
              {heading1}
            </div>
            <div className="text-black text-base font-medium font-['Montserrat'] leading-loose tracking-wide">
              {description1}
            </div>
          </div>
          <div className="w-full lg:w-[424px] flex justify-center items-center">
            <img
              src={image}
              alt="Mission Visual"
              className="w-full h-48 sm:h-64 md:h-72 lg:h-[330px] rounded-3xl object-cover object-center"
            />
          </div>
          <div className="flex items-end w-full lg:w-auto">
            <div className="w-full lg:w-[411px] h-auto pl-0 lg:pl-10 mt-6 lg:mt-0">
              <ul className="list-disc pl-2">
                <li className="text-base md:text-lg">{description2}</li>
                <li className="text-base md:text-lg">{description3}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMissionSection;
