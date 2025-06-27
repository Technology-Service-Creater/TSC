import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/ProductContentAnalytics_Hero.jpg';
const introImg = '/Images/ProductContentAnalytics-1.jpg';

const productAnalysisCards = [
  {
    title: 'Functionality',
    description:
      'Does the product perform its intended functions efficiently?<br/> Are there usability issues or friction points?',
  },
  {
    title: 'Design & UX',
    description:
      'Is the aesthetic and user interface appealing and intuitive?<br/> How does it compare to industry standards?',
  },
  {
    title: 'Features & Benefits',
    description:
      'What unique value propositions set this product apart from competitors?<br/> Are there overlooked features that could be better highlighted?',
  },
  {
    title: 'Performance Data & Insights',
    description:
      'Analyzing usage metrics, customer feedback, and engagement trends to refine features.<br/> Tracking customer satisfaction and complaints for improvement opportunities.',
  },
];

const contentAnalysisCards = [
  {
    title: 'Messaging & Communication',
    description:
      'Are key messages clear, engaging, and aligned with customer needs?<br/> Do product descriptions emphasize the right benefits?',
  },
  {
    title: 'Tone & Voice',
    description:
      "Is the language consistent with the brand's personality?<br/> Does it resonate with the target audience?",
  },
  {
    title: 'Accuracy & Clarity',
    description:
      'Is the content free from ambiguities, jargon, or misleading claims?<br/> Are instructions and descriptions user-friendly?',
  },
  {
    title: 'Target Audience Reach',
    description:
      'Are the right demographics seeing and engaging with the content?<br/> Is the content optimized for different platforms (web, mobile, social media, etc.)?',
  },
];

const combinedAnalysisCards = [
  {
    title: 'Enhanced Customer Experience',
    description:
      "✓ Bridging the gap between what a product offers and how it's marketed.<br/>✓ Aligning features with customer expectations for better satisfaction.",
  },
  {
    title: 'Stronger Brand Consistency',
    description:
      "✓ Ensuring all marketing materials, product descriptions, and UX writing match the product's value.",
  },
  {
    title: 'Data-Driven Decision Making',
    description:
      '✓ Using product insights to optimize messaging strategies.<br/>✓ Refining product development based on content engagement trends.',
  },
];

export default function ProductContentAnalytics() {
  return (
    <div className="bg-[#F5F6FA]">
      <PageHeroSection
        title="Product & Content Analysis"
        description="Data-Driven Insights for Better Decisions"
        bgImage={heroImg}
      />

      <IntroSection
        imageSrc={introImg}
        title={
          <>
            Product & Content Analysis:
            <br />
            Maximizing Impact
          </>
        }
        description={
          "A successful product isn't just about features—it's also about how it's presented. Product and content analysis work together to ensure that both the functionality and the messaging align with user needs, leading to better engagement and higher conversions."
        }
        reverse={false}
      />

      {/* Key Aspects of Product Analysis */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
          Key Aspects of Product Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productAnalysisCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Key Aspects of Content Analysis */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
          Key Aspects of Content Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentAnalysisCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Power of Combined Product & Content Analysis */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
          The Power of Combined Product & Content Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {combinedAnalysisCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
