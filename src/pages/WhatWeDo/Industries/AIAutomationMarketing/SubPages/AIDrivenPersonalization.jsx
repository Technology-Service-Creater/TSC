import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/AI-DrivenPersonalization_Hero.jpg'; // Replace with the correct hero image if available
const img1 = '/Images/AI-DrivenPersonalization-1.jpg'; // Replace with the correct image if available
const img2 = '/Images/AI-DrivenPersonalization-2.jpg'; // Replace with the correct image if available

const AIDrivenPersonalization = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="AI-Driven Personalization"
      description="Elevating Customer Experiences with Smart Insights"
      bgImage={heroImg}
    />

    {/* What is AI-Driven Personalization? */}
    <IntroSection
      imageSrc={img1}
      title="What is AI-Driven Personalization?"
      description="AI-driven personalization uses machine learning, data analytics, and automation to deliver tailored content, recommendations, and experiences based on individual customer behavior, preferences, and interactions. It enhances engagement, boosts conversions, and fosters long-term loyalty."
      reverse={false}
    />

    {/* Why is AI-Driven Personalization Important? */}
    <IntroInfo
      title="Why is AI-Driven Personalization Important?"
      description={`
        <ul>
          <li>✔ Enhances Customer Experience – Delivers relevant and engaging content at the right time.</li>
          <li>✔ Boosts Conversion Rate – Personalized offers increase likelihood of purchases.</li>
          <li>✔ Improves Retention & Loyalty – Keeps customers engaged with customized interactions.</li>
          <li>✔ Maximizes Revenue – Encourages upsells, cross-sells, and repeat purchases.</li>
          <li>✔ Automates & Optimizes Marketing Efforts – Saves time while improving accuracy.</li>
        </ul>
      `}
      reverse={true}
    />

    {/* Key Applications of AI-Driven Personalization */}
    <IntroInfo
      title="Key Applications of AI-Driven Personalization"
      description={`
        <ul>
          <li>✔ Personalized Product Recommendations – AI suggests items based on browsing and purchase history.</li>
          <li>✔ Dynamic Website & App Experiences – Customizes layouts, content, and messaging for each visitor.</li>
          <li>✔ Behavior-Based Email & SMS Marketing – Sends targeted messages based on user activity.</li>
          <li>✔ Smart Chatbots & Virtual Assistants – AI-driven support that adapts to user queries in real time.</li>
          <li>✔ Predictive Customer Insights – Anticipates needs and behaviors for proactive engagement.</li>
          <li>✔ Automated Content Customization – Tailors blog posts, ads, and offers based on preferences.</li>
        </ul>
      `}
      reverse={false}
    />

    {/* Best Practices for AI-Driven Personalization */}
    <IntroSection
      imageSrc={img2}
      title="Best Practices for AI-Driven Personalization"
      description={`
        <ul>
          <li>✔ Leverage Data Responsibly – Use customer insights ethically and securely.</li>
          <li>✔ Segment & Target Effectively – Group audiences based on behaviors and preferences.</li>
          <li>✔ Optimize Across Multiple Channels – Ensure seamless experiences across web, mobile, and social media.</li>
          <li>✔ Continuously Improve with AI Learning – Refine algorithms based on real-time feedback.</li>
          <li>✔ Avoid Over-Personalization – Keep it relevant without being intrusive.</li>
        </ul>
      `}
      reverse={true}
    />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default AIDrivenPersonalization;
