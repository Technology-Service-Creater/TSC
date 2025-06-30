import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/IndustryTrendsandForecasting_Hero.jpg';
const introImg = '/Images/IndustryTrendsandForecasting-1.jpg';

const trendAnalysisCards = [
  {
    title: 'Spotting Emerging Trends',
    description:
      'Identifying early shifts in consumer behavior and industry patterns allows businesses to capture opportunities before competitors do.',
  },
  {
    title: 'Forecasting Market Demand',
    description:
      'Predicting future demand helps companies adjust production, marketing, and inventory strategies to align with market needs.',
  },
  {
    title: 'Risk Management',
    description:
      'Anticipating potential risks enables businesses to develop proactive strategies to mitigate challenges before they arise.',
  },
  {
    title: 'Strategic Decision-Making',
    description:
      'Insights from trend analysis guide resource allocation, business expansion, and long-term planning.',
  },
];

const marketTrendStepsCards = [
  {
    title: 'Collect Data',
    description:
      'Gather historical data on sales, customer behavior, market size, and other relevant metrics from reliable sources.',
  },
  {
    title: 'Analyze Data',
    description:
      'Utilize statistical techniques such as moving averages, regression analysis, and time series analysis to identify patterns.',
  },
  {
    title: 'Visualize Insights',
    description:
      'Use charts, graphs, and dashboards to make complex trends easy to understand and communicate.',
  },
  {
    title: 'Interpret Findings',
    description:
      'Translate data insights into actionable strategies that align with business objectives.',
  },
  {
    title: 'Monitor and Adapt',
    description:
      'Continuously track trends and update your analysis to stay ahead of evolving consumer demands.',
  },
];

const IndustryTrendsForecasting = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Industry Trends and Forecasting"
      description="User Interface (UI) and User Experience (UX) design are essential for creating engaging, intuitive, and effective digital experiences."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Industry Trends and Forecasting"
      description="Market analysis is the process of examining a specific market to understand its size, growth potential, and competitive landscape. It helps businesses identify opportunities, mitigate risks, and develop strategies to gain competitive advantage."
      reverse={false}
    />

    {/* Role of Trend Analysis */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        The Role of Trend Analysis in Market Research
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
        {trendAnalysisCards.map((card, index) => (
          <ServiceCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Steps in Market Trend Analysis */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Steps in Market Trend Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {marketTrendStepsCards.map((card, index) => (
          <ServiceCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default IndustryTrendsForecasting;
