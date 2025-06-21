import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';

const contentHeading = 'Search Engine Optimization (SEO)';
const contentDescription =
  'Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic.';
const contentImage = '/Images/SEO.jpg'; // Replace with the actual path to your

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
  </div>
);

export default SearchEngineOptimizationSEO;
