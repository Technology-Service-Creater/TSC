import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const featureCards = [
  {
    title: 'Streamline Your ASO Process for Maximum Impact',
    listItems: [
      '✔️ Automate Repetitive Tasks & Reduce Errors',
      'Let automation handle time-consuming ASO processes, so you can focus on strategic growth and ROI-driven initiatives.',
      '✔️ Optimize & Localize Listings with Ease',
      'Update and manage your app store metadata across multiple regions in seconds, ensuring consistency and global competitiveness.',
    ],
  },
  {
    title: 'Smart ASO Management Tools',
    listItems: [
      '✔️ Store Listing Editor',
      'Edit app titles, descriptions, and keywords across multiple localizations—all in one dashboard.',
      'Gain competitive insight with trackers: keywords and competitor analysis.',
      '✔️ Bulk Localization Updates',
      'Update multiple localizations instantly with Bulk Editor or CSV upload.',
      'Ensure your app is always optimized for global reach with minimal effort.',
    ],
  },
  {
    title: 'Boost Efficiency with AI-Driven ASO Automation',
    listItems: [
      '✔️ AI Keyword Recommendations',
      'Identify high-impact keywords for your app across 100+ countries.',
      'Get data-driven keyword insights to improve visibility and downloads.',
      '✔️ AI-Powered Review Responses',
      'Automate review replies with AI-generated, multilingual replies. Ensure quick, high-quality responses while reducing errors and saving valuable time.',
    ],
  },
];

function AppStoreOptimizationASO() {
  return (
    <div className="bg-neutral-100">
      {/* Hero Section */}
      <PageHeroSection
        title="App Store Optimization"
        description="Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic."
        bgImage="/Images/AppStoreOptimization_Hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        title="Effortless ASO Workflows for Faster App Growth"
        description={
          <>
            Say goodbye to manual ASO tasks and hello to seamless automation! Optimize app store
            listings, localize content effortlessly, and manage your entire ASO strategy across
            multiple stores—all from one powerful, time-saving platform designed to boost downloads
            and improve rankings.
          </>
        }
        imageSrc="/Images/AppStoreOptimization-2.jpg"
        imageAlt="Team working on ASO"
      />

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} listItems={card.listItems} />
          ))}
        </div>
      </section>

      {/* AI-Driven Section */}
      <IntroSection
        reverse
        title={
          <>
            <span className="text-black">
              Save Time, Optimize Faster & Scale Smarter with{' '}
              <span className="font-bold">AI-Driven ASO!</span>
            </span>
          </>
        }
        description={
          <>
            Take control of your ASO workflow with automation, AI-powered insights, and streamlined
            updates—so you can grow your app without the hassle.
          </>
        }
        imageSrc="/Images/AIAutomationMarketing-1.jpg"
        imageAlt="AI Automation for ASO"
      />

      {/* Contact Us Section */}
      <ContactForm />
    </div>
  );
}

export default AppStoreOptimizationASO;
