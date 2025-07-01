import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const weddingWhat = `
A wedding is more than just an event—it’s a beautifully orchestrated experience that celebrates love, commitment, and new beginnings. From the grand décor to the smallest personal touches, every detail should reflect the couple’s unique story, creating memories that last a lifetime.
`;

const weddingWhy = `
<ul class='text-mb'>
  <li>✔ Creates Lasting Memories – Every detail contributes to a once-in-a-lifetime experience.</li>
  <li>✔ Reflects Personal Style – A well-designed wedding showcases the couple’s unique personality.</li>
  <li>✔ Enhances Guest Experience – A seamless celebration ensures joy for all attendees.</li>
  <li>✔ Ensures Stress-Free Planning – Thoughtful coordination allows couples to enjoy their big day.</li>
  <li>✔ Brings Dreams to Life – From intimate ceremonies to lavish affairs, every vision is possible.</li>
</ul>
`;

const weddingElements = `
<ul class='text-mb'>
  <li>✔ Elegant Venue Selection – From beachside destinations to grand ballrooms.</li>
  <li>✔ Personalized Décor & Styling – Custom themes, floral arrangements, and lighting design.</li>
  <li>✔ Seamless Guest Experience – Smooth check-ins, thoughtful amenities, and special touches.</li>
  <li>✔ Curated Culinary Delights – Menus that reflect taste, culture, and celebration.</li>
  <li>✔ Memorable Entertainment – Music, live performances, and experiences to cherish the moment.</li>
  <li>✔ Thoughtful Favors & Keepsakes – Unique giveaways that express their love.</li>
</ul>
`;

const weddingBestPractices = `
<ul class='text-base'>
  <li>✔ Start with a Vision – Define the theme, color palette, and overall vibe.</li>
  <li>✔ Prioritize Guest Comfort – Smooth logistics and thoughtful details create a welcoming atmosphere.</li>
  <li>✔ Personalize the Experience – Add personal vows, cultural traditions, or unexpected touches.</li>
  <li>✔ Use Digital Innovation – Wedding websites, e-invites, and social sharing keep everyone aligned.</li>
  <li>✔ Partner with Experts – Work with reliable vendors to ensure a flawless execution.</li>
</ul>
`;

const Weddings = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Weddings"
      description="Crafting Unforgettable Moments with Elegance & Emotion"
      bgImage="/Images/Weddings_hero.jpg"
    />

    {/* What Makes a Wedding Truly Special? */}
    <IntroSection
      title="What Makes a Wedding Truly Special?"
      description={weddingWhat}
      imageSrc="/Images/Weddings_1.jpg"
      imageAlt="Wedding ceremony moment"
    />

    {/* Why Thoughtful Wedding Planning Matters? */}
    <IntroInfo title="Why Thoughtful Wedding Planning Matters?" description={weddingWhy} />

    {/* Key Elements of a Perfect Wedding */}
    <IntroInfo title="Key Elements of a Perfect Wedding" description={weddingElements} />

    {/* Best Practices for a Magical Wedding */}
    <IntroSection
      title="Best Practices for a Magical Wedding"
      description={weddingBestPractices}
      imageSrc="/Images/Weddings_2.jpg"
      imageAlt="Wedding rings and floral setup"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default Weddings;
