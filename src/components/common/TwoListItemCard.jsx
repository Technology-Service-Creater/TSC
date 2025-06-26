import React from 'react';

function TwoListItemCard({ title, points }) {
  return (
    <div className="w-[350px] h-[450px] px-6 pt-9 pb-9 bg-gradient-to-br from-purple-500/10 to-sky-500/10 rounded-[25px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] flex flex-col gap-4">
      {/* Title */}
      <h2 className="text-black text-xl font-medium font-['Montserrat']">{title}</h2>

      {/* Divider */}
      <div
        className="w-[275px] h-[5px] rounded-full transform -rotate-[0.1deg]"
        style={{
          background: 'linear-gradient(to right, rgba(164, 104, 218, 1), rgba(20, 155, 245, 1))',
        }}
      />

      {/* Points */}
      {points.map((point, index) => (
        <div key={index} className="space-y-1">
          <p className="text-black text-sm font-bold font-['Montserrat'] leading-tight tracking-wide">
            {point.title}
          </p>
          <p className="text-black text-sm font-medium font-['Montserrat'] leading-tight tracking-wide">
            {point.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TwoListItemCard;
