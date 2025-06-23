import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

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
];

const VirtualHybridEvents = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHeroSection
        title="Virtual & Hybrid Events"
        description="Virtual and hybrid events blend the best of in-person and online experiences. They expand audience reach, offer cost efficiency, and deliver measurable results—making them the future of modern event planning."
        bgImage="/Images/VirtualHybridEvent_Hero.jpg"
      />

      <IntroSection
        IntroSectionImage="/Images/VirtualHybridEvent_1.jpg"
        IntroSectionTitle="The Power of Face-to-Face Events"
        IntroSectionDescription={
          <>
            <p>
              There’s something special about in-person interactions—they help build trust,
              strengthen relationships, and create meaningful connections. Whether you’re launching
              a product, engaging customers, or hosting a team-building event, face-to-face
              communication is a powerful tool.
            </p>
            <br />
            ✔ High Costs – Venue rentals, travel, staff, and logistics add up quickly.
            <br />
            ✔ Limited Reach – Geographic and time constraints make attendance difficult.
            <br />
            ✔ Health & Safety Concerns – Social distancing and safety protocols add complexity.
            <br />✔ Less Measurable Impact – It’s harder to track real-time engagement and ROI.
          </>
        }
      />

      {/* Section Heading */}
      <p className="text-black text-center font-poppins text-2xl font-bold leading-snug mt-10 mb-6 px-4">
        Enter Virtual & Hybrid Events: The Future of Event Planning
      </p>

      {/* Services Section */}
      <section className="py-16  flex justify-center items-center3 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <IntroSection
        IntroSectionImage="/Images/VertualHybridEvent_2.png"
        IntroSectionTitle="Why Hybrid Events Are Game-Changers"
        IntroSectionDescription={
          "Planning for both live and virtual components makes your event more resilient—whether it's travel restrictions, last-minute changes, or unexpected disruptions, your event continues seamlessly, no matter what."
        }
        reverse={true}
      />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default VirtualHybridEvents;
