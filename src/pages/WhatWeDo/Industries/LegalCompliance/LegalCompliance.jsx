import React from 'react';
import ServiceCard from '../../../../components/common/ServiceCard';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ContactForm from '../../../../components/common/ContactForm';

const legalTrends = [
  {
    title: 'Intellectual Property Protection',
    description:
      'Intellectual property protection involves safeguarding creations of mind, such as inventions, literary and artistic works, symbols, names, and images.',
  },
  {
    title: 'Regulatory Compliance',
    description:
      'Regulatory compliance ensures that a business adheres to laws, regulations, guidelines, and specifications in its operations. This includes industry-specific compliance, evolving regulatory standards, and safety standards.',
  },
  {
    title: 'Contract Management',
    description:
      'Contract management involves the creation, execution, and monitoring of business contracts to maximize performance and minimize risk. This includes drafting contracts, negotiating terms, ensuring compliance, and managing contract renewals and terminations.',
  },
  {
    title: 'Corporate & International Tax Advisory',
    description:
      'Corporate and international tax advisory services offer compliance on tax planning and guidance for cross-border business activities, transactions, and international tax treaties. This includes structuring, tax consulting, and managing compliance with tax laws.',
  },
  {
    title: 'Transfer Pricing',
    description:
      'Transfer pricing refers to the pricing of goods, services, and intangibles between related entities within a business. This ensures compliance with global tax regulations and avoidance of double taxation, and is conducted as per OECD guidelines and local regulations.',
  },
  {
    title: 'Indirect Taxes (VAT, GST)',
    description:
      'Indirect taxes include value-added tax (VAT), goods and services tax (GST), and other consumption-based taxes. Proper compliance ensures proper collection, reporting, and remittance of these taxes.',
  },
  {
    title: 'Tax Compliance & Reporting',
    description:
      'Tax compliance and reporting involve ensuring that a business complies with all tax laws and regulations. This includes preparing and filing tax returns, maintaining records, and managing risks related to tax compliance.',
  },
  {
    title: 'Legal Advisory and Business Risk Advisory',
    description:
      "Legal advisory provides expert counsel on business matters, legal risks, and regulatory requirements. Business risk advisory helps organizations identify, assess, and mitigate risks that could impact the organization's operations and objectives.",
  },
  {
    title: 'Cybersecurity & Data Privacy',
    description:
      "Cybersecurity and data privacy focus on protecting an organization's data from breaches, ensuring compliance with data protection regulations, and ensuring the confidentiality, integrity, and availability of data.",
  },
  {
    title: 'Governance, Risk, and Compliance (GRC)',
    description:
      "GRC takes an integrated approach to managing an organization's governance, risk management, and compliance initiatives. This includes compliance frameworks, risk assessments, and alignment with relevant laws and regulations.",
  },
  {
    title: 'Financial and Regulatory Risk Management',
    description:
      'Financial and regulatory risk management involves identifying, assessing, and mitigating risks related to financial operations, regulatory compliance, and compliance risk.',
  },
  {
    title: 'Fraud and Forensic Risk Services',
    description:
      'Fraud and forensic risk services focus on detecting, investigating, and preventing fraud, misconduct, and litigation support.',
  },
];

const LegalCompliance = () => (
  <div className="bg-[#F5F5F5]">
    <PageHeroSection
      title="Legal and Compliance"
      description="Ensuring that a business adheres to all relevant laws, regulations, and industry standards"
      bgImage="/Images/LegalCompliance_Hero.jpg"
    />

    <IntroSection
      title="Legal and Compliance"
      description="Legal and compliance frameworks are essential for businesses to operate ethically, mitigate risks, and adhere to regulations. Ensuring compliance with local, national, and international laws helps protect organizations from legal liabilities and enhances corporate credibility."
      imageSrc="/Images/LegalCompliance-1.jpg"
      reverse={false}
    />

    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Industry Trends and Forecasting
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {legalTrends.map((trend, idx) => (
          <ServiceCard key={idx} title={trend.title} description={trend.description} />
        ))}
      </div>
    </section>

    <IntroSection
      description="Legal and compliance frameworks are crucial for businesses to operate lawfully and ethically. By proactively managing legal obligations and regulatory compliance, organizations can mitigate risks, ensure business continuity, and foster a culture of integrity."
      imageSrc="/Images/LegalCompliance-2.jpg"
      reverse={true}
    />

    <div className="mt-12">
      <ContactForm />
    </div>
  </div>
);

export default LegalCompliance;
