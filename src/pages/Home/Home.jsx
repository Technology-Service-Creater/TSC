import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ArrowUp } from 'lucide-react';
import ImageCard from './ImageCard';
import ServicePill from './ServicePill';
import TestimonialCarousel from './TestimonialCarousel';

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
        {/* Section2 */}
        <div className="py-16 px-6 sm:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl mb-4">
                Innovate
              </div>
              <div className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-6 leading-tight">
                Transforming Ideas into <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
                  Innovative Solutions
                </span>
              </div>
              <div className="font-[Montserrat] font-normal text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our team brings unparalleled expertise and dedication to every project. We
                prioritize quality and ongoing support to ensure your success.
              </div>
            </div>

            {/* Image Carousel Section */}
            <div className="flex flex-col items-center">
              {/* Images Row */}
              <div
                className={`flex gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto ${visibleCount === 1 ? 'justify-center' : ''}`}
              >
                {visibleImages.map(img => (
                  <ImageCard key={img.src} img={img} visibleCount={visibleCount} />
                ))}
              </div>
              <div className="flex items-center w-full max-w-6xl mx-auto mt-8">
                <div className="flex-1 relative h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#A468DA] to-[#149BF5] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex gap-3 ml-6">
                  <button
                    onClick={handlePrev}
                    disabled={!canGoLeft}
                    className="p-3 rounded-full bg-gray-900 text-white shadow-lg hover:bg-[#A468DA] transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canGoRight}
                    className="p-3 rounded-full bg-gray-900 text-white shadow-lg hover:bg-[#149BF5] transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section3 */}
        <div className="py-16 px-6 sm:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl mb-4">
                Our Services
              </div>
              <div className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-6 leading-tight">
                Comprehensive Development <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
                  Solutions Tailored for You
                </span>
              </div>
              <div className="font-[Montserrat] font-normal text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Our services encompass a wide range of development solutions tailored to your needs.
                From web to mobile. We ensure your projects are executed with precision and
                creativity.
              </div>
            </div>

            {/* Services Pills */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12">
              {services.map((service, idx) => (
                <ServicePill
                  key={idx}
                  title={service.title}
                  selected={selectedService === idx}
                  onClick={() => setSelectedService(idx)}
                />
              ))}
            </div>

            {/* Image Carousel Section */}
            <div className="flex flex-col items-center">
              {/* Images Row */}
              <div
                className={`flex gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto ${visibleCount === 1 ? 'justify-center' : ''}`}
              >
                {visibleImages.map(img => (
                  <ImageCard key={img.src} img={img} visibleCount={visibleCount} />
                ))}
              </div>
              <div className="flex items-center w-full max-w-6xl mx-auto mt-8">
                <div className="flex-1 relative h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#A468DA] to-[#149BF5] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex gap-3 ml-6">
                  <button
                    onClick={handlePrev}
                    disabled={!canGoLeft}
                    className="p-3 rounded-full bg-gray-900 text-white shadow-lg hover:bg-[#A468DA] transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canGoRight}
                    className="p-3 rounded-full bg-gray-900 text-white shadow-lg hover:bg-[#149BF5] transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section4 */}
        <div className="py-12 px-3 sm:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-10 lg:mb-16">
              <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-lg sm:text-2xl lg:text-3xl mb-3">
                Why Choose Us?
              </div>
              <div className="font-[Poppins] font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 leading-tight">
                Comprehensive Development <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
                  Solutions Tailored for You
                </span>
              </div>
              <div className="font-[Montserrat] font-normal text-sm sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Our team brings unparalleled expertise and dedication to every project. We
                prioritize quality and provide ongoing support to ensure your success.
              </div>
            </div>
            {/* Excellence & Quality Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
              <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
                <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-lg sm:text-2xl lg:text-3xl mb-3 text-center lg:text-left">
                  Excellence
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="font-[Poppins] font-bold text-xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 leading-tight">
                      Expertise
                    </div>
                    <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                      Skilled professionals committed to your project&rsquo;s success.
                    </div>
                  </div>
                  <div className="flex-1 mt-4 sm:mt-0 text-center lg:text-left">
                    <div className="font-[Poppins] font-bold text-xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 leading-tight">
                      Quality
                    </div>
                    <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                      Delivering top-notch services that exceed expectations.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 order-1 lg:order-2">
                <img
                  src="/Images/img6.png"
                  alt="img6"
                  className="rounded-xl object-cover w-full max-w-xs sm:max-w-sm lg:max-w-md"
                />
              </div>
            </div>
            {/* Achievements Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                <img
                  src="/Images/img7.jpg"
                  alt="img7"
                  className="rounded-xl object-cover w-full max-w-xs sm:max-w-sm lg:max-w-md"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-lg sm:text-2xl lg:text-3xl mb-3">
                    Achievements
                  </div>
                  <div className="font-[Poppins] font-bold text-2xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
                    Our Impact in Numbers
                  </div>
                  <div className="font-[Montserrat] font-normal text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We take pride in delivering exceptional results. Our commitment to excellence is
                    reflected in our impressive statistics.
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 items-start text-center sm:text-left">
                  <div className="flex-1">
                    <div className="font-[Poppins] font-bold text-2xl sm:text-4xl text-gray-900 mb-1">
                      95%
                    </div>
                    <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                      Customer satisfaction rate based on recent surveys.
                    </div>
                  </div>
                  <div className="flex-1 mt-4 sm:mt-0">
                    <div className="font-[Poppins] font-bold text-2xl sm:text-4xl text-gray-900 mb-1">
                      200
                    </div>
                    <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                      Projects successfully completed in the last year.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section5 */}
        <div className="bg-white pt-0">
          {/* Testimonial Header */}
          <div className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] p-6 sm:p-10 bg-[#1E2222] text-white">
            Our Testimonials
          </div>
          {/* Rating & Review Row */}
          <div className="max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-8 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-end gap-2">
              <span className="text-base sm:text-lg font-[Poppins] font-bold text-[#222]">
                Rating & Review
              </span>
            </div>
          </div>
          {/* Testimonial Carousel */}
          <div className="px-2 sm:px-8 md:px-16">
            <TestimonialCarousel />
          </div>
          {/* Career at TSC Section */}
          <div className="max-w-2xl md:max-w-4xl mx-auto mt-12 mb-8 px-2 sm:px-4">
            <div className="border border-[#1E2222] rounded-xl py-8 sm:py-10 px-2 sm:px-12 flex flex-col items-center text-center">
              <h1 className="font-[Poppins] font-bold text-2xl sm:text-3xl mb-2 sm:mb-4">
                Career at TSC
              </h1>
              <h2 className="font-[Montserrat] font-normal text-base sm:text-lg mb-6 sm:mb-8">
                We invite you to supercharge your potential. Find what inspires and drives you. Find
                your Spark.
              </h2>
              <button className="uppercase font-[Montserrat] font-normal bg-[#1E2222] text-white px-6 sm:px-8 py-2 rounded-full flex items-center gap-2 sm:gap-3 text-sm sm:text-base hover:bg-[#333] transition">
                Visit a career page{' '}
                <ArrowUp className="size-5 sm:size-6 text-black transform rotate-45 bg-white rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
