import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/CompetitiveAnalysis_Hero.jpg';
const introImg = '/Images/CompetitiveAnalysis-1.jpg';

const competitiveStepsCards = [
  {
    title: 'Identify Competitors',
    description:
      'Recognize both direct and indirect competitors who share products or services, and identify their target audience.',
  },
  {
    title: "Analyze Competitors' Products/Services",
    description: "Understand the features, benefits, and pricing of competitors' offerings.",
  },
  {
    title: 'Evaluate Market Positioning',
    description:
      'Assess how competitors position themselves in the market and identify their target audience.',
  },
  {
    title: 'Study Marketing Strategies',
    description: "Analyze competitors' marketing channels, messaging, and promotional activities.",
  },
  {
    title: 'Review Customer Feedback',
    description:
      'Look at customer reviews, ratings, and testimonials to gain a customer-centric perspective.',
  },
  {
    title: "Competitors' Strengths and Weaknesses",
    description:
      'Assess how competitors position themselves in the market and identify their target audience.',
  },
];

const marketTrendStepsCards = [
  {
    title: 'Improved Decision-Making',
    description: 'Provides insights that help you make informed strategic decisions.',
  },
  {
    title: 'Identifying Opportunities',
    description: 'Helps you identify market gaps and opportunities for differentiation.',
  },
  {
    title: 'Risk Mitigation',
    description:
      'Allows you to anticipate competitive moves and develop strategies to handle them.',
  },
  {
    title: 'Enhanced Marketing Strategies',
    description:
      'Informs your marketing strategies by understanding what works well with your competitors.',
  },
];

const CompetitiveAnalysis = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Competitive Analysis"
      description="User Interface (UI) and User Experience (UX) design are essential for creating engaging, intuitive, and effective digital experiences."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Competitive Analysis"
      description="Competitive analysis involves identifying your competitors and evaluating their strategies to determine their strengths and weaknesses relative to your own product or service. It helps businesses understand the market landscape and develop strategies to gain competitive advantage."
      reverse={false}
    />

    {/* Steps in Competitive Analysis */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Steps in Competitive Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {competitiveStepsCards.map((card, index) => (
          <ServiceCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Steps in Market Trend Analysis */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Steps in Market Trend Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {marketTrendStepsCards.map((card, index) => (
          <ServiceCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default CompetitiveAnalysis;
