import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/TransferPricing_Hero.jpg';
const introImg = '/Images/TransferPricing-1.jpg';

const aspectCards = [
  {
    title: "+Arm's Length Principle",
    description:
      "Transfer pricing should adhere to the arm's length principle, meaning that prices charged between related entities should be comparable to those between independent entities in similar transactions.",
  },
  {
    title: 'Transfer Pricing Methods',
    description: `<ul class='list-disc pl-4'><li>CUP Method – Compares controlled vs. uncontrolled transaction prices.</li><li>RPM – Uses resale price, adjusted for margin.</li><li>CPM – Adds markup to cost of goods/services.</li><li>TNMM – Evaluates net profit against financial indicators.</li></ul>`,
  },
  {
    title: 'Compliance and Documentation',
    description:
      'Companies must comply with local and international transfer pricing regulations to avoid penalties and disputes with tax authorities. Proper documentation and justification of transfer prices are essential for compliance.',
  },
  {
    title: 'Tax Implications',
    description:
      'Transfer pricing has significant tax implications as it affects the allocation of taxable income across different jurisdictions. While companies may use transfer pricing strategies to optimize tax liabilities, these practices are closely monitored by tax authorities to prevent tax evasion.',
  },
  {
    title: 'Challenges in Transfer Pricing',
    description:
      'Complexity in pricing intangible assets such as intellectual property. Managing cross-border transactions and differing tax regulations. Risk of audits and disputes with tax authorities.',
  },
];

const TransferPricing = () => (
  <div className="bg-white">
    <PageHeroSection
      title="Transfer Pricing"
      description="Contract management is the structured process of handling agreements from inception to execution and eventual termination. Effective contract management ensures compliance, minimizes risks, and maximizes operational and financial performance."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      title="Understanding Transfer Pricing"
      description="Transfer pricing is a crucial accounting practice used by multinational corporations to allocate income and expenses among their various subsidiaries and divisions. It involves setting prices for transactions between related entities within the same organization, including the sale of goods, services, and intellectual property."
      imageSrc={introImg}
      imageAlt="Transfer Pricing Discussion"
    />

    {/* Key Aspects Section */}
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Key Aspects of Transfer Pricing</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {aspectCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default TransferPricing;
