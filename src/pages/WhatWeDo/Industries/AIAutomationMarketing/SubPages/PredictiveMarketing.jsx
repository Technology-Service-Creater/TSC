import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/PredictiveMarketing_Hero.jpg'; // Replace with the correct hero image if available
const introImg = '/Images/PredictiveMarketing-1.jpg'; // Replace with the correct intro image if available

const strategies = [
  {
    title: 'Data Collection Techniques',
    description: `✔ CRM Systems (e.g., Salesforce) – Store and manage customer interactions efficiently.<br/>✔ Web Analytics (e.g., Google Analytics) – Track visitor behavior and engagement.<br/>✔ Social Media Monitoring (e.g., Hootsuite, Sprout Social) – Analyze customer sentiment and trends.<br/>✔ Surveys & Feedback (e.g., SurveyMonkey, Typeform) – Collect direct insights from your audience.`,
  },
  {
    title: 'Advanced Data Analysis',
    description: `✔ Regression Analysis – Predict outcomes based on historical patterns.<br/>✔ Cluster Analysis – Group customers with similar behaviors for targeted campaigns.<br/>✔ Decision Trees – Visualize decision paths and possible outcomes.<br/>✔ Neural Networks – AI-powered models that recognize patterns and predict customer actions.`,
  },
  {
    title: 'Implementing Predictive Marketing in Your Business',
    description: `✔ Set Clear Goals – Define what you want to achieve.<br/>✔ Select the Right Tools – Choose CRM, analytics, and AI-driven platforms.<br/>✔ Integrate Data – Combine multiple data sources for a holistic customer view.<br/>✔ Develop Predictive Models – Forecast customer actions based on behavior patterns.<br/>✔ Launch Targeted Campaigns – Use insights to personalize marketing strategies.`,
  },
];

const PredictiveMarketing = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Predictive Marketing"
      description="Maximizing Conversions, Elevating Revenue. Turn More Visitors into Customers with TSC's High-End CRO Services"
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Predictive Marketing: Turning Data into Smart Strategies"
      description="Empower your business with an AI-driven chatbot that communicates fluently across multiple languages and platforms—so you never miss a customer inquiry again."
      reverse={false}
    />

    {/* Strategies Section using ServiceCard */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-10">
        Upselling & Cross-Selling Strategies
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {strategies.map((item, idx) => (
          <ServiceCard key={idx} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default PredictiveMarketing;
