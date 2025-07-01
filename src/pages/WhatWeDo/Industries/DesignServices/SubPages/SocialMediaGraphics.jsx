import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';
import ServiceCard from '../../../../../components/common/ServiceCard';

const whyImportant = [
  'Boosts Engagement – Visually appealing content grabs attention and encourages interaction.',
  'Strengthens Brand Identity – Consistent design builds brand recognition and trust.',
  'Improves Communication – Graphics simplify complex information and make it shareable.',
];

const typesOfGraphics = [
  {
    title: 'Posts',
    desc: 'Standard social media posts with images, text, and sometimes links. These can be used to share updates, promotions, or engaging content.',
  },
  {
    title: 'Stories',
    desc: 'Short, temporary content that appears at the top of social media feeds (e.g., Instagram Stories, Facebook Stories). They are ideal for quick updates, behind-the-scenes content, and promotions.',
  },
  {
    title: 'Banners and Headers',
    desc: 'Large images used as cover photos or profile headers on social media profiles. They help create a strong visual impression and reinforce brand identity.',
  },
  {
    title: 'Advertisements',
    desc: "Paid social media ads that appear in users' feeds. These graphics should be eye-catching and include a clear CTA to drive conversions.",
  },
  {
    title: 'Infographics',
    desc: 'Visual representations of data and information. Infographics can simplify complex information and make it more digestible and shareable.',
  },
];

const keyElements = [
  {
    title: 'Visual Appeal',
    points: [
      'Use high-quality images and graphics that are visually appealing and relevant to your content.',
      'Incorporate vibrant colours that align with your brand identity.',
      'Keep designs clean and uncluttered to ensure clarity and focus.',
    ],
  },
  {
    title: 'Consistency',
    points: [
      'Maintain a consistent style across all your graphics to build brand recognition.',
      "Use your brand's colours, fonts, and logos consistently in all graphics.",
    ],
  },
  {
    title: 'Platform Adaptability',
    points: [
      'Design graphics tailored for different social media platforms (e.g., Instagram, Facebook, Twitter).',
      'Consider the specific dimensions and requirements for each platform to ensure optimal display.',
    ],
  },
  {
    title: 'Engagement',
    points: [
      'Create content that encourages interaction, such as likes, shares, comments, and clicks.',
      'Use compelling visuals and call-to-action (CTA) elements to drive engagement.',
    ],
  },
  {
    title: 'Text and Typography',
    points: [
      'Use legible fonts and appropriate font sizes to ensure readability.',
      'Keep text concise and to the point, highlighting the most important information.',
    ],
  },
];

const toHtmlList = arr =>
  `<ul class='list-disc pl-6 space-y-1'>${arr.map(item => `<li>${item}</li>`).join('')}</ul>`;

const SocialMediaGraphics = () => (
  <div className="bg-[#F5F8FF]">
    <PageHeroSection
      title="Social Media Graphics"
      description="Capturing Attention, Driving Engagement"
      bgImage="/Images/SocialMediaGraphics_Hero.jpg"
    />

    <IntroSection
      title="What Are Social Media Graphics?"
      description={
        'Social media graphics are visual content designed to engage audiences, communicate messages, and enhance brand presence across platforms like Instagram, Facebook, LinkedIn, and X (Twitter).'
      }
      imageSrc="/Images/SocialMediaGraphics-1.jpg"
      imageAlt="Social Media Graphics"
      reverse={false}
    />

    <IntroInfo title="Why Are They Important?" description={toHtmlList(whyImportant)} />

    {/* Types of Social Media Graphics */}
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Types of Social Media Graphics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {typesOfGraphics.map(type => (
          <ServiceCard key={type.title} title={type.title} description={type.desc} />
        ))}
      </div>
    </section>

    {/* Key Elements Section */}
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Key Elements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {keyElements.map(el => (
          <ServiceCard key={el.title} title={el.title} description={toHtmlList(el.points)} />
        ))}
      </div>
    </section>

    <div className="mt-8">
      <ContactForm />
    </div>
  </div>
);

export default SocialMediaGraphics;
