import React from 'react';
import WhatIsTSCSection from './SubComponents/WhatIsTSCSection';
import MissionVisionSection from './SubComponents/MissionVisionSection';
import ExploreOurBusinessSection from './SubComponents/ExploreOurBusinessSection';
import ExploreTSC from './SubComponents/ExploreTSC';
import MeetOurExperts from './SubComponents/MeetOurExperts';
import OurVisionSection from './SubComponents/OurVisionSection';

const ourVisionSection = {
  heading1: 'Empowering\nInnovations,\nBeyond Limits!',
  image: '/Images/ceoImage.jpg',
  heading2: 'Hear From Our Founder & CEO',
  subheading2: 'Mr. Sahil R. Vaidya',
  description2:
    "At Technology Service Creater, we don't just deliver services — we create intelligent\nsolutions that drive impact. Our team is united by innovation, purpose, and the belief\nthat technology should empower every step of progress.\n--A division of TWC",
};

const experts = [
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
    linkedinUrl: '/abc',
  },
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
    linkedinUrl: '/abc',
  },
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
    linkedinUrl: '/abc',
  },
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
    linkedinUrl: '/abc',
  },
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
    linkedinUrl: '/abc',
  },
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
    linkedinUrl: '/abc',
  },
];

const businessBranchesInfo = [
  {
    heading: 'Technology Education Creater',
    description:
      'Empowers learners with innovative, tech-driven educational solutions. We bridge the gap between education and industry through interactive platforms and skill-based training, fostering continuous growth in the evolving tech landscape. ',
    image: '/Images/TEC Logo.png',
    link: '/abc',
  },
  {
    heading: 'Technology Agriculture Creater',
    description:
      'Empowers learners with innovative, tech-driven educational solutions. We bridge the gap between education and industry through interactive platforms and skill-based training, fostering continuous growth in the evolving tech landscape. ',
    image: '/Images/TACLogo.png',
    link: '/abc',
  },
  {
    heading: 'Technology Property Creater',
    description:
      'Empowers learners with innovative, tech-driven educational solutions. We bridge the gap between education and industry through interactive platforms and skill-based training, fostering continuous growth in the evolving tech landscape. ',
    image: '/Images/TPCLogo.png',
    link: '/abc',
  },
  {
    heading: 'Technology Skills Creater',
    description:
      'Empowers learners with innovative, tech-driven educational solutions. We bridge the gap between education and industry through interactive platforms and skill-based training, fostering continuous growth in the evolving tech landscape. ',
    image: '/Images/TSCLogo.png',
    link: '/abc',
  },
];

const exploreContent = [
  { heading: 'Explore career', link: '/career' },
  { heading: 'Explore Services', link: '/services' },
  { heading: 'Explore Events', link: '/events' },
  { heading: 'Explore Blogs', link: '/blogs' },
];

const About = () => (
  <>
    <WhatIsTSCSection bgImage="/Images/aboutHero.png" />
    <div className="bg-[#F5FEFF] px-4 md:px-0">
      <MissionVisionSection />
      <OurVisionSection
        heading1={ourVisionSection.heading1}
        image={ourVisionSection.image}
        heading2={ourVisionSection.heading2}
        subheading2={ourVisionSection.subheading2}
        description2={ourVisionSection.description2}
      />
      <MeetOurExperts mapList={experts} />
      <ExploreOurBusinessSection mapInfo={businessBranchesInfo} />
      <ExploreTSC headings={exploreContent} />
    </div>
  </>
);

export default About;
