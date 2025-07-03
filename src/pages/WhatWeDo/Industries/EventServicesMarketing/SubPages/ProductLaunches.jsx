import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const productWhat = `
A product launch is a strategic event designed to introduce a new product to the market, generate excitement, and drive early adoption. Whether it’s a physical event, a digital unveiling, or a hybrid experience, a successful launch sets the stage for brand growth and customer engagement.
`;

const productWhy = `
<ul class=''>
  <li>✔ Builds Hype & Awareness – Creates excitement and anticipation among target audiences.</li>
  <li>✔ Strengthens Brand Positioning – Establishes credibility and competitive advantage.</li>
  <li>✔ Unveils Media & Retail Strategy – Coordinates product rollouts across platforms.</li>
  <li>✔ Engages Media & Influencers – Increases visibility through coverage and social media.</li>
  <li>✔ Gathers Market Insights – Real-time feedback helps refine marketing and product strategies.</li>
</ul>
`;

const productKeyElements = `
<ul class=''>
  <li>✔ Compelling Storytelling – Communicate the product’s value and impact with a strong narrative.</li>
  <li>✔ Integrated Marketing Campaigns – Leverage email, social media, and influencer partnerships.</li>
  <li>✔ Exclusive Previews & Demos – Offer VIP access, beta tests, and personalized experiences.</li>
  <li>✔ Immersive Launch Events – Create an engaging in-person or virtual experience.</li>
  <li>✔ Optimized Sales & Distribution Plan – Ensure smooth rollout and inventory alignment.</li>
  <li>✔ User Engagement & Follow-Up – Keep momentum going with continued interaction and updates.</li>
</ul>
`;

const productBestPractices = `
<ul class='text-base '>
  <li>✔ Know Your Audience – Tailor messaging and experiences to resonate with the right people.</li>
  <li>✔ Create Multi-Channel Buzz – Use PR, social media, special events, and internal promotion to drive awareness.</li>
  <li>✔ Leverage Influencers & Brand Ambassadors – Tap into trusted voices to amplify reach.</li>
  <li>✔ Offer Exclusive Incentives – Early-bird discounts, special access, or limited-edition releases build excitement.</li>
  <li>✔ Track Performance & Refine – Analyze engagement, feedback, and sales metrics to refine strategy.</li>
</ul>
`;

const ProductLaunches = () => (
  <div>
    <PageHeroSection
      title="Product Launches"
      description="Creating Buzz & Driving Market Success"
      bgImage="/Images/ProductLaunches_hero.jpg"
    />

    <IntroSection
      title="What is a Product Launch?"
      description={productWhat}
      imageSrc="/Images/ProductLaunches_1.jpg"
      imageAlt="Product launch planning with notebook"
    />

    <IntroInfo title="Why are Product Launches Important?" description={productWhy} />

    <IntroInfo
      title="Key Elements of a Successful Product Launch"
      description={productKeyElements}
    />

    <IntroSection
      title="Best Practices for a Successful Product Launch"
      description={productBestPractices}
      imageSrc="/Images/ProductLaunches_2.jpg"
      imageAlt="Do More product branding"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default ProductLaunches;
