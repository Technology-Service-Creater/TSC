import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const mniWhat = `
Meetings and Incentives (M&I) are strategic corporate gatherings designed to reward performance and drive business results. These programs combine purposeful content, travel experiences, and team-building activities to inspire teams, foster collaboration, and enhance productivity.
`;

const mniWhy = `
<ul class=''>
  <li>✔ Boosts Employee Morale & Motivation – Recognizing achievements fuels performance.</li>
  <li>✔ Drives Productive Goals – Aligns corporate goals with team and individual success.</li>
  <li>✔ Fosters Collaboration – Shared experiences encourage networking and better teamwork.</li>
  <li>✔ Creates Memorable Experiences – Unique events leave lasting impressions on employees.</li>
  <li>✔ Strengthens Brand & Culture – Reinforces company values and loyalty.</li>
</ul>
`;

const mniKeyElements = `
<ul class=''>
  <li>✔ Engaging Content & Speakers – Inspirational keynotes, training, and interactive discussions.</li>
  <li>✔ Strategic Location Selection – Iconic cities, resorts, and venues suited to event goals.</li>
  <li>✔ Thoughtful Itineraries – Balanced schedules of work, leisure, and networking.</li>
  <li>✔ Technology Integration – Virtual meetings, all-in-one event apps, and live Q&A solutions.</li>
  <li>✔ Personalization & Customization – Tailored experiences based on team performance.</li>
</ul>
`;

const mniBestPractices = `
<ul class='text-sm '>
  <li>✔ Set Clear Goals – Define objectives and align incentives with company success.</li>
  <li>✔ Prioritize Sustainability – Choose eco-friendly venues and reduce waste.</li>
  <li>✔ Ensure Accessibility – Provide virtual options for remote teams.</li>
  <li>✔ Recognize & Celebrate – Host award nights, team activities, and wellness breaks.</li>
  <li>✔ Gather Feedback & Iterate – Collect insights and evolve M&I programs.</li>
</ul>
`;

const MeetingsIncentives = () => (
  <div>
    <PageHeroSection
      title="Meetings & Incentives"
      description="Driving Engagement, Motivation & Success"
      bgImage="/Images/MeetingsIncentives_hero.jpg"
    />

    <IntroSection
      title="What are Meetings & Incentives?"
      description={mniWhat}
      imageSrc="/Images/MeetingsIncentives_1.jpg"
      imageAlt="Business Meeting Room"
    />

    <IntroInfo title="Why are Meetings & Incentives Important?" description={mniWhy} />

    <IntroInfo
      title="Key Elements of Effective Meetings & Incentives"
      description={mniKeyElements}
    />

    <IntroSection
      title="Best Practices for a Successful M&I Program"
      description={mniBestPractices}
      imageSrc="/Images/MeetingsIncentives_2.jpg"
      imageAlt="Team on a Video Call with Coffee"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default MeetingsIncentives;
