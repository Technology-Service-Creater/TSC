import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import TwoListItemCard from '../../../../../components/common/TwoListItemCard';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const sections = [
  {
    title: 'Strategic Planning & Targeting',
    points: [
      {
        title: '✔ Align Email Marketing with Your Goals',
        description:
          'How effective is your email marketing in achieving your business objectives? We take a data-driven approach, analyzing past campaigns, identifying missed opportunities, and refining strategies to meet your unique goals.',
      },
      {
        title: '✔ Audience Targeting & Segmentation',
        description:
          'We evaluate your ideal customer profiles, ensuring your emails reach the right people with personalized, relevant content that fosters stronger connections and higher engagement.',
      },
    ],
  },
  {
    title: 'Flawless Campaign Execution',
    points: [
      {
        title: '✔ Custom Email Design & Deployment',
        description:
          'Our expert designers craft visually stunning, high-converting emails tailored to your specifications. Whether it’s a newsletter, promotional campaign, or automation sequence, we ensure every email is on-brand and optimized for engagement.',
      },
      {
        title: '✔ Hassle-Free Scheduling & Sending',
        description:
          'We manage the entire process—from design to deployment—so you can sit back and watch your audience engage.',
      },
    ],
  },
  {
    title: 'Seamless Brand Integration',
    points: [
      {
        title: 'Brand Consistency & Asset Coordination',
        description:
          'Consistency builds trust. We adhere to your brand guidelines, ensuring that every email aligns with your tone, visuals, and messaging. Plus, we create a content calendar so you always know what’s coming next.',
      },
    ],
  },
];

const services = [
  {
    title: 'Ongoing List Maintenance',
    description: [
      'A healthy email list is key to success. We regularly clean, segment, and optimize your list to ensure you’re reaching engaged subscribers while removing inactive ones—keeping your deliverability high and bounce rates low.',
    ],
  },
  {
    title: 'Performance Tracking & Reporting',
    description: [
      'We provide detailed monthly reports breaking down key metrics like open rates, click-through rates, and conversions. Regular check-ins ensure we refine strategies based on real-time performance.',
    ],
  },
  {
    title: 'Continuous Optimization for Maximum Impact',
    description: [
      'We go beyond sending emails—we analyze, test, and refine your campaigns for peak performance. Whether it’s A/B testing subject lines, adjusting send times, or tweaking content, we ensure your emails deliver the best results.',
    ],
  },
];

function EmailMarketing() {
  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Email Marketing"
        description="Discover the power of expert email strategies with TSC! Our innovative methods are designed to drive engagement and boost ROI."
        bgImage="/Images/EmailMarketing_hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        IntroSectionImage="/Images/EmailMarketing_1.jpg"
        IntroSectionTitle="Email Marketing Management"
        description="Email marketing is one of the most effective ways to connect with your audience, nurture leads, and drive conversions. Our expert team creates targeted, data-driven campaigns that enhance engagement, build brand loyalty, and maximize ROI. From strategy and design to deployment and optimization, we handle it all—so you get the best results with minimal effort."
      />

      {/* Services Cards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((service, index) => (
              <TwoListItemCard key={index} title={service.title} points={service.points} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-black font-poppins font-bold text-[32px] leading-[48px] tracking-[-0.64px] underline decoration-[0.5px] underline-offset-2">
          Advanced List Management & Optimization
        </h2>
      </div>

      {/* Service Cards Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                subtitle={service.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}

export default EmailMarketing;
