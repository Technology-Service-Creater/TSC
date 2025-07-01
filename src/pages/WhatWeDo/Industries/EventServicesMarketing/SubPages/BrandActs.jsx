import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const brandActsWhat = `
Brand Acts go beyond traditional advertising by turning a brand’s values into real, meaningful actions. 
Instead of just talking about purpose, brands demonstrate it through initiatives that positively impact society, culture, and communities.
`;

const brandActsWhy = `
<ul class='text-mb '>
  <li>✔ Builds Authentic Connections – Consumers trust brands that walk the talk.</li>
  <li>✔ Drives Emotional Engagement – Actions leave a lasting impression beyond marketing.</li>
  <li>✔ Boosts Brand Advocacy – Customers and influencers amplify brands with purpose.</li>
  <li>✔ Differentiates from Competitors – Actions stand out more than ads.</li>
  <li>✔ Creates Social & Environmental Impact – A win for the world and the brand.</li>
</ul>
`;

const brandActsTypes = `
<ul class='text-mb '>
  <li> Sustainability Initiatives – Eco-friendly packaging, carbon neutrality, and ethical sourcing.</li>
  <li>✔ Social Responsibility – Supporting local communities, education, and fair wages.</li>
  <li>✔ Cultural Engagement – Celebrating diversity, heritage, and voices.</li>
  <li>✔ Empowerment & Inclusion – Breaking barriers and enabling access for all.</li>
  <li>✔ Tech for Good – AI-driven accessibility, digital literacy programs, and innovation for social change.</li>
</ul>
`;

const howToCreateImpactful = `
<ul class='text-base'> '>
  <li>✔ Stay True to Your Values – Align actions with the brand’s core mission.</li>
  <li>✔ Be Consistent and Transparent – Show long-term vision, not just one-offs.</li>
  <li>✔ Involve Your Audience – Let customers co-create with the brand.</li>
  <li>✔ Partner with the Right Makers – Collaborate with NGOs, experts, and creators.</li>
  <li>✔ Measure & Share Results – Track the impact and communicate it authentically.</li>
</ul>
`;

const BrandActs = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Brand Acts"
      description="Creating Meaningful Impact Beyond Marketing"
      bgImage="/Images/BrandActs_hero.jpg"
    />

    {/* What Are Brand Acts? */}
    <IntroSection
      title="What Are Brand Acts?"
      description={brandActsWhat}
      imageSrc="/Images/BrandActs_1.jpg"
      imageAlt="What Are Brand Acts"
    />

    {/* Why Do Brand Acts Matter? */}
    <IntroInfo title="Why Do Brand Acts Matter?" description={brandActsWhy} />

    {/* Types of Brand Acts */}
    <IntroInfo title="Types of Brand Acts" description={brandActsTypes} />

    {/* How to Create Impactful Brand Acts */}
    <IntroSection
      title="How to Create Impactful Brand Acts"
      description={howToCreateImpactful}
      imageSrc="/Images/BrandActs_2.jpg"
      imageAlt="Create Impactful Brand Acts"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default BrandActs;
