import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import ContactForm from '../../../../../components/common/ContactForm';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';

const keyElements = [
  'Typography – Choosing fonts that enhance readability and aesthetics.',
  'Color Theory – Using colors strategically to evoke emotions and create harmony.',
  'Layout & Composition – Structuring elements for visual balance and clarity.',
  'Imagery & Illustration – Incorporating graphics to enhance storytelling.',
  'Branding – Crafting a consistent visual identity for businesses and individuals.',
];

const importance = [
  'Captures attention and builds brand recognition.',
  'Enhances communication and user engagement.',
  'Boosts credibility and professionalism.',
];

const applications = [
  'Branding & Marketing – Logos, advertisements, and social media creatives.',
  'Web & UI Design – Websites, apps, and interactive interfaces.',
  'Print & Packaging – Magazines, brochures, and product packaging.',
  'Motion Graphics – Animations, video graphics, and presentations.',
];

const toHtmlList = arr =>
  `<ul class='list-disc pl-6 space-y-1'>${arr.map(item => `<li>${item}</li>`).join('')}</ul>`;

const GraphicDesign = () => (
  <div className="bg-[#F5F8FF]">
    <PageHeroSection
      title="Graphic Design"
      description="Graphic design is the art of visual communication using typography, imagery, color, and layout to convey ideas, emotions, and messages effectively."
      bgImage="/Images/GraphicDesign_Hero.jpg"
    />

    {/* Services Section using IntroSection */}
    <IntroSection
      title="Graphic Design Services"
      description={`There&apos;s no limit to what you can get designed at TSC. Whether you&apos;re looking for a spectacular new logo or some stunning flyers, the talented global community of designers at TSC can make it happen. TSC prides itself on its high-quality designers who deliver only the best graphic design services. Find the right design service for you below and get design you&apos;ll love today!`}
      imageSrc="/Images/GraphicDesign-1.jpg"
      imageAlt="Graphic Design"
      reverse={false}
    />

    {/* Key Elements, Importance, and Applications using IntroInfo */}
    <IntroInfo title="Key Elements of Graphic Design" description={toHtmlList(keyElements)} />
    <IntroInfo title="Why is Graphic Design Important?" description={toHtmlList(importance)} />
    <IntroInfo title="Applications of Graphic Design" description={toHtmlList(applications)} />

    {/* Contact Form Section */}
    <div className="mt-8">
      <ContactForm />
    </div>
  </div>
);

export default GraphicDesign;
