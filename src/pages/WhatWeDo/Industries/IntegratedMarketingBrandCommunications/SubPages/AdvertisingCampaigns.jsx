import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';
const services = [
  {
    title: 'Digital & Online Advertising',
    description: `In today’s digital age, having a strong online presence is essential. Leverage platforms like social media, search engines, and display ads to reach your target audience effectively. Utilize engaging content, SEO strategies, and paid promotions to maximize visibility and drive conversions.

`,
  },
  {
    title: 'Product Launch Campaigns',
    description:
      'Launching a new product requires strategic planning. A strong campaign should build anticipation, highlight key features, and encourage early adoption. Utilize teaser ads, influencer partnerships, and interactive content to generate buzz and drive demand from both existing customers and new prospects.',
  },
  {
    title: 'Broadcast & Video Marketing',
    description:
      'Traditional media like TV and radio remain powerful tools, especially for mass reach. TV commercials, radio ads, and online video marketing (such as YouTube and TikTok ads) can enhance brand recognition and capture audience attention through compelling storytelling.',
  },
  {
    title: 'Print Advertising',
    description:
      'While digital marketing dominates, print ads in newspapers, magazines, and brochures still have their place—especially for local businesses and niche markets. High-quality imagery and well-crafted messaging can leave a lasting impression on readers.',
  },
  {
    title: 'Seasonal & Holiday Campaigns',
    description:
      'Holidays present a prime opportunity for special promotions and themed advertising. Whether it’s Black Friday, Christmas, or Valentine’s Day, aligning your marketing efforts with seasonal trends can boost engagement and sales. Limited-time offers and festive branding can create a sense of urgency and excitement.',
  },
];

function AdvertisingCampaigns() {
  return (
    <div>
      {' '}
      {/* Hero Section */}
      <PageHeroSection
        title="Advertising Campaigns "
        description="A successful advertising campaign can significantly boost brand awareness and sales. some key marketing strategies to consider when crafting your next campaign."
        bgImage="/Images/AdvertisingCampaigns_Hero.jpg"
      />
      {/* Intro Section */}
      <IntroSection
        IntroSectionImage="/Images/AdvertisingCampaigns_1.jpg"
        IntroSectionTitle="Effective Advertising Campaign Strategies"
        description="A successful advertising campaign can significantly boost brand awareness and sales. Below are some key marketing strategies to consider when crafting your next campaign."
      />
      {/* Services Grid */}
      <section className="mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}

export default AdvertisingCampaigns;
