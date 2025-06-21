import React from 'react';
import ServiceCard from '../../../../components/common/ServiceCard';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ContactForm from '../../../../components/common/ContactForm';

const LegalCompliance = () => {
  const toKebabCase = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/(^-|-$)/g, '');

  const services = [
    {
      title: 'Financial Regulatory Risk',
      description:
        'Comprehensive financial regulatory risk management services to ensure compliance with financial regulations.',
      listItems: [
        'Regulatory compliance monitoring',
        'Risk assessment and mitigation',
        'Financial reporting compliance',
        'Audit preparation and support',
      ],
    },
    {
      title: 'Governance Risk Compliance (GRC)',
      description:
        'Integrated governance, risk, and compliance solutions to align business objectives with regulatory requirements.',
      listItems: [
        'Governance framework development',
        'Risk management strategies',
        'Compliance monitoring systems',
        'Policy development and implementation',
      ],
    },
    {
      title: 'Cybersecurity & Data Privacy',
      description:
        'Protect your business with comprehensive cybersecurity and data privacy compliance services.',
      listItems: [
        'Data protection compliance',
        'Cybersecurity risk assessment',
        'Privacy policy development',
        'Incident response planning',
      ],
    },
    {
      title: 'Legal Advisory & Business Risk Advisory',
      description:
        'Expert legal and business risk advisory services to navigate complex regulatory landscapes.',
      listItems: [
        'Legal compliance consulting',
        'Business risk assessment',
        'Regulatory strategy development',
        'Compliance training programs',
      ],
    },
    {
      title: 'Tax Compliance & Reporting',
      description:
        'Comprehensive tax compliance and reporting services to ensure accurate and timely tax filings.',
      listItems: [
        'Tax compliance monitoring',
        'Reporting requirements analysis',
        'Tax planning strategies',
        'Audit support services',
      ],
    },
    {
      title: 'Indirect Taxes',
      description:
        'Specialized indirect tax services including VAT, GST, and other consumption-based taxes.',
      listItems: [
        'VAT/GST compliance',
        'Indirect tax planning',
        'Tax optimization strategies',
        'Compliance monitoring',
      ],
    },
    {
      title: 'Transfer Pricing',
      description:
        'Transfer pricing services to ensure compliance with international tax regulations.',
      listItems: [
        'Transfer pricing documentation',
        'Compliance monitoring',
        'Risk assessment',
        'Audit support',
      ],
    },
    {
      title: 'Contract Management',
      description:
        'Comprehensive contract management services to ensure legal compliance and risk mitigation.',
      listItems: [
        'Contract review and drafting',
        'Compliance monitoring',
        'Risk assessment',
        'Contract optimization',
      ],
    },
    {
      title: 'Regulatory Compliance',
      description:
        'Industry-specific regulatory compliance services to meet sector-specific requirements.',
      listItems: [
        'Industry compliance monitoring',
        'Regulatory updates tracking',
        'Compliance training',
        'Audit preparation',
      ],
    },
    {
      title: 'Intellectual Property Protection',
      description:
        'Comprehensive intellectual property protection services to safeguard your innovations.',
      listItems: [
        'IP strategy development',
        'Patent and trademark protection',
        'IP compliance monitoring',
        'Infringement risk assessment',
      ],
    },
  ].map(service => ({
    ...service,
    link: `/industries/legal-compliance/${toKebabCase(service.title)}`,
  }));

  return (
    <div className="bg-[#F5F5F5]">
      <PageHeroSection
        title="Legal & Compliance"
        subtitle="Comprehensive legal and compliance solutions to protect your business and ensure regulatory adherence"
        image="/Images/legal-compliance-hero.jpg"
      />

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                listItems={service.listItems}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <IntroSection
        title="Why Choose Our Legal & Compliance Services?"
        description="Our team of legal experts and compliance specialists provide comprehensive solutions to help your business navigate complex regulatory landscapes while minimizing risk and ensuring sustainable growth."
        image="/Images/legal-compliance-about.jpg"
        reverse={false}
      />

      <ContactForm />
    </div>
  );
};

export default LegalCompliance;
