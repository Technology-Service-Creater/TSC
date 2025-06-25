import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const featureCards = [
  {
    title: 'Data Collection & Analysis',
    description: (
      <>
        ✓ Gather insights from customer demographics, purchase history, browsing behavior,
        preferences, and feedback.
        <br />✓ Use data analytics to understand customer needs and predict future behavior.
      </>
    ),
  },
  {
    title: 'Customization',
    description: (
      <>
        Personalization enhances every touchpoint in the customer journey:
        <br />
        ✓ Tailored recommendations based on past behavior.
        <br />
        ✓ Dynamic content that adapts to individual preferences.
        <br />✓ Personalized communication across email, website, and social media.
      </>
    ),
  },
  {
    title: 'Real-Time & Asynchronous Collaboration',
    description: (
      <>
        ✓ Work with teammates, stakeholders, or external partners—live or on your own time.
        <br />
        ✓ Discuss insights, prioritize ideas, and turn discussions into actionable tasks.
        <br />✓ Assign tasks and track decisions within the mapping tool.
      </>
    ),
  },
];

const whyMattersList = [
  '✓ Increased Customer Satisfaction – Customers feel valued when experiences are tailored to them.',
  '✓ Enhanced Engagement – Personalized interactions keep customers connected with your brand.',
  '✓ Improved Loyalty – Customers stay loyal to brands that understand their needs.',
  '✓ Higher Conversion Rates – Targeted offers and recommendations drive sales.',
  '✓ Business Growth – Stronger relationships lead to long-term success.',
];

const PersonalizationCustomerExperienceCX = () => (
  <div className="bg-neutral-100">
    {/* Hero Section */}
    <PageHeroSection
      title="Personalization & Customer Experience"
      description="Visualizing the Path to Better Experiences."
      bgImage="/Images/PersonalizationCustomerExperience_Hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      title="Personalization & Customer Experience"
      description={
        <>
          Personalization creates meaningful customer connections by delivering tailored experiences
          <br />
          based on data. It boosts engagement, loyalty, and conversions while ensuring relevance and
          <br />
          privacy. When done right, it turns customers into lifelong advocates.
        </>
      }
      imageSrc="/Images/PersonalizationCustomerExperience-1.png"
      imageAlt="Personalization & Customer Experience"
    />

    {/* Feature Cards */}
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Why Personalization Matters Section (as IntroSection) */}
    <IntroSection
      title="Why Personalization Matters"
      description={
        <ul className="pl-5 space-y-2">
          {whyMattersList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
      imageSrc="/Images/PersonalizationCustomerExperience-2.png"
      imageAlt="Why Personalization Matters"
      reverse={true}
    />

    {/* Contact Us Section */}
    <ContactForm />
  </div>
);

export default PersonalizationCustomerExperienceCX;
