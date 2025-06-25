import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const featureCards = [
  {
    title: 'Market Research & Insights',
    description:
      'Empowering brands to excel, grow, and innovate. We cut through the noise to deliver fast, accurate, and actionable insights—helping you make informed decisions in rapidly changing markets. With proprietary tools and AI-driven analytics, we decode trends today so you can stay ahead tomorrow.',
  },
  {
    title: 'Communities – The Power of Collective Insights',
    description:
      'Join a global network of SM* engaged panelists, powered by AI, ML, and human moderation. Our Xcel Global Panel enables real-time consumer conversations, while our Indian rural community initiative bridges the urban-rural divide, ensuring a connected and inclusive Bharat.',
  },
  {
    title: 'Technology – Innovation That Drives Success',
    description:
      'Leverage next-gen research solutions, AI-backed analytics, and fin-tech products designed for retailers and shopkeepers. Our sustainable e-mobility platform also accelerates green energy adoption—blending innovation with impact.',
  },
];

const MarketResearchAnalytics = () => (
  <div className="bg-neutral-100">
    {/* Hero Section */}
    <PageHeroSection
      title="Market Research & Analytics"
      description="Data-Driven Insights for Business Growth"
      bgImage="/Images/MarketAnalysisResearch_Hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      title="Market Research & Analytics – Data-Driven Decisions for Growth"
      description={
        <>
          Unlock powerful insights, predict trends, and stay ahead of the competition with our
          cutting-edge research and analytics solutions.
        </>
      }
      imageSrc="/Images/MarketAnalysisResearch-1.png"
      imageAlt="Market Research & Analytics"
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

export default MarketResearchAnalytics;
