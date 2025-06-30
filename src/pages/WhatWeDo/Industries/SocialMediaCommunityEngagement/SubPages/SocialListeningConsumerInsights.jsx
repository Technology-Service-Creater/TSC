import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/SocialListeningConsumerInsights_Hero.jpg';
const introImg = '/Images/SocialListeningConsumerInsights-1.jpg';
const integrationImg = '/Images/SocialListeningConsumerInsights-2.jpg';

const socialListeningFeatures = [
  {
    title: 'Monitor Brand Mentions',
    description:
      'Stay aware of when and where your brand is mentioned on social media, forums, and blogs. This helps gauge public perception and address potential issues early.',
  },
  {
    title: 'Track Competitors',
    description:
      "Analyze competitors' social media activities to uncover their strengths and weaknesses. Use these insights to refine your strategies and identify new opportunities.",
  },
  {
    title: 'Sentiment Analysis',
    description:
      'Leverage sentiment analysis tools to measure how customers feel about your brand, products, and industry. Identify areas for improvement based on positive, negative, or neutral feedback.',
  },
  {
    title: 'Identify Trends',
    description:
      'Monitor trending topics, hashtags, and industry discussions to stay informed and participate in conversations that matter to your audience.',
  },
  {
    title: 'Engage with Customers',
    description:
      'Respond to comments, feedback, and inquiries promptly. Active engagement builds trust and demonstrates that you value customer input.',
  },
  {
    title: 'Influencer Identification',
    description:
      'Identify key influencers and thought leaders in your industry. Partnering with them can amplify your reach and establish credibility.',
  },
];

const consumerInsightsFeatures = [
  {
    title: 'Customer Surveys',
    description:
      'Gather direct feedback on customer preferences, pain points, and satisfaction levels to shape product development and marketing strategies.',
  },
  {
    title: 'Focus Groups',
    description:
      'Gain deeper qualitative insights by organizing discussions with target audiences to better understand their opinions and behaviors.',
  },
  {
    title: 'Analytics Tools',
    description:
      'Use analytics platforms to track website traffic, social media engagement, and sales data. These insights help identify patterns and optimize marketing efforts.',
  },
  {
    title: 'Customer Journey',
    description:
      'Map the customer journey to pinpoint key interactions, pain points, and areas needing improvement across all touchpoints.',
  },
  {
    title: 'Product Reviews & Feedback',
    description:
      'Analyze reviews to identify recurring themes, product strengths, and areas for improvement.',
  },
  {
    title: 'Segmentation',
    description:
      'Categorize your audience by demographics, behaviors, or preferences to segment marketing messages and improve response rates.',
  },
];

const SocialListeningConsumerInsights = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Social Listening & Consumer Insights"
      description="Enhancing the Shopping Experience"
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Social Listening & Consumer Insights"
      description="Effectively leveraging social listening and consumer insights can help businesses stay ahead of market trends, understand customer needs, and refine their strategies."
      reverse={false}
    />

    {/* Social Listening Features */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
        Social Listening
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {socialListeningFeatures.map((item, idx) => (
          <ServiceCard key={idx} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Consumer Insights Features */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
        Consumer Insights
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consumerInsightsFeatures.map((item, idx) => (
          <ServiceCard key={idx} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Power of Integration Section */}
    <IntroSection
      imageSrc={integrationImg}
      title="The Power of Integration"
      description="By combining social listening with consumer insights, businesses can develop a well-rounded understanding of their audience, make data-driven decisions, and create impactful marketing strategies that truly resonate."
      reverse={true}
    />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default SocialListeningConsumerInsights;
