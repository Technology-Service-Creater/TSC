import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/ContractManagement_Hero.jpg';
const introImg = '/Images/ContractManagement-1.jpg';

const processCards = [
  {
    title: 'Initiation',
    description:
      'This phase identifies the need for a contract between two parties. Here, the scope, purpose, and key requirements of the agreement are established, ensuring alignment with business goals.',
  },
  {
    title: 'Authoring',
    description:
      'A well-drafted contract sets the foundation for a successful partnership. In this stage, the terms and conditions are outlined, ensuring clarity and mutual understanding between all parties involved.',
  },
  {
    title: 'Process and Workflow',
    description:
      'Once a draft is created, it undergoes internal review. Different departments, such as business operations, finance, and legal, collaborate to verify that all terms align with corporate policies and regulations.',
  },
  {
    title: 'Negotiation',
    description:
      'Both parties review and refine the contract to address discrepancies and reach a mutually beneficial agreement. Clear communication and compromise are essential for a successful negotiation.',
  },
  {
    title: 'Approval',
    description:
      'Gaining approval can be a bottleneck, especially in large organizations with multiple stakeholders. Establishing a streamlined approval process ensures efficiency and reduces delays.',
  },
  {
    title: 'Execution',
    description:
      'Once approved, the contract is signed, making it legally binding. Modern businesses increasingly use digital solutions like DocuSign to expedite this process securely and efficiently.',
  },
];

const ContractManagement = () => (
  <div className="bg-white">
    <PageHeroSection
      title="Contract Management"
      description="Contract management is the structured process of handling agreements from inception to execution and eventual termination. Effective contract management ensures compliance, minimizes risks, and maximizes operational and financial performance."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      title="Contract Management: A Comprehensive Guide"
      description="Contract management is the structured process of handling agreements from inception to execution and eventual termination. Effective contract management ensures compliance, minimizes risks, and maximizes operational and financial performance."
      imageSrc={introImg}
      imageAlt="Contract Management Discussion"
    />

    {/* Process Cards */}
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <div className="grid md:grid-cols-3 gap-6">
        {processCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default ContractManagement;
