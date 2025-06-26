import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Ways to Enhance Trade Show Experiences',
    description: [
      '✔ Interactive Demos: Let visitors experience your products/services firsthand.',
      "✔ VR & AR Experiences: Immerse attendees in a digital brand experience they won't forget.",
      '✔ Games & Contests: Fun challenges, spin-the-wheel, or scavenger hunts can increase foot traffic and lead generation.',
      '✔ Live Presentations & Workshops: Share expert insights, host Q&A sessions, or run live product demonstrations.',
      '✔ Giveaways & Promotions: Offer branded swag, exclusive discounts, or free trials to encourage engagement.',
    ],
  },
  {
    title: 'Types of Trade Show Displays',
    description: [
      '✔ Popup Displays: Lightweight, portable and easy to set up.',
      '✔ Modular Displays: Customizable and scalable to your booth space.',
      '✔ Banner Stands: Cost-effective and attention-grabbing visual tools.',
      '✔ Digital Kiosks: Offer interactive content and product information.',
    ],
  },
  {
    title: 'Key Elements of an Effective Display',
    description: [
      '✔ Eye-Catching: Use bold colors, striking graphics, and creative lighting to grab attention.',
      '✔ Informative: Deliver a clear and concise brand message through compelling visuals and content.',
      '✔ Interactive: Integrate touchscreens, live demos, and VR experiences to engage attendees.',
      '✔ Functional: Ensure an organized, welcoming space where visitors can easily interact with your team.',
    ],
  },

  {
    title: ' Ways to Enhance Trade Show Experiences',
    description: [
      '✔ Interactive Demos: Let visitors experience your products/services firsthand.',
      "✔ VR & AR Experiences: Immerse attendees in a digital brand experience they won't forget.",
      '✔ Games & Contests: Fun challenges, spin-the-wheel, or scavenger hunts can increase foot traffic and lead generation.',
      '✔ Live Presentations & Workshops: Share expert insights, host Q&A sessions, or run live product demonstrations',
      '✔ Giveaways & Promotions: Offer branded swag, exclusive discounts, or free trials to encourage engagement.',
    ],
  },
];

const TradeShowDisplaysExperiences = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Trade Show Display & Experiences"
      description="Captivating Audiences, Maximizing Impact"
      bgImage="/Images/TradeShowDisplaysExperiences_hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/TradeShowDisplaysExperiences_1.jpg"
      IntroSectionTitle="Trade Show Displays: More Than Just a Backdrop"
      description="Your trade show display serves as the face of your brand, attracting visitors and communicating your message effectively."
    />

    {/* Content Sections */}
    {services.map((service, index) => (
      <IntroInfo
        key={index}
        title={service.title}
        description={
          <div className="space-y-2">
            {service.description.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        }
      />
    ))}

    {/* AI-Driven Section */}
    <IntroSection
      reverse
      title={<span className="text-black">Tips for Winning Trade Show Strategy</span>}
      description={
        <div className="space-y-2 text-sm">
          <p>
            ✔ Set Clear Objectives: Define your goals—brand awareness, lead generation, or product
            launch.
          </p>
          <p>
            ✔ Know Your Audience: Tailor your messaging, visuals, and experiences to resonate with
            attendees.
          </p>
          <p>✔ Plan Ahead: Design, build, and promote your display well in advance.</p>
          <p>
            ✔ Promote Your Presence: Use social media, email marketing, and direct outreach to
            attract visitors to your booth.
          </p>
          <p>
            ✔ Train Your Team: Ensure staff is well-prepared to engage visitors and answer
            questions.
          </p>
          <p>
            ✔ Follow Up Quickly: Reach out to leads after the event to nurture relationships and
            drive conversions.
          </p>
        </div>
      }
      imageSrc="/Images/TradeShowDisplaysExperiences_2.jpg"
      imageAlt="AI Automation for ASO"
    />

    {/* Contact Us Section */}
    <ContactForm />
  </div>
);

export default TradeShowDisplaysExperiences;
