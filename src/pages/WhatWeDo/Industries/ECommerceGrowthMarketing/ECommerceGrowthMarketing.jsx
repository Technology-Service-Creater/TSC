import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const heroImg = '/Images/E-CommerceGrowthMarketing_Hero.jpg';
const img1 = '/Images/E-CommerceGrowthMarketing-1.jpg';
const img2 = '/Images/E-CommerceGrowthMarketing-2.jpg';

const toKebabCase = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/(^-|-$)/g, '');
const industryPath = 'e-commerce-growth-marketing';

const serviceCards = [
  {
    title: 'Conversion Rate Optimization (CRO)',
    description:
      'Improving the percentage of website visitors who complete a desired action, such as making a purchase or signing up for a newsletter.',
    listItems: [
      'A/B Testing: Comparing two versions of a web page to see which performs better.',
      'User Experience (UX) Design: Enhancing the usability and design of your website.',
      'Data Analysis: Analysing visitor behaviour to identify and rectify obstacles to conversion.',
    ],
  },
  {
    title: 'Customer Retention & Loyalty Programs',
    description: 'Keeping existing customers engaged and encouraging repeat business.',
    listItems: [
      'Loyalty Points: Rewarding repeat purchases with points that can be redeemed for discounts or rewards.',
      'Exclusive Offers: Providing special deals and promotions to loyal customers.',
      'Personalized Communication: Sending targeted messages based on customer preferences and behaviour.',
    ],
  },
  {
    title: 'Subscription-Based Marketing',
    description:
      'Offering products or services on a recurring basis, such as monthly or yearly subscriptions.',
    listItems: [
      'Subscription Plans: Offering various tiers to cater to different customer needs.',
      'Auto-Renewal: Automatically renewing subscriptions to ensure continuous service.',
      'Subscriber Engagement: Keeping subscribers informed and engaged with newsletters, updates, and exclusive content.',
    ],
  },
  {
    title: 'Upselling & Cross-Selling Strategies',
    description:
      'Increasing the value of each sale by encouraging customers to purchase additional or higher-end items.',
    listItems: [
      'Upselling: Suggesting a more expensive or upgraded version of a product.',
      'Cross-Selling: Recommending complementary products that enhance the main purchase.',
      'Personalized Recommendations: Using customer data to provide tailored product suggestions.',
    ],
  },
].map(service => ({
  ...service,
  link: `/industries/${industryPath}/${toKebabCase(service.title)}`,
}));

const ECommerceGrowthMarketing = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="E-Commerce & Growth Marketing"
      description="E-commerce involves buying and selling goods and services online, reaching a global audience."
      bgImage={heroImg}
    />

    {/* Intro Section - use IntroSection pattern */}
    <IntroSection
      imageSrc={img1}
      title="E-Commerce & Growth Marketing"
      description="E-Commerce and growth marketing are essential for driving online business success. By leveraging data-driven strategies, performance optimization, and customer-centric approaches, businesses can enhance brand visibility, increase conversions, and accelerate revenue growth. A well-executed E-Commerce & Growth Marketing strategy ensures sustainable customer acquisition and retention."
      reverse={false}
    />

    {/* Service Cards */}
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map(service => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              listItems={service.listItems}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Intro Section - use only IntroSection pattern */}
    <IntroSection
      imageSrc={img2}
      description=" A strategic approach to E-Commerce & Growth Marketing enables businesses to scale
          effectively, optimize customer experiences, and drive sustainable revenue. By combining
          data, automation, and innovative marketing techniques, companies can position themselves
          for long-term success in the competitive e-commerce landscape."
      reverse={true}
    />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default ECommerceGrowthMarketing;
