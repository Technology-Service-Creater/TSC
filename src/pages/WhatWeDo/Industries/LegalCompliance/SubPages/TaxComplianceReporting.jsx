import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/TaxComplianceReporting_Hero.jpg';
const introImg = '/Images/TaxComplianceReporting-1.jpg';
const impactImg = '/Images/TaxComplianceReporting-2.jpg';

const complianceCards = [
  {
    title: 'Tax Compliance',
    listItems: [
      'Ensures businesses adhere to tax laws, file returns, and pay taxes on time.',
      'Key Elements: Registration, record-keeping, return filing, tax payments, legal updates.',
    ],
  },
  {
    title: 'Tax Reporting',
    listItems: [
      'Transparent tax structure with a clear audit trail.',
      'Broad application across goods and services.',
      'Significant revenue source for governments.',
    ],
  },
  {
    title: 'Importance of Compliance & Reporting',
    listItems: [
      'Legal Requirement: Avoid penalties and legal action.',
      'Reputation Management: Builds investor and stakeholder trust.',
    ],
  },
];

const impactList = [
  'Cash Flow Management: Strategic VAT & GST handling improves liquidity.',
  'Pricing Strategies: Tax implications influence pricing decisions.',
  'Administrative Costs: Compliance requires investment in tax management.',
  'Cross-Border Transactions: Understanding global tax regulations is critical.',
];

const TaxComplianceReporting = () => (
  <div className="bg-white">
    <PageHeroSection
      title="Tax Compliance & Reporting"
      description="Ensuring Accuracy & Compliance"
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          What is Tax Compliance & Reporting?
        </span>
      }
      description="Transfer pricing is a crucial accounting practice used by multinational corporations to allocate income and expenses among their various subsidiaries and divisions. It involves setting prices for transactions between related entities within the same organization, including the sale of goods, services, and intellectual property."
      imageSrc={introImg}
      imageAlt="Tax Compliance Discussion"
    />

    {/* Tax Compliance Cards */}
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center font-['Poppins'] mb-6">
        Tax Compliance
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {complianceCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} listItems={card.listItems} />
        ))}
      </div>
    </section>

    {/* Impact on Businesses */}
    <IntroSection
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Impact on Businesses
        </span>
      }
      description={
        <ul className="list-disc pl-5 space-y-2 text-lg font-['Montserrat']">
          {impactList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
      imageSrc={impactImg}
      imageAlt="Tax Compliance Impact"
      reverse={true}
    />

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default TaxComplianceReporting;
