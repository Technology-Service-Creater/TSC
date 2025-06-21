import React from 'react';
import ServiceCard from '../../../../components/common/ServiceCard';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ContactForm from '../../../../components/common/ContactForm';

const AIAutomationMarketing = () => {
  const toKebabCase = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/(^-|-$)/g, '');

  const services = [
    {
      title: 'AI-Powered Chatbots & Customer Support',
      description:
        'Intelligent chatbot solutions to enhance customer support and engagement through AI-driven conversations.',
      listItems: [
        '24/7 customer support automation',
        'Natural language processing',
        'Multi-language support',
        'Seamless human handoff',
      ],
    },
    {
      title: 'Automated Ad Campaigns',
      description:
        'AI-driven advertising automation to optimize campaign performance and maximize ROI.',
      listItems: [
        'Automated bid management',
        'Real-time optimization',
        'Cross-platform campaign management',
        'Performance analytics',
      ],
    },
    {
      title: 'Predictive Marketing',
      description:
        'Leverage AI and machine learning to predict customer behavior and optimize marketing strategies.',
      listItems: [
        'Customer behavior prediction',
        'Churn prediction models',
        'Lifetime value forecasting',
        'Next-best-action recommendations',
      ],
    },
    {
      title: 'AI-Driven Personalization',
      description:
        'Deliver personalized experiences at scale using AI-powered content and product recommendations.',
      listItems: [
        'Dynamic content personalization',
        'Product recommendation engines',
        'Behavioral targeting',
        'A/B testing automation',
      ],
    },
  ].map(service => ({
    ...service,
    link: `/industries/ai-automation-marketing/${toKebabCase(service.title)}`,
  }));

  return (
    <div className="bg-[#F5F5F5]">
      <PageHeroSection
        title="AI & Automation in Marketing"
        subtitle="Transform your marketing with cutting-edge AI and automation solutions that drive growth and efficiency"
        image="/Images/ai-automation-hero.jpg"
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
        title="Why Choose Our AI & Automation Services?"
        description="Our AI and automation solutions help businesses streamline operations, enhance customer experiences, and drive measurable results through intelligent technology implementation."
        image="/Images/ai-automation-about.jpg"
        reverse={false}
      />

      <ContactForm />
    </div>
  );
};

export default AIAutomationMarketing;
