import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const heroImg = '/Images/AIAutomationMarketing_Hero.jpg';
const img1 = '/Images/AIAutomationMarketing-1.jpg';
const img2 = '/Images/AIAutomationMarketing-2.png';

const toKebabCase = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/(^-|-$)/g, '');
const industryPath = 'ai-automation-marketing';

const serviceCards = [
  {
    title: 'AI-Powered Chatbots & Customer Support',
    description:
      'AI-powered chatbots are automated tools that use artificial intelligence to interact with customers. They can provide instant responses to common queries, guide users through processes, and even handle complex customer support issues. These chatbots operate 24/7, improving customer satisfaction and reducing the workload on human support agents.',
  },
  {
    title: 'Predictive Marketing',
    description:
      'Predictive marketing leverages AI and machine learning to analyse historical data and predict future customer behaviours and trends. This enables marketers to:',
    listItems: [
      'Identify Potential Leads: Predict which prospects are more likely to convert.',
      'Optimize Campaigns: Tailor marketing campaigns based on predicted outcomes.',
      'Enhance Customer Retention: Anticipate customer churn and implement retention strategies.',
    ],
  },
  {
    title: 'AI-Driven Personalization',
    description:
      'AI-driven personalization uses artificial intelligence to deliver highly customized experiences to individual customers. By analysing customer data and behaviour, AI can:',
    listItems: [
      "Recommend Products: Suggest products or services that match the customer's preferences.",
      'Customize Content: Personalize marketing messages, emails, and website content.',
      'Improve User Experience: Adapt the user interface to individual needs and preferences.',
    ],
  },
  {
    title: 'Automated Ad Campaigns',
    description:
      'Automated ad campaigns use AI to manage and optimize advertising efforts. This includes:',
    listItems: [
      'Dynamic Ad Creation: Automatically generating and testing different ad creatives.',
      'Targeting and Bidding: Using AI to determine the best audience segments and bid amounts.',
      'Performance Monitoring: Continuously analysing ad performance and making real-time adjustments to improve results.',
    ],
  },
].map(service => ({
  ...service,
  link: `/industries/${industryPath}/${toKebabCase(service.title)}`,
}));

const AIAutomationMarketing = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="AI & Automation in Marketing"
      description="AI and automation in marketing revolutionize how businesses engage with their audience."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={img1}
      title="AI & Automation in Marketing"
      description="Artificial Intelligence (AI) and automation are transforming the marketing landscape by enabling businesses to optimize processes, enhance personalization, and improve efficiency. By leveraging AI-driven insights and automated workflows, companies can deliver targeted campaigns, increase customer engagement, and maximize ROI. A well-executed AI & Automation in Marketing strategy ensures scalability, precision, and continuous optimization."
      reverse={false}
    />

    {/* Service Cards */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {serviceCards.map(service => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              listItems={service.listItems}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Second Intro Section (image left, text right) */}
    <IntroSection
      imageSrc={img2}
      title=""
      description="A strategic approach to AI & Automation in Marketing enables businesses to leverage data-driven decision-making, enhance customer relationships, and drive revenue growth. By integrating AI tools and automated workflows, companies can stay ahead of the competition and deliver impactful, scalable marketing campaigns."
      reverse={true}
    />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default AIAutomationMarketing;
