import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'SEO',
    subtitle: 'Driven Content Marketing',
    description: [
      'Creating thought leadership content is no easy feat. It requires expert content creators with deep domain knowledge and a solid grasp of SEO. At TSC, we excel at both. Our content marketing strategies are designed to produce high-value, engaging assets that help brands across industries stand out, attract the right audience, and drive conversions.',
    ],
  },
  {
    title: 'Digital PR',
    subtitle: 'Amplify Your Brand’s Reach.',
    description: [
      'Build a strong online presence with our Digital PR services, designed to secure strategic media placements that enhance your brand’s visibility, credibility, and influence. Our approach ensures measurable growth in brand awareness and trust.',
    ],
  },

  {
    title: 'Quora Marketing',
    subtitle: 'Leverage the Power of Q&A',
    description: [
      'Boost your brand’s authority and drive targeted referral traffic with our Quora marketing services. By crafting insightful, well-optimized answers, we help you establish credibility, improve SEO rankings, and increase influence on one of the world’s largest knowledge-sharing platforms.',
    ],
  },
];

const ContentMarketing = () => (
  <div>
    <PageHeroSection
      title="Content Marketing"
      description="Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic.  "
      bgImage="/Images/ContendMarketing_hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/ContendMarketing_1.jpg"
      IntroSectionTitle="Our Content Marketing Services"
      description=" As India’s leading SEO agency and a top content marketing company, we specialize in crafting digital content that resonates with your audience while being fully optimized for search engines. "
    />

    {/* Services Grid */}
    <section className="mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              subtitle={service.subtitle}
            />
          ))}
        </div>
      </div>
    </section>

    <ContactForm />
  </div>
);

export default ContentMarketing;
