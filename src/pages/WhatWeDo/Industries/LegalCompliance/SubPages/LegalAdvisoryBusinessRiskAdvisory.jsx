import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/LegaladvisorybusinessRiskAdvisory_Hero.jpg';
const introImg = '/Images/LegaladvisorybusinessRiskAdvisory -1.jpg';
const coreImg = '/Images/LegaladvisorybusinessRiskAdvisory-2.jpg';

const expertiseList = [
  'Corporate Law: Company formation, mergers & acquisitions, governance, and regulatory compliance.',
  'Contract Law: Drafting, reviewing, and negotiating legally sound agreements.',
  'Intellectual Property: Safeguarding trademarks, patents, copyrights, and trade secrets.',
  'Litigation & Dispute Resolution: Mediation, arbitration, and court representation.',
  'Employment Law: Compliance with labor laws, employment contracts, and workplace policies.',
  'Real Estate Law: Property transactions, leasing, and development legalities.',
];

const coreServicesList = [
  'Internal Audit: Evaluating internal controls, governance, and risk management effectiveness.',
  'Governance, Risk & Compliance (GRC): Implementing frameworks to meet regulatory and industry standards.',
  'Third-Party Risk Management: Assessing risks linked to vendors and external partners.',
  'Cybersecurity: Identifying and mitigating digital threats to protect sensitive data.',
  'Operational Risk Management: Managing risks in supply chain, production, and logistics.',
  'Financial Risk Management: Navigating credit, liquidity, and market risks for financial stability.',
];

const LegalAdvisoryBusinessRiskAdvisory = () => (
  <div className="bg-white">
    <PageHeroSection
      title="Legal advisory and business Risk Advisory"
      description="Protecting & Strengthening Your Business"
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Legal Advisory Services
        </span>
      }
      description="Legal advisory services provide expert guidance and support to businesses and individuals, ensuring compliance, risk mitigation, and smooth legal operations."
      imageSrc={introImg}
      imageAlt="Legal Advisory Services"
    />

    {/* Key Areas of Expertise */}
    <IntroInfo
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Key Areas of Expertise
        </span>
      }
      description={
        <ul className="list-disc pl-5 space-y-2 text-base font-['Montserrat']">
          {expertiseList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
    />

    {/* Core Services */}
    <IntroSection
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Core Services
        </span>
      }
      description={
        <ul className="list-disc pl-5 space-y-2 text-base font-['Montserrat']">
          {coreServicesList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
      imageSrc={coreImg}
      imageAlt="Core Services"
      reverse={true}
    />

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default LegalAdvisoryBusinessRiskAdvisory;
