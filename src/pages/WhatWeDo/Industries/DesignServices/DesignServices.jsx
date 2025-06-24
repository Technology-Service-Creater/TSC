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
const industryPath = 'design-services';

const designTrends = [
  {
    title: 'Logo / Redesign and Refresh',
    description:
      "Creating a logo or refreshing an existing one involves designing a visual representation that embodies a brand's identity, values, and mission. It drives brand recognition and differentiation. Design improvements are based on strategy and shifting market trends, while ensuring clarity and versatility. The design can be modified, refined, or adapted to fit various formats for different applications.",
  },
  {
    title: 'Social Media Graphics',
    description:
      "Social media graphics are visual content created specifically for social media platforms. This includes posts, covers, stories, and ads. Key elements include: \n- Brand consistency: Ensuring visual alignment with the brand's messaging.\n- Engaging visuals: Driving interaction and shares.\n- Platform specifications: Adhering to size, format, and platform guidelines for optimal social media performance.",
  },
  {
    title: 'Digital Design',
    description:
      'Digital design encompasses a wide range of visual content made for digital platforms. This includes websites, apps, digital ads, and more. Key aspects: \n- UI/UX design: Creating user-friendly and visually appealing interfaces.\n- Responsive design: Ensuring compatibility across devices.\n- Interactive elements: Incorporating features like hover, clickable, and animated or disableable elements.',
  },
  {
    title: 'Motion Graphics Design',
    description:
      'Motion graphics design involves creating animated visual content that conveys messages or stories. Short videos, explainer animations, and dynamic social posts are common uses. Motion graphics are effective for storytelling, product demos, and brand awareness, using movement and timing to enhance understanding.',
  },
  {
    title: 'Fashion Design',
    description:
      'Fashion design is the art of creating clothing and accessories that reflect trends, culture, and personal style. It involves concept development, fabric selection, pattern making, and garment construction. Fashion designers create collections for runway shows, lookbooks, or digital platforms.',
  },
].map(trend => ({
  ...trend,
  link: `/industries/${industryPath}/${toKebabCase(trend.title)}`,
}));

const DesignServices = () => (
  <div className="bg-[#F5F5F5]">
    <PageHeroSection
      title="Design Services"
      description="Creating visual content to communicate messages effectively includes graphic design, web design and branding, and product packaging, aiming to create visually appealing and functional designs."
      bgImage="/Images/DesignServices_Hero.jpg"
    />

    <IntroSection
      title="Design Services"
      description="Design services play a crucial role in shaping brand identity, enhancing user experience, and creating visually appealing solutions. From graphic design to UI/UX design, businesses leverage design services to communicate effectively and engage their audience."
      imageSrc="/Images/DesignServices-1.jpg"
      reverse={false}
    />

    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Industry Trends and Forecasting
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designTrends.map(trend => (
          <ServiceCard
            key={trend.title}
            title={trend.title}
            description={trend.description}
            link={trend.link}
          />
        ))}
      </div>
    </section>

    <IntroSection
      description="Design services are essential for businesses looking to make a lasting impact. By investing in professional design, companies can elevate their brand, engage customers, and create visually compelling experiences that drive success."
      imageSrc="/Images/DesignServices-2.jpg"
      reverse={true}
    />

    <div className="mt-12">
      <ContactForm />
    </div>
  </div>
);

export default DesignServices;
