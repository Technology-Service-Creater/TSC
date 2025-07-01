import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const broadcastWhat = `
Broadcast Design is the art of creating dynamic, visually compelling graphics and motion elements 
for television, streaming platforms, and live broadcasts. It enhances storytelling, strengthens brand 
identity, and keeps audiences engaged across news, sports, entertainment, and corporate productions.
`;

const broadcastWhy = `
<ul class='text-mb'>
  <li>✔ Enhances Visual Storytelling – Engaging graphics make content more digestible and appealing.</li>
  <li>✔ Strengthens Brand Identity – Cohesive visual elements reinforce recognition and trust.</li>
  <li>✔ Improves Viewer Engagement – Motion graphics and animations capture attention.</li>
  <li>✔ Delivers Real-Time Information – Dynamic overlays and lower-thirds enhance communication.</li>
  <li>✔ Creates a Professional Look – High-quality visuals elevate production value.</li>
</ul>
`;

const broadcastElements = `
<ul class='text-mb'>
  <li>✔ On-Screen Graphics – Lower-thirds, news tickers, and real-time data visualizations.</li>
  <li>✔ Show Branding – Custom logos, intros, and transitions that set the tone.</li>
  <li>✔ Augmented Reality (AR) & Virtual Sets – 3D environments that enhance storytelling.</li>
  <li>✔ Motion Graphics & Animation – Smooth transitions, kinetic typography, and effects.</li>
  <li>✔ Chyrons & Lower Thirds – Informational banners for seamless audience understanding.</li>
  <li>✔ Live Event Graphics – Scoreboards, countdowns, and interactive overlays for sports and shows.</li>
</ul>
`;

const broadcastBestPractices = `
<ul class='text-mb'>
  <li>✔ Maintain Consistency – Keep branding, colors, and typography uniform across all graphics.</li>
  <li>✔ Prioritize Legibility – Clear, high-contrast text ensures easy readability.</li>
  <li>✔ Ensure Visual Hierarchy – Smooth, subtle animations direct attention where it matters.</li>
  <li>✔ Optimize for Different Screens – Ensure graphics work across TV, mobile, and streaming devices.</li>
  <li>✔ Leverage Real-Time Data – Dynamic updates keep broadcasts fresh and relevant.</li>
</ul>
`;

const BroadcastDesign = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Broadcast Design"
      description="Crafting Visually Impactful On-Air Experiences"
      bgImage="/Images/BroadcastDesign_hero.jpg"
    />

    {/* What is Broadcast Design? */}
    <IntroSection
      title="What is Broadcast Design?"
      description={broadcastWhat}
      imageSrc="/Images/BroadcastDesign_1.png"
      imageAlt="TV production design environment"
    />

    {/* Why is Broadcast Design Important? */}
    <IntroInfo title="Why is Broadcast Design Important?" description={broadcastWhy} />

    {/* Key Elements of Broadcast Design */}
    <IntroInfo title="Key Elements of Broadcast Design" description={broadcastElements} />

    {/* Best Practices for Effective Broadcast Design */}
    <IntroSection
      title="Best Practices for Effective Broadcast Design"
      description={broadcastBestPractices}
      imageSrc="/Images/BroadcastDesign_2.png"
      imageAlt="Designer working on motion graphics"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default BroadcastDesign;
