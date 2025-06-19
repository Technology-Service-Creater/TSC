import React from 'react';
import whyTSCImage from '../../../../public/Images/aboutHero.png';

const WhyTSCSection = () => (
  <section className="w-full bg-white py-12 px-4 flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto rounded-2xl shadow-md my-8">
    <div className="flex-1">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Poppins'] mb-4 text-gray-900">
        Why TSC?
      </h2>
      <p className="text-base sm:text-lg font-['Montserrat'] text-gray-700">
        We prioritize excellence, innovation, and customer satisfaction. Our expert team ensures
        top-quality services tailored to your needs, helping you achieve success effortlessly.
      </p>
    </div>
    <div className="flex-1 flex justify-center">
      <img
        src={whyTSCImage}
        alt="Why TSC"
        className="rounded-xl w-full max-w-md object-cover shadow-lg"
      />
    </div>
  </section>
);

export default WhyTSCSection;
