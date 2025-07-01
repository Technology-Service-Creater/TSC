import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const corporateWhat = `
Corporate events are strategic gatherings designed to inspire, educate, and connect employees, clients, and industry leaders. Whether it's a product launch, team-building retreat, or annual conference, these events enhance brand reputation, foster relationships, and drive business growth.
`;

const corporateWhy = `
<ul class='text-mb'>
  <li>✔ Strengthens Brand Identity – Showcases company values and vision.</li>
  <li>✔ Builds Meaningful Connections – Encourages networking and collaboration.</li>
  <li>✔ Boosts Employee Engagement – Motivates teams and enhances workplace culture.</li>
  <li>✔ Enhances Business Growth – Generates leads, partnerships, and customer loyalty.</li>
  <li>✔ Delivers Key Messages Effectively – Creates an immersive brand experience.</li>
</ul>
`;

const corporateTypes = `
<ul class='text-mb'>
  <li>✔ Conferences & Summits – Knowledge-sharing events with keynote speakers and panels.</li>
  <li>✔ Product Launches – Exciting showcases to introduce new offerings to the market.</li>
  <li>✔ Networking Events – Opportunities for professionals to connect and collaborate.</li>
  <li>✔ Employee Engagement Programs – Team-building retreats, game nights, and wellness initiatives.</li>
  <li>✔ Trade Shows & Expos – Industry events to exhibit products and services.</li>
  <li>✔ Workshops & Trainings – Professional development and skill-building experiences.</li>
  <li>✔ Executive Meetings & Retreats – Strategic planning sessions for leadership teams.</li>
</ul>
`;

const corporateBestPractices = `
<ul class='text-mb'>
  <li>✔ Define Clear Objectives – Align event goals with business strategy.</li>
  <li>✔ Plan with Intent – Ensure logistics, speakers, and activities are well-coordinated.</li>
  <li>✔ Engage Attendees – Create interactive experiences and opportunities for participation.</li>
  <li>✔ Reflect the Brand – Incorporate branding elements to reinforce company values.</li>
  <li>✔ Measure Success – Track attendee feedback, engagement, and ROI.</li>
</ul>
`;

const CorporateEvents = () => (
  <div>
    <PageHeroSection
      title="Corporate Events"
      description="Creating Impactful & Engaging Experiences"
      bgImage="/Images/CorporateEvents_hero.jpg"
    />

    <IntroSection
      title="What are Corporate Events?"
      description={corporateWhat}
      imageSrc="/Images/CorporateEvents_1.jpg"
      imageAlt="Corporate event gathering"
    />

    <IntroInfo title="Why are Corporate Events Important?" description={corporateWhy} />

    <IntroInfo title="Types of Corporate Events" description={corporateTypes} />

    <IntroSection
      title="Best Practices for Successful Corporate Events"
      description={corporateBestPractices}
      imageSrc="/Images/CorporateEvents_2.jpg"
      imageAlt="Team collaboration at a corporate event"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default CorporateEvents;
