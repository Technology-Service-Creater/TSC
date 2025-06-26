import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ContactForm from '../../../../../components/common/ContactForm';

const WebMobileAnalytics = () => (
  <div className="bg-[#f4f8fc]">
    {/* Hero Section */}
    <PageHeroSection
      title="Web & Mobile Analytics"
      description="Web and mobile analytics help businesses understand user behavior, optimize experiences, and drive conversions."
      bgImage="/Images/WebMobileAnalytics_Hero.jpg"
    />

    {/* Data Collection & Processing */}
    <IntroSection
      imageSrc="/Images/WebMobileAnalytics-1.jpg"
      title="Data Collection & Processing"
      description={
        <div className="text-lg">
          Capturing accurate and actionable data is the foundation of digital analytics.
          <br />
          <br />✓ <b>Real-time Data Ingestion</b> – Collect visitor data from web, mobile apps,
          kiosks, and streaming platforms.
          <br />✓ <b>Dynamic Data Views</b> – Adjust post-processed data instantly to answer new
          questions without altering the original dataset.
          <br />✓ <b>Data Governance</b> – Manage sensitive data with alerts, policies, and
          geographic storage regulations for compliance and security.
        </div>
      }
      imageAlt="Data Collection & Processing"
    />

    {/* Digital Insights & Behavior Analysis */}
    <IntroInfo
      title="Digital Insights & Behavior Analysis"
      description={
        <div className="text-lg">
          Understand how visitors engage with your content, channels, and campaigns to enhance
          marketing performance.
          <br />
          <br />
          <b>AI-Powered Insights</b>
          <br />✓ Anomaly Detection – Identify unexpected changes in traffic, conversions, and user
          behavior.
          <br />✓ Contribution Analysis – Discover which elements contribute most to conversions and
          churn.
          <br />
          <br />
          <b>Audience Analysis</b>
          <br />✓ Segmentation & Cohort Analysis – Track user groups over time based on shared
          traits and behaviors.
          <br />✓ Retention & Churn Trends – Understand why users stay or leave and take action to
          improve loyalty.
          <br />
          <br />
          <b>Channel Analytics</b>
          <br />✓ User Journey Mapping – Analyze visitor flows, friction points, drop-offs, and
          conversions.
          <br />✓ Conversion & Engagement Metrics – Identify where users engage, hesitate, or
          abandon their journey.
        </div>
      }
    />

    {/* Delivering Insights for Better Decision-Making */}
    <IntroSection
      imageSrc="/Images/WebMobileAnalytics-2.jpg"
      title="Delivering Insights for Better Decision-Making"
      description={
        <div className="text-lg">
          Analytics should drive action—here&apos;s how insights can be shared and applied across
          teams.
          <br />
          <br />✓ <b>Customizable Dashboards</b> – Build interactive reports tailored for marketing,
          product, and executive teams.
          <br />✓ <b>Data Mobility</b> – Easily transfer analytics to CRM, cloud platforms, and
          business apps for real-time decision-making.
          <br />✓ <b>AI-Powered Reports</b> – Use natural language processing (NLP) to surface key
          trends and insights instantly.
        </div>
      }
      imageAlt="Delivering Insights for Better Decision-Making"
      reverse
    />

    {/* Contact Us Section */}
    <ContactForm />
  </div>
);

export default WebMobileAnalytics;
