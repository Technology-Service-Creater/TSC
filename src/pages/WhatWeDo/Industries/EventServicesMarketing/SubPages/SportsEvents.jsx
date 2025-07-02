import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const sportsWhat = `
Sports events are high-energy, competitive gatherings that bring athletes, teams, and fans together for thrilling action. From local tournaments to global championships, these events foster excitement, national pride, and unforgettable moments of victory and resilience.
`;

const sportsWhy = `
<ul class=' '>
  <li>✔ Inspires Passion & Team Spirit – Fans unite in shared enthusiasm and loyalty.</li>
  <li>✔ Boosts Economic & Tourism Growth – Major events attract global audiences and sponsorships.</li>
  <li>✔ Creates Unforgettable Experiences – The thrill of live competition is unmatched.</li>
  <li>✔ Enhances Brand & Athlete Recognition – Sponsorship, endorsement, and digital reach enable visibility.</li>
  <li>✔ Encourages Community Engagement – Local and international events bring people together.</li>
</ul>
`;

const sportsKeyElements = `
<ul class=' '>
  <li>✔ World-Class Venues & Infrastructure – Stadiums, arenas, and digital-friendly viewing setups.</li>
  <li>✔ Engaging Fan Experience – Interactive zones, halftime entertainment, and live updates.</li>
  <li>✔ Seamless Event Logistics – Efficient ticketing, security, and crowd control.</li>
  <li>✔ Sponsorships & Branding – Corporate partnerships and merchandising exposure.</li>
  <li>✔ Live Broadcasting & Streaming – Digital access for a global audience.</li>
  <li>✔ Merchandising & Fan Memorabilia – Jerseys, collectibles, and event-exclusive gear.</li>
</ul>
`;

const sportsBestPractices = `
<ul class='text-sm '>
  <li>✔ Prioritize Athlete & Spectator Safety – Medical teams, security measures, and emergency response.</li>
  <li>✔ Leverage Technology – AR/VR fan engagement, digital scoreboards, and mobile apps.</li>
  <li>✔ Create Immersive Fan Campaigns – Fantasy leagues, prediction voting, challenges, and social fan activations.</li>
  <li>✔ Go Green – Use sustainable practices, eco-friendly venues, and minimal waste policies.</li>
  <li>✔ Ensure Smooth Broadcasting & Media Coverage – Multi-angle content for maximum engagement.</li>
</ul>
`;

const SportsEvents = () => (
  <div>
    <PageHeroSection
      title="Sports Events"
      description="Creating Electrifying Moments & Uniting Fans"
      bgImage="/Images/SportsEvents_hero.jpg"
    />

    <IntroSection
      title="What are Sports Events?"
      description={sportsWhat}
      imageSrc="/Images/SportsEvents_1.jpg"
      imageAlt="Stadium Match View"
    />

    <IntroInfo title="Why are Sports Events Important?" description={sportsWhy} />

    <IntroInfo title="Key Elements of a Successful Sports Event" description={sportsKeyElements} />

    <IntroSection
      title="Best Practices for a Winning Sports Event"
      description={sportsBestPractices}
      imageSrc="/Images/SportsEvents_2.jpg"
      imageAlt="Boxing Event with Fans"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default SportsEvents;
