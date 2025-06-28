import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Store Layout & Design',
    listItems: [
      'Optimize store layout to improve customer flow and maximize product visibility.',
      'Use clear signage and intuitive pathways to guide shoppers effortlessly.',
      'Incorporate comfortable lighting and spacious aisles for an inviting atmosphere.',
    ],
  },
  {
    title: 'Visual Merchandising',

    listItems: [
      'Design eye-catching product displays that highlight new arrivals, promotions, and seasonal items.',
      'Use color psychology and strategic placement to attract attention.',
      'Rotate displays regularly to keep the shopping experience fresh and exciting.',
    ],
  },
  {
    title: 'Point-of-Purchase (POP) Displays',
    listItems: [
      'Place small, high-margin items near checkout areas for impulse purchases.',
      'Use branded displays, end caps, and countertop units to showcase trending products.',
    ],
  },
  {
    title: 'In-Store Promotions & Events',

    listItems: [
      'Offer exclusive discounts, flash sales, and limited-time offers to drive foot traffic.',
      'Host product launches, VIP shopping nights, and interactive events to engage customers.',
      'Use loyalty programs to reward repeat customers and encourage future visits.',
    ],
  },
  {
    title: 'Digital Integration & Omnichannel Experience',

    listItems: [
      'Incorporate QR codes, self-checkout kiosks, and mobile apps to provide additional product information and a seamless shopping journey.',
      'Enable click-and-collect (BOPIS) services for added convenience.',
      'Use digital signage and smart mirrors to create interactive experiences.',
    ],
  },
  {
    title: 'Customer Engagement & Personalization',

    listItems: [
      'Train staff to provide personalized recommendations and top-tier customer service.',
      'Implement loyalty programs to track shopping behavior and offer tailored promotions.',
      'Collect feedback through surveys and in-store kiosks to enhance the experience.',
    ],
  },
  {
    title: 'Sensory Marketing',

    listItems: [
      'Use music, scents, and lighting to create a specific ambiance that aligns with your brand.',
      'Studies show that pleasant scents and soft lighting can increase dwell time and sales.',
    ],
  },
  {
    title: 'Product Demonstrations & Sampling',

    listItems: [
      'Offer live or digital product demonstrations to showcase product benefits.',
      'Provide free samples or trial experiences to encourage purchases.',
      'Utilize interactive kiosks and AR technology for a next-level experience.',
    ],
  },
];

const RetailInStoreMarketing = () => (
  <div>
    <div>
      {/* Hero Section */}
      <PageHeroSection
        title="Retail & In-Store Marketing "
        description="Enhancing the Shopping Experience"
        bgImage="/Images/RetailInStoreMarketing_hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        IntroSectionImage="/Images/RetailInStoreMarketing_1.jpg"
        IntroSectionTitle="Enhancing the Shopping Experience"
        description="Retail and in-store marketing strategies are key to attracting customers, increasing engagement, and driving sales in physical stores. By creating an immersive shopping experience, retailers can influence purchasing decisions and foster customer loyalty."
      />

      {/* Section Title */}
      <h2 className="text-center font-['Poppins'] font-bold text-black text-[32px] ">
        Key Retail & In-Store Marketing Strategies
      </h2>

      {/* Services Section */}
      <section className="py-10  ">
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
        title="Why In-Store Marketing Matters"
        description={
          <>
            <p>✔ Boosts Sales – Encourages impulse purchases and higher transaction values.</p>
            <p>
              ✔ Enhances Customer Experience – Creates a memorable and enjoyable shopping journey.
            </p>
            <p>✔ Builds Brand Loyalty – Engaged shoppers are more likely to return.</p>
            <p> Drives Foot Traffic – Promotions and events bring more visitors into the store.</p>
          </>
        }
      />

      {/* Contact Form */}
      <ContactForm />
    </div>
  </div>
);

export default RetailInStoreMarketing;
