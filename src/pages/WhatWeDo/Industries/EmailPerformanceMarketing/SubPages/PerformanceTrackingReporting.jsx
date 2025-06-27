import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/PerformanceTrackingReporting_Hero.jpg';
const introImg = '/Images/PerformanceTrackingReporting-1.jpg';

const metricsCards = [
  {
    title: 'Delivery Rate',
    description:
      '✓ AI can quickly analyze data from multiple sources.<br/>Website traffic & user behavior<br/>Customer interactions & sales data<br/>Social media trends & competitor analysis',
  },
  {
    title: 'Open Rate',
    description:
      '✓ AI uncovers correlations in complex datasets that might go unnoticed.<br/>Helps businesses identify emerging trends before they become mainstream.',
  },
  {
    title: 'Click-Through Rate (CTR)',
    description:
      '✓ AI analyzes historical data to predict customer demand, market shifts, and potential risks.<br/>Helps in inventory planning, sales forecasting, and demand estimation.',
  },
  {
    title: 'Engagement Rate',
    description:
      '✓ Measures recipient interactions (opens, clicks, forwards, replies, etc.).<br/>Indicates how relevant, interesting, and persuasive your content is.<br/>Helps make emails more relevant.',
  },
  {
    title: 'Bounce Rate',
    description:
      '✓ AI processes data instantly, allowing businesses to:<br/>React quickly to customer feedback & trends.<br/>Adjust pricing, promotions, and messaging on the fly.',
  },
  {
    title: 'Unsubscribe Rate',
    description:
      '✓ Percentage of recipients who opt out of your email list.<br/>Indicates message fatigue, irrelevance, strong, and unaligned content.',
  },
];

const toolsCards = [
  {
    title: 'Email Marketing Platforms',
    description:
      '✓ Built-in analytics dashboards & reporting in major platforms like Mailchimp, ActiveCampaign, and Klaviyo.',
  },
  {
    title: 'Google Analytics Integration',
    description:
      '✓ Track website traffic & conversions originating from your email campaigns.<br/>Use UTM parameters to monitor email-driven website visits.',
  },
  {
    title: 'Third-Party Tracking Tools',
    description:
      '✓ Advanced tools that give deeper data on open rates, click rates, and conversions.<br/>Helps in measuring & optimizing bulk performance.',
  },
];

const reportingDescription = `
<strong>Regular Reports</strong><br/>
✓ Weekly or monthly reports to track trends and optimize future campaigns.<br/>
<strong>A/B Testing (Split Testing)</strong><br/>
✓ Experiment with different subject lines, CTAs, and email layouts to see what works best.<br/>
<strong>Segmentation Analysis</strong><br/>
✓ Compare different audience segments (new vs. returning customers) to personalize outreach.<br/>
<strong>Data Visualization</strong><br/>
✓ Use charts, graphs, and trend lines for easy analysis and decision-making.<br/>
<strong>Best Practices for Email Performance</strong><br/>
✓ Maintain a Clean Email List – Remove inactive or invalid addresses regularly.<br/>
✓ Craft Compelling Subject Lines – Grab attention to boost open rates.<br/>
✓ Provide Valuable Content – Tailor content to your audience's interests.<br/>
✓ Clear Calls to Action (CTA) – Guide users toward their desired actions.<br/>
✓ Mobile Optimization – Ensure emails look great on all devices.<br/>
✓ Personalization – Use recipient names, preferences, and behaviors for custom experiences.<br/>
✓ Test & Iterate – Constantly analyze, test, and refine based on insights.`;

export default function PerformanceTrackingReporting() {
  return (
    <div className="bg-[#F5F6FA]">
      <PageHeroSection
        title="Performance Tracking & Reporting"
        description="Data Driven Growth Strategies"
        bgImage={heroImg}
      />

      <IntroSection
        imageSrc={introImg}
        title={
          <>
            Performance Tracking & Reporting
            <br />
            for Email Campaigns
          </>
        }
        description={
          'Tracking and analyzing your email campaign performance helps you make data-driven decisions to boost engagement, conversions, and overall success.'
        }
        reverse={false}
      />

      {/* Key Metrics to Track */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
          Key Metrics to Track
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metricsCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Tools & Methods for Tracking */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
          Tools & Methods for Tracking
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toolsCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Reporting & Analysis */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
          Reporting & Analysis
        </h3>
        <div className="bg-gradient-to-b from-purple-100 to-blue-100 rounded-2xl p-8 shadow-sm">
          <div
            className="text-base sm:text-lg font-['Montserrat'] text-[#181A1B] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: reportingDescription }}
          />
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
