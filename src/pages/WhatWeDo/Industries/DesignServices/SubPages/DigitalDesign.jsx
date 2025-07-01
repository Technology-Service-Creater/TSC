import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const whyMatters = [
  'Enhances User Experience (UX) – Intuitive interfaces improve usability and satisfaction.',
  'Boosts Engagement – Visually compelling designs capture and retain attention.',
  'Strengthens Brand Identity – Consistent visuals establish trust and recognition.',
];

const keyElements = [
  'User Interface (UI) Design – Crafting visually appealing and intuitive layouts.',
  'Responsive Design – Ensuring adaptability across devices and screen sizes.',
  'Typography & Color Theory – Enhancing readability and emotional impact.',
  'Interaction & Motion Design – Adding animations and transitions for engagement.',
  'Data Visualization – Presenting complex information in an easy-to-understand format.',
];

const essentialPrinciples = [
  'User-Centered Design – Prioritizing user needs and behaviors.',
  'Visual Hierarchy – Guiding attention using contrast, typography, and layout.',
  'Consistency – Using brand colors, fonts, and elements for familiarity.',
  'Responsiveness – Ensuring adaptability across devices and screen sizes.',
  'Accessibility – Designing for inclusivity with readable fonts, color contrast, and intuitive navigation.',
  'Interactivity – Creating engaging experiences with animations and micro-interactions.',
];

const toHtmlList = arr =>
  `<ul class='list-disc pl-6 space-y-1'>${arr.map(item => `<li>${item}</li>`).join('')}</ul>`;

const DigitalDesign = () => (
  <div className="bg-[#F5F8FF]">
    <PageHeroSection
      title="Digital Design"
      description="Crafting Seamless User Experiences"
      bgImage="/Images/DigitalDesign_Hero.jpg"
    />

    <IntroSection
      title="What is Digital Design?"
      description={
        'Digital design is the process of creating visually engaging and user-friendly digital experiences across websites, apps, and interactive platforms. It blends aesthetics with functionality to enhance usability and engagement.'
      }
      imageSrc="/Images/DigitalDesign-1.jpg"
      imageAlt="Digital Design"
      reverse={false}
    />

    <IntroInfo title="Why Digital Design Matters?" description={toHtmlList(whyMatters)} />
    <IntroInfo title="Key Elements of Digital Design" description={toHtmlList(keyElements)} />
    <IntroInfo
      title="Essential Principles of Digital Design"
      description={`<ul class='pl-6 space-y-1'>${essentialPrinciples.map(item => `<li><span class='text-zinc-600 font-bold'>✓</span> ${item}</li>`).join('')}</ul>`}
    />

    <div className="mt-8">
      <ContactForm />
    </div>
  </div>
);

export default DigitalDesign;
