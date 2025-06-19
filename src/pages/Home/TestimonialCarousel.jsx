import React from 'react';

function TestimonialCarousel() {
  const testimonials = [
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      rating: 4.9,
      review:
        '“Lorem ipsum dolor sit amet consectetur. Dui eget nulla odio tempus risus. Mauris fringilla convallis sit auctor morbi mollis.”',
      img: '/Images/photo.png',
    },
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      rating: 4.9,
      review:
        '“Lorem ipsum dolor sit amet consectetur. Dui eget nulla odio tempus risus. Mauris fringilla convallis sit auctor morbi mollis.”',
      img: '/Images/photo.png',
    },
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      rating: 4.9,
      review:
        '“Lorem ipsum dolor sit amet consectetur. Dui eget nulla odio tempus risus. Mauris fringilla convallis sit auctor morbi mollis.”',
      img: '/Images/photo.png',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={idx === 2 ? 'md:col-span-2 md:flex md:justify-center lg:col-span-1' : ''}
          >
            <div className="bg-[#222] rounded-lg flex flex-col items-center p-6 min-w-[260px] max-w-md w-full shadow-md relative mx-auto">
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white -mt-12 mb-4 bg-white"
              />
              <div className="flex-1 text-left w-full">
                <div className="flex items-center justify-between">
                  <span className="font-[Poppins] font-bold text-white text-lg">{t.name}</span>
                  <span className="flex items-center gap-1 text-yellow-400 font-[Poppins] font-semibold text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                    {t.rating}
                  </span>
                </div>
                <div className="font-[Montserrat] font-normal text-gray-300 text-sm mb-1">
                  {t.position}
                </div>
                <div className="font-[Montserrat] font-normal text-gray-100 text-sm mt-2">
                  {t.review}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
