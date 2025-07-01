import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const sponsorshipWhat = `
Sponsorship activation is the process of bringing a sponsorship to life through engaging 
experiences, creative storytelling, and audience interaction. Instead of just placing a logo 
on an event or campaign, brands create meaningful connections with their audience by 
integrating sponsorship into their marketing strategy.
`;

const sponsorshipWhy = `
<ul class='text-mb'>
  <li>✔ Enhances Brand Visibility – Strategic activations make sponsorships more impactful.</li>
  <li>✔ Strengthens Audience Engagement – Interactive experiences create memorable brand connections.</li>
  <li>✔ Increases ROI – Measurable activations ensure sponsorship investments pay off.</li>
  <li>✔ Aligns Brand & Partner Values – Authentic partnerships build trust and credibility.</li>
  <li>✔ Amplifies Reach – Leveraging events, influencers, and digital channels expands exposure.</li>
</ul>
`;

const sponsorshipStrategies = `
<ul class='text-mb'>
  <li>✔ Experiential Marketing – Immersive activations like VR, gamification, and live demos.</li>
  <li>✔ Social Media Integration – Branded hashtags, influencer partnerships, and live streaming.</li>
  <li>✔ Exclusive VIP Experiences – Special perks, backstage access, and meet-and-greets.</li>
  <li>✔ Interactive Brand Booths – Engaging spaces with product trials and giveaways.</li>
  <li>✔ Cause-Driven Sponsorships – Aligning with social initiatives for greater brand impact.</li>
  <li>✔ Personalized Content – Targeted storytelling that resonates with the audience.</li>
</ul>
`;

const sponsorshipBestPractices = `
<ul class='text-base'>
  <li>✔ Define Clear Objectives – Align activation goals with audience expectations.</li>
  <li>✔ Create a Seamless Journey – Integrate brand and sponsor across digital, physical, and social buzz.</li>
  <li>✔ Ensure Authentic Fit – Pick a partner that aligns with your brand values.</li>
  <li>✔ Measure & Optimize – Track engagement, conversions, and brand sentiment.</li>
  <li>✔ Personalize the Experience – Match activation with the brand’s core values.</li>
</ul>
`;

const SponsorshipActivation = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Sponsorship Activation"
      description="Turning Partnerships into Powerful Engagement"
      bgImage="/Images/SponsorshipActivation_hero.png"
    />

    {/* What is Sponsorship Activation? */}
    <IntroSection
      title="What is Sponsorship Activation?"
      description={sponsorshipWhat}
      imageSrc="/Images/SponsorshipActivation_1.png"
      imageAlt="Handshake Partnership"
    />

    {/* Why is Sponsorship Activation Important? */}
    <IntroInfo title="Why is Sponsorship Activation Important?" description={sponsorshipWhy} />

    {/* Key Strategies for Effective Sponsorship Activation */}
    <IntroInfo
      title="Key Strategies for Effective Sponsorship Activation"
      description={sponsorshipStrategies}
    />

    {/* Best Practices for Successful Sponsorship Activation */}
    <IntroSection
      title="Best Practices for Successful Sponsorship Activation"
      description={sponsorshipBestPractices}
      imageSrc="/Images/SponsorshipActivation_2.png"
      imageAlt="Planning Sponsorship Campaign"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default SponsorshipActivation;
