import React from 'react';
import DigitalSubPageHeroSection from '../../../../../components/common/DigitalSubPageHeroSection';
import SEOCompanyBanner from '../../../../../components/common/SEOCompanyBanner';

const contentHeading = 'Search Engine Optimization (SEO)';
const contentDescription =
  'Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic.';
const contentImage = '/Images/SEO.jpg'; // Replace with the actual path to your

const SearchEngineOptimizationSEO = () => (
  <div>
    <DigitalSubPageHeroSection
      title={contentHeading}
      description={contentDescription}
      bgImage={contentImage}
    />
    <SEOCompanyBanner
      SEOCompanyImage={'/Images/Unlock-Success-with-an-Expert-SEO-Company.jpg'}
      SEOCompanyTitle={'Unlock Success with an Expert SEO Company'}
      SEOCompanyDescription={
        'Boost your website`s visibility and search rankings with a top-tier SEO company. Expert strategies optimize your site for Google, driving organic traffic, enhancing user engagement, and fueling business growth. Whether you need comprehensive SEO solutions or targeted services, partnering with professionals ensures a powerful online presence.g you achieve success effortlessly.'
      }
    />
  </div>
);

export default SearchEngineOptimizationSEO;
