import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const galaWhat = `
Social galas and fundraisers are elegant, high-profile events that raise awareness and secure resources for charitable causes while providing attendees with a memorable, upscale experience. These events combine sophisticated entertainment, inspiring storytelling, and community engagement to support nonprofits and social initiatives.
`;

const galaWhy = `
<ul class=''>
  <li>✔ Drive Philanthropic Impact – Enhances essential funding and resources for meaningful causes.</li>
  <li>✔ Enhance Community Engagement – Unites sponsors, donors, and influencers to rally around shared missions.</li>
  <li>✔ Build Trust & Cause Awareness – Elevates the profile of the cause through media coverage and emotional appeal.</li>
  <li>✔ Create Memorable Experiences – Combine luxury and purpose to leave a lasting impression on attendees and benefactors.</li>
  <li>✔ Strengthen Donor Retention – Encourages ongoing relationships and future giving through emotional connection.</li>
</ul>
`;

const galaKeyElements = `
<ul class=''>
  <li>✔ Elegant Venue & Décor – Choose a setting that reflects the cause’s prestige and creates a sophisticated ambiance.</li>
  <li>✔ Inspirational Stories & Entertainment – Incorporate inspiring speakers, live music, or performances to captivate guests.</li>
  <li>✔ Visual Branding – Integrate branded visuals and success stories that highlight the organization’s mission and achievements.</li>
  <li>✔ Creative Fundraising Activities – Include silent auctions, raffles, or donation drives to encourage generosity.</li>
  <li>✔ Sponsorships & Partnerships – Collaborate with businesses and influencers to amplify reach and credibility.</li>
  <li>✔ Digital Integration – Leverage social media, live streaming, and mobile donation tools for broader impact.</li>
</ul>
`;

const galaBestPractices = `
<ul class='text-sm '>
  <li>✔ Define Clear Goals & Metrics – Establish outcomes for social, financial, and community impact.</li>
  <li>✔ Craft a Unique Experience – Use thematic elements, elegant design, and personal storytelling to make the event memorable.</li>
  <li>✔ Maximize Engagement – Tailor the experience for different donor segments, including VIPs, recurring donors, and new attendees.</li>
  <li>✔ Ensure Seamless Logistics – Focus on guest experience, from invitation to thank-you communication.</li>
  <li>✔ Follow-Up & Stewardship – Send personalized gratitude and updates to build momentum for future events.</li>
</ul>
`;

const SocialGalasFundraisers = () => (
  <div>
    <PageHeroSection
      title="Social Galas & Fundraisers"
      description="Celebrating Causes with Style & Impact"
      bgImage="/Images/SocialGalasFundraisers_hero.jpg"
    />

    <IntroSection
      title="What are Social Galas & Fundraisers?"
      description={galaWhat}
      imageSrc="/Images/SocialGalasFundraisers_1.jpg"
      imageAlt="Online Donation and Planning"
    />

    <IntroInfo title="Why are Social Galas & Fundraisers Important?" description={galaWhy} />

    <IntroInfo
      title="Key Elements of a Successful Gala & Fundraiser"
      description={galaKeyElements}
    />

    <IntroSection
      title="Best Practices for Social Galas & Fundraisers"
      description={galaBestPractices}
      imageSrc="/Images/SocialGalasFundraisers_2.jpg"
      imageAlt="Writing Thank You Notes after Gala"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default SocialGalasFundraisers;
