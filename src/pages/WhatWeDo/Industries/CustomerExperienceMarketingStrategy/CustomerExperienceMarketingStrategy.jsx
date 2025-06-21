import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ContactForm from '../../../../components/common/ContactForm';
import ServiceCard from '../../../../components/common/ServiceCard';

const CustomerExperienceMarketingStrategy = () => {
  const services = [
    {
      title: 'Brand Positioning',
      description:
        "Brand positioning is about creating a unique and distinctive image for your brand in the minds of consumers. It involves defining your brand's unique value proposition and differentiating it from competitors. Effective positioning helps your brand stand out and be easily recognized by your target audience.",
    },
    {
      title: 'Market Research & Analytics',
      description:
        'Market research and analytics involve collecting and analyzing data about your market, competitors, and consumers. This process helps businesses understand market trends, consumer behaviour, and competitive dynamics. The insights gained from research and analytics inform strategic decisions and marketing efforts.',
    },
    {
      title: 'Consumer Insights',
      description:
        "Consumer insights refer to the deep understanding of your customers' needs, preferences, and behaviours. These insights are derived from analysing customer data, feedback, and market research. They help businesses tailor their products, services, and marketing strategies to better meet the needs of their target audience.",
    },
    {
      title: 'Customer Journey Mapping',
      description:
        "Customer journey mapping involves creating a visual representation of the various touchpoints and interactions a customer has with your brand throughout their journey. This map helps identify pain points, areas for improvement, and opportunities to enhance the customer experience. It ensures that every stage of the customer's journey is seamless and positive.",
    },
    {
      title: 'Personalization & Customer Experience (CX)',
      description:
        'Personalization involves tailoring marketing messages, products, and services to individual customers based on their preferences and behaviours. Customer experience (CX) focuses on the overall perception customers have of your brand based on their interactions with it. Both personalization and CX aim to create meaningful and memorable experiences that foster customer loyalty.',
    },
    {
      title: 'Pricing Strategy',
      description:
        'Pricing strategy involves determining the optimal price for your products or services to achieve business objectives. This strategy considers factors such as production costs, competitor pricing, market conditions, and perceived value. An effective pricing strategy can attract customers, maximize revenue, and ensure profitability.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeroSection
        title="Customer Experience & Marketing Strategy"
        description="Integrating Customer-Centric Practices with Effective Marketing"
        bgImage="/Images/CustomerExperience_Hero.png"
      />

      <IntroSection
        title="Customer Experience & Marketing Strategy"
        description="In today's competitive business landscape, companies must align customer experience (CX) with their marketing strategy to build strong relationships, foster brand loyalty, and drive revenue growth. A well-executed CX and marketing strategy ensures that every interaction a customer has with a brand is positive, seamless, and memorable."
        imageSrc="/Images/CustomerExperience-1.png"
      />

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <IntroSection
        imageSrc="/Images/CustomerExperience-2.png"
        description="A strategic approach to customer experience and marketing ensures that businesses not only attract customers but also retain them through exceptional service and engagement. By integrating these two aspects, companies can create meaningful relationships that drive sustainable growth and brand success."
        reverse={true}
        imageAlt="Strategic Approach"
      />

      <ContactForm />
    </div>
  );
};

export default CustomerExperienceMarketingStrategy;
