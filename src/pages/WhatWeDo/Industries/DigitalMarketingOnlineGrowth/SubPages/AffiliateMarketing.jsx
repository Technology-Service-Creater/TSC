import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const featureCards = [
  {
    title: 'AI-Powered Partnership Discovery',
    description: (
      <>
        Find the right affiliates faster with our intelligent discovery tools
        <br />
        <br />
        ✔ Smart AI Matching – Get recommendations based on real success metrics
        <br />
        ✔ Plain Language Search – Easily find top publishers in your niche
        <br />✔ Emerging Opportunities – Discover untapped markets and rising influencers
      </>
    ),
  },
  {
    title: 'Plan for Success, Not Guesswork',
    description: (
      <>
        Leverage advanced analytics and proven strategies to create winning campaigns
        <br />
        <br />
        ✔ Data-Driven Campaign Modeling – Predict and optimize performance
        <br />
        ✔ Tailored Offers & Content – Maximize engagement and conversions
        <br />✔ Real-Time Testing & Tracking – Adjust strategies for peak results
      </>
    ),
  },
  {
    title: 'Forecast, Benchmark & Stay Ahead',
    description: (
      <>
        Gain access to exclusive industry insights and AI-powered analytics
        <br />
        <br />
        ✔ Deep Market Data – Decades of insights across industries
        <br />
        ✔ Predictive Modeling – Plan with confidence using advanced forecasting
        <br />✔ Competitor Analysis – Stay ahead with real-time performance tracking
      </>
    ),
  },
];

function AffiliateMarketing() {
  return (
    <div className="bg-neutral-100">
      {/* Hero Section */}
      <PageHeroSection
        title="Affiliate Marketing"
        description="Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic."
        bgImage="/Images/AffiliateMarketing_Hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        title="Affiliate Marketing – Scale Faster, Earn More"
        description={
          <>
            Accelerate your business growth with our industry-leading technology and unmatched
            expertise. Save time, attract new customers, and boost your revenues through innovative
            affiliate marketing strategies.
          </>
        }
        imageSrc="/Images/AffiliateMarketing-1.jpg"
        imageAlt="Affiliate Marketing Team"
      />

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Built for Powerful Partnerships Section */}
      <IntroSection
        reverse
        title={<span>Built for Powerful Partnerships</span>}
        description={
          <>
            Great affiliate programs never stop evolving. We help you connect with high-performing
            partners who drive growth and exceed your goals
          </>
        }
        imageSrc="/Images/AffiliateMarketing-2.jpg"
        imageAlt="Affiliate Partnership"
      />

      {/* Contact Us Section */}
      <ContactForm />
    </div>
  );
}

export default AffiliateMarketing;
