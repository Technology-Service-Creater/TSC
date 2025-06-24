import React from 'react';

export default function SocialCard({ Icon, title, subtitle, description, bulletPoints = [] }) {
  return (
    <div className="w-[330px] h-[440px] px-6 py-8 bg-gradient-to-b from-purple-500/10 to-sky-500/10 rounded-3xl shadow-lg flex flex-col items-center gap-6">
      {/* Icon Section */}
      <div className="flex items-center justify-center text-black">
        {Icon && <Icon className="text-5xl" />}
      </div>

      {/* Title Section */}
      <div className="text-center w-full">
        <h3 className="text-black font-[Montserrat] font-semibold text-[20px] leading-[30px] tracking-[0.06em]">
          {title}
        </h3>
        <p className="text-black/75 font-[Montserrat] font-medium text-[16px] leading-[24px] tracking-[0.06em]">
          {subtitle}
        </p>
      </div>

      {/* Description Section */}
      <div className="text-black font-medium font-[Montserrat] space-y-2 px-2 w-full flex-1 overflow-hidden">
        <p className="text-[14px] leading-[17px] tracking-[0.06em] line-clamp-3">{description}</p>

        <ul className="space-y-1 text-[14px] leading-[17px] tracking-[0.06em] list-none">
          {bulletPoints.map((point, index) => (
            <li key={index}>✔ {point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
