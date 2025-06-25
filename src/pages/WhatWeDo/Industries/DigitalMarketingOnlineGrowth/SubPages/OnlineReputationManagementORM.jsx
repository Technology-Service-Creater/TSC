import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const featureCards = [
  {
    title: 'Why Does Online Reputation Matter?',
    description:
      'Even the best businesses face challenges when it comes to maintaining a spotless reputation. Negative reviews, misleading articles, and damaging content can impact customer trust and business growth. The good news? You can take charge of your reputation with the right ORM strategies.',
  },
  {
    title: 'What is Online Reputation Management (ORM), and Why Do You Need It?',
    description:
      "Every brand works hard to keep customers happy, but occasional reputation setbacks are inevitable. ORM helps businesses maintain a positive public image, ensuring that one bad review doesn't define your brand.",
  },
  {
    title: 'Building a Strong Personal Brand',
    description:
      "When we think of personal branding, we often picture famous entrepreneurs, influencers, or celebrities. But personal branding isn't just for the rich and famous—it's about shaping how the world sees you or your company.",
  },
  {
    title: 'Why Do Celebrities Need Reputation Management?',
    description:
      "Your reputation is your greatest asset. If you're in the public eye, one misstep, false rumor, or bad press article can damage your personal brand. Our ORM solutions help monitor, protect, and restore your reputation when needed.",
  },
  {
    title: 'Handling & Responding to Negative Reviews',
    description:
      'Customer reviews play a huge role in business success; a well-managed response to a negative review can turn unhappy customers into loyal advocates—while poorly handled criticism can hurt your brand. Learn how to effectively respond and rebuild trust.',
  },
  {
    title: 'Removing Negative News Articles from Google',
    description:
      "Negative press can linger online for years, impacting your brand's credibility and opportunities. Learn how to strategically suppress harmful content and restore your positive online presence.",
  },
  {
    title: 'How to Push Down or Bury Negative Search Results',
    description:
      'Every business has unique challenges when it comes to negative or fake search results. The key is to outrank harmful content with positive, search-engine-optimized strategies that highlight your strengths.',
  },
  {
    title: 'Protect & Strengthen Your Reputation Today!',
    description:
      "Don't let negative press, fake reviews, or outdated content define your brand. Take proactive steps to build and maintain a strong, trustworthy online presence with our expert ORM solutions.",
  },
];

function OnlineReputationManagementORM() {
  return (
    <div className="bg-neutral-100">
      {/* Hero Section */}
      <PageHeroSection
        title="Online Reputation Management"
        description="Discover the power of expert SEO with TSC! Our innovative strategies and proven techniques are designed to enhance your online presence and drive organic traffic."
        bgImage="/Images/OnlineReputationManagement_Hero.jpg"
      />

      {/* Intro Section */}
      <IntroSection
        title={<>Reputation is Everything – Take Control of Yours Today!</>}
        description={
          <>
            Your online reputation can make or break your business. As a top-rated Online Reputation
            Management (ORM) agency, we help protect, enhance, and restore your brand image—so you
            stay ahead of the competition.
          </>
        }
        imageSrc="/Images/OnlineReputationManagement-1.png"
        imageAlt="Professional woman ORM"
      />

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactForm />
    </div>
  );
}

export default OnlineReputationManagementORM;
