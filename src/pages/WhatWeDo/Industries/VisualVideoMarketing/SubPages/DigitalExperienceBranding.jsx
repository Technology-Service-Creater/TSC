import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import IntroInfo from '../../../../../components/common/Introinfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/DigitalExperienceBranding_Hero.jpg'; // Replace with the correct hero image if available
const introImg = '/Images/DigitalExperienceBranding-1.jpg'; // Replace with the correct intro image if available

const tips = [
  {
    title: 'Know Your Audience',
    description:
      'Conduct market research and analyze customer data to understand user preferences and pain points. Tailor content, messaging, and user experience accordingly.',
  },
  {
    title: 'Personalization is Key',
    description:
      'Use AI-driven recommendations, targeted messaging, and customized interfaces to enhance engagement. A personalized approach strengthens customer relationships and boosts brand loyalty.',
  },
  {
    title: 'Offer Multiple Customer Service Channels',
    description:
      'Provide live chat, email, social media, hotlines, and AI-powered chatbots for a seamless support experience. Ensuring accessibility improves brand trust and customer satisfaction.',
  },
  {
    title: 'Implement & Act on Feedback',
    description:
      'Regularly collect feedback via surveys, reviews, and direct interactions to enhance user experience. Make iterative improvements based on user insights.',
  },
  {
    title: 'Focus on User-Friendly Design',
    description:
      'Ensure intuitive navigation, responsive layouts, and visually appealing interfaces for a smooth journey. Simplify processes to reduce friction and enhance usability.',
  },
  {
    title: 'Leverage Smart Digital Tools',
    description:
      'Use Digital Asset Management (DAM) software to efficiently organize, store, and distribute content across channels.',
  },
];

const tools = `
<ul class='text-sm pl-5 space-y-1'>
  <li>✔ Digital Experience Platform (DXP) – Combines content management, personalization, and analytics for a seamless user journey.</li>
  <li>✔ Digital Asset Management (DAM) – Helps store, organize, and retrieve digital assets efficiently.</li>
  <li>✔ Reporting & Analytics Software – Tracks KPIs and measures performance to optimize digital strategies.</li>
  <li>✔ Customer Relationship Management (CRM) – Centralizes customer data for personalized interactions.</li>
  <li>✔ A/B Testing & Optimization Tools – Tests different variations of content to improve engagement.</li>
  <li>✔ Content Management Systems (CMS) – Enables efficient creation, management, and publishing of digital content.</li>
</ul>
`;

const trends = `
<ul class='text-sm pl-5 space-y-1'>
  <li><b>AI-Powered Personalization</b><br/>- AI-driven chatbots, predictive analytics, and content recommendations revolutionize digital experiences.</li>
  <li><b>Augmented Reality (AR) Experiences</b><br/>- AR merges digital and real-world interactions for innovative marketing and product showcases.</li>
  <li><b>Stronger Data Security</b><br/>- With growing concerns over privacy, businesses must prioritize cybersecurity and comply with strict regulations.</li>
  <li><b>Seamless Omnichannel Experiences</b><br/>- Users expect consistent interactions across websites, mobile apps, social media, and customer service channels.</li>
</ul>
`;

const DigitalExperienceBranding = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Digital Experience & Branding"
      description="Take the hassle out of ad management with AI-powered automation—save time, optimize performance, and scale your campaigns effortlessly."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Digital Experience & Branding"
      description="A seamless digital experience is key to standing out in today's competitive market. Enhancing your brand's digital presence boosts user satisfaction, builds loyalty, and drives conversions."
      reverse={false}
    />

    {/* How to Improve Your Digital Experience */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-10">
        How to Improve Your Digital Experience
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((item, idx) => (
          <ServiceCard key={idx} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Digital Experience Tools You Should Leverage */}
    <IntroInfo title="Digital Experience Tools You Should Leverage" description={tools} />

    {/* Emerging Digital Experience Trends */}
    <IntroInfo title="Emerging Digital Experience Trends" description={trends} />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default DigitalExperienceBranding;
