import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import { TfiTimer } from 'react-icons/tfi';
import { PiThumbsUpLight } from 'react-icons/pi';
import { IoIosStarOutline } from 'react-icons/io';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const contentHeading = 'Search Engine Optimization (SEO)';
const contentDescription =
  'Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic.';
const contentImage = '/Images/SEO.jpg';

const services = [
  {
    title: 'Keyword Research & Strategy',
    description: `A solid SEO strategy starts with in-depth keyword research. Our experts identify the terms your target audience is searching for and craft strategies to help your website rank higher for those keywords, driving quality traffic to your business.`,
  },
  {
    title: 'Link Building',
    description:
      'High-quality backlinks from authoritative sources enhance your website’s credibility and improve search engine rankings. Our link-building strategies focus on securing relevant, powerful links that boost your domain authority.',
  },
  {
    title: 'Technical SEO',
    description:
      'The backbone of a well-optimized site, technical SEO ensures search engines can efficiently crawl and index your pages. From improving site speed and mobile responsiveness to fixing structural issues, we optimize your website for maximum visibility.',
  },
  {
    title: 'Local SEO',
    description:
      'For businesses with a physical presence, local SEO is crucial. We optimize your Google My Business profile and local listings, increasing your visibility in location-based searches and helping you attract nearby customers.',
  },
  {
    title: 'On-Page SEO',
    description:
      'Optimizing on-page elements like title tags, meta descriptions, headers, and content ensures search engines understand your pages and rank them accordingly. Our on-page SEO services improve relevance, readability, and keyword targeting.',
  },
  {
    title: 'Off-Page SEO',
    description:
      'Boost your site’s authority with off-page SEO strategies, including high-quality backlinks, social media engagement, and brand mentions. These efforts enhance credibility and improve your site’s overall ranking potential.',
  },
  {
    title: 'Franchise SEO',
    description:
      'Multi-location businesses require specialized SEO strategies. We optimize each franchise’s web presence to improve local search visibility, ensuring consistency and maximizing reach across different regions.',
  },
  {
    title: 'Shopify SEO',
    description:
      'For Shopify eCommerce stores, our SEO services focus on optimizing product listings, improving site architecture, and enhancing content to increase organic visibility and drive more sales.',
  },
  {
    title: 'Amazon SEO',
    description:
      'Optimizing product listings on Amazon is essential for standing out in search results. We fine-tune keywords, manage reviews, and enhance product descriptions to maximize conversions and boost sales.',
  },
  {
    title: 'eCommerce SEO',
    description: `Tailored for online stores, our eCommerce SEO strategies drive traffic and increase conversions. We optimize category pages, product pages, and site navigation to enhance user experience and search rankings.`,
  },
  {
    title: 'Content Writing Services',
    description:
      'ASO is about optimizing mobile apps to rank higher in app store search results. This involves:High-quality, engaging content is key to attracting visitors and improving SEO. Our expert content creators craft compelling, optimized content that resonates with your audience and enhances search rankings.',
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    description:
      'SEO brings traffic, but CRO turns visitors into customers. We analyze and optimize key website elements—landing pages, calls-to-action, and user experience—to increase conversions and drive revenue growth.',
  },
];

const features = [
  {
    icon: <PiThumbsUpLight className="text-5xl" />,
    title: 'Proven Expertise',
    description:
      'Leverage the latest SEO strategies from seasoned professionals to boost your online presence.',
  },

  {
    icon: <TfiTimer className="text-5xl" />,
    title: 'Time-Saving',
    description:
      'Focus on your business while experts handle your SEO, ensuring optimal results without the hassle.',
  },
  {
    icon: <IoIosStarOutline className="text-5xl" />,

    title: 'Stay Trendy',
    description: 'Stay competitive with up-to-date SEO tactics that adapt to changing algorithms.',
  },
];

const SearchEngineOptimizationSEO = () => (
  <div>
    <PageHeroSection
      title={contentHeading}
      description={contentDescription}
      bgImage={contentImage}
    />
    <IntroSection
      IntroSectionImage={'/Images/Unlock-Success-with-an-Expert-SEO-Company.jpg'}
      IntroSectionTitle={'Unlock Success with an Expert SEO Company'}
      IntroSectionDescription={
        'Boost your website`s visibility and search rankings with a top-tier SEO company. Expert strategies optimize your site for Google, driving organic traffic, enhancing user engagement, and fueling business growth. Whether you need comprehensive SEO solutions or targeted services, partnering with professionals ensures a powerful online presence.g you achieve success effortlessly.'
      }
    />
    <div className="w-full px-6 py-6 bg-sky-100 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
      {features.map((feature, idx) => (
        <div key={idx} className="w-80  px-6 py-4 flex flex-col justify-center items-center gap-6 ">
          <div className=" p-6 outline-2 rounded-full flex items-center text-center justify-center">
            {feature.icon}
          </div>
          <div className="w-full  text-center flex flex-col justify-center items-start gap-2">
            <h3 className="w-full text-neutral-800 text-2xl md:text-3xl font-bold font-poppins leading-10">
              {feature.title}
            </h3>
            <p className="w-full text-neutral-800 text-base font-medium font-montserrat leading-normal tracking-wide">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="w-full my-10 h-40 px-6 py-4 bg-stone-900 inline-flex justify-center items-center gap-6">
      <div className="text-center justify-start">
        <span className="text-white text-5xl font-bold font-['Poppins'] leading-[73.50px]">
          SEO Services
          <br />
        </span>
        <span className="text-white text-3xl font-medium font-['Poppins'] leading-10 tracking-widest">
          Optimized for Success
        </span>
      </div>
    </div>

    <section className="mb-10">
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
    <ContactForm />
  </div>
);

export default SearchEngineOptimizationSEO;
