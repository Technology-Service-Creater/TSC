import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const heroImg = '/Images/EmailPerformance_Hero.jpg';
const introImg = '/Images/EmailPerformance-1.jpg';
const secondaryImg = '/Images/EmailPerformance-2.jpg';

const serviceCards = [
  {
    title: 'Campaign Automation',
    description:
      'Campaign automation involves using software to automate marketing tasks and processes, such as sending emails, scheduling social media posts, and managing customer interactions. This ensures timely and personalized communication with customers, improving efficiency and effectiveness.',
  },
  {
    title: 'Lead Nurturing & Segmentation',
    description:
      'Lead nurturing is the process of building relationships with potential customers throughout their buying journey. Segmentation involves dividing your audience into smaller groups based on specific criteria, such as demographics, behavior, or interests. This allows for more targeted and relevant marketing efforts.',
  },
  {
    title: 'AI-Powered Personalization',
    description:
      'AI-powered personalization leverages artificial intelligence to deliver highly personalized content and experiences to customers. By analyzing customer data and behavior, AI can tailor email content, product recommendations, and interactions to individual preferences.',
  },
  {
    title: 'Transactional Emails & Newsletters',
    description:
      'Transactional emails are automated emails triggered by specific customer actions, such as order confirmations, shipping notifications, and password resets. Newsletters are regular emails sent to subscribers, providing updates, news, and valuable content related to your brand.',
  },
  {
    title: 'CRM-Integrated Email Marketing',
    description:
      'CRM (Customer Relationship Management) integration with email marketing allows for seamless management of customer data and interactions. This integration enables personalized and targeted email campaigns based on customer history, preferences, and behavior.',
  },
  {
    title: 'Web & Mobile Analytics',
    description:
      'Web and mobile analytics involve tracking and analyzing user behavior on websites and mobile apps. These insights help businesses understand how customers interact with their digital platforms and identify areas for improvement.',
  },
  {
    title: 'Product & Content Analytics',
    description:
      'Product and content analytics focus on measuring the performance of your products and content. This includes tracking metrics such as engagement, conversions, and user feedback to optimize product offerings and content strategies.',
  },
  {
    title: 'AI-Driven Marketing Analytics',
    description:
      'AI-driven marketing analytics use artificial intelligence to analyze vast amounts of data and provide actionable insights. This includes predictive analytics, customer behavior analysis, and trend identification to inform marketing strategies and decision-making.',
  },
  {
    title: 'Performance Tracking & Reporting',
    description:
      'Performance tracking and reporting involve monitoring the effectiveness of marketing campaigns and activities. This includes measuring key performance indicators (KPIs) such as click-through rates, conversion rates, and ROI. Regular reporting helps assess campaign success and identify areas for improvement.',
  },
];

const EmailPerformanceMarketing = () => (
  <div className="bg-[#f8fafc]">
    {/* Hero Section */}
    <PageHeroSection
      title="Email & Performance Marketing"
      description="Each of these components plays a crucial role in creating effective email and performance marketing strategies that drive engagement, conversions, and overall business growth."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      imageAlt="Team working on email marketing"
      title="Email & Performance Marketing"
      description={
        <>
          <span className="font-bold">Email and performance marketing</span> are essential
          components of a data-driven marketing strategy. By leveraging targeted email campaigns and
          performance-based digital marketing tactics, businesses can maximize engagement,
          conversions, and ROI. A well-executed Email & Performance Marketing strategy ensures
          personalized customer interactions, measurable results, and continuous optimization.
        </>
      }
      reverse={false}
    />

    {/* Service Cards Grid */}
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceCards.map((card, idx) => (
        <ServiceCard key={idx} title={card.title} description={card.description} />
      ))}
    </section>

    {/* Secondary Intro Section */}
    <IntroSection
      imageSrc={secondaryImg}
      imageAlt="Team collaborating on performance marketing"
      title={null}
      description={
        <>
          A strategic approach to Email & Performance Marketing ensures that businesses not only
          attract leads but also nurture them into loyal customers. By integrating these two
          powerful tactics, companies can drive measurable success, optimize their marketing spend,
          and achieve long-term growth.
        </>
      }
      reverse={true}
    />

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default EmailPerformanceMarketing;
