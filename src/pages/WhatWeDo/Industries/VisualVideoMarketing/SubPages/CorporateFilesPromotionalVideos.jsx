import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';
import IntroInfo from '../../../../../components/common/Introinfo';

const heroImg = '/Images/CorporateFilmsPromotionalVideos_Hero.jpg'; // Replace with the correct hero image if available
const introImg1 = '/Images/CorporateFilmsPromotionalVideos-1.jpg'; // Replace with the correct intro image if available
const introImg2 = '/Images/CorporateFilmsPromotionalVideos-2.jpg'; // Replace with the correct intro image if available

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

const CorporateFilesPromotionalVideos = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Corporate Films & Promotional Videos"
      description="Take the hassle out of ad management with AI-powered automation—save time, optimize performance, and scale your campaigns effortlessly."
      bgImage={heroImg}
    />

    {/* Intro Section 1 */}
    <IntroSection
      imageSrc={introImg1}
      title="Transform Your Brand with High-Impact Corporate Videos"
      description="Captivate audiences, build trust, and drive business success with cinematic corporate video production for both B2B & B2C companies."
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

    {/* Types of Corporate Videos We Create */}
    <IntroInfo
      title="Types of Corporate Videos We Create"
      description={`<ul class='text-sm pl-5 space-y-1'>
        <li>✔ Company Profile Videos – Showcase your brand&apos;s mission, values, and achievements.</li>
        <li>✔ Product & Service Demonstrations – Highlight key features and benefits in action.</li>
        <li>✔ Staff & Testimonial Videos – Build credibility with real stories and client testimonials.</li>
        <li>✔ Training & Educational Videos – Educate audiences with clear and effective step-by-step guides.</li>
        <li>✔ Event Coverage – Capture the excitement of launches, conferences, and special occasions.</li>
        <li>✔ Internal Communications – Keep employees informed and inspired with updates and company news.</li>
        <li>✔ Social Responsibility Videos – Share your initiatives, values, and community impact.</li>
        <li>✔ Explainer Videos – Simplify complex ideas with engaging visuals and storytelling.</li>
      </ul>`}
    />

    {/* How We Work – Your Video Production Journey */}
    <IntroInfo
      title="How We Work – Your Video Production Journey"
      description={`<ol class='text-sm list-decimal pl-5 space-y-1'>
        <li>Book a Call – Tell us about your business, goals, and video needs.</li>
        <li>Creative Presentation – See our vision come to life with concept ideas and visual direction.</li>
        <li>Project Kick-Off – We handle pre-production, direction, and post.</li>
        <li>Magic on Screen – Watch your video project unfold, start-to-finish.</li>
      </ol>`}
    />

    {/* Why Choose Us? */}
    <IntroSection
      imageSrc={introImg2}
      title="Why Choose Us?"
      description={
        <ul className="text-lg">
          <li>
            ✔ Clear & Creative Storytelling – We craft compelling narratives that make your brand
            shine.
          </li>
          <li>
            ✔ Maximized Reach & Influence – Custom-tailored videos for your audience and platforms.
          </li>
          <li>
            ✔ Full-Service Production – End-to-end service, fully managed process from concept to
            delivery.
          </li>
        </ul>
      }
      reverse={true}
    />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default CorporateFilesPromotionalVideos;
