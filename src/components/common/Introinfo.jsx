import React from 'react';

export default function Introinfo({
  title = 'Our Approach to Sponsorship Activation',
  description = `A successful sponsorship isn’t just about putting your name on an event—it’s about creating
  real engagement. The key? Delivering value to your audience while meeting the expectations
  of the sponsored event or brand.`,
  dividerColor = 'purple-500',
  gradientFrom = 'from-purple-500/10',
  gradientTo = 'to-sky-500/10',
}) {
  return (
    <div
      className={`w-full max-w-[1200px]
 my-10 mx-auto px-6 py-8 bg-gradient-to-b ${gradientFrom} ${gradientTo} rounded-3xl flex flex-col justify-center items-center gap-6`}
    >
      <h2 className="text-center text-black text-3xl font-bold font-['Poppins']  leading-10">
        {title}
      </h2>

      <div className={`w-full max-w-4xl border-t-4 border-${dividerColor}`}></div>

      <p className="text-center text-black text-m font-['Montserrat']  leading-relaxed tracking-wide max-w-3xl">
        {description}
      </p>
    </div>
  );
}
