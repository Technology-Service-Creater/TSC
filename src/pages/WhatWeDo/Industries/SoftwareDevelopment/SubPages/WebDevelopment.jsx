import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/WebDevelopment_Hero.jpg'; // Replace with your actual image
const introImg = '/Images/WebDevelopment-1.jpg'; // Replace with your actual image
const completedProjectsImg = '/Images/WebDevelopment-2.jpg'; // Replace with your actual image

const servicesOverview = `
<ul>
  <li>We are a one-stop solution for all web design and development needs. Our customized, cost-effective services ensure that every website we create meets our clients' unique requirements. Choose the best plan to build a responsive, visually stunning, and highly functional website.</li>
  <li>We leverage advanced User Interaction technologies such as Adobe XD, Figma, and more, ensuring a seamless and engaging user experience. Our team of experts designs websites from concept to completion, helping businesses establish a strong global identity.</li>
</ul>
`;

const serviceCards = [
  {
    title: '24/7 Free Support',
    description: `Our clients are our priority. We provide round-the-clock support across all communication channels to address any concerns related to website design, e-commerce development, and more. Our commitment to customer satisfaction has earned us a 100% record in client support.`,
  },
  {
    title: 'Web Development Expertise',
    description: `<ul><li>Automated Bug Detection: AI tools identify potential bugs, security vulnerabilities, and inefficiencies, offering recommendations for fixes.</li><li>Intelligent Debugging: ML models assist in pinpointing root causes of issues, reducing troubleshooting time.</li></ul>`,
  },
  {
    title: '100% Responsive Websites',
    description: `<ul><li>Automated Testing: AI-driven tools create test cases, execute tests, and analyze results to ensure comprehensive coverage and faster cycles.</li><li>Predictive Quality Analysis: ML predicts software issues based on historical data, enabling proactive quality improvements.</li></ul>`,
  },
  {
    title: 'Content Writing Services',
    description: `We provide comprehensive content writing solutions under one roof, including: <ul><li>Blog writing</li><li>Website content</li><li>Marketing content</li><li>Research articles</li><li>Press releases</li><li>Product descriptions</li></ul>`,
  },
  {
    title: 'Custom Logo Design',
    description: `Our logo design services cater to various industries, including: <ul><li>Real estate</li><li>Education</li><li>Financial institutions</li><li>Food & hospitality</li><li>IT & technology</li></ul>We also offer custom logo designs tailored to unique brand identities.`,
  },
];

const WebDevelopment = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Web Development"
      description="Cybersecurity is essential in software development to protect applications and data from threats and vulnerabilities."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Welcome to TSC - A Leading Web Development Company in India"
      description="TSC is a 100% trusted and registered web development company in India, offering top-tier web design and development services. We specialize in creating multi-functional web portals that drive ROI-driven results. Our well-designed and highly functional websites help businesses establish a strong online presence."
      reverse={false}
    />

    {/* Our Services Overview */}
    <IntroInfo title="Our Services" description={servicesOverview} />

    {/* Service Cards Grid */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Completed Projects Section */}
    <IntroSection
      imageSrc={completedProjectsImg}
      title="Our Completed Projects – Excellence in Web Development"
      description="Our track record of successful projects speaks for itself. We take pride in delivering exclusive, high-quality website designs that meet client expectations. Our strong work ethic and commitment to excellence make us one of India's top web design companies."
      reverse={true}
    />

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default WebDevelopment;
