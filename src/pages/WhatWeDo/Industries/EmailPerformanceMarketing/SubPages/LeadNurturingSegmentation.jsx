import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import Introinfo from '../../../../../components/common/Introinfo';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const nurturingAspects = [
  'Continuous Engagement – Keep leads engaged with regular touchpoints (emails, social media, content).',
  "Relevant Content Delivery – Provide the right information at the right time based on where they are in the buyer's journey.",
  'Relationship Building – Establish trust and credibility, positioning your brand as a reliable solution.',
];

const segmentationBenefits = [
  {
    title: 'Personalized Messaging',
    description: 'Segmented email campaigns increase open rates by 14% and improve engagement.',
  },
  {
    title: 'Enhanced Engagement',
    description: 'Targeted content resonates more with leads, keeping them interested and active.',
  },
  {
    title: 'Efficient Resource Allocation',
    description: 'Focus efforts on high-potential leads, improving ROI and marketing efficiency.',
  },
];

const howToImplement = [
  'Define Clear Goals – What do you want to achieve? More engagement, higher conversions, or better retention?',
  'Collect Quality Data – Ensure data is accurate, up-to-date, and actionable for segmentation.',
  'Choose the Right Segmentation Criteria – Select the most relevant categories based on your audience and marketing objectives.',
  'Use Automation Tools – Platforms like HubSpot, Marketo, or Mailchimp can streamline segmentation and campaign execution.',
  "Create Tailored Content – Personalize emails, ads, and landing pages based on each segment's needs.",
];

const LeadNurturingSegmentation = () => (
  <div className="bg-[#f4f8fc]">
    {/* Hero Section */}
    <PageHeroSection
      title="Lead Nurturing & Segmentation"
      description="Lead nurturing and segmentation are powerful strategies that help businesses build relationships with potential customers and guide them toward conversion."
      bgImage="/Images/LeadNurturingSegmentation_Hero.jpg"
    />

    {/* What is Lead Nurturing? */}
    <IntroSection
      imageSrc="/Images/LeadNurturingSegmentation-1.jpg"
      title="What is Lead Nurturing?"
      description={
        'Lead nurturing is the process of developing relationships with prospects throughout their buying journey. Since not all leads are ready to buy immediately, nurturing helps maintain their interest and gradually moves them toward a purchase decision.'
      }
      imageAlt="Lead Nurturing"
    />

    {/* Key Aspects of Lead Nurturing */}
    <Introinfo
      title="Key Aspects of Lead Nurturing"
      description={
        <ul className="text-left">
          {nurturingAspects.map((aspect, idx) => (
            <li key={idx}>✓ {aspect}</li>
          ))}
        </ul>
      }
    />

    {/* What is Segmentation & Why is it Important? */}
    <Introinfo
      title="What is Segmentation & Why is it Important?"
      description={
        'Segmentation is the process of dividing your audience into smaller groups based on shared characteristics or behaviors. This allows marketers to deliver more relevant, personalized content, leading to better engagement and higher conversions.'
      }
    />

    {/* Benefits of Segmentation in Lead Nurturing */}
    <section className="max-w-6xl mx-auto my-12 px-4">
      <h3 className="font-bold text-2xl md:text-3xl text-center mb-8">
        Benefits of Segmentation in Lead Nurturing
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {segmentationBenefits.map((benefit, idx) => (
          <ServiceCard key={idx} title={benefit.title} description={benefit.description} />
        ))}
      </div>
    </section>

    {/* How to Implement Lead Nurturing with Segmentation */}
    <IntroSection
      imageSrc="/Images/LeadNurturingSegmentation-2.jpg"
      title="How to Implement Lead Nurturing with Segmentation"
      description={
        <ul className="text-left mx-auto max-w-2xl space-y-2 truncate">
          {howToImplement.map((step, idx) => (
            <li key={idx}>✓ {step}</li>
          ))}
        </ul>
      }
      imageAlt="How to Implement Lead Nurturing with Segmentation"
      reverse
    />

    {/* Contact Us Section */}
    <ContactForm />
  </div>
);

export default LeadNurturingSegmentation;
