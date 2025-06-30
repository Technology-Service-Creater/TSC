import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/UserGeneratedContent_Hero.jpg';
const introImg = '/Images/UserGeneratedContent-1.jpg';

const importanceUGC = `
<ul>
  <li><b>Authenticity:</b> UGC offers a genuine perspective from real users, helping brands build credibility and trust.</li>
  <li><b>Engagement:</b> It fosters conversations and interactions, cultivating a strong brand community.</li>
  <li><b>Social Proof:</b> Seeing others endorse a product or service through their posts acts as compelling social validation, influencing purchasing decisions.</li>
  <li><b>Diverse Content:</b> UGC enhances brand storytelling by incorporating various perspectives and creative interpretations.</li>
</ul>
`;

const utilizingUGC = `
<ul>
  <li><b>UGC Campaigns:</b> Encourage users to create content related to specific brand themes or challenges to boost engagement.</li>
  <li><b>Branded Hashtags:</b> Create unique hashtags to organize and amplify user content across platforms.</li>
  <li><b>Contests & Giveaways:</b> Inspire participation by offering incentives such as freebies or exclusive rewards.</li>
  <li><b>UGC Curation:</b> Recognize and showcase top user-generated content across brand channels.</li>
  <li><b>Community Building:</b> Foster an environment where users feel empowered to share experiences and stories related to the brand.</li>
  <li><b>Product Feedback & Insights:</b> Utilize UGC to gather valuable input on customer preferences, trends, and potential improvements.</li>
  <li><b>Influencer Collaborations:</b> Partner with influencers who align with brand values to amplify UGC and expand audience reach.</li>
  <li><b>Cross-Channel Integration:</b> Seamlessly incorporate UGC into websites, social media, email marketing, and advertising campaigns for a cohesive brand experience.</li>
</ul>
`;

const influencerTakeaways = `
<ul>
  <li><b>Authenticity First:</b> Encourage the creation of genuine, brand-aligned content.</li>
  <li><b>Engage & Interact:</b> Foster meaningful conversation and acknowledge audience contributions.</li>
  <li><b>Consistency Matters:</b> Maintain a steady presence and engagement strategy to build a loyal following.</li>
  <li><b>Strategic Collaborations:</b> Partner with brands that align with your values for meaningful and profitable relationships.</li>
  <li><b>Measure Impact:</b> Track UGC campaign performance and refine strategies based on insights and data.</li>
</ul>
`;

const UserGeneratedContentUGC = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="User-Generated Content (UGC)"
      description="User-generated content (UGC) refers to content created by users, customers, or fans of a brand, rather than the brand itself. This includes videos, images, reviews, and other content showcasing real experiences with a brand."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="User-Generated Content Platform"
      description="In the evolving digital marketing landscape, UGC has become a powerful tool for brands seeking authentic engagement with their target audience. Leveraging UGC as an influencer can expand reach and enhance credibility. TSC, a leading influencer marketing agency, provides user-generated content platforms for influencers."
      reverse={false}
    />

    {/* Importance of UGC */}
    <IntroInfo title="The Importance of User-Generated Content" description={importanceUGC} />

    {/* Utilizing UGC for Brands */}
    <IntroInfo title="Utilizing UGC for Brands" description={utilizingUGC} />

    {/* Key Takeaways for Influencers */}
    <IntroInfo title="Key Takeaways for Influencers" description={influencerTakeaways} />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default UserGeneratedContentUGC;
