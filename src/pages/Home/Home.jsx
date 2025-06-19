import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ArrowUp } from 'lucide-react';

const images = [
  {
    src: '/Images/img1.png',
    title: 'Graphics Design',
    desc: 'Creative visual solutions for your brand. Stand out with unique graphics.',
  },
  {
    src: '/Images/img2.png',
    title: 'Ui/Ux Design',
    desc: 'User-centered interfaces for web and mobile. Enhance user experience.',
  },
  {
    src: '/Images/img3.png',
    title: 'Digital Marketing',
    desc: 'Grow your business online with targeted campaigns and analytics.',
  },
  {
    src: '/Images/img4.png',
    title: 'Motion Graphics',
    desc: 'Engaging animations to tell your story and captivate your audience.',
  },
  {
    src: '/Images/img5.png',
    title: 'Web Development',
    desc: 'Robust, scalable websites tailored to your business needs.',
  },
];

const services = [
  {
    title: 'Digital Marketing ',
  },
  {
    title: 'Customer Experience',
  },

  {
    title: 'Email& Performance Marketing',
  },
  {
    title: 'Integrated M. & Brand Strategy',
  },

  {
    title: 'E-Commerce Marketing',
  },
  {
    title: 'Software Development ',
  },
  {
    title: 'Market Analysis & Research',
  },

  {
    title: 'Event-Based Marketing',
  },
  {
    title: 'AI & Automation Marketing',
  },

  {
    title: 'Design Services',
  },
];

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
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      rating: 4.9,
      review:
        '“Lorem ipsum dolor sit amet consectetur. Dui eget nulla odio tempus risus. Mauris fringilla convallis sit auctor morbi mollis.”',
      img: '/Images/photo.png',
    },
  ];
  const [start, setStart] = React.useState(0);
  const visible = 3;

  // Auto-slide
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStart(prev => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get visible testimonials (looping)
  const getVisible = () => {
    const arr = [];
    for (let i = 0; i < visible; i++) {
      arr.push(testimonials[(start + i) % testimonials.length]);
    }
    return arr;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">
        {getVisible().map((t, idx) => (
          <div
            key={idx}
            className="bg-[#222] rounded-lg flex flex-col sm:flex-row items-center sm:items-start p-6 flex-1 min-w-[260px] max-w-md shadow-md relative"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white -mt-12 sm:mt-0 sm:mr-6 bg-white"
            />
            <div className="flex-1 text-left mt-4 sm:mt-0">
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
        ))}
      </div>
    </div>
  );
}

function Home() {
  // Responsive visible count: 1 on mobile, 2 on tablet, 3 on desktop
  const [visibleCount, setVisibleCount] = useState(3);
  const [startIdx, setStartIdx] = useState(0);
  const [selectedService, setSelectedService] = useState(0);

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1); // Mobile: 1 image
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet: 2 images
      } else {
        setVisibleCount(3); // Desktop: 3 images
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + visibleCount < images.length;

  const handlePrev = () => {
    if (canGoLeft) setStartIdx(startIdx - 1);
  };
  const handleNext = () => {
    if (canGoRight) setStartIdx(startIdx + 1);
  };

  // Progress bar calculation
  const totalSteps = images.length - visibleCount + 1;
  const progress = totalSteps > 1 ? (startIdx / (totalSteps - 1)) * 100 : 0;

  const visibleImages = images.slice(startIdx, startIdx + visibleCount);

  return (
    <>
      <div>
        {/* Section1 */}
        <div className="relative bg-[url('/Images/home_hero.png')] bg-cover bg-center bg-no-repeat h-[500px] sm:h-[550px] lg:h-[616px] overflow-hidden">
          {/* Dark backdrop overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-center gap-4 sm:gap-6 h-full w-full lg:w-[60%] px-6 sm:pl-8 lg:pl-40 text-white">
            {/* Main heading with enhanced styling */}
            <div className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Seamless Services,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
                Ultimate Convenience!
              </span>
            </div>

            {/* Subtitle with improved typography */}
            <div className="font-[Montserrat] font-normal text-base sm:text-lg lg:text-lg text-gray-200 max-w-lg lg:max-w-xl leading-relaxed">
              We craft innovative digital solutions tailored to your needs. Our expert team ensures
              seamless execution, top-notch quality, and continuous support to drive your success.
            </div>

            {/* Enhanced CTA button */}
            <div className="mt-2 sm:mt-4">
              <button className="font-[Montserrat] font-semibold flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white text-sm sm:text-base hover:shadow-2xl hover:shadow-[#A468DA]/30 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#A468DA] focus:ring-opacity-50 active:scale-95">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#A468DA]/20 to-[#149BF5]/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-[#149BF5]/20 to-[#A468DA]/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
