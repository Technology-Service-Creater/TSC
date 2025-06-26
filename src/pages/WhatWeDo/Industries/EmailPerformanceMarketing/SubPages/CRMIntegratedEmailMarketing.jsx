import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const benefits = [
  {
    title: 'Personalized Campaigns',
    description:
      "Use data from your CRM to send tailored emails that speak directly to your customer's preferences and needs. Personalization increases engagement and conversion rates.",
  },
  {
    title: 'Automated Workflows',
    description:
      'Automatically trigger emails based on actions taken by customers (e.g., abandoned carts, follow-ups after purchases). CRM integration ensures these workflows are streamlined and timely.',
  },
  {
    title: 'Customer Segmentation',
    description:
      "Segment your audience using CRM data like past purchases, browsing behavior, demographics, and preferences, ensuring you're targeting the right customers with the right message.",
  },
  {
    title: 'Improved ROI',
    description:
      'By sending more relevant content and offers, CRM-integrated email marketing boosts customer retention and lifetime value, leading to a better return on investment.',
  },
  {
    title: 'Real-Time Tracking and Analytics',
    description:
      'Gain insights into how your emails perform in real-time. CRM integration allows you to track customer responses, opens, click-through rates, and much more for data-driven decisions.',
  },
];

const crmTools = [
  {
    title: 'Salesforce',
    description: 'Comprehensive CRM with powerful automation and email marketing integration.',
  },
  {
    title: 'HubSpot',
    description:
      'A popular choice for businesses seeking a robust inbound marketing tool with easy email automation.',
  },
  {
    title: 'Zoho CRM',
    description:
      'A highly customizable CRM that integrates seamlessly with email marketing platforms.',
  },
  {
    title: 'CampaignCRM',
    description:
      'Known for its strong integration with various CMS systems and advanced email marketing automation features.',
  },
];

const CRMIntegratedEmailMarketing = () => (
  <div className="bg-[#f4f8fc]">
    {/* Hero Section */}
    <PageHeroSection
      title="CRM–Integrated Email Marketing"
      description="Combining Customer Relationship Management (CRM) with email marketing creates a powerful system to engage leads, nurture relationships, and drive conversions."
      bgImage="/Images/CRMIntegratedEmailMarketing_Hero.jpg"
    />

    {/* What is CRM-Integrated Email Marketing? */}
    <IntroSection
      imageSrc="/Images/CRMIntegratedEmailMarketing-1.jpg"
      title="What is CRM–Integrated Email Marketing?"
      description={
        'CRM (Customer Relationship Management)-integrated email marketing refers to the seamless connection between your CRM system and email marketing tools. This integration allows businesses to send personalized, targeted emails to customers based on their specific behaviors, interactions, and needs.'
      }
      imageAlt="CRM-Integrated Email Marketing"
    />

    {/* Key Benefits Section */}
    <section className="max-w-6xl mx-auto my-12 px-4">
      <h3 className="font-bold text-2xl md:text-3xl text-center mb-8">
        Key Benefits of CRM–Integrated Email Marketing
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, idx) => (
          <ServiceCard key={idx} title={benefit.title} description={benefit.description} />
        ))}
      </div>
    </section>

    {/* Top CRM Tools Section */}
    <section className="max-w-6xl mx-auto my-12 px-4">
      <h3 className="font-bold text-2xl md:text-3xl text-center mb-8">
        Top CRM Tools for Email Marketing Integration
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {crmTools.map((tool, idx) => (
          <ServiceCard key={idx} title={tool.title} description={tool.description} />
        ))}
      </div>
    </section>

    {/* Why Choose CRM-Integrated Email Marketing? */}
    <IntroSection
      imageSrc="/Images/CRMIntegratedEmailMarketing-2.jpg"
      title="Why Choose CRM–Integrated Email Marketing?"
      description={
        <ol className="list-decimal pl-5 space-y-2 text-lg">
          <li>
            <b>Efficiency & Automation</b>
            <br />
            Reduce manual work by automating follow-ups, reminders, and birthday emails.
          </li>
          <li>
            <b>Increased Engagement</b>
            <br />
            By sending the right message at the right time, you improve your chances of customer
            engagement.
          </li>
          <li>
            <b>Holistic View of Customers</b>
            <br />
            CRM integration allows you to track all touchpoints with your customers, offering a
            complete picture of their journey.
          </li>
        </ol>
      }
      imageAlt="Why Choose CRM-Integrated Email Marketing"
      reverse
    />

    {/* Contact Us Section */}
    <ContactForm />
  </div>
);

export default CRMIntegratedEmailMarketing;
