import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/PlatformSpecificStrategies_Hero.jpg'; // Replace with the correct hero image if available
const introImg = '/Images/PlatformSpecificStrategies-1.jpg'; // Replace with the correct intro image if available

const platforms = [
  {
    title: 'Facebook',
    subtitle: 'Community & Targeted Engagement',
    description: `✔ Targeted Ads – Use Facebook's advanced targeting to reach specific audiences with engaging CTAs.<br/>✔ Content Variety – Mix images, video, text, and carousel posts for better engagement.<br/>✔ Facebook Groups – Join or create niche groups to build community and share insights.<br/>✔ Live Videos – Host real-time sessions to engage, showcase products, and sell via Live Shopping.`,
  },
  {
    title: 'Instagram',
    subtitle: 'Visual Storytelling & Brand Aesthetics',
    description: `✔ High-Quality Visuals – Use aesthetic, brand-aligned images, videos, and consistent themes.<br/>✔ Stories & Highlights – Share BTS, polls, Q&As, and save key content as Highlights.<br/>✔ Influencer Collabs – Partner with influencers for credibility and wider reach.<br/>✔ Hashtags & Tags – Use trending/niche hashtags and location tags for discoverability.<br/>✔ IGTV & Reels – Post tutorials/interviews on IGTV; use Reels for short, engaging content.`,
  },
  {
    title: 'LinkedIn',
    subtitle: 'Professional Networking & Authority Building',
    description: `✔ Thought Leadership – Share insights, trends, and original articles to build credibility.<br/>✔ Networking – Connect with professionals, engage with posts, and foster discussions.<br/>✔ Company Page – Keep audiences updated with news, job posting, and company culture insights.<br/>✔ Long-Form Content – Publish in-depth articles, case studies, and success stories.<br/>✔ LinkedIn Ads – Target professionals with lead-gen ads, sponsored posts, and event promos.`,
  },
];

const finalTips = `
<ul class='text-sm pl-5 space-y-1'>
  <li>✔ Know Your Audience – Tailor content based on platform-specific user behavior.</li>
  <li>✔ Be Consistent – Post regularly to maintain engagement.</li>
  <li>✔ Use Analytics – Track performance and optimize strategies accordingly.</li>
  <li>✔ Engage, Don't Just Post – Interact with comments, messages, and industry discussions.</li>
  <li>✔ Experiment & Adapt – Test different content formats and refine based on results.</li>
</ul>
`;

const PlatformSpecificStrategies = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Platform-Specific Strategies"
      description="Optimizing Content for Every Channel"
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="What Are Platform-Specific Strategies?"
      description="Platform-specific strategies involve tailoring content, design, and user experience to suit the unique characteristics of each digital platform. Every platform has different audience behaviors, content formats, and engagement patterns—customizing your approach maximizes impact."
      reverse={false}
    />

    {/* Platform Cards */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {platforms.map((item, idx) => (
          <ServiceCard
            key={idx}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </div>
    </section>

    {/* Final Tips for Social Media Success */}
    <IntroInfo title="Final Tips for Social Media Success" description={finalTips} />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default PlatformSpecificStrategies;
