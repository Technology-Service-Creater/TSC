import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';
import IntroSection from '../../../../../components/common/IntroSection';

const ppcServices = [
  {
    title: 'Keyword Research & Strategy',
    description:
      'Creating thought leadership content is no easy feat. It requires expert content creators with deep domain knowledge and a solid grasp of SEO. At TSC, we excel at both. Our content marketing strategies are designed to produce high-quality, engaging assets that help brands across industries stand out, attract the right audience, and drive conversions.',
  },
  {
    title: 'Landing Page Optimization',
    description:
      "Build a strong online presence with our Digital PPC services, designed to secure strategic media placements that enhance your brand's visibility, credibility, and influence. Our approach ensures measurable growth in brand awareness and trust.",
  },
  {
    title: 'End-to-End PPC Management',
    description:
      "Boost your brand's authority and drive targeted referral traffic with our Quora marketing service. By crafting insightful, well-optimized answers, we help you establish credibility, improve SEO rankings, and increase influence on one of the world's largest knowledge-sharing platforms.",
  },
  {
    title: 'Paid Search Advertising',
    description:
      'Get high-quality, engaging guest posts that spark conversations and conversions. We seamlessly integrate SEO best practices with compelling storytelling, ensuring your brand is subtly yet effectively promoted while positioning you as an industry expert.',
  },
  {
    title: 'A/B Split Testing for Maximum Performance',
    description:
      'Get high-quality, engaging guest posts that spark conversations and conversions. We seamlessly integrate SEO best practices with compelling storytelling, ensuring your brand is subtly yet effectively promoted while positioning you as an industry expert.',
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    description:
      'Get high-quality, engaging guest posts that spark conversations and conversions. We seamlessly integrate SEO best practices with compelling storytelling, ensuring your brand is subtly yet effectively promoted while positioning you as an industry expert.',
  },
  {
    title: 'Google & Bing Ads Management',
    description:
      'Get high-quality, engaging guest posts that spark conversations and conversions. We seamlessly integrate SEO best practices with compelling storytelling, ensuring your brand is subtly yet effectively promoted while positioning you as an industry expert.',
  },
  {
    title: 'Social Media Advertising',
    description:
      'Get high-quality, engaging guest posts that spark conversations and conversions. We seamlessly integrate SEO best practices with compelling storytelling, ensuring your brand is subtly yet effectively promoted while positioning you as an industry expert.',
  },
  {
    title: 'Nextdoor Advertising for Local Reach',
    description:
      'Get high-quality, engaging guest posts that spark conversations and conversions. We seamlessly integrate SEO best practices with compelling storytelling, ensuring your brand is subtly yet effectively promoted while positioning you as an industry expert.',
  },
  {
    title: 'Remarketing Campaigns',
    description:
      'Get high-quality, engaging guest posts that spark conversations and conversions. We seamlessly integrate SEO best practices with compelling storytelling, ensuring your brand is subtly yet effectively promoted while positioning you as an industry expert.',
  },
  {
    title: 'Amazon PPC for eCommerce Success',
    description:
      'Get high-quality, engaging guest posts that spark conversations and conversions. We seamlessly integrate SEO best practices with compelling storytelling, ensuring your brand is subtly yet effectively promoted while positioning you as an industry expert.',
  },
  {
    title: 'YouTube Ads That Captivate & Convert',
    description:
      'Get high-quality, engaging guest posts that spark conversations and conversions. We seamlessly integrate SEO best practices with compelling storytelling, ensuring your brand is subtly yet effectively promoted while positioning you as an industry expert.',
  },
];

function PayPerClickPPCAdvertising() {
  return (
    <div className="bg-neutral-100">
      {/* Hero Section */}
      <PageHeroSection
        title="Pay Per Click Marketing (PPC)"
        description="Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic."
        bgImage="/Images/PayPerClickMarketing_Hero.jpg"
      />

      {/* PPC Marketing Services Section */}

      <IntroSection
        title="PPC Marketing Services"
        description={
          <>
            Create High-Impact Ads That Drive Measurable Results
            <br />
            In the fast-evolving digital landscape, businesses need immediate visibility and
            high-converting traffic. Our PPC management services ensure your brand reaches the right
            audience at the right time—boosting engagement, generating leads, and maximizing ROI.
          </>
        }
        imageSrc="/Images/PayPerClickMarketing-1.jpg"
        imageAlt="PPC Marketing Team"
      />
      {/* Service Cards Grid */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcServices.map((service, idx) => (
              <ServiceCard key={idx} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactForm />
    </div>
  );
}

export default PayPerClickPPCAdvertising;
