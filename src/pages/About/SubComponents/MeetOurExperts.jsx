import React from 'react';

const MeetOurExperts = ({ mapList }) => {
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 py-6 mb-12">
      <div className="flex w-full justify-center items-center mb-8 sm:mb-12">
        <div className="text-3xl bg-black w-full rounded-lg text-white sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Poppins'] leading-tight tracking-wide text-center">
          Meet Our Experts
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {mapList.map((expert, idx) => (
          <div
            key={expert.name + idx}
            className="flex flex-col w-full max-w-[400px] h-auto mx-auto bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden"
          >
            {/* Profile Image */}
            <img
              className="w-full h-[260px] object-cover object-top rounded-t-2xl"
              src={expert.image}
              alt={expert.name}
            />
            {/* Name, Position, LinkedIn */}
            <div className="flex items-center justify-between w-full px-7 pt-7 pb-3">
              <div>
                <div className="text-black text-lg sm:text-xl font-bold font-['Poppins'] leading-tight">
                  {expert.name}
                </div>
                <div className="text-black/60 text-sm font-semibold font-['Montserrat'] leading-tight">
                  {expert.position}
                </div>
              </div>
              <a
                href={expert.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 ml-2 cursor-pointer transition-transform duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <img
                  className="h-7 w-7 object-contain"
                  src="/Images/linekdinSymbol.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
            {/* Divider */}
            <div className="w-full border-t border-neutral-200 my-2" />
            {/* Description */}
            <div className="flex w-full text-neutral-800 text-sm font-medium font-['Montserrat'] tracking-wide text-center justify-center px-7 pb-7 min-h-[60px]">
              {expert.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurExperts;
