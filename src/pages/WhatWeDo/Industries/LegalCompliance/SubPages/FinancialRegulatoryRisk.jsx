import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/FinancialRegulatoryRisk_Hero.jpg';
const introImg = '/Images/FinancialRegulatoryRisk-1.jpg';

const financialRiskList = [
  'Market Risk – Losses due to fluctuations in stock prices, interest rates, and exchange rates.',
  'Credit Risk – The risk of borrowers defaulting on their obligations, impacting lenders.',
  'Liquidity Risk – Difficulty in converting assets into cash to meet short-term obligations.',
  'Operational Risk – Losses from failed internal processes, human errors, or external events.',
  'Legal Risk – Financial losses due to legal penalties, lawsuits, or non-compliance.',
];

const regulatoryRiskList = [
  'Compliance Risk – Legal penalties and reputational damage from failing to follow regulations.',
  'Regulatory Changes – New or modified laws that increase business costs or limit growth.',
  'Industry-Specific Regulations – Sectors like finance, healthcare, and tech face strict compliance requirements.',
  'International Regulations – Global businesses must navigate complex cross-border laws.',
];

const managingRiskList = [
  'Risk Assessment – Regularly identifying and analyzing risks.',
  'Compliance Programs – Establishing policies to ensure regulatory adherence.',
  'Diversification – Spreading investments and business activities to reduce risk exposure.',
  'Insurance Coverage – Protecting against financial losses due to unforeseen risks.',
  'Continuous Monitoring – Using technology to track financial and regulatory shifts.',
];

const FinancialRegulatoryRisk = () => (
  <div className="bg-white">
    <PageHeroSection
      title="Financial & Regulatory Risk"
      description="Organizations must proactively manage financial and regulatory risks to maintain stability, compliance, and long-term success."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          What is Financial & Regulatory Risk?
        </span>
      }
      description="Financial and regulatory risk refers to the potential for financial loss or legal consequences arising from market fluctuations, credit defaults, liquidity issues, operational failures, or non-compliance with laws and regulations. Managing these risks involves assessing vulnerabilities, implementing compliance measures, and adapting to regulatory changes to ensure business stability and growth."
      imageSrc={introImg}
      imageAlt="Financial & Regulatory Risk"
    />

    {/* Financial Risk Section */}
    <IntroInfo
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Financial Risk: Managing Uncertainty in Business & Investments
        </span>
      }
      description={
        <ul className="list-disc pl-5 space-y-2 text-base font-['Montserrat']">
          {financialRiskList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
    />

    {/* Regulatory Risk Section */}
    <IntroInfo
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Regulatory Risk: Adapting to Changing Laws & Policies
        </span>
      }
      description={
        <ul className="list-disc pl-5 space-y-2 text-base font-['Montserrat']">
          {regulatoryRiskList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
    />

    {/* Managing Financial & Regulatory Risks */}
    <IntroInfo
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Managing Financial & Regulatory Risks
        </span>
      }
      description={
        <ul className="list-disc pl-5 space-y-2 text-base font-['Montserrat']">
          {managingRiskList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
    />

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default FinancialRegulatoryRisk;
