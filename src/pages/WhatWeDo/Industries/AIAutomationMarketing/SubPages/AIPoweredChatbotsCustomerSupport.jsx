import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/AIPoweredChatbotsCustomerSupport_Hero.jpg'; // Replace with the correct hero image if available
const supportImg = '/Images/AIPoweredChatbotsCustomerSupport-1.jpg'; // Replace with the correct support image if available

const strategies = [
  {
    title: '24/7 AI-Driven Customer Assistance',
    description: `Provide round-the-clock multilingual support, ensuring every customer gets instant responses, anytime, anywhere.<br/>✔ Always Available – No waiting, no delays.<br/>✔ Handles Multiple Languages – Speak your customer's language effortlessly.<br/>✔ Instant Responses – AI-powered efficiency at its best.`,
  },
  {
    title: 'Omnichannel Support – Connect Everywhere',
    description: `Unify customer interactions across email, chat, WhatsApp, Telegram, SMS, and Facebook into one seamless inbox.<br/>✔ No More Switching Between Platforms – Manage all messages in one place.<br/>✔ Real-Time Engagement – Deliver fast, meaningful conversations.<br/>✔ Consistent Brand Voice – Maintain quality interactions across all touchpoints.`,
  },
  {
    title: 'Intelligent Human Handoff – The Best of AI & Real Support',
    description: `Our AI chatbot knows when a human touch is needed and transfers queries smoothly to live agents.<br/>✔ Seamless Escalation – No frustrating transitions.<br/>✔ Customer-First Approach – Switch to human agents when preferred.<br/>✔ AI & Human Synergy – Let AI handle simple queries, while agents focus on complex concerns.`,
  },
  {
    title: 'Break Language Barriers with Multilingual AI',
    description: `Offer seamless, localized support for a truly global customer base.<br/>✔ Auto-Translate Across Languages – No customer feels left out.<br/>✔ Personalized Interactions – Communicate in a way that resonates.<br/>✔ Boost Satisfaction & Trust – Language inclusivity = better connections.`,
  },
  {
    title: 'Smart Features That Enhance Engagement',
    description: `✔ Real-Time AI Responses – Quick, accurate answers that boost customer confidence.<br/>✔ Live Chat Monitoring – Observe interactions and intervene when necessary.<br/>✔ Personalized Chatbot Experience – Adapt to customer needs with AI learning.<br/>✔ Advanced Analytics – Gain insights to optimize support strategies.`,
  },
  {
    title: 'Scale Effortlessly with AI-Powered Chatbots',
    description: `Reduce operational costs, enhance efficiency, and provide top-tier automated yet humanized customer service.<br/>✔ Solve Queries Faster<br/>✔ Improve Customer Retention<br/>✔ Drive Higher Engagement<br/>✔ Your customers deserve fast, intelligent, and seamless support. AI makes it possible.`,
  },
];

const AIPoweredChatbotsCustomerSupport = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="AI-Powered Chatbots & Customer Support"
      description="Maximizing Conversions, Elevating Revenue. Turn More Visitors into Customers with TSC's High-End CRO Services"
      bgImage={heroImg}
    />

    {/* Support Section using IntroSection */}
    <IntroSection
      imageSrc={supportImg}
      title="Support Without Limits—Instant, Intelligent, and Global"
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

export default AIPoweredChatbotsCustomerSupport;
