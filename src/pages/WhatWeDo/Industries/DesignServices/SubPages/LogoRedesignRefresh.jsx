import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const keyConsiderations = [
  "Brand Identity: The logo should reflect your brand's personality, values, and mission. It should convey the essence of what your brand stands for.",
  'Simplicity: A simple logo is often more memorable and versatile. It should be easy to recognize at a glance.',
  'Versatility: Your logo should look good in various sizes and formats, from business cards to billboards, and across different mediums like print and digital.',

  "Timelessness: Aim for a design that won\'t look outdated in a few years. Avoid following design trends too closely.",
  "Colour and Typography: Choose colours and fonts that align with your brand's identity and evoke the desired emotions.",
];

const whenToRedesign = [
  "Your logo looks outdated or doesn't reflect current design trends.",
  'Your brand has evolved, and the existing logo no longer represents your identity.',
  'It lacks versatility for digital, print, and modern branding needs.',
  'Customer perception has changed, and your logo needs a fresh appeal.',
];

const redesignVsRefresh = [
  'Logo Refresh – Minor tweaks (font, color, or slight refinements) for a modern touch.',
  "Full Redesign – A complete transformation to reflect a brand's new direction.",
];

const toHtmlList = arr =>
  `<ul class='list-disc pl-6 space-y-1'>${arr.map(item => `<li>${item}</li>`).join('')}</ul>`;

const LogoRedesignRefresh = () => (
  <div className="bg-[#F5F8FF]">
    <PageHeroSection
      title="Logo Redesign & Refresh"
      description="Creating or refreshing a logo is an exciting opportunity to define or redefine your brand's visual identity"
      bgImage="/Images/LogoRedesignRefresh_Hero.jpg"
    />

    <IntroSection
      title="What is a Logo Redesign & Refresh?"
      description={`A logo redesign is a complete transformation of your existing logo, while a logo refresh is a subtle update to modernize and refine your brand's visual identity. Both approaches help keep your brand relevant, memorable, and aligned with evolving trends.`}
      imageSrc="/Images/LogoRedesignRefresh-1.jpg"
      imageAlt="Logo Redesign & Refresh"
      reverse={false}
    />

    <IntroInfo title="Key Considerations" description={toHtmlList(keyConsiderations)} />
    <IntroInfo
      title="When Should You Consider a Redesign or Refresh?"
      description={toHtmlList(whenToRedesign)}
    />
    <IntroInfo
      title="Redesign vs. Refresh – What's Right for You?"
      description={toHtmlList(redesignVsRefresh)}
    />

    <div className="mt-8">
      <ContactForm />
    </div>
  </div>
);

export default LogoRedesignRefresh;
