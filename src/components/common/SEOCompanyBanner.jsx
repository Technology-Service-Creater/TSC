import React from 'react';

function SEOCompanyBanner({ SEOCompanyImage, SEOCompanyTitle, SEOCompanyDescription }) {
  return (
    <section
      className="w-full relative my-10 max-w-[1194px] h-auto md:h-[408px] mx-auto flex flex-col md:flex-row  gap-4 md:gap-0 overflow-hidden ">
      <div className="flex-1 flex flex-col  justify-center p-4 md:p-8 gap-4 md:gap-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-['Poppins']  text-[#181A1B]">
          {SEOCompanyTitle}
        </h2>
        <p className="text-sm sm:text-base md:text-[20px] font-['Montserrat'] text-[#181A1B]">
          {SEOCompanyDescription}
        </p>
      </div>
      <div className="flex-1 min-h-[180px] md:min-h-0 flex  order-1 md:order-none">
        <img
          src={SEOCompanyImage}
          alt="Why TSC"
          className="w-full object-cover  min-h-[180px] max-h-[220px] md:min-h-0 md:max-h-none "
        />
      </div>
    </section>
  );
}

export default SEOCompanyBanner;
