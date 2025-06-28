import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Define Your Goals',
    listItems: [
      'Do you want to boost sales, generate leads, promote a product, or build brand awareness? ',
      'Set clear objectives to measure success.',
    ],
  },
  {
    title: 'Identify Your Target Audience',
    listItems: [
      'Use demographic and psychographic data to build a targeted mailing list',
      'A well-defined audience = higher response rates!',
    ],
  },
  {
    title: 'Craft a Compelling Offer',
    listItems: [
      'Provide an incentive (discounts, free samples, exclusive deals). ',
      'Make it time-sensitive to encourage immediate action.',
    ],
  },
  {
    title: 'Design Your Mail Piece',
    listItems: [
      'Use professional, eye-catching visuals with clear messaging.',
      'Highlight your call-to-action (CTA) prominently.',
    ],
  },
  {
    title: 'Personalize Your Message',
    listItems: [
      'Address recipients by name and tailor the content to their interests.',
      'Personalization boosts engagement and conversions.',
    ],
  },
  {
    title: 'Choose the Right Format',
    listItems: [
      'Postcards – Short & direct (great for quick promotions). Letters – More detailed messaging.',
      'Brochures & Catalogs – Ideal for showcasing multiple products.',
    ],
  },

  {
    title: 'Print & Mail with a Trusted Provider',
    listItems: ['Ensure high-quality printing for a polished and professional look.'],
  },

  {
    title: 'Track & Measure Results',
    listItems: [
      'Use QR codes, promo codes, or landing pages to track engagement.',
      'Monitor response rates, sales, and ROI to refine future campaigns.',
    ],
  },
];

function DirectMailCampaigns() {
  return (
    <div>
      {/* Hero Section */}
      <PageHeroSection
        title="Direct Mail Campaigns"
        description="Personalized Marketing That Delivers"
        bgImage="/Images/DirectMailCampaigns_hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        IntroSectionImage="/Images/DirectMailCampaigns_1.jpg"
        IntroSectionTitle="What is Direct Mail?"
        description="Direct mail is a personalized marketing approach where businesses send physical promotional materials (postcards, catalogs, brochures, etc.) directly to customers’ mailboxes. It’s a great way to engage specific audiences and drive action."
      />

      {/* Section Title */}
      <h2 className="text-center font-['Poppins'] font-bold text-black text-[32px] leading-[150%] tracking-[-0.02em] my-8">
        Steps to a Successful Direct Mail Campaign{' '}
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

export default DirectMailCampaigns;
