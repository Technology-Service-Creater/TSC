import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const featureCards = [
  {
    title: 'Cost-Driven Positioning',
    description:
      "We offer everything our competitors do, but at a lower price. A challenging strategy gives you have a unique cost advantage. Technology can be a game-changer—if you're ahead, you can lead the market. If you're behind, cost-cutting can backfire.",
  },
  {
    title: 'Niche Service Specialization',
    description:
      "We provide a unique service that others don't. This strategy builds authority & trust, but beware—if your niche gains popularity, new competitors may dilute your uniqueness.",
  },
  {
    title: 'Industry Specialization',
    description:
      'We are experts in serving businesses in a specific industry. This positioning allows for deep expertise & targeted marketing. However, if your industry declines, your business may suffer. Plus, new competitors can emerge quickly.',
  },
  {
    title: 'Role-Focused Specialization',
    description:
      'Instead of focusing on an industry or service, this approach targets decision-makers (e.g., CEOs, HR leaders, or CFOs). Buyers see you as more in tune with their challenges and needs.',
  },
  {
    title: 'Quality of Service Positioning',
    description:
      "We offer the best quality and service. A common but ineffective strategy—claims of 'high quality' are overused and don't differentiate your brand. Instead, showcase your unique strengths and value proposition.",
  },
];

function BrandPositioning() {
  return (
    <div className="bg-neutral-100">
      {/* Hero Section */}
      <PageHeroSection
        title="Brand Positioning"
        description="Stand Out & Stay Memorable"
        bgImage="/Images/BrandPositioning_Hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        title="Brand Positioning – Stand Out & Stay Ahead"
        description={
          <>
            A strong brand position gives your business a competitive edge. It shapes your
            marketing, services, messaging, and even pricing strategies—ensuring your brand is
            clear, compelling, and memorable.
          </>
        }
        imageSrc="/Images/BrandPositioning-1.jpg"
        imageAlt="Brand Positioning"
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
}

export default BrandPositioning;
