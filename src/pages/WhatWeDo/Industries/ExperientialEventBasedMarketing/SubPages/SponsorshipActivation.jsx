import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import Introinfo from '../../../../../components/common/Introinfo';

const SponsorshipActivation = () => (
  <div>
    <PageHeroSection
      title={'Sponsorship Activation'}
      description={
        'We help brands maximize their sponsorship investments through strategic activation and engagement.'
      }
      bgImage={'/Images/Sponrshipactivation.jpg'}
    />

    <IntroSection
      IntroSectionImage={'/Images/footballplayer.jpg'}
      IntroSectionTitle={'Supercharge Your Sponsorship Strategy'}
      IntroSectionDescription={
        'Sponsorship activation is the key to turning brand partnerships into powerful marketing opportunities. At Pitch, we help brands maximize their sponsorship efforts, ensuring they connect with the right audience and create a lasting impact.'
      }
    />
    <Introinfo />
  </div>
);

export default SponsorshipActivation;
