import React from 'react';
import DigitalSubPageHeroSection from '../../../../../components/common/DigitalSubPageHeroSection';

const contentHeading = 'Search Engine Optimization (SEO)';
const contentDescription = 'Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic.';
const contentImage = '/Images/SEO.jpg'; // Replace with the actual path to your

const SearchEngineOptimizationSEO = () => (
  <div>
    <DigitalSubPageHeroSection
      title={contentHeading}
      description={contentDescription}
      bgImage={contentImage}
    />
  </div>
);

export default SearchEngineOptimizationSEO;
