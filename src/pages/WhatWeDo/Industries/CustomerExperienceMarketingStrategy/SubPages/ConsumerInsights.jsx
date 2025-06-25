import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const featureCards = [
  {
    title: 'Get Started with Expert Consulting',
    description:
      'Gain expert guidance on solution assessment, architecture planning, implementation, and training to maximize your customer insights strategy.',
  },
  {
    title: 'Discover Customer Insights with AI',
    description:
      'Unify transactional, demographic, and behavioral data using AI-powered identity management for a comprehensive view of your customers.',
  },
  {
    title: 'Enhance Data & Predict Customer Intent',
    description:
      'Leverage diverse data sources, including proprietary intelligence, and use prebuilt AI models to unlock valuable customer predictions.',
  },
  {
    title: 'Create Smarter Customer Segments',
    description:
      'Build dynamic customer segments or uncover new audiences with AI-driven recommendations that adapt in real time.',
  },
  {
    title: 'Ensure Privacy & Compliance',
    description:
      'Seamlessly integrate consent data and automate data refreshes to maintain compliance with privacy and security regulations.',
  },
];

const ConsumerInsights = () => (
  <div className="bg-neutral-100">
    {/* Hero Section */}
    <PageHeroSection
      title="Consumer Insights"
      description="Understanding & Anticipating Customer Needs"
      bgImage="/Images/CustomerInsights_Hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      title="Customer Insights: Unlock Deeper Understanding"
      description={
        <>
          Unlock powerful insights, predict trends, and stay ahead of the competition with our
          cutting-edge research and analytics solutions.
        </>
      }
      imageSrc="/Images/CustomerInsights-1.jpg"
      imageAlt="Customer Insights"
    />

    {/* Feature Cards */}
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Contact Us Section */}
    <ContactForm />
  </div>
);

export default ConsumerInsights;
