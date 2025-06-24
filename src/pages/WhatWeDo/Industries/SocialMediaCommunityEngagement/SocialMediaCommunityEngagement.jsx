import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const heroImg = '/Images/SocialMediaCommunityEngagement_Hero.jpg';
const introImg = '/Images/SocialMediaCommunityEngagement-1.jpg';
const contentImg = '/Images/SocialMediaCommunityEngagement-2.jpg';

const toKebabCase = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/(^-|-$)/g, '');
const industryPath = 'social-media-community-engagement';

const infoCards = [
  {
    title: 'Platform-Specific Strategies',
    description: 'Different social media platforms have unique characteristics and audiences:',
    listItems: [
      'Facebook: Great for engaging with a broad audience through posts, videos, events, and groups. Useful for community building and targeted advertising.',
      'Instagram: Focuses on visual content such as photos, stories, and reels. Ideal for branding, influencer partnerships, and reaching younger demographics.',
      'LinkedIn: Professional networking platform. Effective for B2B marketing, thought leadership, and connecting with industry professionals.',
    ],
  },
  {
    title: 'User-Generated Content (UGC)',
    description:
      'UGC refers to content created by your customers or community members. This includes reviews, testimonials, photos, videos, and social media posts.',
    listItems: [
      'Authenticity: UGC is perceived as more genuine and trustworthy than branded content.',
      'Engagement: Encourages community participation and fosters a sense of loyalty.',
      'Cost-Effectiveness: Reduces the need for constant content creation by the brand itself.',
      'By effectively utilizing these social media and community engagement strategies.',
    ],
  },
  {
    title: 'Crisis Management & Reputation Handling',
    description:
      'In the digital age, managing crises and maintaining a positive online reputation is vital:',
    listItems: [
      'Monitoring: Keeping an eye on social media activity and mentions to spot quickly and identify issues.',
      'Responding: Addressing negative comments and concerns promptly and professionally.',
      'Communication: Being transparent and providing regular updates during a crisis builds trust with your audience.',
      'Prepared: Having a crisis management plan in place to respond swiftly and effectively when needed.',
    ],
  },
].map(card => ({
  ...card,
  link: `/industries/${industryPath}/${toKebabCase(card.title)}`,
}));

const SocialMediaCommunityEngagement = () => (
  <div className="bg-[#F7FAFF]">
    {/* Hero Section */}
    <PageHeroSection
      title="Social Media & Community Engagement"
      description="Social media and community engagement involve connecting with audiences on platforms like Facebook, Twitter, and Instagram."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Social Media & Community Engagement"
      description={
        'In the digital age, social media and community engagement play a crucial role in building brand awareness, fostering relationships, and driving meaningful interactions. Businesses and organizations leverage these platforms to connect with their audience, share valuable content, and cultivate a loyal community.'
      }
      imageAlt="Social Media & Community Engagement"
      reverse={false}
    />

    {/* Info Cards Section */}
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map(card => (
            <ServiceCard
              key={card.title}
              title={card.title}
              description={card.description}
              listItems={card.listItems}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Image + Text Section */}
    <IntroSection
      imageSrc={contentImg}
      description={
        'Social media and community engagement are powerful tools for creating meaningful relationships with audiences. By employing a strategic approach, businesses can enhance their online presence, foster brand loyalty, and drive long-term success. Adopting a proactive and authentic engagement strategy ensures that your brand remains relevant and connected with its community in an ever-evolving digital landscape.'
      }
      imageAlt="Social Media Engagement"
      reverse={true}
    />

    {/* Contact Section */}
    <ContactForm />
  </div>
);

export default SocialMediaCommunityEngagement;
