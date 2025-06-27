import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Loyalty Programs for E-commerce',
    description: [
      'Points-Based System – Customers earn points for:',
      '✔ Purchases',
      '✔ Reviews & Referrals',
      '✔ Social Media Engagement',
      'Tiered Programs – Unlock exclusive perks for top-tier customers:',
      '✔ VIP Benefits – Free shipping, early access, or birthday discounts',
      'Gamification Elements – Make earning rewards fun with:',
      '✔ Badges',
      '✔ Challenges',
      '✔ Progress Bars',
      'Personalized Recommendations – AI-driven insights suggest relevant products & offers.',
      'Exclusive Content – Reward members with insider access to:',
      '✔ Articles',
      '✔ Webinars',
      '✔ Industry Insights',
    ],
  },
];

const services1 = [
  {
    title: 'Personalized Email Marketing',
    listItems: ['✔ Past Purchases', '✔ Browsing Behavior', '✔ Abandoned Carts'],
  },
  {
    title: 'Seamless User Experience',
    listItems: ['✔ Fast, easy navigation', '✔ One-click checkout', '✔ Reliable shipping'],
  },
  {
    title: 'Proactive Customer Service',
    listItems: ['✔ 24/7 live chat', '✔ Quick email responses ', '✔ Helpful FAQs'],
  },
  {
    title: 'Social Media Engagement',
    listItems: ['✔ Contests ', '✔ Polls ', '✔ Q&A sessions'],
  },
  {
    title: 'Customer Feedback & Reviews',
    listItems: ['Collect and act on feedback to improve products & services'],
  },
  {
    title: 'Mobile Optimization',
    listItems: ['Ensure your website and loyalty program are mobile-friendly'],
  },
  {
    title: 'Data Privacy Compliance',
    listItems: ['Be transparent about data use & comply with privacy laws'],
  },
  {
    title: 'Continuous Improvement',
    listItems: ['Regularly analyze retention metrics and optimize strategies.'],
  },
];

const services2 = [
  {
    title: 'Understanding Customer Behavior',
    listItems: [
      '✔ Analyze Purchase History – Identify frequently bought-together products.',
      '✔ Track Browsing Behavior – Learn customer preferences based on time spent on pages.',
      '✔ Segment Audiences – Target recommendations by demographics, behavior & purchase history.',
    ],
  },
  {
    title: 'Optimizing Product Recommendations',
    listItems: [
      '✔ Use AI & Machine Learning – Personalize suggestions based on data-driven insights.',
      '✔ Bundle Related Products – Suggest complementary items that enhance the main purchase.',
      '✔ Emphasize Value – Highlight how the additional product enhances the experience.',
    ],
  },
  {
    title: 'Perfect Timing & Placement',
    listItems: [
      '✔ Product Pages – Display relevant upsells & cross-sells while customers browse.',
      '✔ Shopping Cart – Suggest additional products before checkout.',
      '✔ Checkout Page – Offer last-minute add-ons to increase order value.',
    ],
  },
  {
    title: 'Personalization = Higher Conversions',
    listItems: [
      '✔ Tailor recommendations to customer needs & past behavior.',
      '✔ Avoid irrelevant product suggestions—keep it specific.',
      '✔ Offer discounts or free shipping for bundling products.',
    ],
  },
  {
    title: 'Optimize with Data & Testing',
    listItems: [
      '✔ A/B Test Different Strategies – Find out what works best for your audience.',
      '✔ Monitor Metrics – Track average order value, conversion rates & customer lifetime value.',
      '✔ Continuous Improvement – Refine recommendations to maximize performance & profits.',
    ],
  },
];

const CustomerRetentionLoyaltyPrograms = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Customer Retention & Loyalty Programs "
      description="Maximizing Engagement, Loyalty & Lifetime Value"
      bgImage="/Images/CustomerRetentionLoyaltyPrograms_hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/CustomerRetentionLoyaltyPrograms_1.jpg"
      IntroSectionTitle="Boost Customer Loyalty & Retention"
      description="Boost Customer Loyalty & Retention In today’s competitive market, retaining customers is just as important as acquiring new ones. A well-crafted customer retention and loyalty program strengthens relationships, increases lifetime value, and turns buyers into brand advocates. From reward systems to personalized experiences, the right strategies keep customers engaged, satisfied, and coming back for more."
    />

    {/* Loyalty Program Overview */}
    {services.map((service, index) => (
      <IntroInfo
        key={index}
        title={service.title}
        description={
          <div className="space-y-2 font-bold">
            {service.description.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        }
      />
    ))}

    {/* Section Title */}
    <p className="text-black text-center font-['Poppins'] font-bold px-4 text-[31px] leading-[31px]">
      Effective E-commerce Retention Strategies
    </p>

    {/* Retention Strategy Cards */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services1.map((service, index) => (
            <ServiceCard key={index} title={service.title} listItems={service.listItems} />
          ))}
        </div>
      </div>
    </section>

    {/* Section Title */}
    <p className="text-black text-center font-['Poppins'] font-bold px-4 text-[31px] leading-[31px]">
      Upselling & Cross-Selling Strategies
    </p>

    {/* Upsell & Cross-sell Cards */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services2.map((service, index) => (
            <ServiceCard key={index} title={service.title} listItems={service.listItems} />
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <ContactForm />
  </div>
);

export default CustomerRetentionLoyaltyPrograms;
