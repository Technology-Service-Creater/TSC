import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const integratedWhat = `
Integrated Marketing is a strategic approach that ensures all marketing channels—
digital, social, print, events, and more—work together to deliver a consistent, unified 
brand message. It creates a seamless customer experience across multiple touchpoints, 
reinforcing brand identity and maximizing impact.
`;

const integratedWhy = `
<ul class=mbpl-5>
  <li>✔ Ensures Brand Consistency – A unified message builds trust and recognition.</li>
  <li>✔ Maximizes Marketing Impact – Coordinated efforts amplify reach and engagement.</li>
  <li>✔ Optimizes Budget & Resources – Reduces redundancy and increases efficiency.</li>
  <li>✔ Enhances Customer Experience – A seamless journey improves retention and loyalty.</li>
  <li>✔ Increases ROI – A well-integrated strategy drives higher conversions and revenue.</li>
</ul>
`;

const integratedComponents = `
<ul class=mbpl-5>
  <li>✔ Unified Brand Messaging – Consistent voice, tone, and visuals across all platforms.</li>
  <li>✔ Cross-Channel Coordination – Align social media, email, website, and offline marketing.</li>
  <li>✔ Data-Driven Insights – Use analytics to refine and personalize messaging.</li>
  <li>✔ Seamless Customer Journey – Ensure smooth transitions between online and offline experiences.</li>
  <li>✔ Content Synchronization – Align storytelling across blogs, ads, and campaigns.</li>
</ul>
`;

const integratedBestPractices = `
<ul class='text-base '>
  <li>✔ Develop a Core Message – Create a brand narrative that ties all efforts together.</li>
  <li>✔ Use Omnichannel Strategies – Ensure digital, social, and traditional channels complement each other.</li>
  <li>✔ Leverage Automation & AI – Streamline marketing efforts with intelligent tools.</li>
  <li>✔ Monitor & Optimize Performance – Continuously track data to refine strategies.</li>
  <li>✔ Engage & Personalize – Tailor messaging to different audience segments.</li>
</ul>
`;

const IntegratedMarketing = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Integrated Marketing"
      description="Delivering a Seamless Brand Experience"
      bgImage="/Images/IntegratedMarketing_heroMain.jpg"
    />

    {/* What is Integrated Marketing? */}
    <IntroSection
      title="What is Integrated Marketing?"
      description={integratedWhat}
      imageSrc="/Images/IntegratedMarketing_2.jpg"
      imageAlt="Marketing Strategy Meeting"
    />

    {/* Why is Integrated Marketing Important? */}
    <IntroInfo title="Why is Integrated Marketing Important?" description={integratedWhy} />

    {/* Key Components of Integrated Marketing */}
    <IntroInfo title="Key Components of Integrated Marketing" description={integratedComponents} />

    {/* Best Practices for Effective Integrated Marketing */}
    <IntroSection
      title="Best Practices for Effective Integrated Marketing"
      description={integratedBestPractices}
      imageSrc="/Images/IntegratedMarketing_2.jpg"
      imageAlt="Team Planning Integrated Campaign"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default IntegratedMarketing;
