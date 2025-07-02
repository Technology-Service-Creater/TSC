import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/GovernanceRiskCompliance_Hero.jpg';
const introImg = '/Images/GovernanceRiskCompliance-1.jpg';
const futureImg = '/Images/GovernanceRiskCompliance-2.jpg';

const whyGRCList = [
  'Better Decision-Making – Ensuring business activities align with ethics, laws, and risk strategies.',
  'Integrated Risk Management – Avoiding siloed approaches and enhancing cross-functional collaboration.',
  'Operational Efficiency – Reducing redundancies and improving compliance and governance processes.',
  'Regulatory Confidence – Meeting legal obligations and industry standards with ease.',
];

const corePrinciplesList = [
  'Governance: Ethical management ensuring business decisions align with strategic goals.',
  'Risk Management: Proactively identifying and mitigating risks that impact operations.',
  'Compliance: Ensuring adherence to legal, regulatory, and internal business standards.',
];

const GovernanceRiskComplianceGRC = () => (
  <div className="bg-white">
    <PageHeroSection
      title="Governance, Risk, and Compliance (GRC)"
      description="Strengthening Business Integrity & Resilience"
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          What is GRC?
        </span>
      }
      description="Governance, Risk, and Compliance (GRC) is a strategic framework that helps organizations align their policies, risk management, and compliance efforts for ethical, efficient, and legally sound operations."
      imageSrc={introImg}
      imageAlt="GRC Meeting"
    />

    {/* Why GRC Matters */}
    <IntroInfo
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Why GRC Matters
        </span>
      }
      description={
        <ul className="list-disc pl-5 space-y-2 text-base font-['Montserrat']">
          {whyGRCList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
    />

    {/* Core Principles of GRC */}
    <IntroInfo
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Core Principles of GRC
        </span>
      }
      description={
        <ul className="list-disc pl-5 space-y-2 text-base font-['Montserrat']">
          {corePrinciplesList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
    />

    {/* The Future of GRC */}
    <IntroSection
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          The Future of GRC
        </span>
      }
      description="In today's fast-paced business world, GRC is not just a framework—it's a necessity. By breaking down silos and fostering collaboration across departments, companies can enhance efficiency, strengthen compliance, and build a sustainable, well-governed organization."
      imageSrc={futureImg}
      imageAlt="The Future of GRC"
      reverse={true}
    />

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default GovernanceRiskComplianceGRC;
