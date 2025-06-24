import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const toKebabCase = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/(^-|-$)/g, '');
const industryPath = 'experiential-event-based-marketing';

const serviceCards = [
  {
    title: 'Sponsorship Activation',
    description:
      "Sponsorship activation involves bringing a sponsorship to life by engaging the audience in meaningful ways. It goes beyond just having a logo displayed; it includes activities, promotions, and experiences that enhance the sponsor's brand visibility and interaction with the target audience. Successful sponsorship activation creates memorable moments and adds value for both the sponsor and the event.",
  },
  {
    title: 'Virtual & Hybrid Events',
    description:
      'Virtual and hybrid events leverage technology to engage audiences remotely or through a combination of in-person and online experiences. Virtual events are fully online, while hybrid events mix physical and virtual elements. These events can include webinars, conferences, trade shows, and live streams. They offer flexibility, wider reach, and cost-effectiveness while maintaining audience engagement.',
  },
  {
    title: 'Product Launches & Brand Activations',
    description:
      'Product launches and brand activations are strategic events designed to introduce new products or enhance brand awareness. These events generate buzz and excitement around the brand or product. They can include live demonstrations, interactive experiences, and exclusive previews, creating an impactful and memorable introduction to the market.',
  },
].map(card => ({
  ...card,
  link: `/industries/${industryPath}/${toKebabCase(card.title)}`,
}));

const ExperientialEventBasedMarketing = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Experiential & Event-Based Marketing"
      description="Experiential marketing is about creating immersive and engaging experiences that allow consumers to interact with a brand in a memorable way."
      bgImage="/Images/ExperientialEvent-BasedMarketing_Hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/ExperientialEvent-BasedMarketing-1.jpg"
      IntroSectionTitle="Experiential & Event-Based Marketing"
      IntroSectionDescription={
        <>
          Experiential and event-based marketing creates immersive brand experiences that engage
          customers on a deeper level. By leveraging interactive events, live activations, and
          hands-on experiences, businesses can build stronger emotional connections, boost brand
          loyalty, and drive word-of-mouth marketing. A well-executed strategy ensures memorable
          interactions that leave a lasting impact on audiences.
        </>
      }
    />

    {/* Service Cards Section */}
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="grid md:grid-cols-3 gap-8">
        {serviceCards.map(card => (
          <ServiceCard
            key={card.title}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </section>

    {/* Secondary Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/ExperientialEvent-BasedMarketing-2.jpg"
      IntroSectionTitle="Why Experiential Marketing Works"
      IntroSectionDescription={
        <>
          A strategic approach to Experiential & Event-Based Marketing allows businesses to create
          meaningful connections, enhance brand presence, and drive customer engagement. By
          combining live interactions with digital integration, companies can create memorable
          experiences that resonate with their audiences and fuel long-term growth.
        </>
      }
      reverse={true}
    />

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default ExperientialEventBasedMarketing;
