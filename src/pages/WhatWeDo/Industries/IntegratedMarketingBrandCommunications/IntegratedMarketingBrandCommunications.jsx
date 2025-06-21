import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const IntegratedMarketingBrandCommunications = () => {
  const services = [
    {
      title: 'Advertising Campaigns',
      description:
        'Advertising campaigns are coordinated series of ads that promote a product, service, or brand across various media channels. The goal is to reach a broad audience and create awareness, generate interest, and drive sales. These campaigns can include print, digital, TV, radio, and outdoor advertising.',
    },
    {
      title: 'Public Relations (PR)',
      description:
        'Public Relations involves managing and maintaining a positive public image for a brand or organization. It includes activities such as writing press releases, handling media relations, crisis management, and organizing press events. The aim is to build and sustain a favourable reputation with the public, media, and stakeholders.',
    },
    {
      title: 'Corporate Communications',
      description:
        "Corporate communications encompass all internal and external communications within a company. This includes messaging to employees, stakeholders, investors, and the public. Effective corporate communications ensure consistency in messaging, reinforce the brand's values, and support the organization's goals.",
    },
    {
      title: 'Event Marketing & Sponsorship',
      description:
        'Event marketing involves promoting a brand, product, or service through events such as conferences, seminars, trade shows, and product launches. Sponsorships involve partnering with events or organizations to gain brand visibility and association. These activities help in creating memorable brand experiences and engaging with the target audience directly.',
    },
    {
      title: 'Trade Show Displays & Experiences',
      description:
        'Trade show displays and experiences are interactive setups at industry-specific events where businesses showcase their products and services. These displays are designed to attract attendees, generate leads, and build relationships with potential customers. They often include product demonstrations, hands-on experiences, and marketing collateral to engage visitors.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeroSection
        title="Integrated Marketing & Brand Communications"
        description="Aimed at creating a unified and impactful brand presence across various channels and touchpoints"
        bgImage="/Images/IntegratedMarketing_Hero.png"
      />

      <IntroSection
        title="Integrated Marketing & Brand Communications"
        description="In the modern business environment, brands must integrate marketing and communications to ensure consistent messaging, foster customer loyalty, and drive growth. An effective Integrated Marketing & Brand Communications (IMBC) strategy ensures that every interaction a customer has with a brand is aligned, engaging, and impactful."
        imageSrc="/Images/IntegratedMarketing-1.png"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <IntroSection
        description="A well-executed Integrated Marketing & Brand Communications strategy helps businesses create meaningful connections with their audience, ensuring a compelling, consistent, and customer-focused brand presence. By aligning marketing efforts with brand communication, companies can drive sustainable growth and long-term success."
        imageSrc="/Images/IntegratedMarketing-2.png"
        reverse={true}
        imageAlt="Team collaborating"
      />

      <ContactForm />
    </div>
  );
};

export default IntegratedMarketingBrandCommunications;
