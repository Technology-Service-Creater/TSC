// This file has been merged into AboutTSCSection.jsx

import React from 'react';
import connectImage from '../../../../public/Images/img2.png';

const ConnectAndGrowSection = () => (
  <section className="w-full bg-white py-12 px-4 flex flex-col md:flex-row-reverse items-center gap-8 max-w-6xl mx-auto rounded-2xl shadow-md my-8">
    <div className="flex-1">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Poppins'] mb-4 text-gray-900">
        Connect and Grow
      </h2>
      <p className="text-base sm:text-lg font-['Montserrat'] text-gray-700">
        Partner with us to unlock new opportunities. We provide innovative solutions and expert
        support to help your business thrive in a competitive world.
      </p>
    </div>
    <div className="flex-1 flex justify-center">
      <img
        src={connectImage}
        alt="Connect and Grow"
        className="rounded-xl w-full max-w-md object-cover shadow-lg"
      />
    </div>
  </section>
);

export default ConnectAndGrowSection;
