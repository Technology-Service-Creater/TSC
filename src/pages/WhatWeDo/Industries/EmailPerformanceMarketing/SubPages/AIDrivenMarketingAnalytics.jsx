import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/AIDrivenMarketAnalytics_Hero.jpg';
const introImg = '/Images/AIDrivenMarketAnalytics-1.png';

const capabilitiesCards = [
  {
    title: 'Large-Scale Data Processing',
    description:
      '✓ AI can quickly analyze data from multiple sources.<br/>Website traffic & user behavior<br/>Customer interactions & sales data<br/>Social media trends & sentiment<br/>Market research & competitor analysis',
  },
  {
    title: 'Pattern Recognition & Hidden Insights',
    description:
      '✓ AI uncovers correlations in complex datasets that might go unnoticed.<br/>Helps businesses identify emerging trends before they become mainstream.',
  },
  {
    title: 'Predictive Modeling & Forecasting',
    description:
      '✓ AI analyzes historical data to predict customer demand, market shifts, and potential risks.<br/>Helps in inventory planning, sales forecasting, and demand estimation.',
  },
  {
    title: 'Smart Customer Segmentation',
    description:
      '✓ AI groups customers based on:<br/>Demographics (age, gender, location)<br/>Behavior (purchase history, browsing patterns)<br/>Preferences & interests (products they engage with)',
  },
  {
    title: 'Real-Time Insights & Adaptability',
    description:
      '✓ AI processes data instantly, allowing businesses to:<br/>React quickly to customer feedback & trends.<br/>Adjust pricing, promotions, and messaging on the fly.',
  },
];

const applicationsCards = [
  {
    title: 'Price Optimization',
    description:
      '✓ AI analyzes competitor pricing & demand trends to dynamically adjust prices for maximum revenue.',
  },
  {
    title: 'Personalized Marketing',
    description:
      '✓ AI delivers tailored recommendations and targeted ads based on customer behavior and interests.',
  },
  {
    title: 'Social Media Sentiment Analysis',
    description:
      '✓ AI monitors online conversations to gauge customer sentiment toward a brand or product.<br/>Helps businesses address concerns & enhance brand reputation.',
  },
  {
    title: 'AI-Powered Lead Generation',
    description:
      '✓ AI identifies high-intent buyers by tracking online behaviors like:<br/>Product searches<br/>Content engagement<br/>Interaction with marketing campaigns',
  },
  {
    title: 'Campaign Performance Optimization',
    description:
      "✓ AI analyzes real-time campaign data to:<br/>Identify what's working.<br/>Adjust targeting and messaging for maximum ROI.",
  },
];

const advantageCard = {
  title: 'The AI Advantage: Make Smarter, Faster, and More Profitable Decisions',
  description:
    'AI-driven market analytics empower businesses to:<br/>✅ Understand customer needs better<br/>✅ React to market changes instantly<br/>✅ Boost sales & marketing effectiveness<br/><br/>Stay ahead of the competition with AI-powered market intelligence!',
};

export default function AIDrivenMarketingAnalytics() {
  return (
    <div className="bg-[#F5F6FA]">
      <PageHeroSection
        title="AI-Driven Market Analytics"
        description="Unlocking Smarter Business Insights"
        bgImage={heroImg}
      />

      <IntroSection
        imageSrc={introImg}
        title={
          <>
            AI-Driven Market Analytics:
            <br />
            Unlocking Smarter Business Insights
          </>
        }
        description={
          'Artificial intelligence (AI) is transforming market analytics by processing massive data sets, identifying patterns, and predicting trends—all at speeds far beyond human capability.'
        }
        reverse={false}
      />

      {/* Key Capabilities Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
          Key Capabilities of AI-Driven Market Analytics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilitiesCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Key Applications Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
          Key Applications of AI in Market Analytics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationsCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <IntroSection
          imageSrc="/Images/AIDrivenMarketAnalytics-2.png"
          title={advantageCard.title}
          description={advantageCard.description}
          reverse={true}
        />
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
