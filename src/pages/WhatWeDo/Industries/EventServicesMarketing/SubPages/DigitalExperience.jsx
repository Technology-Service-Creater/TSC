import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const digitalWhat = `
Digital Experience (DX) is the interaction between users and brands across digital touchpoints—
websites, apps, social media, AI-powered chatbots, and more. A well-designed DX ensures smooth, 
intuitive, and engaging user journeys that drive satisfaction, loyalty, and conversions.
`;

const digitalWhy = `
<ul class='text-mb'>
  <li>✔ Enhances User Engagement – A seamless experience keeps users coming back.</li>
  <li>✔ Drives Conversions & Sales – Intuitive design reduces friction and boosts revenue.</li>
  <li>✔ Strengthens Brand Loyalty – Personalized experiences foster deeper connections.</li>
  <li>✔ Optimizes Customer Journey – Users navigate effortlessly, reducing frustration.</li>
  <li>✔ Data-Driven Growth – AI and analytics refine experiences for continuous improvement.</li>
</ul>
`;

const digitalElements = `
<ul class='text-mb'>
  <li>✔ User-Centric Design – Intuitive interfaces and smooth navigation.</li>
  <li>✔ Omnichannel Consistency – Unified experiences across mobile, web, and social.</li>
  <li>✔ Personalization & AI – Tailored content, recommendations, and interactions.</li>
  <li>✔ Speed & Performance – Fast-loading pages and responsive design.</li>
  <li>✔ Accessibility & Inclusivity – Designing for all users, including those with disabilities.</li>
  <li>✔ Secure & Trustworthy – Data privacy, security, and transparent communication.</li>
</ul>
`;

const digitalBestPractices = `
<ul class='text-mb'>
  <li>✔ Simplify User Flows – Reduce friction in navigation, sign-ups, and checkouts.</li>
  <li>✔ Optimize Mobile UX – Ensure mobile-first design and responsiveness.</li>
  <li>✔ Deliver Relevant Content – Match digital experiences to user behavior and intent.</li>
  <li>✔ Integrate Support Tools – Use chatbots, help centers, and AI assistants.</li>
  <li>✔ Continuously Improve – Use A/B testing and real-time analytics for enhancements.</li>
</ul>
`;

const DigitalExperience = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Digital Experience"
      description="Crafting Seamless & Engaging User Journeys"
      bgImage="/Images/DigitalExperience_hero.jpg"
    />

    {/* What is Digital Experience? */}
    <IntroSection
      title="What is Digital Experience (DX)?"
      description={digitalWhat}
      imageSrc="/Images/DigitalExperience_1.jpg"
      imageAlt="Interacting with digital interface"
    />

    {/* Why is Digital Experience Important? */}
    <IntroInfo title="Why is Digital Experience Important?" description={digitalWhy} />

    {/* Key Elements of a Great Digital Experience */}
    <IntroInfo title="Key Elements of a Great Digital Experience" description={digitalElements} />

    {/* Best Practices for Optimizing Digital Experience */}
    <IntroSection
      title="Best Practices for Optimizing Digital Experience"
      description={digitalBestPractices}
      imageSrc="/Images/DigitalExperience_2.jpg"
      imageAlt="Optimizing UX on a laptop"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default DigitalExperience;
