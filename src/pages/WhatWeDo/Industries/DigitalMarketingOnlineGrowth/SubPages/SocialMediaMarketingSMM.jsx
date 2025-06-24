import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import SocialCard from '../../../../../components/common/SocialCard';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    Icon: ImFacebook2,
    title: 'Facebook Marketing',
    subtitle: 'Reach, Engage & Convert',
    description:
      'Let our Facebook marketing specialists craft the perfect strategy for your success!',
    bulletPoints: [
      'Increase brand awareness & audience engagement',
      'Run high-converting ad campaigns tailored to your goals',
      'Boost sales with expert targeting & optimization',
    ],
  },
  {
    Icon: FaInstagram,
    title: 'Instagram Marketing',
    subtitle: 'Stand Out & Sell More',
    description: 'Stay ahead of the competition with our Instagram marketing expertise!',
    bulletPoints: [
      'Optimize Instagram ads & campaigns for maximum ROI',
      'Enhance brand storytelling with eye-catching visuals',
      'Drive higher engagement & sales through precision targeting',
    ],
  },
  {
    Icon: FaYoutube,
    title: 'YouTube Marketing',
    subtitle: 'Turn Views into Customers',
    description: 'Stay ahead of the competition with our Instagram marketing expertise!',
    bulletPoints: [
      'Boosts video views & engagement for maximum brand impact',
      'Implements a proven YouTube growth strategy',
      'Uses expert SEO to rank higher on search results',
    ],
  },

  {
    Icon: FaLinkedinIn,
    title: 'LinkedIn Marketing',
    subtitle: 'Connect & Conver Your Business',
    description: 'Let our LinkedIn marketing experts turn your connections into conversions!',
    bulletPoints: [
      'Drive high-quality traffic with optimized LinkedIn ads',
      'Build credibility & authority with expert content strategies',
      'Generate valuable leads & expand your professional network',
    ],
  },

  {
    Icon: BsTwitterX,
    title: 'X Marketing',
    subtitle: 'Amplify Your Brand’s Voice',
    description: 'Supercharge your X marketing with our world-class expertise!',
    bulletPoints: [
      ' Gain real-time audience engagement with expert strategies',
      ' Leverage trending topics for maximum brand exposure',
      ' Optimize tweets, ads & content for higher reach & impact',
    ],
  },
];
const SocialMediaMarketingSMM = () => (
  <div>
    <PageHeroSection
      title="Social Media Marketing (SMM)"
      description="Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic.  "
      bgImage="/Images/SocialMediaMarketingSMM_hero.jpg"
    />

    {/* Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/SocialMediaMarketingSMM_1.jpg"
      IntroSectionTitle="Unlock Success with an Expert SEO Company"
      description="Boost your website’s visibility and search rankings with a top-tier SEO company. Expert strategies optimize your site for Google, driving organic traffic, enhancing user engagement, and fueling business growth. Whether you need comprehensive SEO solutions or targeted services, partnering with professionals ensures a powerful online presence.g you achieve success effortlessly. "
    />

    <section className="mb-10 w-full  place-items-center">
      <div className="max-w-7xl w-full mx-auto px-4 ">
        <div className="w-full flex flex-row flex-wrap justify-center items-stretch gap-20">
          {services.map((service, index) => (
            <SocialCard
              key={index}
              Icon={service.Icon}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              bulletPoints={service.bulletPoints}
            />
          ))}
        </div>
      </div>
    </section>

    <ContactForm />
  </div>
);

export default SocialMediaMarketingSMM;
