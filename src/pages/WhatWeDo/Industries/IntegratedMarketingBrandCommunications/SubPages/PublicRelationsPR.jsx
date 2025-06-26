import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';
const services = [
  {
    title: 'Media Relations',
    description: `Building and maintaining relationships with media outlets is essential for a company’s public image. This team ensures that news about the company is accurately communicated to journalists, reporters, and media organizations. They provide press releases, offer expert commentary, and manage media coverage to maintain a positive brand presence.

`,
  },
  {
    title: 'Product Relations',
    description:
      'This department focuses on PR efforts tied to company operations, especially product launches and marketing campaigns. Whether it’s introducing a new product, managing a major update, or handling public perception during a rebranding, product relations help ensure a smooth, well-communicated transition.',
  },
  {
    title: 'Investor Relations',
    description:
      'Maintaining trust and transparency with investors is key to business growth. This branch of PR handles financial reports, investor meetings, shareholder communication, and crisis management to ensure confidence in the company’s financial stability and long-term vision.',
  },
  {
    title: 'Internal Relations',
    description:
      'Happy employees create a strong company culture. Internal PR focuses on fostering positive communication within the organization, addressing employee concerns, mediating conflicts, and ensuring a healthy work environment. This helps prevent internal issues from escalating into public reputation risks.',
  },
  {
    title: 'Government Relations',
    description:
      'Navigating the political and regulatory landscape is crucial for business success. This PR branch liaises with policymakers and government officials to advocate for policies that benefit the company, ensuring fair treatment, compliance, and a voice in legislative matters.',
  },
  {
    title: 'Community Relations',
    description:
      'Companies thrive when they actively engage with the communities they serve. Community relations focus on building goodwill through local partnerships, sponsorships, social responsibility initiatives, and charity involvement. This can strengthen brand reputation and create loyal supporters.',
  },
  {
    title: 'Customer Relations',
    description:
      'Direct communication with customers is essential for brand trust and loyalty. This PR team manages customer feedback, responds to concerns, conducts market research, and ensures that the company meets or exceeds customer expectations.',
  },
];

const PublicRelationsPR = () => (
  <div>
    {' '}
    {/* Hero Section */}
    <PageHeroSection
      title="Public Relations (PR)"
      description="Building & Managing Brand Reputation."
      bgImage="/Images/PublicRelationsPR_hero.jpg"
    />
    {/* Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/PublicRelationsPR_1.jpg"
      IntroSectionTitle="Understanding Public Relations (PR)"
      description="Public relations (PR) plays a crucial role in shaping a company's reputation and maintaining strong relationships with key stakeholders. PR is often divided into different departments, each specializing in a specific area of communication and engagement."
    />
    {/* Services Grid */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
    <ContactForm />
  </div>
);

export default PublicRelationsPR;
