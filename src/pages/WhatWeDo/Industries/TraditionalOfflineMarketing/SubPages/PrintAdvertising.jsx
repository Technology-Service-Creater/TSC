import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Newspaper Ads',
    listItems: [
      'Published in daily or weekly newspapers.',
      'Targets a broad or niche audience depending on the publication.',
    ],
  },
  {
    title: 'Magazine Ads',
    listItems: [
      'Ideal for highly targeted advertising based on the magazine’s industry or readership.',
      'Typically offers longer shelf life than newspapers.',
    ],
  },
  {
    title: 'Brochures & Flyers',
    listItems: [
      'Distributed through direct mail, events, or handouts.',
      'Provides detailed product/service information in an easy-to-keep format.',
    ],
  },
  {
    title: 'Posters & Billboards',
    listItems: [
      'Bold visuals capture attention in high-traffic areas.',
      'Great for brand visibility and awareness.',
    ],
  },
];

function PrintAdvertising() {
  return (
    <div>
      {/* Hero Section */}
      <PageHeroSection
        title="Print Advertising"
        description="A Timeless Marketing Strategy"
        bgImage="/Images/PrintAdvertising_hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        IntroSectionImage="/Images/PrintAdvertising_1.jpg"
        IntroSectionTitle="What is Print Advertising?"
        description="Print advertising involves creating and distributing physical marketing materials like newspapers, magazines, brochures, flyers, and posters to promote products, services, or brands. Despite the rise of digital marketing, print ads remain a powerful tool for reaching specific audiences with tangible and memorable content."
      />

      {/* Section Title */}
      <h2 className="text-center font-['Poppins'] font-bold text-black text-[32px] leading-[150%] tracking-[-0.02em] my-8">
        Common Types of Print Advertisements
      </h2>

      {/* Services Section */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} listItems={service.listItems} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Print Advertising */}
      <IntroInfo
        title="Why Use Print Advertising?"
        description={
          <div className="text-left space-y-2">
            <p>✔ Targeted Reach – Choose publications that align with your ideal customer base.</p>
            <p>
              ✔ Tangible & Memorable – Physical materials are easier to keep and refer back to.
            </p>
            <p>
              ✔ Enhances Brand Credibility – Print ads in reputable magazines or newspapers build
              trust.
            </p>
            <p>✔ Creative Flexibility – Stand out with stunning design, layouts, and messaging.</p>
          </div>
        }
      />

      {/* Best Practices */}
      <IntroInfo
        title="Best Practices for Effective Print Ads"
        description={
          <div className="text-left space-y-2">
            <p>
              ✔ Know Your Audience – Choose the right medium based on where your customers engage.
            </p>
            <p>
              ✔ Prioritize Visual Appeal – Use bold headlines, eye-catching graphics, and clear
              messaging.
            </p>
            <p>
              ✔ Strong Call-to-Action (CTA) – Tell your audience exactly what to do next (Visit,
              Call, Buy).
            </p>
            <p>
              ✔ Strategic Placement – Select relevant publications or high-traffic areas for
              billboards and posters.
            </p>
          </div>
        }
      />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}

export default PrintAdvertising;
