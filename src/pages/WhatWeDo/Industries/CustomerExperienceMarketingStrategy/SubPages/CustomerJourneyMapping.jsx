import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const featureCards = [
  {
    title: 'Centralized & Connected Journey Mapping',
    description: (
      <>
        <span>
          ✓ Store & manage all journey maps in one virtual space, accessible to teams, stakeholders,
          and clients.
          <br />
        </span>
        <span>
          ✓ Achieve alignment across departments with a shared understanding of customer
          interactions.
          <br />
        </span>
        <span>✓ Simplify navigation with a structured journey map hierarchy.</span>
      </>
    ),
  },
  {
    title: 'Standardized & Customizable Journey Maps',
    description: (
      <>
        <span>
          ✓ Design consistent and recognizable journey maps with custom templates.
          <br />
        </span>
        <span>
          ✓ Choose from 20+ content sections, including Text, Graphs, Charts, Sliders, Videos,
          Images, Documents, Touchpoints.
          <br />
        </span>
        <span>
          ✓ Save time with a team library of reusable icons, illustrations, files, and stage titles.
        </span>
      </>
    ),
  },
  {
    title: 'Real-Time & Asynchronous Collaboration',
    description: (
      <>
        <span>
          ✓ Work with teammates, stakeholders, or external partners—live or on your own time.
          <br />
        </span>
        <span>
          ✓ Discuss insights, prioritize ideas, and turn discussions into actionable tasks.
          <br />
        </span>
        <span>✓ Assign tasks and track decisions within the mapping tool.</span>
      </>
    ),
  },
];

const CustomerJourneyMapping = () => (
  <div className="bg-neutral-100">
    {/* Hero Section */}
    <PageHeroSection
      title="Customer Journey Mapping"
      description="Visualizing the Path to Better Experiences"
      bgImage="/Images/CustomerJourneyMapping_Hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      title="Online Customer Journey Mapping Tool"
      description={
        <>
          Gain a holistic view of customer journeys across your organization. Standardize journey
          maps and tailor them for different audiences and perspectives.
        </>
      }
      imageSrc="/Images/CustomerJourneyMapping-1.jpg"
      imageAlt="Customer Journey Mapping"
    />

    {/* Feature Cards */}
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Contact Us Section */}
    <ContactForm />
  </div>
);

export default CustomerJourneyMapping;
