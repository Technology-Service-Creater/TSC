import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const whatIsMusicFestivals = `
Music festivals and concerts are immersive live events that bring together artists and audiences for electrifying performances. From intimate gigs to large-scale festivals, these events create a sense of community, cultural expression, and unforgettable moments through music.
`;

const whyMusicImportant = `
<ul class=''>
  <li>✔ Creates Unmatched Energy – Live music builds powerful emotional connections.</li>
  <li>✔ Brings Communities Together – Fans unite to celebrate their favorite artists and genres.</li>
  <li>✔ Drives Conversions & Brand Growth – Boosts local economies and sponsorship opportunities.</li>
  <li>✔ Showcases Emerging & Established Talent – A platform for artists to shine.</li>
  <li>✔ Amplifies Brand & Cultural Influence – Festivals become iconic cultural landmarks.</li>
</ul>
`;

const keyElementsMusicFest = `
<ul class=''>
  <li>✔ Headlining & Emerging Artists – A diverse lineup attracts wider audiences.</li>
  <li>✔ Immersive Stage & Production Design – Lights, visuals, and sound systems elevate the experience.</li>
  <li>✔ Interactive Fan Engagement – Meet-and-greets, VIP experiences, and social media activations.</li>
  <li>✔ Food, Merch & Experiential Zones – Festival-themed food, exclusive merch, and chill zones.</li>
  <li>✔ Seamless Event Logistics – Smart ticketing, crowd management, and security for smooth operations.</li>
  <li>✔ Live Streaming & Digital Reach – Global audiences engage through online broadcasts.</li>
</ul>
`;

const bestPracticesMusic = `
<ul class='text-sm'>
  <li>✔ Curate an Engaging Lineup – Balance headliners with up-and-coming talent.</li>
  <li>✔ Invest in Production Quality – Professional sound, lighting, and staging elevate the vibe.</li>
  <li>✔ Personalize the Experience – Offer VIP areas, themed zones, and branded giveaways.</li>
  <li>✔ Embrace Technology – Use mobile apps, RFID wristbands, and livestreaming to enhance convenience.</li>
  <li>✔ Prioritize Safety & Accessibility – Crowd control, medical support, and inclusive design are key.</li>
</ul>
`;

const MusicFestivalsConcerts = () => (
  <div>
    <PageHeroSection
      title="Music Festivals & Concerts"
      description="Crafting Unforgettable Live Experiences"
      bgImage="/Images/MusicFestivalsConcerts_hero.jpg"
    />

    <IntroSection
      title="What are Music Festivals & Concerts?"
      description={whatIsMusicFestivals}
      imageSrc="/Images/MusicFestivalsConcerts_1.jpg"
      imageAlt="Concert Artist Performing"
    />

    <IntroInfo
      title="Why are Music Festivals & Concerts Important?"
      description={whyMusicImportant}
    />

    <IntroInfo
      title="Key Elements of a Successful Music Festival or Concert"
      description={keyElementsMusicFest}
    />

    <IntroSection
      title="Best Practices for a Memorable Festival or Concert"
      description={bestPracticesMusic}
      imageSrc="/Images/MusicFestivalsConcerts_2.jpg"
      imageAlt="Guitarist Performing on Stage"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default MusicFestivalsConcerts;
