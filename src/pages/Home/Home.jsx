import React, { useState, useEffect } from 'react';
import ServicesSection from './ServicesSection';
import SectionHero from './SubComponent/SectionHero';
import SectionInnovate from './SubComponent/SectionInnovate';
import SectionWhyChooseUs from './SubComponent/SectionWhyChooseUs';
import SectionTestimonials from './SubComponent/SectionTestimonials';

const images = [
  {
    src: '/Images/img1.png',
    title: 'Graphics Design',
    desc: 'Creative visual solutions for your brand. Stand out with unique graphics.',
  },
  {
    src: '/Images/VirtualHybridEvents_1.jpg',
    title: 'Ui/Ux Design',
    desc: 'User-centered interfaces for web and mobile. Enhance user experience.',
  },
  {
    src: '/Images/AIDrivenMarketAnalytics-1.png',
    title: 'Digital Marketing',
    desc: 'Grow your business online with targeted campaigns and analytics.',
  },
  {
    src: '/Images/AIAutomationMarketing-2.png',
    title: 'Motion Graphics',
    desc: 'Engaging animations to tell your story and captivate your audience.',
  },
  {
    src: '/Images/AffiliateMarketing-1.jpg',
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

  return (
    <>
      <div>
        <SectionHero />
        <SectionInnovate
          images={images}
          visibleCount={visibleCount}
          startIdx={startIdx}
          handlePrev={handlePrev}
          handleNext={handleNext}
          canGoLeft={canGoLeft}
          canGoRight={canGoRight}
          progress={progress}
        />
        <ServicesSection
          services={services}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          images={images}
          visibleCount={visibleCount}
          startIdx={startIdx}
          handlePrev={handlePrev}
          handleNext={handleNext}
          canGoLeft={canGoLeft}
          canGoRight={canGoRight}
          progress={progress}
        />
        <SectionWhyChooseUs />
        <SectionTestimonials />
      </div>
    </>
  );
}

Home.propTypes = {};

export default Home;
