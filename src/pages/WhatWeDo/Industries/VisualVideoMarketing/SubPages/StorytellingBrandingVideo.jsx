import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import IntroInfo from '../../../../../components/common/Introinfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/StorytellingBrandingVideo_Hero.jpg'; // Replace with the correct hero image if available
const introImg = '/Images/StorytellingBrandingVideo-1.jpg'; // Replace with the correct intro image if available

const elements = [
  {
    title: 'Compelling Narrative',
    description:
      'Structure your story with a clear beginning, middle, and end that reflects your brand’s mission. Keep your audience engaged with a relatable and meaningful storyline.',
  },
  {
    title: 'Emotional Connection',
    description:
      'Evoke joy, inspiration, trust, or empathy to leave a lasting impression. Emotionally driven content resonates deeply with viewers.',
  },
  {
    title: 'Authenticity',
    description:
      'Showcase real experiences, customer testimonials, or behind-the-scenes moments. Authentic storytelling builds credibility and enhances trust.',
  },
  {
    title: 'Visual Aesthetics',
    description:
      'Use high-quality visuals, strong cinematography, and brand-aligned design elements. Consistency in style reinforces your brand identity.',
  },
  {
    title: 'Music & Sound',
    description:
      'Choose music and sound effects that match the mood and tone of your video. Audio can intensify emotions and engagement.',
  },
  {
    title: 'Call-to-Action (CTA)',
    description:
      'End with a clear and compelling CTA to guide your audience toward the next step. Examples: Visit our website, Subscribe now, Shop the collection.',
  },
];

const tips = `
<ul class='text-sm pl-5 space-y-1'>
  <li><b>Know Your Audience</b><br/>Define your target audience and tailor the video to their preferences and interests.</li>
  <li><b>Define Your Core Message</b><br/>Keep the message clear, simple, and focused—don't overload with too many details.</li>
  <li><b>Plan with a Storyboard</b><br/>Outline the visual flow and key scenes before shooting to ensure a cohesive narrative.</li>
  <li><b>Use Authentic Characters</b><br/>Feature employees, customers, or brand ambassadors for genuine relatability.</li>
  <li><b>Show, Don't Just Tell</b><br/>Use visual storytelling rather than heavy narration for maximum impact.</li>
  <li><b>Keep It Short & Engaging</b><br/>Attention spans are short—aim for 1-2 minutes to deliver your message effectively.</li>
  <li><b>Edit with Precision</b><br/>Focus on smooth transitions, pacing, color grading, and engaging effects to enhance quality.</li>
  <li><b>Strategic Distribution</b><br/>Share your video across websites, social media, email, and digital ads. Optimize content for each platform's format and audience.</li>
</ul>
`;

const StorytellingBrandingVideo = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Storytelling & Branding Videos"
      description="Take the hassle out of ad management with AI-powered automation—save time, optimize performance, and scale your campaigns effortlessly."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="The Power of Storytelling in Branding"
      description="Storytelling is at the heart of powerful branding. A well-crafted video can evoke emotions, build connections, and reinforce your brand identity—making your message memorable and impactful."
      reverse={false}
    />

    {/* Key Elements of Storytelling & Branding Videos */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-10">
        Key Elements of Storytelling & Branding Videos
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {elements.map((item, idx) => (
          <ServiceCard key={idx} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Tips for Creating Impactful Branding Videos */}
    <IntroInfo title="Tips for Creating Impactful Branding Videos" description={tips} />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default StorytellingBrandingVideo;
