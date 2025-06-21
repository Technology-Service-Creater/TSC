import React from 'react';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';

const DigitalMarketingOnlineGrowth = () => {
  const toKebabCase = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/(^-|-$)/g, '');

  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: `SEO is about optimizing your website so that it ranks higher on search engine results pages (SERPs). This involves:`,
      listItems: [
        'Keyword Research: Identifying the keywords your target audience is searching for.',
        'On-Page SEO: Optimizing content, meta tags, images, and URL structure.',
        'Off-Page SEO: Building backlinks to your website.',
        `Technical SEO: Ensuring your website's infrastructure is search-engine friendly.`,
      ],
    },
    {
      title: 'Search Engine Marketing (SEM)',
      description:
        'SEM involves using paid advertisements that appear on SERPs. It typically includes:',
      listItems: [
        'Google Ads: The most popular platform for SEM, where advertisers bid on keywords.',
        'Pay-Per-Click (PPC): Advertisers pay each time someone clicks on their ad.',
      ],
    },
    {
      title: 'Social Media Marketing (SMM)',
      description:
        'SMM focuses on promoting your brand and content on social media platforms. Key components include:',
      listItems: [
        'Content Creation: Crafting engaging posts, stories, and videos.',
        'Social Media Ads: Running targeted ads on platforms like Facebook, Instagram, Twitter, and LinkedIn.',
        'Community Engagement: Interacting with followers and building a loyal community.',
      ],
    },
    {
      title: 'Content Marketing',
      description:
        'Content marketing is about creating valuable content to attract, engage, and retain an audience. This includes:',
      listItems: [
        'Blog Posts: Writing informative articles relevant to your audience.',
        'E-books and Whitepapers: Providing in-depth information on specific topics.',
        'Infographics: Using visual content to convey information.',
        'Videos: Creating engaging video content to attract viewers.',
      ],
    },
    {
      title: 'Email Marketing',
      description:
        'Email marketing involves sending targeted messages to potential and existing customers. Key elements are:',
      listItems: [
        'Newsletters: Regular updates about your brand and industry.',
        'Promotional Emails: Sending offers, discounts, and product updates.',
        'Automated Campaigns: Drip campaigns triggered by user actions.',
      ],
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description:
        'PPC is a form of online advertising where advertisers pay each time a user clicks on their ad. Common platforms include:',
      listItems: [
        'Google Ads: Target users based on search queries.',
        'Social Media Ads: Run PPC campaigns on social media platforms.',
      ],
    },
    {
      title: 'Facebook Ads',
      description:
        'Facebook Ads allow you to target specific audiences on Facebook. Features include:',
      listItems: [
        'Custom Audiences: Target users based on demographics, interests, and behaviours.',
        'Retargeting: Show ads to users who have previously interacted with your brand.',
        'Ad Formats: Various formats such as image ads, video ads, carousel ads, and more.',
      ],
    },
    {
      title: 'Google Ads / Online Ads',
      description:
        'Google Ads enable you to advertise on the Google search and display networks. This includes:',
      listItems: [
        'Search Ads: Appear at the top of SERPs.',
        `Display Ads: Visual ads shown on websites within Google's network.`,
        'Video Ads: Ads displayed on YouTube and other video platforms.',
      ],
    },
    {
      title: 'Influencer Marketing',
      description:
        'Influencer marketing involves partnering with influencers to promote your products or services. Steps include:',
      listItems: [
        'Identifying Influencers: Finding influencers relevant to your niche.',
        'Collaborating on Content: Creating authentic content with influencers.',
        'Measuring Impact: Tracking the performance of influencer campaigns.',
      ],
    },
    {
      title: 'Affiliate Marketing',
      description: `Affiliate marketing is a performance-based strategy where you partner with other businesses to promote each other's products. Key aspects are:`,
      listItems: [
        'Affiliate Networks: Joining networks to find affiliates.',
        'Commission Structure: Defining how affiliates are compensated.',
        'Tracking and Reporting: Monitoring affiliate performance.',
      ],
    },
    {
      title: 'App Store Optimization (ASO)',
      description:
        'ASO is about optimizing mobile apps to rank higher in app store search results. This involves:',
      listItems: [
        'Keyword Optimization: Using relevant keywords in app titles and descriptions.',
        'App Reviews and Ratings: Encouraging positive reviews and ratings.',
        'Visual Elements: Optimizing app icons, screenshots, and videos.',
      ],
    },
    {
      title: 'Online Reputation Management (ORM)',
      description:
        'ORM involves managing and improving your online reputation. Key strategies include:',
      listItems: [
        `Monitoring Mentions: Keeping track of what's being said about your brand.`,
        'Responding to Reviews: Addressing positive and negative reviews.',
        'Content Creation: Publishing positive content to improve your online image.',
      ],
    },
  ].map(service => ({
    ...service,
    link: `/industries/digital-marketing-online-growth/${toKebabCase(service.title)}`,
  }));

  return (
    <div className="bg-[#F5F5F5]">
      {/* Hero Section */}
      <PageHeroSection
        title="Digital Marketing & Online Growth"
        description="Strategies for Success"
        bgImage="/Images/DigitalMarketing_Hero.jpg"
      />

      <IntroSection
        title="Digital Marketing & Online Growth"
        description="In today's digital era, businesses must leverage digital marketing to achieve sustainable online growth. With the rapid evolution of technology, brands need to adopt strategic approaches to enhance visibility, engage audiences, and drive conversions. Below are key strategies for achieving digital marketing success and online growth."
        imageSrc="/Images/DigitalMarketing-1.jpg"
        imageAlt="Digital Marketing"
      />

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                listItems={service.listItems}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <IntroSection
        description="Digital marketing is a dynamic field that requires continuous adaptation. By implementing these strategies and staying updated with trends, businesses can enhance their online presence, attract new customers, and drive long-term growth."
        imageSrc="/Images/DigitalMarketing-2.jpg"
        imageAlt="Dynamic Marketing"
        reverse={true}
      />

      <ContactForm />
    </div>
  );
};

export default DigitalMarketingOnlineGrowth;
