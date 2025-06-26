import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ContactForm from '../../../../../components/common/ContactForm';

const AIPoweredPersonalization = () => (
  <div className="bg-[#f4f8fc]">
    {/* Hero Section */}
    <PageHeroSection
      title="AI–Powered Personalization"
      description="Elevating Customer Experiences with Smart Insights"
      bgImage="/Images/AIPoweredPersonalization_Hero.jpg"
    />

    {/* AI-Powered Personalization: The Future of Customer Experience */}
    <IntroSection
      imageSrc="/Images/AIPoweredPersonalization-1.jpg"
      title="AI–Powered Personalization: The Future of Customer Experience"
      description={
        'AI-powered personalization transforms the way businesses interact with customers by delivering tailored experiences based on individual preferences and behaviors.'
      }
      imageAlt="AI-Powered Personalization"
    />

    {/* How AI-Powered Personalization Works */}
    <IntroInfo
      title="How AI–Powered Personalization Works"
      description={
        <div className="text-left">
          <div>1. Data Collection – AI gathers information from multiple sources, including:</div>
          <div className="pl-4">
            ✓ Browsing history
            <br />✓ Purchase behavior
            <br />✓ Click patterns
            <br />✓ Social media interactions
          </div>
          <div>
            2. Data Analysis – AI processes the collected data to detect patterns and trends in user
            behavior.
          </div>
          <div>3. Customization & Recommendations – Based on the insights, AI personalizes:</div>
          <div className="pl-4">
            ✓ Product recommendations (e.g., Amazon suggesting items based on past purchases)
            <br />✓ Content curation (e.g., Netflix recommending shows based on your watch history)
            <br />✓ Marketing messages (e.g., personalized emails with relevant offers)
          </div>
          <div>
            4. Continuous Learning – AI adapts and improves over time, refining recommendations as
            user preferences evolve.
          </div>
        </div>
      }
    />

    {/* Benefits of AI-Powered Personalization */}
    <IntroInfo
      title="Benefits of AI–Powered Personalization"
      description={
        <div className="text-left">
          <div>
            Increased Engagement – Users are more likely to interact with content that feels
            relevant to them.
          </div>
          <div>
            ✓ Improved Customer Satisfaction – Tailored experiences enhance user convenience and
            enjoyment.
          </div>
          <div>
            ✓ Higher Conversion Rates – Personalized recommendations increase purchase likelihood.
          </div>
          <div>
            ✓ Stronger Customer Loyalty – Customers feel valued, leading to higher retention rates.
          </div>
        </div>
      }
    />

    {/* Challenges & Considerations */}
    <IntroInfo
      title="Challenges & Considerations"
      description={
        <div className="text-left">
          <div>
            Data Privacy Concerns – Companies must handle personal data responsibly to ensure
            compliance with privacy laws (e.g., GDPR, CCPA).
          </div>
          <div>
            ✓ Bias & Fairness – AI models can inherit biases from data, leading to unfair
            recommendations or exclusions.
          </div>
          <div>
            ✓ Over-Personalization – Too much customization can feel intrusive or &quot;creepy&quot;
            to users.
          </div>
          <div>
            Solution: Businesses should implement transparent AI practices and allow users to
            control their personalization settings.
          </div>
        </div>
      }
    />

    {/* The Future of AI Personalization */}
    <IntroSection
      imageSrc="/Images/AIPoweredPersonalization-2.jpg"
      title="The Future of AI Personalization"
      description={
        'With advancements in machine learning and predictive analytics, AI personalization will become even more accurate, seamless, and human-like.'
      }
      imageAlt="The Future of AI Personalization"
      reverse
    />

    {/* Contact Us Section */}
    <ContactForm />
  </div>
);

export default AIPoweredPersonalization;
