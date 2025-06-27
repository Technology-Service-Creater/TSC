import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Conversion Funnel Optimization',
    description: [
      'Driving traffic is just the beginning—converting that traffic is where real success lies We analyze your:',
      '✔ Website Copy & Design – Are your messaging and visuals compelling?',
      '✔ Usability & Navigation – Is your website intuitive and seamless?',
      '✔ Current Performance – What’s working, and what’s not? By pinpointing friction points in your funnel, we fix issues that are holding back conversions, leading to higher engagement and sales.',
    ],
  },
  {
    title: 'Landing Page Perfection',
    description: [
      'Your landing page is the gateway to conversions. We craft high-impact pages that:',
      '✔ Capture Attention – Clear headlines & engaging visuals.',
      '✔ Drive Action – Compelling CTAs & persuasive content.',
      '✔ Minimize Distractions – A seamless user experience for maximum conversions. With SEO-backed design and data-driven layouts, we make every click count!',
    ],
  },
  {
    title: 'A/B Testing & Multivariate Optimization',
    description: [
      'A great-looking website isn’t enough. We analyze:',
      '✔ Heatmaps – Identifying the most engaging areas of your site.',
      '✔ Click Tracking – Understanding user interaction patterns.',
      '✔ User Journey Analysis – Pinpointing & eliminating conversion roadblocks. This real-time insight allows us to optimize your site based on actual user behavior, not assumptions.',
    ],
  },

  {
    title: 'Heatmaps & Click Tracking: Uncover Hidden Opportunities',
    description: [
      'A great-looking website isn’t enough. We analyze:',
      '✔ Heatmaps – Identifying the most engaging areas of your site.',
      '✔ Click Tracking – Understanding user interaction patterns.',
      '✔ User Journey Analysis – Pinpointing & eliminating conversion roadblocks. This real-time insight allows us to optimize your site based on actual user behavior, not assumptions.',
    ],
  },

  {
    title: 'The CRO Optimization Process',
    description: [
      '🔹 Audit & Analysis – Identifying content, usability, and performance gaps.',
      '🔹 Implementation & Testing – Optimizing landing pages, mobile experiences, and CTAs.',
      '🔹 Continuous Improvement – Iterating based on real-time data for sustained growth. Our approach delivers real, measurable results—not just traffic, but higher revenue.',
    ],
  },

  {
    title: 'How TSC’s CRO Services Boost Your Bottom Line',
    description: [
      '✔ Higher Conversions – More visitors turn into paying customers.',
      '✔ visitors turn into paying customers.✔ Maximized ROI – Make the most of existing traffic without spending more on ads.',
      '✔ Enhanced Personalization – AI-powered targeting for more tailored experiences.',
      '✔ Data-Driven Growth – Every optimization is backed by hard analytics and testing.',
    ],
  },
];

const ConversionRateOptimizationCRO = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHeroSection
        title="Conversion Rate Optimization (CRO)"
        description="Maximizing Conversions, Elevating Revenue Turn More Visitors into Customers with TSC’s High-End CRO Services"
        bgImage="/Images/ConversionRateOptimization_hero.jpg"
      />
      <IntroSection
        IntroSectionImage="/Images/TradeShowDisplaysExperiences_1.jpg"
        IntroSectionTitle="Understanding Your Users"
        description={
          <>
            <p className="text-lg">
              Success in the digital space starts with understanding your audience. Our in-depth
              user analysis dives deep into:
            </p>
            <ul className="list-none pl-0 text-lg">
              <li>✔ Behavior & Preferences – What drives your customers to convert?</li>
              <li>✔ Demographics & Trends – Who they are and what they need.</li>
              <li>✔ Keyword Insights – Aligning your content with search intent.</li>
            </ul>
            <p className="text-lg">
              This data-driven approach forms the foundation of our CRO strategy, ensuring every
              optimization decision is backed by real insights.
            </p>
          </>
        }
      />

      {/* Services Section */}
      {services.map((service, index) => (
        <IntroInfo
          key={index}
          title={service.title}
          description={
            <div className="space-y-2">
              {service.description.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          }
        />
      ))}

      {/* AI-Driven Section */}
      <IntroSection
        reverse
        title={<span className="text-black"> Why Invest in CRO? The Advantages Are Clear</span>}
        description={
          <div className="space-y-2 text-sm">
            <p>✔ Increased Revenue & Sales – More conversions = more profit.</p>
            <p>✔ Better Marketing ROI – Get more from your paid campaigns.</p>
            <p>
              ✔ Improved Customer Experience – A seamless, frustration-free website builds loyalty.
            </p>
            <p>✔ Data-Driven Strategy – No guessing—just proven, optimized results.</p>
            <p>✔ Competitive Edge – Outperform your rivals with an optimized conversion funnel.</p>
            <p>
              ✔ Scalable Growth – CRO isn’t a one-time fix—it delivers compounding benefits over
              time.
            </p>
          </div>
        }
        imageSrc="/Images/TradeShowDisplaysExperiences_2.jpg"
      />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ConversionRateOptimizationCRO;
