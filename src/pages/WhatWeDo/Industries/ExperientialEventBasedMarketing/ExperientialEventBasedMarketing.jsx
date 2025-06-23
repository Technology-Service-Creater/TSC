import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const serviceCards = [
  {
    title: 'Sponsorship Activation',
    description:
      'Bring sponsorships to life with interactive experiences, promotions, and activities that boost brand visibility and create memorable moments for both sponsors and audiences.',
  },
  {
    title: 'Virtual & Hybrid Events',
    description:
      'Leverage technology to expand your audience reach with a blend of in-person and online experiences. Enjoy flexibility, cost-effectiveness, and measurable engagement.',
  },
  {
    title: 'Product Launches & Brand Activations',
    description:
      'Generate buzz and excitement with live demonstrations, exclusive previews, and interactive experiences that make your product or brand unforgettable.',
  },
];

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
        {serviceCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} description={card.description} />
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
