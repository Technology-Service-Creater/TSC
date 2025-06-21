import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import { WiTime3 } from 'react-icons/wi';

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
    <div className="w-full h-96 px-6 py-4 bg-sky-100 inline-flex justify-center items-center gap-12">
      <div className="w-96 h-80 px-6 py-4 flex flex-col justify-center items-center gap-6">
        <div className="w-32 h-32 px-3 py-[5px] rounded-[62.50px] outline-2 outline-offset-[-2px] outline-neutral-800 inline-flex justify-center items-center gap-2">
          <WiTime3 />
        </div>
        <div className="w-full text-center flex flex-col justify-start items-start gap-6">
          <div className="w-full justify-start text-neutral-800 text-3xl font-bold font-['Poppins'] leading-10">
            Time-Saving
          </div>
          <div className="w-full justify-start text-neutral-800 text-base font-medium font-['Montserrat'] leading-normal tracking-wide">
            Focus on your business while experts handle your SEO, ensuring optimal results without
            the hassle.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SearchEngineOptimizationSEO;
