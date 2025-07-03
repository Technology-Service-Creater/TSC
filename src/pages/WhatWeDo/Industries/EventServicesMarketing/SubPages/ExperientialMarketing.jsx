import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const experientialWhat = `
Experiential marketing is a strategy that immerses customers in live, interactive brand experiences, allowing them to engage with products or services in a meaningful way. Unlike traditional advertising, it focuses on creating emotional connections through hands-on interactions.
`;

const experientialWhy = `
<ul class=''>
  <li>✔ Builds Stronger Brand Loyalty – Personal experiences create lasting emotional connections.</li>
  <li>✔ Enhances Customer Engagement – Interactive events increase participation and recall.</li>
  <li>✔ Boosts Word-of-Mouth & Social Sharing – Unique experiences encourage organic promotion.</li>
  <li>✔ Makes Brands Stand Out – Differentiates a company in a crowded market.</li>
  <li>✔ Provides Real-Time Consumer Insights – Direct interactions reveal valuable customer preferences.</li>
</ul>
`;

const experientialKeyElements = `
<ul class=''>
  <li>✔ Immersive Brand Storytelling – Engage customers through creative narratives.</li>
  <li>✔ Interactive & Shareable Experiences – Encourage social media participation.</li>
  <li>✔ Personalization & Customization – Tailor experiences to specific audiences.</li>
  <li>✔ Sensory Engagement – Use visuals, sounds, touch, and smell to create impact.</li>
  <li>✔ Technology Integration – Leverage VR, AR, AI, or gamification for deeper interaction.</li>
  <li>✔ Seamless Brand Messaging – Ensure the experience aligns with overall brand identity.</li>
</ul>
`;

const experientialBestPractices = `
<ul class='text-base'>
  <li>✔ Understand Your Audience – Design experiences that align well with their interests and lifestyles.</li>
  <li>✔ Build Strategic Partnerships – Collaborate with influencers or local partners.</li>
  <li>✔ Create FOMO (Fear of Missing Out) – Limited-time activations increase urgency and buzz.</li>
  <li>✔ Tell a Story – Use experiential marketing to reinforce your company’s mission and purpose.</li>
  <li>✔ Measure & Optimize Impact – Track engagement, conversions, and sentiment analysis to refine strategies.</li>
</ul>
`;

const ExperientialMarketing = () => (
  <div>
    <PageHeroSection
      title="Experiential Marketing"
      description="Creating Memorable Brand Experiences"
      bgImage="/Images/ExperientialMarketing_hero.jpg"
    />

    <IntroSection
      title="What is Experiential Marketing?"
      description={experientialWhat}
      imageSrc="/Images/ExperientialMarketing_1.jpg"
      imageAlt="Team brainstorming marketing strategy"
    />

    <IntroInfo title="Why is Experiential Marketing Important?" description={experientialWhy} />

    <IntroInfo
      title="Key Elements of a Successful Experiential Marketing Campaign"
      description={experientialKeyElements}
    />

    <IntroSection
      title="Best Practices for Effective Experiential Marketing"
      description={experientialBestPractices}
      imageSrc="/Images/ExperientialMarketing_2.jpg"
      imageAlt="Creative content marketing discussion"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default ExperientialMarketing;
