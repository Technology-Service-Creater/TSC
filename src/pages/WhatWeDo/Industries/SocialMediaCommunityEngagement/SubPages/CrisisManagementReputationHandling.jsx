import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';
import IntroInfo from '../../../../../components/common/Introinfo';

const heroImg = '/Images/CrisisManagementReputationHandling_Hero.jpg';
const introImg = '/Images/CrisisManagementReputationHandling-1.jpg';
const integrationImg = '/Images/CrisisManagementReputationHandling-2.jpg';

const services = [
  {
    title: 'Crisis Management',
    description:
      'Prevention is ideal, but unforeseen crises can occur. We provide structured crisis response solutions, including: <br/>✔ Crisis Response Planning – Developing comprehensive action plans.<br/>✔ Stakeholder Assessment – Evaluating the impact on key parties.<br/>✔ Crisis Communication – Managing effective messaging strategies.<br/>✔ Training & Preparedness – Equipping teams with crisis response skills.',
  },
  {
    title: 'Reputation Management',
    description:
      'A strong crisis prevention strategy protects and enhances brand reputation. We help businesses manage crises effectively through: <br/>✔ Brand Monitoring – Tracking perception and customer sentiment.<br/>✔ Proactive Communication – Crafting strategies for all scenarios.<br/>✔ Public Relations – Rebuilding trust following a crisis.<br/>✔ Crisis Recovery – Mitigating long-term reputation damage.',
  },
  {
    title: 'Crisis Prevention and Preparedness Strategy',
    description:
      'A proactive approach is key to crisis management.<br/>✔ Crisis Prevention System – Designing and implementing risk management frameworks.<br/>✔ Risk Scenario Planning – Developing risk-based response plans.<br/>✔ Crisis Communication – Ensuring timely, clear, and consistent communication.<br/>✔ Stakeholder Engagement – Raising responses and optimizing communication.',
  },
];

const CrisisManagementReputationHandling = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Crisis Management & Reputation Handling"
      description="Enhancing the Shopping Experience"
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Crisis Management & Reputation Handling"
      description="Effectively managing crises and maintaining a strong reputation are essential for any business. How an organization handles challenges can shape public perception and long-term success."
      reverse={false}
    />

    {/* Management Explanation Section (now using IntroInfo) */}
    <IntroInfo
      title="Crisis and Reputation Management"
      description={`Crisis and reputation management is a twofold process by which an organization navigates major events that could harm the business, its stakeholders, or the general public. The way an organization and its leadership respond to a crisis directly impacts public perception and, ultimately, its reputation.<br /><br />
The outcome of a crisis depends on how professionally and strategically it is handled. Proper management can mitigate negative effects and, in some cases, even strengthen a company&apos;s reputation. Effective crisis and reputation management emphasize prevention as a core strategy. TSC can assist your company in building a crisis preparedness plan, ensuring clear guidance for personnel on managing and preventing crises effectively.`}
    />

    {/* Services Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-8">
        Crisis and Reputation Management Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, idx) => (
          <ServiceCard key={idx} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Integration Section */}
    <IntroSection
      imageSrc={integrationImg}
      title="Proactive Integration for Resilience"
      description="By proactively integrating crisis and reputation management strategies, businesses can safeguard their brand, maintain customer trust, and emerge stronger from challenges. Let TSC help you stay prepared and resilient in an unpredictable business landscape."
      reverse={true}
    />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default CrisisManagementReputationHandling;
