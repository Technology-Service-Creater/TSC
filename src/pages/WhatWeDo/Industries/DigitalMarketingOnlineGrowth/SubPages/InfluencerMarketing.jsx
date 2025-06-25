import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const featureCards = [
  {
    title: 'Find the Perfect Influencers',
    description:
      "Fill out our quick contact form, and our influencer marketing experts will get in touch within 24 hours. Share your business goals, and we'll match you with the right content creators to achieve your marketing objectives.",
  },
  {
    title: 'Seamless Campaign Execution',
    description:
      'We carefully select influencers based on their audience, engagement, and niche. Our team then collaborates with both the brand and influencers to create captivating, shareable content that resonates with your target audience.',
  },
  {
    title: 'Drive Engagement & Conversions',
    description:
      'Top creators on our platform share compelling brand stories across YouTube, Instagram, Twitter, Snapchat, LinkedIn, and more, grabbing attention and converting followers into loyal customers.',
  },
];

function InfluencerMarketing() {
  return (
    <div className="bg-neutral-100">
      {/* Hero Section */}
      <PageHeroSection
        title="Influencer Marketing"
        description="Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic."
        bgImage="/Images/InfluencerMarketing_Hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        title={
          <>
            <span>Influencer Marketing – Amplify Your Brand&apos;s Reach</span>
          </>
        }
        description={
          <>
            Looking for the best influencer marketing agency in India? We provide a powerful
            platform that connects brands with top social media influencers, helping you maximize
            impact through authentic, high-quality content.
          </>
        }
        imageSrc="/Images/InfluencerMarketing-1.jpg"
        imageAlt="Influencer at work"
      />

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactForm />
    </div>
  );
}

export default InfluencerMarketing;
