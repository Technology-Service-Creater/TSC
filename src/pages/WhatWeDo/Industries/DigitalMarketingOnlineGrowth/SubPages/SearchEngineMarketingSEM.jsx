import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Keyword Research & Strategy',
    subtitle: 'Target the right keywords for higher visibility and more conversions.',
    listItems: [
      ' Identifying your unique value proposition',
      ' Crafting high-converting ad copy',
      ' Maximizing targeting options for higher sales & faster results',
    ],
  },
  {
    title: 'Amazon PPC',
    subtitle: 'Boost sales on Amazon with expertly crafted sponsored ads.',
    listItems: [
      ' Target high-intent audiences for higher conversions',
      ' Launch text, image & video ads that resonate',
      ' Use analytics to optimize performance in real-time',
    ],
  },
  {
    title: 'Video Advertising',
    subtitle: '72% of consumers prefer video over text when learning about products.',
    listItems: [
      ' Optimize video ads with keyword-rich titles, descriptions & tags',
      ' Focus on mobile optimization for seamless engagement',
      ' Increase brand awareness & drive more conversions',
    ],
  },
  {
    title: 'eCommerce Advertising',
    subtitle: 'We craft data-driven eCommerce ad strategies tailored to your budget.',
    listItems: [
      ' Identifying your unique value proposition',
      ' Crafting high-converting ad copy',
      ' Maximizing targeting options for higher sales & faster results',
    ],
  },
  {
    title: 'Social Media Paid Advertising',
    subtitle:
      'Run high-impact social media ads across platforms like Facebook, Instagram, LinkedIn, Etc.',
    listItems: [
      ' Target high-intent audiences for higher conversions',
      ' Launch text, image & video ads that resonate',
      ' Use analytics to optimize performance in real-time',
    ],
  },
  {
    title: 'Landing Page Optimization',
    subtitle: 'A great ad is only as good as its landing page. Our experts optimize your pages.',
    listItems: [
      ' Compelling, keyword-driven content',
      ' Eye-catching CTAs that drive action',
      ' User-friendly design that keeps visitors engaged',
    ],
  },
  {
    title: 'Paid Search Advertising',
    subtitle:
      '41% of consumers click on relevant ads—we make sure yours stand out! Our budget-friendly paid search strategies.',
    listItems: [
      ' Advanced keyword research & ad segmentation',
      ' Negative keyword filtering to eliminate wasted spend',
      ' Persuasive ad copy to improve Quality Score & ad rank',
    ],
  },
  {
    title: 'A/B Split Testing',
    subtitle: 'We don’t guess—we test & optimize your ads for the best performance.',
    listItems: [
      ' Multiple ad variations tested for best results',
      ' Optimized CTAs, designs & targeting',
      ' Data-driven insights for continuous campaign improvement',
    ],
  },
  {
    title: 'SEM PPC Management',
    subtitle: 'Our SEM specialists oversee your entire paid advertising campaign.',
    listItems: [
      ' Keyword research & bid management',
      ' Continuous ad optimization',
      ' In-depth analytics & performance tracking',
    ],
  },
  {
    title: 'Bing & Google Ads',
    subtitle: 'Get ahead of your competition with multi-channel ad strategies.',
    listItems: [
      ' Expand device targeting for more conversions',
      ' Adjust bids based on real-time data',
      ' Secure top ad positions for higher CTR & ROI',
    ],
  },
  {
    title: 'Remarketing',
    subtitle: 'Convert past visitors into loyal customers with strategic remarketing campaigns.',
    listItems: [
      ' Set up targeted remarketing codes',
      ' Create compelling ad copy to re-engage high-value prospects',
      ' Run text & video remarketing ads for higher conversions',
    ],
  },
];

const SearchEngineMarketingSEM = () => (
  <div>
    <PageHeroSection
      title="Search Engine Marketing (SEM)"
      description="Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic. "
      bgImage="/Images/SearchEngineMarketingSEM_hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/SearchEngineMarketingSEM_1.jpg"
      IntroSectionTitle="What is Search Engine Marketing (SEM)?"
      description="Search engine marketing (SEM) is a form of Internet marketing that involves the promotion of websites by increasing their visibility in search engine results pages (SERPs), primarily through paid advertising."
    />

    <p
      className="text-black text-center font-poppins font-bold underline mt-10 mb-6 px-4"
      style={{
        fontSize: '49px',
        lineHeight: '65px',
        letterSpacing: '-0.98px',
        textDecorationLine: 'underline',
        textUnderlineOffset: 'auto',
        textDecorationThickness: 'auto',
        textDecorationSkipInk: 'auto',
        textUnderlinePosition: 'from-font',
      }}
    >
      Drive More Clicks, Conversions & Revenue
    </p>

    {/* Services Grid */}
    <section className="mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              listItems={service.listItems}
              subtitle={service.subtitle}
            />
          ))}
        </div>
      </div>
    </section>

    <p
      className="text-black text-center font-poppins font-semibold mt-10 mb-6 px-4"
      style={{
        fontSize: '32px',
        lineHeight: '10.24px',
        letterSpacing: '1.92px',
        marginBottom: '50px',
      }}
    >
      Let’s take your brand to the top of search results!
    </p>

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default SearchEngineMarketingSEM;
