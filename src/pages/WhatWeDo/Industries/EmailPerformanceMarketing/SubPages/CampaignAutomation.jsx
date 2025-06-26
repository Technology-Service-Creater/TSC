import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';
import Introinfo from '../../../../../components/common/Introinfo';

const features = [
  {
    title: 'Email Automation',
    listItems: [
      'Automatically send personalized emails based on user actions (e.g., welcome, abandoned cart, re-engagement).',
      'Schedule email campaigns to nurture leads and boost engagement.',
    ],
  },
  {
    title: 'Social Media Automation',
    listItems: [
      'Plan and schedule posts across multiple social media channels.',
      'Track engagement and interactions in real-time.',
    ],
  },
  {
    title: 'Lead Scoring & Nurturing',
    listItems: [
      'Assign scores to leads based on their engagement and actions.',
      'Use automated workflows to nurture leads through the sales funnel.',
    ],
  },
  {
    title: 'Audience Segmentation',
    listItems: [
      'Group contacts based on demographics, behavior, or interests.',
      'Deliver personalized campaigns that resonate with each segment.',
    ],
  },
  {
    title: 'A/B Testing',
    listItems: [
      'Test different versions of emails, ads, or landing pages.',
      'Optimize campaigns based on performance insights.',
    ],
  },
  {
    title: 'Analytics & Reporting',
    listItems: [
      'Track campaign performance in real time.',
      'Generate reports to make data-backed marketing decisions.',
    ],
  },
];

const CampaignAutomation = () => (
  <div className="campaign-automation-page bg-[#f4f8fc]">
    {/* Hero Section */}
    <PageHeroSection
      title="Campaign Automation"
      description="Streamlining Marketing for Maximum Impact"
      bgImage="/Images/CampaignAutomation_Hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc="/Images/CampaignAutomation-1.png"
      title="Streamlining Marketing for Maximum Impact"
      description="Campaign automation simplifies the process of planning, executing, and analyzing marketing campaigns across multiple channels. It helps marketers save time, improve targeting, and drive better results."
      imageAlt="Campaign Automation"
    />

    {/* Why Use Campaign Automation */}
    <Introinfo
      title="Why Use Campaign Automation?"
      description={
        <ul className="text-left">
          <li>
            ✓ Efficiency – Automate repetitive tasks like emails, social media posts, and ad
            management.
          </li>
          <li>
            ✓ Personalization – Deliver tailored content to the right audience based on their
            behavior and interests.
          </li>
          <li>
            ✓ Data-Driven Decisions – Get detailed insights to measure performance and optimize
            future campaigns.
          </li>
          <li>
            ✓ Scalability – Run multiple campaigns across different platforms without added manual
            effort.
          </li>
          <li>
            ✓ Improved ROI – Reduce manual work and maximize results with automated optimization.
          </li>
        </ul>
      }
    />

    {/* Key Features Section */}
    <section className="features-section max-w-6xl mx-auto my-14 px-4">
      <h3 className="font-bold text-4xl mb-8 text-center">Key Features of Campaign Automation</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <ServiceCard key={idx} title={feature.title} listItems={feature.listItems} />
        ))}
      </div>
    </section>

    {/* How to Get Started Section */}
    <IntroSection
      imageSrc="/Images/CampaignAutomation-2.jpg"
      title="How to Get Started with Campaign Automation"
      description={
        <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
          <li>
            <b>Define Your Goals</b> – Set clear objectives.
          </li>
          <li>
            <b>Choose the Right Tools</b> – Use automation platforms like HubSpot, Marketo, or
            Mailchimp.
          </li>
          <li>
            <b>Segment Your Audience</b> – Organize contacts into relevant groups for targeted
            campaigns.
          </li>
          <li>
            <b>Create Engaging Content</b> – Develop high-quality, personalized content that
            resonates.
          </li>
          <li>
            <b>Automate & Monitor</b> – Set up workflows and analyze performance refine to
            strategies.
          </li>
        </ul>
      }
      imageAlt="Get Started with Campaign Automation"
      reverse
    />

    {/* Contact Us Section */}
    <ContactForm />
  </div>
);

export default CampaignAutomation;
