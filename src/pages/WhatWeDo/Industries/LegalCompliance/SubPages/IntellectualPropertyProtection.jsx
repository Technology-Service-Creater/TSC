import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import ContactForm from '../../../../../components/common/ContactForm';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ServiceCard from '../../../../../components/common/ServiceCard';

function IntellectualPropertyProtection() {
  const segmentationTypes = [
    {
      title: 'Demographic Segmentation',
      description:
        'Factors such as age, race, religion, gender, family size, ethnicity, income, and education level.',
    },
    {
      title: 'Geographic Segmentation',
      description: 'Location details such as country, state, city, and town.',
    },
    {
      title: 'Psychographic Segmentation',
      description: 'Social class, values, interests, lifestyle, and personality characteristics.',
    },
    {
      title: 'Behavioral Segmentation',
      description:
        'Customer tendencies, habits, spending patterns, product usage, and desired benefits.',
    },
    {
      title: 'Technographic Segmentation',
      description: 'Technology usage, including mobile, desktop, software, and applications.',
    },
    {
      title: 'Needs-Based Segmentation',
      description: 'Product or service requirements based on specific customer needs.',
    },
  ];

  const protectIPSteps = [
    {
      title: 'File for Protection',
      items: [
        "Start by securing protection in the United States. Your state's bar association can help you find an experienced IP attorney.",
        'File patents, trademarks, and copyrights to establish legal ownership.',
      ],
      bg: 'bg-purple-50',
    },
    {
      title: 'Expand Protection Internationally',
      items: [
        'Be the first to file for protection in any country where you do business or plan to operate.',
        'Consider securing rights in countries known for counterfeit markets to prevent unauthorized reproductions.',
      ],
      bg: 'bg-blue-50',
    },
    {
      title: 'Monitor & Enforce Your Rights',
      items: [
        'Regularly check for potential infringements.',
        'Take legal action if necessary to defend your IP against unauthorized use.',
      ],
      bg: 'bg-purple-50',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeroSection
        title="Intellectual Property Protection"
        description="A strong international strategy includes safeguarding your business's most valuable assets—your intellectual property (IP). Understanding key IP issues and utilizing available resources can help you maintain a competitive edge in the global marketplace."
        bgImage={'/Images/IntellectualPropertyProtection_Hero.jpg'}
      />

      {/* What is Intellectual Property? */}
      <IntroSection
        title="What is Intellectual Property?"
        description={`<ul class='list-disc pl-5 space-y-2 text-base'>
          <li>Inventions (protected by patents)</li>
          <li>Literary and artistic works (covered by copyrights)</li>
          <li>Logos, names, and symbols used in commerce (protected by trademarks)</li>
          <li>Designs and trade secrets</li>
        </ul>
        <p class='mt-4 text-base'>Many businesses underestimate the value of their IP. Proper protection can enhance brand recognition, prevent unauthorized use, and drive business success.</p>`}
        imageSrc={'/Images/IntellectualPropertyProtection-1.jpg'}
        imageAlt="Copyright Claim"
      />

      {/* Types of Customer Segmentation */}
      <IntroInfo
        title="Types of Customer Segmentation"
        description={`Customer segmentation can be done in several ways. For example, customer groups can be narrowed down to who the customers are and what they do or expanded to include more precise segments—with each type having more granular factors. The segments an organization uses vary depending on its size and industry, and different segmentation approaches should be used based on these factors.`}
      />
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {segmentationTypes.map((seg, idx) => (
            <ServiceCard key={idx} title={seg.title} description={seg.description} />
          ))}
        </div>
      </section>

      {/* How to Protect Your IP */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">How to Protect Your IP</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {protectIPSteps.map((step, idx) => (
            <ServiceCard key={idx} title={step.title} listItems={step.items} className={step.bg} />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}

export default IntellectualPropertyProtection;
