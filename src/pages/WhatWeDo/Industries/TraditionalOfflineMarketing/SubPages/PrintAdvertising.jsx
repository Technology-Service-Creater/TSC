import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/PrintAdvertising_hero.jpg'; // Replace with the correct hero image if available
const introImg = '/Images/PrintAdvertising_1.jpg'; // Replace with the correct intro image if available

const adTypes = [
  {
    title: 'Newspaper Ads',
    description:
      'Published in daily or weekly newspapers. Targets a broad or niche audience depending on the publication.',
  },
  {
    title: 'Magazine Ads',
    description:
      "Ideal for highly targeted advertising based on the magazine's industry or readership. Typically offers longer shelf life than newspapers.",
  },
  {
    title: 'Brochures & Flyers',
    description:
      'Distributed through direct mail, events, or handouts. Provides detailed product/service information in an easy-to-keep format.',
  },
  {
    title: 'Posters & Billboards',
    description:
      'Bold visuals capture attention in high-traffic areas. Great for brand visibility and awareness.',
  },
];

const whyUse = `
<ul class='text-sm pl-5 space-y-1'>
  <li>✔ Targeted Reach – Choose publications that align with your ideal customer base.</li>
  <li>✔ Tangible & Memorable – Physical materials are easier to keep and refer back to.</li>
  <li>✔ Enhances Brand Credibility – Print ads in reputable magazines or newspapers build trust.</li>
  <li>✔ Creative Flexibility – Stand out with stunning design, layouts, and messaging.</li>
</ul>
`;

const bestPractices = `
<ul class='text-sm pl-5 space-y-1'>
  <li>✔ Know Your Audience – Choose the right medium based on where your customers engage.</li>
  <li>✔ Prioritize Visual Appeal – Use bold headlines, eye-catching graphics, and clear messaging.</li>
  <li>✔ Strong Call-to-Action (CTA) – Tell your audience exactly what to do next (Visit, Call, Buy).</li>
  <li>✔ Strategic Placement – Select relevant publications or high-traffic areas for billboards and posters.</li>
</ul>
`;

const PrintAdvertising = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Print Advertising"
      description="A Timeless Marketing Strategy"
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="What is Print Advertising?"
      description="Print advertising involves creating and distributing physical marketing materials like newspapers, magazines, brochures, flyers, and posters to promote products, services, or brands. Despite the rise of digital marketing, print ads remain a powerful tool for reaching specific audiences with tangible and memorable content."
      reverse={false}
    />

    {/* Common Types of Print Advertisements */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-10">
        Common Types of Print Advertisements
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {adTypes.map((item, idx) => (
          <ServiceCard key={idx} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Why Use Print Advertising? */}
    <IntroInfo title="Why Use Print Advertising?" description={whyUse} />

    {/* Best Practices for Effective Print Ads */}
    <IntroInfo title="Best Practices for Effective Print Ads" description={bestPractices} />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default PrintAdvertising;
