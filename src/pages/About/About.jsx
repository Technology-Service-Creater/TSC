import HeroSection from '../../components/common/HeroSection';
import AboutTextSection from './AboutTextSection';
import MeetOurExperts from './MeetOurExperts';
import OurMissionSection from './OurMissionSection';
import OurVisionSection from './OurVisionSection';

const CenterContent = {
  contentHeading: 'About Us',
  contentDescription:
    'We deliver innovative solutions tailored to your needs, combining expertise, technology, and creativity to drive success and growth for your business. ',
  contentImage: '/Images/InnonateBg.png',
};

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
    'Lorem ipsum dolor sit amet consectetur. Dui eget nulla odio tempus risus. Mauris fringilla convallis sit auctor morbi mollis et. ',
};

const experts = [
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
  },
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
  },
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
  },
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
  },
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
  },
  {
    name: 'Mr. Martin bankar',
    position: 'CTO/Developer',
    description: 'Mauris fringilla convallis sit auctor',
    image: '/Images/experts.png',
  },
];
const About = () => (
  <>
    <HeroSection
      contentHeading={CenterContent.contentHeading}
      contentDescription={CenterContent.contentDescription}
      contentImage={CenterContent.contentImage}
    />
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
  </>
);

export default About;
