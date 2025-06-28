import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/AerialPhotographyVideography_Hero.jpg'; // Replace with the correct hero image if available
const introImg = '/Images/AerialPhotographyVideography-1.jpg'; // Replace with the correct intro image if available

const tips = [
  {
    title: 'Invest in the Right Equipment',
    description:
      'Choose a high-quality drone with 4K resolution, gimbal stabilization, and intelligent flight features for smooth and cinematic shots.',
  },
  {
    title: 'Know the Legal Regulations',
    description:
      'Always check drone regulations in your area. In India, follow DGCA guidelines and secure necessary permits before flying.',
  },
  {
    title: 'Check Weather Conditions',
    description:
      'Plan your shoots during clear skies, golden hours, and low-wind days for stable flights and crisp footage.',
  },
  {
    title: 'Plan Your Flight & Shots',
    description:
      'Pre-plan your flight path, angles, and compositions to make the most of your aerial shots.',
  },
  {
    title: 'Prioritize Safety',
    description:
      '✔ Keep your drone in sight<br/>✔ Avoid crowded areas and restricted zones<br/>✔ Fly within legal altitude limits',
  },
  {
    title: 'Enhance Your Footage in Editing',
    description:
      'Use software like Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve to add color grading, transitions, and music for a professional finish.',
  },
];

const applications = `
<ul class='text-sm pl-5 space-y-1'>
  <li>✔ Real Estate – Showcase properties with stunning aerial views.</li>
  <li>✔ Travel & Tourism – Create breathtaking introductions and attractions.</li>
  <li>✔ Events & Weddings – Provide dynamic, cinematic coverage from the sky.</li>
  <li>✔ Environmental Monitoring – Track wildlife, landscapes, and aid conservation efforts.</li>
  <li>✔ Construction & Infrastructure – Monitor project progress and create promotional content.</li>
</ul>
`;

const AerialPhotographyVideography = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Aerial Photography & Videography"
      description="Take the hassle out of ad management with AI-powered automation—save time, optimize performance, and scale your campaigns effortlessly."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Aerial Photography & Videography"
      description="Capture breathtaking visuals from a bird's-eye view! Whether for real estate, tourism, events, or marketing, aerial photography and videography provide an exciting, unique perspective that elevates your content."
      reverse={false}
    />

    {/* Essential Tips for Successful Aerial Shoots */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-center mb-10">
        Essential Tips for Successful Aerial Shoots
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((item, idx) => (
          <ServiceCard key={idx} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Common Applications of Aerial Photography & Videography */}
    <IntroInfo
      title="Common Applications of Aerial Photography & Videography"
      description={applications}
    />

    {/* Contact Form Section */}
    <ContactForm />
  </div>
);

export default AerialPhotographyVideography;
