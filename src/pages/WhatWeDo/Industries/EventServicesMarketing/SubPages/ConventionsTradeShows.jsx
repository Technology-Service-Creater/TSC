import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const whatIsCTS = `
Conventions and trade shows are large-scale industry gatherings designed for networking, knowledge sharing, and showcasing the latest innovations. These events bring together businesses, professionals, and thought leaders to exchange ideas, generate leads, and strengthen brand positioning.
`;

const whyCTSImportant = `
<ul class=''>
  <li>✔ Boosts Brand Visibility – A prime opportunity to showcase products and services.</li>
  <li>✔ Facilitates High-Value Networking – Connects businesses with potential clients and partners.</li>
  <li>✔ Encourages Industry Learning – Keynotes, panel discussions, and expert insights drive innovation.</li>
  <li>✔ Generates Leads & Sales – Face-to-face interactions increase conversion potential.</li>
  <li>✔ Provides Market Insights – Keeps businesses updated on industry trends and competition.</li>
</ul>
`;

const keyElementsCTS = `
<ul class=''>
  <li>✔ Eye-Catching Booth Design – Standout visuals, interactive displays, and seamless branding.</li>
  <li>✔ Engaging Presentations & Demos – Live product showcases and Q&A sessions.</li>
  <li>✔ Networking Opportunities – VIP meetups, roundtables, and social engagements.</li>
  <li>✔ Branded Giveaways & Swag – Memorable merchandise to leave a lasting impression.</li>
  <li>✔ Follow-Up Strategy – CRM integrations, post-event emails, and lead nurturing plans.</li>
</ul>
`;

const bestPracticesCTS = `
<ul class='text-sm'>
  <li>✔ Plan Ahead – Set clear objectives, design an engaging booth, and prep your marketing materials.</li>
  <li>✔ Create an Interactive Experience – Add contests and interactive elements to attract attention.</li>
  <li>✔ Leverage Digital Media – Promote your participation through email, social, and web content.</li>
  <li>✔ Optimize for Remote Reach – Stream event highlights or allow remote viewing access.</li>
  <li>✔ Track & Measure ROI – Use analytics, surveys, and lead generation tools to assess event impact.</li>
</ul>
`;

const ConventionsTradeShows = () => (
  <div>
    <PageHeroSection
      title="Conventions & Trade Shows"
      description="Elevating Industry Connections & Brand Impact"
      bgImage="/Images/ConventionsTradeShows_hero.jpg"
    />

    <IntroSection
      title="What are Conventions & Trade Shows?"
      description={whatIsCTS}
      imageSrc="/Images/ConventionsTradeShows_1.jpg"
      imageAlt="Industry Event Discussion"
    />

    <IntroInfo title="Why are Conventions & Trade Shows Important?" description={whyCTSImportant} />

    <IntroInfo
      title="Key Elements of a Successful Convention or Trade Show Presence"
      description={keyElementsCTS}
    />

    <IntroSection
      title="Best Practices for Maximizing Convention & Trade Show Success"
      description={bestPracticesCTS}
      imageSrc="/Images/ConventionsTradeShows_2.jpg"
      imageAlt="Trade Show Crowd"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default ConventionsTradeShows;
