import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/CybersecurityDataPrivacy_Hero.jpg';
const introImg = '/Images/CybersecurityDataPrivacy-1.jpg';
const privacyImg = '/Images/CybersecurityDataPrivacy-2.jpg';

const bestPractices = [
  'Multi-Factor Authentication (MFA): Adds an extra layer of protection by requiring multiple verification methods.',
  'Regular Software Updates: Keeps software patched against known vulnerabilities.',
  'Employee Training: Educates staff on phishing, safe browsing, and threat awareness.',
  'Data Encryption: Ensures that intercepted data remains unreadable without the decryption key.',
  'Firewalls & Antivirus Software: Defends against malware and unauthorized access.',
  'Backup & Recovery: Regular backups and a recovery plan help mitigate ransomware and data loss.',
];

const dataPrivacyList = [
  'Data Protection Laws: Governed by the Information Technology Act, 2000 & Digital Personal Data Protection Act, 2023 (DPDP Act) in India.',
  'Consent-Based Processing: Organizations must obtain explicit consent before collecting or processing personal data.',
  'Data Minimization: Collecting only necessary data reduces exposure to breaches.',
  'Right to Access & Rectify: Individuals can view and correct their personal data.',
  'Right to Be Forgotten: Individuals can request deletion of their personal data when no longer needed.',
  'Data Protection Impact Assessments (DPIA): Identifies and mitigates risks in data processing activities.',
];

const CybersecurityDataPrivacy = () => (
  <div className="bg-white">
    <PageHeroSection
      title="Cybersecurity & Data Privacy"
      description="Protecting Digital Assets & User Trust"
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Cybersecurity: Safeguarding Digital Assets
        </span>
      }
      description="Cybersecurity is essential for protecting systems, networks, and data from cyber threats. Implementing best practices can significantly reduce risks."
      imageSrc={introImg}
      imageAlt="Cybersecurity"
    />

    {/* Best Practices for Strong Cybersecurity */}
    <IntroInfo
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Best Practices for Strong Cybersecurity
        </span>
      }
      description={
        <ul className="list-disc pl-5 space-y-2 text-base font-['Montserrat']">
          {bestPractices.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
    />

    {/* Key Aspects of Data Privacy */}
    <IntroInfo
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Key Aspects of Data Privacy
        </span>
      }
      description={
        <ul className="list-disc pl-5 space-y-2 text-base font-['Montserrat']">
          {dataPrivacyList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
    />

    {/* Data Privacy Section */}
    <IntroSection
      title={
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold">
          Data Privacy: Protecting Personal Information
        </span>
      }
      description="Data privacy ensures personal data is safeguarded, and individuals have control over how their information is collected and used."
      imageSrc={privacyImg}
      imageAlt="Data Privacy"
      reverse={true}
    />

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default CybersecurityDataPrivacy;
