import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Visual Appeal',
    listItems: [
      '✔ Eye-catching colors, fonts, and graphics that align with your brand identity.',
      '✔ High-quality imagery and design elements that capture attention.',
      '✔ A balance of minimalism and detail to create a visually appealing look.',
    ],
  },
  {
    title: 'Functionality & Usability',
    listItems: [
      '✔ Easy to open, store, and use for a seamless customer experience.',
      '✔ Durable enough to protect the product during shipping and handling.',
      '✔ Thoughtful design that considers reusability or recyclability.',
    ],
  },
  {
    title: 'Brand Consistency',
    listItems: [
      '✔ Reflects your brand values, messaging, and aesthetics.',
      '✔ Maintains a cohesive look across product lines.',
      '✔ Helps build brand recognition and trust.',
    ],
  },
  {
    title: 'Storytelling & Connection',
    listItems: [
      '✔ Use packaging to tell a compelling brand story.',
      '✔ Highlight product origins, benefits, and unique selling points.',
      '✔ Create an emotional connection with relatable and engaging messaging.',
    ],
  },
  {
    title: 'Sustainability & Eco-Friendly Packaging',
    listItems: [
      '✔ Incorporate biodegradable, recyclable, or reusable materials.',
      '✔ Reduce excess packaging to minimize environmental impact.',
      '✔ Communicate sustainability efforts to appeal to eco-conscious consumers.',
    ],
  },
  {
    title: 'Clear & Informative Content',
    listItems: [
      '✔ Display essential product details (name, features, usage instructions).',
      '✔ Include legal requirements (ingredients, expiration dates, certifications).',
      '✔ Ensure text is readable and concise for easy understanding.',
    ],
  },
  {
    title: 'Innovation & Uniqueness',
    listItems: [
      '✔ Explore unconventional shapes, textures, or interactive elements.',
      '✔ Stand out with holographic finishes, embossing, or sustainable materials.',
      '✔ Think beyond traditional packaging with creative opening experiences.',
    ],
  },
  {
    title: 'User Experience & Unboxing Appeal',
    listItems: [
      '✔ Enhance the customer’s first interaction with your product.',
      '✔ Design a memorable unboxing experience that encourages social sharing.',
      '✔ Consider smart packaging (QR codes, AR experiences) to add digital engagement.',
    ],
  },
  {
    title: 'Market Research & Consumer Insights',
    listItems: [
      '✔ Conduct research to understand customer preferences & industry trends.',
      '✔ Test different packaging designs with A/B testing and focus groups.',
      '✔ Adapt to evolving consumer expectations for design and functionality.',
    ],
  },
];

const ProductPackagingDesign = () => (
  <div>
    <div>
      {/* Hero Section */}
      <PageHeroSection
        title="Product Packaging & Design  "
        description="Enhancing the Shopping Experience"
        bgImage="/Images/ProductPackagingDesign_hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        IntroSectionImage="/Images/ProductPackagingDesign_1.jpg"
        IntroSectionTitle="Enhancing The Product Packaging & Design"
        description="Product packaging and design are essential in making a strong first impression. Effective packaging should not only protect the product but also attract attention, communicate the brand's identity, and appeal to the target audience."
      />

      {/* Section Title */}
      <h2 className="text-center font-['Poppins'] font-bold text-black text-[32px] ">
        Key Elements of Effective Packaging Design
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
        title="Why Packaging Matters"
        description={
          <>
            <p>
              ✔ First Impressions Count – Your packaging is the first interaction customers have
              with your product.
            </p>
            <p>
              ✔ Influences Purchase Decisions – Attractive, functional design increases sales
              potential.
            </p>
            <p>
              ✔ Builds Brand Loyalty – A memorable unboxing experience enhances customer
              satisfaction
            </p>
            <p> ✔ Creates Social Buzz – Instagram-worthy packaging can drive organic marketing.</p>
          </>
        }
      />

      {/* Contact Form */}
      <ContactForm />
    </div>
  </div>
);

export default ProductPackagingDesign;
