import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';
import ServiceCard from '../../../../../components/common/ServiceCard'; // Make sure this exists

// Define services without kebab-case links
const services = [
  {
    title: 'Boosts Brand Visibility',
    description:
      'Make sure people see and remember your brand! Strategic sponsorship activation ensures your brand stands out, increasing awareness and ultimately driving more customers and revenue.',
  },
  {
    title: 'Builds Meaningful Business Relationships',
    description:
      'Sponsorships open doors. By showcasing your brand at key events, you can connect with industry leaders, potential partners, and future customers, leading to valuable collaborations.',
  },
  {
    title: 'Enhances Your Marketing Strategy',
    description:
      'From pop-up experiences and interactive campaigns to video content and giveaways, sponsorship activation gives you fresh ideas to power your marketing efforts long-term.',
  },
];

const SponsorshipActivation = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHeroSection
        title="Sponsorship Activation"
        description="We help brands maximize their sponsorship investments through strategic activation and engagement."
        bgImage="/Images/Sponrshipactivation.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        IntroSectionImage="/Images/footballplayer.jpg"
        IntroSectionTitle="Supercharge Your Sponsorship Strategy"
        IntroSectionDescription="Sponsorship activation is the key to turning brand partnerships into powerful marketing opportunities. At Pitch, we help brands maximize their sponsorship efforts, ensuring they connect with the right audience and create a lasting impact."
      />

      <IntroInfo
        title="Our Approach to Sponsorship Activation"
        description="A successful sponsorship isn't just about putting your name on an event—it's about creating real engagement. The key? Delivering value to your audience while meeting the expectations of the sponsored event or brand."
      />

      <section className="text-center py-12 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-black leading-tight">
          Why Sponsorship Activation Matters
        </h2>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default SponsorshipActivation;
