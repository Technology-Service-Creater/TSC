import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';

const ProductLaunchesBrandActivations = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Product Launch & Brand Activation"
      description="Web and mobile analytics help businesses understand user behavior, optimize experiences, and drive conversions. By collecting and analyzing real-time data, companies can make informed decisions that improve customer journeys and marketing effectiveness."
      bgImage="/Images/ProductLaunchesBrandActivations_hero.jpg"
    />

    <IntroSection
      IntroSectionImage="/Images/ProductLaunchesBrandActivations_1.jpg"
      IntroSectionTitle="Create Unforgettable Moments & Launch with Impact"
      IntroSectionDescription={
        'At T Palmer Agency, we craft immersive, high-impact product launches and brand activations that captivate audiences, generate buzz, and drive real results. Whether unveiling a new product or creating a standout brand experience, we turn ideas into unforgettable moments.'
      }
    />

    <section className="text-center py-12 md:py-16 px-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-black leading-tight">
        What We Do
      </h2>
    </section>

    <IntroInfo
      title={'Strategic Product Launches That Deliver Results'}
      description={
        <>
          <div className="text-left">
            <p>
              We take a data-driven approach to ensure your launch makes waves. By understanding
              your brand and audience, we design strategic, high-energy campaigns that maximize
              impact.
            </p>
            <p>
              ✔ Launch Strategy & Planning - We craft a custom roadmap, from audience research to
              perfect timing and channel selection.
            </p>
            <p>
              ✔ Creative Concepts & Campaigns - Our story-driven campaigns ensure your product
              stands out and sticks in people’s minds.
            </p>
            <p>
              ✔ Digital & Physical Launch Integration - We blend online and offline experiences for
              seamless brand engagement.
            </p>
            <p>
              ✔ Influencer & Media Engagement - Get your product in front of the right voices and
              media outlets to amplify reach.
            </p>
          </div>
        </>
      }
    />
  </div> // ✅ <-- this was missing
);

export default ProductLaunchesBrandActivations;
