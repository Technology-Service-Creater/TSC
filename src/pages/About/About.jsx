import WhatIsTSCSection from './SubComponents/WhatIsTSCSection';
import MissionVisionSection from './SubComponents/MissionVisionSection';
import ExploreTSC from './SubComponents/ExploreTSC';
import TeamSection from './SubComponents/TeamSection';
import OurCompaniesSection from './SubComponents/OurCompaniesSection';
import WhyTSCDifferentSection from './SubComponents/WhyTSCDifferentSection';
import TechnologyWorldCreaterSection from './SubComponents/TechnologyWorldCreaterSection';
import NewsSection from './SubComponents/NewsSection';
import OurVisionSection from './SubComponents/OurVisionSection';

const ourVisionSection = {
  heading1: 'Empowering\nInnovations,\nBeyond Limits!',
  image: '/Images/ceoImage.jpg',
  heading2: 'Hear From Our Founder & CEO',
  subheading2: 'Mr. Sahil R. Vaidya',
  description2:
    "At Technology Service Creater, we don't just deliver services — we create intelligent\nsolutions that drive impact. Our team is united by innovation, purpose, and the belief\nthat technology should empower every step of progress.\n--A division of TWC",
};

const teamMembers = {
  'Board Of Director': [
    {
      name: 'Sahil Vaidya',
      title: 'Founder & CEO',
      image: '/Images/ceoImage.jpg',
      linkedin: 'https://www.linkedin.com/in/sahil-vaidya-7b2565228/',
    },
    { name: 'Bharat Wanjari', title: 'Director &', image: '/Images/Bharat.png' },
    {
      name: 'Ramchandra Vaidya',
      title: 'Director & CFO',
      image: '/Images/Ramachandra.png',
    },
    {
      name: 'Sharda Vaidya',
      title: 'Managing Director & CMO',
      image: '/Images/Sharda.png',
    },
  ],
  'Team Member': [
    {
      name: 'Rajat Jithakate',
      title: 'TSC Member',
      image: '/Images/Rajat.png',
    },
    {
      name: 'Harsh Shambhuwani',
      title: 'TSC Member',
      image: '/Images/photo.png',
    },
    {
      name: 'Pranjal Kuhikar',
      title: 'TSC Member',
      image: '/Images/pranjal.png',
    },
    {
      name: 'Utkarsh Deshmukh',
      title: 'TSC Member',
      image: '/Images/utkarsh.png',
    },
  ],
};

const exploreContent = [
  { heading: 'Explore career', link: '/career' },
  { heading: 'Explore Services', link: '/services' },
  { heading: 'Explore Events', link: '/events' },
  { heading: 'Explore Blogs', link: '/blogs' },
];
const mission = {
  heading:
    'To empower businesses and individuals with next-generation technology services that are scalable, reliable, and future-ready.',
  image: '/Images/OurMission.jpg',
  bullets: [
    'We aim to bridge the digital divide by delivering affordable IT solutions, cloud systems, AI-driven platforms, and end-to-end digital transformation services.',
    'Our solutions help organizations unlock growth and innovation while improving efficiency and customer experience.',
  ],
};

const vision = {
  heading:
    'To become a global leader in technology services, driving the digital economy through innovation, talent, and customer-centric solutions that seamlessly adopt cutting-edge technologies.',
  image: '/Images/AIDrivenMarketAnalytics-2.png',
  bullets: [
    'We envision TSC as a trusted innovation partner that empowers individuals, businesses, governments, and communities to build a smarter, connected, and sustainable future.',
    'We will continuously push boundaries while staying grounded in real-world impact and inclusivity.',
  ],
};

const companyData = [
  {
    tab: 'Technology Agriculture Creater',
    heading: 'Empowering Agriculture, Beyond Limits',
    description:
      "At TAC, Born from a deep understanding of the challenges in traditional farming ecosystems, we've built a digital marketplace where transparency, fairness, and efficiency thrive.",
    image: '/Images/TAC.png',
    contentImage: '/Images/TACC.png',
    buttonText: 'Explore',
    buttonLink: 'https://technologyagriculturecreater.com/',
  },
  {
    tab: 'Technology Education Creater',
    heading: 'Empowering Education, Beyond Limits',
    description:
      "Technology Education Creater is revolutionizing learning with the world's first global education framework built on the Analytics-Driven AI model that focuses on personalized understanding, critical thinking, and real-world application",
    image: '/Images/TEC.png',
    contentImage: '/Images/TECC.png',
    buttonText: 'Explore',
    buttonLink: '#',
  },
  {
    tab: 'Technology Property Creater',
    heading: 'Revolutionizing Real Estate Through Digital Property Tech',
    description:
      'Technology Property Creater is transforming the property landscape with smart, secure, and scalable digital solutions. From property listing and virtual site visits to digital documentation and blockchain- based land records.',
    image: '/Images/TPC.png',
    contentImage: '/Images/TPCC.png',
    buttonText: 'Explore',
    buttonLink: '#',
  },
  {
    tab: 'Technology Skill Creater',
    heading: 'Empowering Skills, Beyond Limits..',
    description:
      'Technology Skill Creater is dedicated to bridging the skill gap by offering protocol, industry-aligned training in emerging technologies. TSC helps individuals and professionals gain hands-on experience and certifications to thrive in the digital economy.',
    image: '/Images/TSC1.png',
    contentImage: '/Images/TSCC.png',
    buttonText: 'Explore',
    buttonLink: '#',
  },
];

const About = () => (
  <>
    <WhatIsTSCSection bgImage="/Images/aboutHero.png" />
    <div className="bg-[#F5FEFF] px-4 md:px-0">
      <MissionVisionSection mission={mission} vision={vision} />
      <OurVisionSection
        heading1={ourVisionSection.heading1}
        image={ourVisionSection.image}
        heading2={ourVisionSection.heading2}
        subheading2={ourVisionSection.subheading2}
        description2={ourVisionSection.description2}
      />
      <TeamSection teamMembers={teamMembers} />
      <OurCompaniesSection companyData={companyData} />
      <WhyTSCDifferentSection />
      <TechnologyWorldCreaterSection />
      <NewsSection />
      <ExploreTSC headings={exploreContent} />
    </div>
  </>
);

export default About;
