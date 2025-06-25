import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const featureCards = [
  {
    title: 'Value-Based Pricing',
    description:
      'Set prices based on customer perception of value rather than cost, ensuring alignment with market demand and competition.',
  },
  {
    title: 'Usage-Based Pricing',
    description:
      'Charge customers based on actual usage, offering flexibility and fairness—ideal for subscription and SaaS models.',
  },
  {
    title: 'Consumption-Based Pricing',
    description:
      'Similar to usage-based pricing, but focused on pay-per-resource consumption—common in cloud computing and utilities.',
  },
  {
    title: 'Tiered Pricing',
    description:
      'Offer multiple pricing tiers with increasing features and benefits to encourage upsells and cater to diverse customer needs.',
  },
  {
    title: 'Price Skimming',
    description:
      'Start with high initial prices for new products, then gradually lower them to attract price-sensitive customers over time.',
  },
  {
    title: 'High-Low Pricing',
    description:
      'Use high list prices with periodic deep discounts to create urgency and drive sales—common in retail.',
  },
];

const PricingStrategy = () => (
  <div className="bg-neutral-100">
    {/* Hero Section */}
    <PageHeroSection
      title="Pricing statuary"
      description="Maximizing Value & Competitive Advantage"
      bgImage="/Images/PricingStrategy_Hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      title="Pricing Strategies: Finding the Right Fit"
      description={
        <>
          In today&apos;s dynamic market, businesses use strategic pricing to maximize sales and
          profitability. Digital pricing tools allow companies to automatically adjust prices based
          on market trends, costs, and customer behavior.
        </>
      }
      imageSrc="/Images/PricingStrategy-1.png"
      imageAlt="Pricing Strategies"
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

export default PricingStrategy;
