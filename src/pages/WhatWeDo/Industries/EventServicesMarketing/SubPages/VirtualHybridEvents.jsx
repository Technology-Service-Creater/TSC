import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const whatIsVirtualHybrid = `
Virtual and hybrid events use digital platforms to engage global audiences by blending in-person and online experiences for broader participation. These formats include webinars, conferences, product launches, trade shows, and networking sessions, making them accessible to global audiences.
`;

const whyImportant = `
<ul class=''>
  <li>✔ Expands Reach & Accessibility – Connects global attendees without geographical barriers.</li>
  <li>✔ Cost-Effective & Scalable – Reduces travel and venue costs while accommodating larger audiences.</li>
  <li>✔ Enhances Engagement with Digital Tools – Polls, Q&As, chat rooms, and gamification boost participation.</li>
  <li>✔ Improves Data & Analytics – Provides real-time insights on attendee behavior and preferences.</li>
  <li>✔ Eco-Friendly & Sustainable – Reduces carbon footprint compared to fully in-person events.</li>
</ul>
`;

const keyElements = `
<ul class=''>
  <li>✔ Seamless Technology Integration – Reliable streaming, interactive chat, and virtual networking features.</li>
  <li>✔ Engaging & Dynamic Content – Live sessions, panel discussions, and interactive workshops.</li>
  <li>✔ Personalized Attendee Experience – AI-driven recommendations, breakout rooms, and content customization.</li>
  <li>✔ Hybrid-Friendly Venues – On-site experience designed to integrate smoothly with virtual participation.</li>
  <li>✔ Sponsorship & Monetization Strategies – Virtual booths, sponsored sessions, and exclusive VIP content.</li>
  <li>✔ Post-Event Content & Networking – Recorded sessions, discussion forums, and follow-up engagement.</li>
</ul>
`;

const bestPractices = `
<ul class='text-sm'>
  <li>✔ Choose the Right Platform – Ensure it supports streaming, interaction, and networking tools.</li>
  <li>✔ Incorporate Audience Interactivity – Encourage participation through live chats, polls, and social media.</li>
  <li>✔ Streamline High-Quality Production – Use professional lighting, sound, and visuals.</li>
  <li>✔ Leverage Data & Analytics – Track engagement, optimize formats, and personalize content.</li>
  <li>✔ Use Strong Promotion – Build excitement through email, social, and partnerships.</li>
  <li>✔ Measure Results for Future Success – Use metrics, data, and feedback to refine future events.</li>
</ul>
`;

const VirtualHybridEvents = () => (
  <div>
    <PageHeroSection
      title="Virtual & Hybrid Events"
      description="Connecting Audiences Beyond Boundaries"
      bgImage="/Images/VirtualHybridEvents_hero.jpg"
    />

    <IntroSection
      title="What are Virtual & Hybrid Events?"
      description={whatIsVirtualHybrid}
      imageSrc="/Images/VirtualHybridEvents_1.jpg"
      imageAlt="Virtual conference session"
    />

    <IntroInfo title="Why are Virtual & Hybrid Events Important?" description={whyImportant} />

    <IntroInfo
      title="Key Elements of a Successful Virtual or Hybrid Event"
      description={keyElements}
    />

    <IntroSection
      title="Best Practices for Virtual & Hybrid Events"
      description={bestPractices}
      imageSrc="/Images/VirtualHybridEvents_2.jpg"
      imageAlt="Online team planning event"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default VirtualHybridEvents;
