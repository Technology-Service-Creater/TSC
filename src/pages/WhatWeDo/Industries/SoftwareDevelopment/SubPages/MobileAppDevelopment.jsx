import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/MobileAppDevelopment_Hero.jpg'; // Replace with your actual image
const introImg = '/Images/MobileAppDevelopment-1.jpg'; // Replace with your actual image

const serviceCards = [
  {
    title: 'Web Development',
    description:
      "Elevate your online presence with our customized web development solutions. Whether it's a dynamic e-commerce platform or a sleek corporate portal, our expert team leverages cutting-edge technologies to build websites that captivate, engage, and convert.",
  },
  {
    title: 'UI/UX Design',
    description:
      'Create seamless and intuitive user experiences with our UI/UX design expertise. We blend creativity with user-centric design principles to craft visually stunning and highly functional interfaces that enhance engagement and usability.',
  },
  {
    title: 'Branding',
    description:
      'Establish a powerful and memorable brand identity with our branding solutions. From logo design to brand storytelling, we translate your vision into compelling visuals and narratives that leave a lasting impression.',
  },
  {
    title: 'App Development',
    description:
      'Transform ideas into powerful mobile applications with our expert development services. From concept to deployment, we create high-performance apps that captivate audiences and drive business growth.',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Step into the future with AI-driven solutions. Our expertise in data analysis, predictive modeling, and automation empowers businesses to gain valuable insights, improve efficiency, and stay ahead in the digital era.',
  },
];

const MobileAppDevelopment = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Mobile App Development"
      description="TSC is rapidly evolving with innovative solutions, making a significant impact in the market."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Welcome to TSC - A Leading Web Development Company in India"
      description="TSC is a 100% trusted and registered web development company in India, offering top-tier web design and development services. We specialize in creating multi-functional web portals that drive ROI-driven results. Our well-designed and highly functional websites help businesses establish a strong online presence."
      reverse={false}
    />

    {/* Explore Our Services */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Explore Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default MobileAppDevelopment;
