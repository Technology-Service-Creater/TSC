import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const tradeShowWhat = `
<ul class='text-mb'>
  <li>✔ Maximizes Brand Visibility – Stand out in a crowded event with eye-catching design.</li>
  <li>✔ Enhances Customer Engagement – Interactive elements create deeper connections.</li>
  <li>✔ Generates High-Quality Leads – Direct conversations drive sales and partnerships.</li>
  <li>✔ Strengthens Brand Authority – A well-executed presence establishes industry leadership.</li>
  <li>✔ Provides Immersive Experiences – Multi-sensory elements captivate audiences.</li>
</ul>
`;

const tradeShowElements = `
<ul class='text-mb'>
  <li>✔ Striking Booth Design – Bold visuals, sleek layouts, and brand-consistent aesthetics.</li>
  <li>✔ Interactive Touchpoints – AR/VR experiences, product demos, and gamification.</li>
  <li>✔ Seamless Digital Integration – QR codes, mobile engagement, and social media activations.</li>
  <li>✔ Engaging Presentations – Info-rich talks, live demos, and educational content.</li>
  <li>✔ Giveaways & Branded Merchandise – High-value swag that keeps your brand top-of-mind.</li>
  <li>✔ Networking & Lead Capture – Smart badges, CRM integrations, and follow-up strategies.</li>
</ul>
`;

const tradeShowBestPractices = `
<ul class='text-base'>
  <li>✔ Design for Impact – Make a strong first impression with booth layout, setup, and messaging.</li>
  <li>✔ Engage Audiences – Use interactive experiences to drive participation.</li>
  <li>✔ Leverage Social Media – Showcase your trade show through immersive content and hashtags.</li>
  <li>✔ Drive Traffic – Offer exclusive incentives or attractions to create excitement online.</li>
  <li>✔ Follow Up Effectively – Convert leads into customers with post-event engagement.</li>
</ul>
`;

const TradeShowDisplays = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Trade Show Displays & Experiences"
      description="Captivating Audiences, Elevating Brands"
      bgImage="/Images/TradeShowDisplays_hero.jpg"
    />

    {/* What are Trade Show Displays & Experiences? */}
    <IntroSection
      title="What are Trade Show Displays & Experiences?"
      description={tradeShowWhat}
      imageSrc="/Images/TradeShowDisplays_1.png"
      imageAlt="Trade show presentation"
    />

    {/* Key Elements of an Effective Trade Show Experience */}
    <IntroInfo
      title="Key Elements of an Effective Trade Show Experience"
      description={tradeShowElements}
    />

    {/* Best Practices for Trade Show Success */}
    <IntroSection
      title="Best Practices for Trade Show Success"
      description={tradeShowBestPractices}
      imageSrc="/Images/TradeShowDisplays_2.png"
      imageAlt="Crowded exhibit floor at trade show"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default TradeShowDisplays;
