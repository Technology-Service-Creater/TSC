import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/AutomatedAdCampaigns_Hero.jpg'; // Replace with the correct hero image if available
const introImg1 = '/Images/AutomatedAdCampaigns-1.jpg'; // Replace with the correct intro image if available
const introImg2 = '/Images/AutomatedAdCampaigns-2.jpg'; // Replace with the correct intro image if available

const features = [
  {
    title: 'Unified Ad & Social Strategy',
    description: `✔ Manage paid and organic campaigns from one platform.<br/>✔ Use organic content as a testing ground before boosting reach with ads.`,
  },
  {
    title: 'Save Time with Smart Automation',
    description: `✔ Intuitive interface lets you set up ads in seconds.<br/>✔ Smart Labels enable one-click ad creation and automation.`,
  },
  {
    title: 'Seamless Team Collaboration',
    description: `✔ Assign user roles for efficient teamwork and brand consistency.<br/>✔ Streamline ad creation across multiple markets and channels.`,
  },
];

const AutomatedAdCampaigns = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Automated Ad Campaigns"
      description="Take the hassle out of ad management with AI-powered automation—save time, optimize performance, and scale your campaigns effortlessly."
      bgImage={heroImg}
    />

    {/* Intro Section 1 */}
    <IntroSection
      imageSrc={introImg1}
      title="Automated Ad Campaigns: Smarter, Faster, and More Effective"
      description="Effortlessly create, manage, and optimize ads across multiple platforms with AI-powered automation. Save time, boost efficiency, and maximize your reach—all from one unified dashboard."
      reverse={false}
    />

    {/* Why Choose Automated Ad Campaigns? */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-10">
        Why Choose Automated Ad Campaigns?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <ServiceCard key={idx} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Powerful Features Section */}
    <IntroSection
      imageSrc={introImg2}
      title="Powerful Features at Your Fingertips"
      description={
        <ul className="text-sm">
          <li>
            ✔ Cross-Channel Advertising – Run ads on Facebook, Instagram, Messenger, WhatsApp &
            more.
          </li>
          <li>✔ Smart Campaign Planner – Automate targeting and objectives with Smart Labels.</li>
          <li>✔ Custom Audiences – Upload CRM data for highly targeted, personalized ads.</li>
          <li>
            ✔ A/B Testing Made Easy – Quickly test multiple ad variations with new creatives.
          </li>
          <li>✔ Automated UTM Tracking – Add URL parameters without manual effort.</li>
          <li>✔ Real-Time Insights – Optimize campaigns with 100+ paid metrics.</li>
          <li>✔ Custom Ad Durations – Run multiple ad sets with different timeframes.</li>
        </ul>
      }
      reverse={true}
    />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default AutomatedAdCampaigns;
