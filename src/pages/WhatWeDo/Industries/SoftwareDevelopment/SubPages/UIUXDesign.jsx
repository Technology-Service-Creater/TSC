import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/UI_UXDigitalExperience_Hero.jpg'; // Replace with your actual image
const introImg = '/Images/UI_UXDigitalExperience-1.jpg'; // Replace with your actual image

const uiDesignCards = [
  {
    title: 'Visual Hierarchy',
    description:
      "Guide users' attention by organizing and prioritizing elements using size, color, contrast, and spacing.",
  },
  {
    title: 'Consistency',
    description:
      'Maintain a cohesive design by using uniform colors, fonts, buttons, and icons throughout the application.',
  },
  {
    title: 'Typography',
    description:
      'Select readable, aesthetically pleasing fonts. Use size and weight variations to establish contrast and hierarchy.',
  },
  {
    title: 'Color Theory',
    description:
      'Leverage colors to convey meaning, emphasize elements, and enhance aesthetics. Consider color psychology and ensure accessibility through sufficient contrast.',
  },
  {
    title: 'Responsive Design',
    description:
      'Design adaptable interfaces for various devices and screen sizes using flexible layouts and media queries.',
  },
  {
    title: 'Icons & Imagery',
    description:
      'Use intuitive icons and high-quality images to support content and enhance user understanding.',
  },
];

const uxDesignCards = [
  {
    title: 'User Research',
    description:
      "Conduct surveys, interviews, and usability tests to understand users' needs, behaviors, and motivations.",
  },
  {
    title: 'User Personas',
    description:
      'Develop detailed personas to guide design decisions and ensure user-centered experiences.',
  },
  {
    title: 'User Flows',
    description:
      'Map out user journeys to identify pain points and optimize interactions for seamless navigation.',
  },
  {
    title: 'Information Architecture',
    description:
      'Organize content logically with clear navigation, intuitive labels, and structured categories.',
  },
  {
    title: 'Wireframing & Prototyping',
    description:
      'Create visual blueprints and interactive prototypes using tools like Figma, Sketch, or Adobe XD.',
  },
  {
    title: 'Usability Testing',
    description:
      'Test designs with real users, gather feedback, and refine the experience based on insights.',
  },
];

const digitalExperienceCards = [
  {
    title: 'Personalization',
    description:
      'Customize digital experiences based on user behavior, preferences, and context to enhance engagement.',
  },
  {
    title: 'Microinteractions',
    description:
      'Add subtle animations and feedback to make interactions more responsive and enjoyable.',
  },
  {
    title: 'Performance',
    description:
      'Optimize speed and responsiveness for a seamless user experience, reducing load times and lag.',
  },
  {
    title: 'Emotional Design',
    description:
      'Use visuals, colors, and tone to evoke positive emotions and create memorable experiences.',
  },
  {
    title: 'Feedback & Iteration',
    description:
      'Continuously gather feedback from users and stakeholders, refining the experience through iterative improvements.',
  },
];

function UIUXDesign() {
  return (
    <div className="bg-[#F8F8FF] pb-12">
      {/* Hero Section */}
      <PageHeroSection
        title="UI/UX & Digital Experience"
        description="User Interface (UI) and User Experience (UX) design are essential for creating engaging, intuitive, and effective digital experiences."
        bgImage={heroImg}
      />

      {/* Intro Section */}
      <IntroSection
        imageSrc={introImg}
        title="Welcome to TSC - A Leading Web Development Company in India"
        description="TSC is a 100% trusted and registered web development company in India, offering top-tier web design and development services. We specialize in creating multi-functional web portals that drive ROI-driven results. Our well-designed and highly functional websites help businesses establish a strong online presence."
        reverse={false}
      />

      {/* UI Design Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        UI Design
      </h2>
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiDesignCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* UX Design Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        UX Design
      </h2>
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uxDesignCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Digital Experience Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Digital Experience
      </h2>
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalExperienceCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}

export default UIUXDesign;
