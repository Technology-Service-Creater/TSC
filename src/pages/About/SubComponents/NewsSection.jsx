import React from 'react';

const NewsSection = () => {
  const img = [
    '/Images/Container-1.png',
    '/Images/Container-2.png',
    '/Images/Container-3.png',
    '/Images/Container-4.png',
    '/Images/Container-5.png',
    '/Images/Container-6.png',
  ];
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 mb-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-neutral-800 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-tight mb-4 md:mb-0">
          Read what Indian news has to{' '}
          <span className="inline-flex flex-col items-start align-top">
            <span className="text-gray-500">say about us</span>
            <img
              src="/Images/Image.png"
              alt="underline"
              className="relative -top-6 -left-[15.5em] mt-2 h-full w-full max-w-[150px] sm:max-w-full"
            />
          </span>
        </h2>
        <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
          Explore More <span className="ml-2">→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Placeholder for news cards */}
        {img.map((img, index) => (
          <div key={index} className="bg-[#383838] rounded-lg shadow-md h-80 w-full">
            <img
              src={img}
              alt={img}
              className="h-full w-full object-cover object-left rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
