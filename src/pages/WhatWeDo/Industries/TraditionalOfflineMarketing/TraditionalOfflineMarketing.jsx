import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const heroImg = '/Images/TraditionalOfflineMarketing_Hero.jpg';
const introImg = '/Images/TraditionalOfflineMarketing-1.jpg';
const businessImg = '/Images/TraditionalOfflineMarketing-2.jpg';

// Array of objects for ServiceCard content
const services = [
  {
    title: 'Print Advertising',
    description:
      'Print advertising includes ads that are physically printed on media such as newspapers, magazines, brochures, or flyers. This form of advertising is effective for reaching specific target audiences, especially in local markets. The physical nature of print ads allows for tangible engagement with the audience.',
  },
  {
    title: 'Out-of-Home (OOH) Advertising',
    description:
      'OOH advertising refers to any advertising that reaches consumers while they are outside their home. This includes billboards, transit ads, digital screens, and other venues in high-traffic areas. OOH advertising captures the attention of people on the go and can be strategically placed to maximize visibility.',
  },
  {
    title: 'Direct Mail Campaigns',
    description:
      'Direct mail involves sending physical mail to potential customers. This can include catalogs, postcards, or promotional letters. Direct mail campaigns are personalized and can be highly targeted, making them effective for reaching specific demographics with tailored messages.',
  },
  {
    title: 'Retail & In-Store Marketing',
    description:
      'Retail marketing focuses on promoting products and engaging customers directly in physical stores. This includes product displays, in-store promotions, signage, and interactive experiences. In-store marketing aims to enhance the shopping experience and influence purchasing decisions at the point of sale.',
  },
  {
    title: 'Product Packaging & Design',
    description:
      "Product packaging is not just about protecting the product; it's also a powerful marketing tool. Effective packaging design attracts attention, conveys brand identity, and provides essential information. The design, colors, and materials used in packaging can significantly impact consumer perception and purchase decisions.",
  },
];

// Array of objects for IntroSection content (for contact section)

const TraditionalOfflineMarketing = () => (
  <div className="bg-[#F7FAFF]">
    {/* Hero Section */}
    <PageHeroSection
      title="Traditional & Offline Marketing"
      description="Traditional and offline marketing uses non-digital channels like print, TV, radio, direct mail, and events."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Traditional & Offline Marketing"
      description={
        'Despite the digital revolution, traditional and offline marketing remain vital for businesses to build brand awareness, reach diverse demographics, and establish trust. A well-executed Traditional & Offline Marketing strategy ensures a balanced approach by integrating conventional marketing techniques with modern innovations to maximize impact.'
      }
      imageAlt="Traditional & Offline Marketing"
      reverse={false}
    />

    {/* Services Section */}
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section with IntroSection using map */}
    <IntroSection
      description={
        'A strategic approach to Traditional & Offline Marketing enables businesses to maintain a strong market presence by leveraging tried-and-tested offline techniques. By integrating traditional methods with modern digital innovations, companies can create comprehensive marketing campaigns that drive brand loyalty, engagement, and business growth.'
      }
      imageSrc={businessImg}
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default TraditionalOfflineMarketing;
