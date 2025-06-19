import React from 'react';
import PageHeroSection from '../../components/common/PageHeroSection';
import AboutTextSection from './SubComponents/AboutTextSection';
import ExploreOurBusinessSection from './SubComponents/ExploreOurBusinessSection';
import ExploreTSC from './SubComponents/ExploreTSC';
import MeetOurExperts from './SubComponents/MeetOurExperts';
import OurMissionSection from './SubComponents/OurMissionSection';
import OurVisionSection from './SubComponents/OurVisionSection';

const aboutTextContent = {
  heading: 'We are Technology Service Creater',
  description:
    'We deliver innovative and reliable technology solutions, helping businesses thrive in a dynamic digital world. Our expertise ensures seamless integration, efficiency, and growth across various industries',
  image: '/Images/imagewearetsc.png',
};

const ourMissionSection = {
  heading1: 'Chamath announces brand new SPAC to buy a better basketball team.',
  description1:
    'Former Hedgefund worker girlboss. VR headset wearable network effect. Generalist-reading secondary markets buyer. LTV/CAC focused mentally exhausted startup founders.',
  image: '/Images/OurMission.jpg',
  description2:
    'The age-old education model is built on memorization, conformity & indoctrination ',
  description3:
    "We want to build a model that's hands-on, rooted in reality & has a high degree of throughput",
};

const ourVisionSection = {
  heading1: '“Creating a Game Changer Company”',
  image: '/Images/ceoImage.jpg',
  heading2: 'Hear from our CEO',
  subheading2: 'Mr. Sahil Vaidya',
  description2:
    'Lorem ipsum dolor sit amet consectetur. Dui eget nulla odio tempus risus. Mauris fringilla convallis sit auctor ',
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
    <PageHeroSection
      title="About Us"
      description="We deliver innovative solutions tailored to your needs, combining expertise, technology, and creativity to drive success and growth for your business."
      bgImage="/Images/aboutHero.png"
    />
    <div className="bg-[#F5FEFF] px-4 md:px-0">
      <AboutTextSection
        heading={aboutTextContent.heading}
        description={aboutTextContent.description}
        image={aboutTextContent.image}
      />
      <OurMissionSection
        heading1={ourMissionSection.heading1}
        description1={ourMissionSection.description1}
        image={ourMissionSection.image}
        description2={ourMissionSection.description2}
        description3={ourMissionSection.description3}
      />
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
