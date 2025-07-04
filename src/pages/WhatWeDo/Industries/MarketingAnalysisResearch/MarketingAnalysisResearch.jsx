import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const heroImg = '/Images/MarketAnalysisResearch_Hero.jpg';

const toKebabCase = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/(^-|-$)/g, '');
const industryPath = 'marketing-analysis-research';

const industryCards = [
  {
    title: 'Industry Trends & Forecasting',
    id: 'industry-trends-forecasting',
    description:
      'Understanding industry trends involves analysing patterns and shifts within a specific industry over time. This can include changes in consumer behaviour, technological advancements, regulatory impacts, and market demand. By keeping track of these trends, businesses can anticipate changes and adapt their strategies accordingly.',
  },
  {
    title: 'Competitive Analysis',
    id: 'competitive-analysis',
    description:
      'Competitive analysis involves analyzing your competitors and evaluating their strategies to determine their strengths and weaknesses relative to your own business. This helps in making informed decisions and identifying opportunities for differentiation.',
    itemList: [
      'Market Position: Understanding where competitors stand in the market.',
      'Product/Service Offerings: Comparing features, benefits, and pricing.',
      "Marketing Strategies: Analyzing competitors' marketing tactics and campaigns.",
      'SWOT Analysis: Identifying strengths, weaknesses, opportunities, and threats.',
    ],
  },
  {
    title: 'Customer Segmentation',
    id: 'customer-segmentation',
    description:
      'Customer segmentation involves dividing your market into distinct groups based on shared characteristics, behaviors, or preferences. This enables targeted marketing strategies and personalized customer experiences.',
  },
].map(card => ({
  ...card,
  link: `/industries/${industryPath}/${card.id}`,
}));

const MarketingAnalysisResearch = () => (
  <div className="bg-[#F6F9FB]">
    <PageHeroSection
      title="Market Analysis and Research"
      description="Cultivate a data-driven culture. Make smarter, faster decisions by including in-depth research and forecasting."
      bgImage={heroImg}
    />

    <IntroSection
      imageSrc={'/Images/MarketAnalysisResearch-1.png'}
      title="Market Analysis and Research"
      description="Market analysis and research are essential processes that help businesses understand market dynamics, identify opportunities, and mitigate risks. By leveraging data analysis, trend exploration, and forecasting, organizations can make informed strategic decisions, identify opportunities, and mitigate risks."
      reverse={false}
    />

    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Industry Trends and Forecasting
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industryCards.map(card => (
          <ServiceCard
            key={card.title}
            title={card.title}
            description={card.description}
            listItems={card.itemList}
            link={card.link}
          />
        ))}
      </div>
    </section>

    <IntroSection
      imageSrc={'/Images/MarketAnalysisResearch-2.png'}
      title="Empowering Business Decisions"
      description="Market analysis and research empower businesses to stay competitive and adapt to changing industry landscapes. By leveraging insights from data, organizations can drive innovation, improve decision-making, and achieve sustainable growth."
      reverse={true}
    />

    <div className="mt-12">
      <ContactForm />
    </div>
  </div>
);

export default MarketingAnalysisResearch;
