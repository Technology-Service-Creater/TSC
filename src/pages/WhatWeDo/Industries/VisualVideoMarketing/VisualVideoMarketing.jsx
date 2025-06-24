import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const toKebabCase = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/(^-|-$)/g, '');
const industryPath = 'visual-video-marketing';

const VisualVideoMarketing = () => {
  const services = [
    {
      title: 'Corporate Films & Promotional Videos',
      description:
        "Corporate films and promotional videos are professional videos produced to showcase a company's brand, products, or services. They are used for marketing, training, and internal communications, helping to convey a company's message effectively and memorably.",
    },
    {
      title: 'Aerial Photography & Videography',
      description:
        'Aerial photography and videography involves capturing images and videos from an elevated perspective. This unique and innovative technique is used to create stunning visuals for real estate, events, and promotional materials, offering captivating views that ground-level photography cannot achieve.',
    },
    {
      title: 'Digital Experience & Branding',
      description:
        "Digital experience and branding focus on creating cohesive and engaging online experiences that reflect a company's brand identity through website design, user interface (UI) and user experience (UX) design, and multimedia content that enhances the overall perception of the brand in the digital space.",
    },
    {
      title: 'Graphics & Creative Design',
      description:
        "Graphics and creative design involve creating visually appealing and effective designs for marketing materials, branding elements, social media posts, and advertisements. Skilled graphic designers combine typography, imagery, and layout to communicate a brand's message and capture the audience's attention.",
    },
    {
      title: 'Storytelling & Branding Videos',
      description:
        "Storytelling and branding videos use narrative techniques to convey a brand's story, values, and mission, creating an emotional connection with the audience, making the brand more relatable and memorable. Effective storytelling helps differentiate a brand and fosters customer loyalty.",
    },
  ].map(service => ({
    ...service,
    link: `/industries/${industryPath}/${toKebabCase(service.title)}`,
  }));

  return (
    <div className="min-h-screen">
      <PageHeroSection
        title="Visual & Video Marketing"
        description="Creating impactful visual and video marketing strategies that engage audiences and enhance brand visibility"
        bgImage="/Images/VisualVideoMarketing_hero.jpg"
      />

      <IntroSection
        title="Visual & Video Marketing"
        description="Visual and video marketing have become essential tools for capturing audience attention, driving engagement, and enhancing brand storytelling. With the rise of social media and short-form content, businesses must leverage compelling visuals to win the content race. Our expert team's structured Visual & Video Marketing strategy ensures higher audience retention, increased conversions, and stronger emotional connections with consumers."
        imageSrc="/Images/VisualVideoMarketing-1.png"
        imageAlt="Visual & Video Marketing Overview"
      />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </section>

      <IntroSection
        title="Strategic Approach"
        description="A strategic approach to Visual & Video Marketing allows businesses to create compelling content that captures attention and drives action. By leveraging high-quality visuals, engaging stories, and clear-driven objectives, companies can enhance brand storytelling and achieve long-term marketing success."
        imageSrc="/Images/VisualVideoMarketing-2.png"
        imageAlt="Strategic Visual & Video Marketing"
        reverse={true}
      />

      <ContactForm />
    </div>
  );
};

export default VisualVideoMarketing;
