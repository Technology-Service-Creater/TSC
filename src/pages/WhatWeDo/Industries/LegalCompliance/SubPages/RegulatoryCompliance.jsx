import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/RegulatoryCompliance_Hero.jpg';
const introImg = '/Images/RegulatoryCompliance-1.jpg';

const benefitCards = [
  {
    title: 'Avoiding Unnecessary Legal Issues',
    description:
      'Regulatory compliance frameworks ensure that all necessary legal obligations are met. For example, industries handling large amounts of user data can avoid legal issues by following regulations such as GDPR. The cost of compliance is significantly lower than the cost of non-compliance.',
  },
  {
    title: 'Increasing Efficiency and Safety in the Workplace',
    description:
      'Implementing rules against discrimination and harassment fosters a healthy work environment, enhancing productivity and efficiency. Additionally, enforcing safety and security regulations prevents incidents and strengthens resilience.',
  },
  {
    title: 'Fostering Healthy Competition',
    description:
      'Regulatory compliance eliminates unfair monopolies that can stifle competition. Compliance enables fair practices, encourages innovation, and motivates organizations to offer superior products and services.',
  },
  {
    title: 'Gaining Better Branding',
    description:
      'Meeting regulatory compliance requirements enhances public relations and stakeholder confidence. Companies can leverage compliance in branding and marketing campaigns, showcasing their commitment to ethical standards and industry norms.',
  },
  {
    title: 'Reducing Risk and Increasing Profitability',
    description:
      'Businesses can sustain profitability by maintaining customer trust and reducing churn. Protecting customer data against breaches fosters a competitive advantage. Reliable compliance also strengthens partnerships, increasing synergies and long-term collaborations.',
  },
];

const RegulatoryCompliance = () => (
  <div className="bg-white">
    <PageHeroSection
      title="Regulatory Compliance"
      description="A strong international strategy includes safeguarding your business's most valuable assets—your intellectual property (IP). Understanding key IP issues and utilizing available resources can help you maintain a competitive edge in the global marketplace."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      title="What are the Benefits of Ensuring Regulatory Compliance?"
      description="Organizations that maintain consistent regulatory compliance management can reap significant benefits both in the short and long term."
      imageSrc={introImg}
      imageAlt="Regulatory Compliance Discussion"
    />

    {/* Benefits Cards */}
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <div className="grid md:grid-cols-3 gap-6">
        {benefitCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default RegulatoryCompliance;
