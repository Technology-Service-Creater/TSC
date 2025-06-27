import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Why Are Upselling & Cross-Selling Important?',
    description: [
      '✔ Increases Revenue & Profit Margins – Encourages customers to spend more.',
      '✔ Enhances Customer Experience – Offers better solutions tailored to their needs.',
      '✔ Maximizes Customer Lifetime Value (CLV) – Strengthens long-term brand loyalty.',
      '✔ Encourages Smart Buying Decisions – Helps customers discover relevant products.',
      '✔ Improves Conversion Rates – Relevant recommendations lead to higher sales.',
    ],
  },
  {
    title: 'Key Elements of Effective Upselling & Cross-Selling',
    description: [
      '✔ Personalized Recommendations – AI-driven suggestions based on browsing and purchase history.',
      '✔ Bundled Offers & Discounts – Package deals make upgrades or add-ons more attractive.',
      '✔ Clear Value Proposition – Highlight the benefits of premium options or complementary products.',
      '✔ Seamless Checkout Experience – Simple, non-intrusive upsell/cross-sell prompts.',
      '✔ Strategic Placement – Use product pages, cart pages, and post-purchase emails for offers.',
    ],
  },
];

const UpsellingCrossSellingStrategies = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Upselling & Cross-selling Strategies"
      description="Maximizing Revenue & Customer Value"
      bgImage="/Images/UpsellingCrossSellingStrategies_hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/UpsellingCrossSellingStrategies_1.jpg"
      IntroSectionTitle="What are Upselling & Cross-Selling?"
      description="Upselling is the practice of encouraging customers to purchase a higher-end version of a product or service.
Cross-selling involves recommending complementary products that enhance the original purchase."
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

    {/* Best Practices Section */}
    <IntroSection
      reverse
      IntroSectionTitle={
        <span className="text-black"> Best Practices for Upselling & Cross-Selling</span>
      }
      description={
        <span className="text-sm">
          <p>
            ✔ Know Your Customer Needs – Suggest relevant upgrades or add-ons that truly add value.
          </p>
          <p>
            ✔ Use FOMO & Social Proof – Highlight customer reviews, Best Seller tags, or
            limited-time offers.
          </p>
          <p>
            ✔ Keep It Subtle & Non-Pushy – Provide helpful recommendations without overwhelming
            customers.
          </p>
          <p>
            ✔ Incentivize with Discounts – Offer small price breaks or bundle deals for better
            conversions.
          </p>
          <p>
            ✔ A/B Test Offers & Placements – Experiment with different strategies to see what works
            best.
          </p>
        </span>
      }
      IntroSectionImage="/Images/UpsellingCrossSellingStrategies_2.jpg"
    />

    {/* Contact Section */}
    <ContactForm />
  </div>
);

export default UpsellingCrossSellingStrategies;
