import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Billboards',
    listItems: [
      'Large, eye-catching displays along highways and city streets.',
      'Best for bold visuals and concise messaging that grabs attention quickly.',
    ],
  },
  {
    title: 'Transit Advertising',
    listItems: [
      'Ads on buses, trains, taxis, and at transit stations.',
      'Reaches commuters and travelers in urban and suburban areas.',
    ],
  },
  {
    title: 'Street Furniture',
    listItems: [
      'Ads placed on bus shelters, kiosks, benches, and phone booths.',
      'Positioned at eye level for maximum engagement.',
    ],
  },
  {
    title: 'Digital OOH (DOOH)',
    listItems: [
      'Bold visuals capture attention in high-traffic areas.',
      'Allows dynamic and interactive content for better engagement.',
    ],
  },
  {
    title: 'Place-Based Media',
    listItems: [
      'Ads displayed in gyms, restaurants, bars, and retail stores.',
      'Targets specific audiences based on location.',
    ],
  },
  {
    title: 'Posters & Signage',
    listItems: [
      'Smaller-scale ads placed in colleges, parking lots, and construction sites.',
      'Ideal for local promotions and detailed messaging.',
    ],
  },
];

function OutOfHomeOOHAdvertising() {
  return (
    <div>
      {/* Hero Section */}
      <PageHeroSection
        title="Out-of-Home (OOH) Advertising"
        description="Reaching Audiences On the Move"
        bgImage="/Images/OutOfHomeOOHAdvertisin_hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        IntroSectionImage="/Images/OutOfHomeOOHAdvertisin_1.jpg"
        IntroSectionTitle="What is OOH Advertising?"
        description="Out-of-Home (OOH) advertising includes any visual media displayed in public spaces, targeting consumers when they are outside their homes. It’s a powerful way to increase brand awareness in high-traffic areas."
      />

      {/* Section Title */}
      <h2 className="text-center font-['Poppins'] font-bold text-black text-[32px] leading-[150%] tracking-[-0.02em] my-8">
        Common Forms of OOH Advertising
      </h2>

      {/* Services Section */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} listItems={service.listItems} />
            ))}
          </div>
        </div>
      </section>

      {/* Why OOH Advertising Works */}
      <IntroInfo
        title="Why Use Print Advertising?"
        description={
          <>
            <p>✔ Targeted Reach – Choose publications that align with your ideal customer base.</p>
            <p>
              ✔ Tangible & Memorable – Physical materials are easier to keep and refer back to.
            </p>
            <p>
              ✔ Enhances Brand Credibility – Print ads in reputable magazines or newspapers build
              trust.
            </p>
            <p>✔ Creative Flexibility – Stand out with stunning design, layouts, and messaging.</p>
          </>
        }
      />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}

export default OutOfHomeOOHAdvertising;
