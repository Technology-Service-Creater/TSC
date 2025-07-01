import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const eventWhat = `
Event marketing is the strategic promotion of a brand through live, virtual, or hybrid 
experiences to engage audiences, build relationships, drive business growth. 
It creates immersive interactions that leave a lasting impact on customers.
`;

const eventWhy = `
<ul class='text-mb '>
  <li>✔ Boosts Brand Awareness – Puts your brand in front of a highly engaged audience.</li>
  <li>✔ Strengthens Customer Relationships – Face-to-face interactions build trust and loyalty.</li>
  <li>✔ Generates Buzz & PR – Well-executed events drive media coverage and social shares.</li>
  <li>✔ Increases Lead Generation – Captures high-intent prospects in an interactive setting.</li>
  <li>✔ Enhances Brand Authority – Thought leadership events position your brand as an industry expert.</li>
</ul>
`;

const eventTypes = `
<ul class='text-mb '>
  <li>✔ Product Launches – Showcase new offerings with excitement and exclusivity.</li>
  <li>✔ Trade Shows & Expos – Network with industry leaders and potential customers.</li>
  <li>✔ Conferences & Seminars – Educate and inspire through expert-led sessions.</li>
  <li>✔ Webinars & Virtual Events – Engage a global audience in an interactive way.</li>
  <li>✔ Brand Activations – Create interactive experiences that connect emotionally with customers.</li>
  <li>✔ Community & Cause-Driven Events – Strengthen brand values with social impact initiatives.</li>
</ul>
`;

const eventBestPractices = `
<ul class='text-base '>
  <li>✔ Know Your Audience – Tailor the event experience to their interests and needs.</li>
  <li>✔ Create a Seamless Experience – Ensure smooth execution, from registration to follow-up.</li>
  <li>✔ Leverage Social Media – Promote before, during, and after the event to maximize reach.</li>
  <li>✔ Engage Attendees – Use live polls, Q&A sessions, and interactive tools.</li>
  <li>✔ Measure & Optimize – Evaluate the event’s ROI and gather feedback for future success.</li>
</ul>
`;

const EventMarketing = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Event Marketing"
      description="Creating Unforgettable Brand Experiences"
      bgImage="/Images/EventMarketing_1.jpg"
    />

    {/* What is Event Marketing */}
    <IntroSection
      title="What is Event Marketing?"
      description={eventWhat}
      imageSrc="/Images/EventMarketing_Hero.jpg"
      imageAlt="What is Event Marketing"
    />

    {/* Why is Event Marketing Important? */}
    <IntroInfo title="Why is Event Marketing Important?" description={eventWhy} />

    {/* Types of Event Marketing */}
    <IntroInfo title="Types of Event Marketing" description={eventTypes} />

    {/* Best Practices for Successful Event Marketing */}
    <IntroSection
      title="Best Practices for Successful Event Marketing"
      description={eventBestPractices}
      imageSrc="/Images/EventMarketing_2.jpg"
      imageAlt="Event Best Practices"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default EventMarketing;
