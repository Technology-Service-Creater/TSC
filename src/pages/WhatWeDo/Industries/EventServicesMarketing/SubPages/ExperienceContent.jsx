import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const contentWhat = `
Experience Content goes beyond traditional storytelling—it’s about creating interactive, 
immersive, and emotionally engaging content that allows audiences to connect with a brand 
on a deeper level. It blends design, technology, and storytelling to make users feel, 
explore, and engage rather than just consume.
`;

const contentWhy = `
<ul class='text-mb'>
  <li>✔ Enhances Engagement – Interactive content holds attention longer than static media.</li>
  <li>✔ Builds Emotional Connections – Immersive storytelling resonates on a personal level.</li>
  <li>✔ Boosts Brand Recall – Memorable experiences leave lasting impressions.</li>
  <li>✔ Encourages Active Participation – Users become co-creators of the content journey.</li>
  <li>✔ Drives Conversions – Engaged users are more likely to take action.</li>
</ul>
`;

const contentTypes = `
<ul class='text-mb'>
  <li>✔ Interactive Websites & Apps – Dynamic storytelling, gamification, and fluid navigation.</li>
  <li>✔ Augmented & Virtual Reality (AR/VR) – Immersive environments that bring stories to life.</li>
  <li>✔ 360° Videos & Live Streaming – Engaging real-time and on-demand brand experiences.</li>
  <li>✔ User-Generated Content (UGC) – Audiences contributing content and sharing their voice.</li>
  <li>✔ Personalized Content Journeys – AI-driven customization based on behavior and interests.</li>
  <li>✔ Experiential Marketing Campaigns – Brand activations that blend digital and physical worlds.</li>
</ul>
`;

const contentBestPractices = `
<ul class='text-base'>
  <li>✔ Prioritize User Interaction – Let users explore, click, and engage.</li>
  <li>✔ Use Emotion-Driven Storytelling – Create narratives that spark curiosity and connection.</li>
  <li>✔ Leverage Cutting-Edge Tech – AR, AI, and immersive media create memorable moments.</li>
  <li>✔ Ensure Mobile & Cross-Platform Compatibility – A seamless experience on any device.</li>
  <li>✔ Encourage Participation & Sharing – Make it easy for users to engage and amplify.</li>
</ul>
`;

const ExperienceContent = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Experience Content"
      description="Creating Meaningful and Immersive Brand Stories"
      bgImage="/Images/ExperienceContent_hero.jpg"
    />

    {/* What is Experience Content? */}
    <IntroSection
      title="What is Experience Content?"
      description={contentWhat}
      imageSrc="/Images/ExperienceContent_1.png"
      imageAlt="Immersive storytelling in digital environment"
    />

    {/* Why is Experience Content Important? */}
    <IntroInfo title="Why is Experience Content Important?" description={contentWhy} />

    {/* Types of Experience Content */}
    <IntroInfo title="Types of Experience Content" description={contentTypes} />

    {/* Best Practices for Crafting Experience Content */}
    <IntroSection
      title="Best Practices for Crafting Experience Content"
      description={contentBestPractices}
      imageSrc="/Images/ExperienceContent_2.png"
      imageAlt="Creative team developing immersive content"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default ExperienceContent;
