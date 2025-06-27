import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Why is Subscription-Based Marketing Important?',
    description: [
      '✔ Ensures Predictable Revenue – Recurring payments create financial stability.',
      '✔ Builds Stronger Customer Relationships – Consistent engagement fosters brand loyalty.',
      '✔ Increases Customer Lifetime Value (CLV) – Subscribers stay longer and spend more.',
      '✔ Encourages Community & Exclusivity – Members feel valued through special perks.',
      '✔ Provides Actionable Customer Insights – Subscription data helps tailor offerings and improve retention.',
    ],
  },
  {
    title: 'Key Elements of a Successful Subscription-Based Strategy',
    description: [
      '✔ Compelling Value Proposition – Exclusive content, discounts, or premium experiences.',
      '✔ Personalized User Experience – AI-driven recommendations and customized plans.',
      '✔ Seamless Onboarding & Retention Strategies – Easy sign-ups, free trials, and loyalty rewards.',
      '✔ Flexible Pricing & Tiers – Offer different levels to cater to diverse customer needs.',
      '✔ Automated Billing & Payment Systems – Hassle-free transactions and renewal reminders.',
      '✔ Ongoing Engagement & Content Updates – Keep subscribers interested with fresh content.',
    ],
  },
];

const SubscriptionBasedMarketing = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Subscription-Based Marketing"
      description="Driving Long-Term Customer Loyalty"
      bgImage="/Images/SubscriptionBasedMarketing_hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/SubscriptionBasedMarketing_1.jpg"
      IntroSectionTitle="What is Subscription-Based Marketing?"
      description="Subscription-based marketing is a strategy focused on acquiring, retaining, and engaging customers through recurring revenue models. It encourages long-term relationships by offering exclusive content, personalized experiences, and ongoing value through monthly or yearly subscriptions."
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
        <span className="text-black"> Best Practices for Subscription-Based Marketing</span>
      }
      description={
        <span className="text-sm">
          <p>✔ Offer Free Trials & Discounts – Lower entry barriers and attract new users.</p>
          <p>
            ✔ Create Exclusive Member-Only Perks – VIP access, early releases, or personalized
            offers.
          </p>
          <p>
            ✔ Leverage Data for Retention Strategies – Identify churn risks and re-engage inactive
            users.
          </p>
          <p>
            ✔ Optimize the Cancellation Process – Offer downgrades or pause options instead of
            cancellations.
          </p>
          <p>
            ✔ Encourage Community & Engagement – Foster interactions through forums, social media,
            or events.
          </p>
        </span>
      }
      IntroSectionImage="/Images/SubscriptionBasedMarketing_1.jpg"
    />

    {/* Contact Section */}
    <ContactForm />
  </div>
);

export default SubscriptionBasedMarketing;
