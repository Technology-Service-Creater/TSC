import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const heroImg = '/Images/SoftwareDevelopment_Hero.jpg';
const introImg = '/Images/SoftwareDevelopment-1.jpg';
const contentImg = '/Images/SoftwareDevelopment-2.jpg';

const infoCards = [
  {
    title: 'Software Engineering & Development',
    description:
      'Software engineering involves designing, developing, testing, and maintaining software applications. It encompasses various methodologies such as Agile, DevOps, and Waterfall to ensure efficient and effective software delivery.',
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'AI and Data Science: Combining AI with data science techniques to extract insights and build intelligent systems.',
    listItems: [
      'AI and Data Science: Combining AI with data science techniques to extract insights and build intelligent systems.',
      'Trustworthy AI: Ensuring AI systems are ethical, transparent, and unbiased.',
      'Generative AI: Using AI to create content, such as text, images, or music.',
    ],
  },
  {
    title: 'Cybersecurity',
    description:
      'Cyber Strategy: Developing comprehensive security plans to protect against cyber threats.',
    listItems: [
      'Cyber Strategy: Developing comprehensive security plans to protect against cyber threats.',
      'Offensive Security: Proactively testing systems for vulnerabilities through ethical hacking and penetration testing.',
      'Data & Privacy: Ensuring data protection and compliance with privacy regulations.',
    ],
  },
  {
    title: 'Web Development',
    description:
      'Frontend Development: Building the user interface using HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js.',
    listItems: [
      'Frontend Development: Building the user interface using HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js.',
      'Backend Development: Developing the server-side logic with technologies like Node.js, Django, Ruby on Rails, and .NET.',
      'Full-Stack Development: Combining frontend and backend development skills to build complete web applications.',
    ],
  },
  {
    title: 'Mobile App Development',
    description:
      'Native App Development (iOS, Android): Creating apps specifically for iOS and Android platforms.',
    listItems: [
      'Native App Development (iOS, Android): Creating apps specifically for iOS and Android platforms.',
      'Hybrid App Development (React Native, Flutter): Building apps that work on multiple platforms using a single codebase.',
      'App Security & Performance Optimization: Ensuring mobile apps are secure and perform well.',
      'App Store Optimization (ASO): Improving app visibility and ranking in app stores.',
    ],
  },
  {
    title: 'UI/UX & Digital Experience',
    description:
      'User Interface (UI) Design: Creating visually appealing and user-friendly interfaces.',
    listItems: [
      'User Interface (UI) Design: Creating visually appealing and user-friendly interfaces.',
      'User Experience (UX) Research: Understanding user needs and behaviors to inform design decisions.',
      'Web & Mobile Prototyping: Testing and validating new concepts and interactive design ideas.',
      'Ensuring UI & usability best practices: Ensuring digital products are accessible to all users and easy to use.',
    ],
  },
];

const SoftwareDevelopment = () => (
  <div className="bg-[#F7FAFF]">
    {/* Hero Section */}
    <PageHeroSection
      title="Software Development"
      description="Collaboration among developers, designers, and stakeholders to create functional, reliable, and user-friendly software that meets user needs."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Software Development"
      description={
        'Software development is the process of designing, coding, testing, and maintaining applications and systems to meet specific user needs. It encompasses various methodologies, tools, and programming languages to create reliable, scalable, and efficient software solutions.'
      }
      imageAlt="Software Development"
      reverse={false}
    />

    {/* Info Cards Section */}
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map((card, idx) => (
            <ServiceCard
              key={idx}
              title={card.title}
              description={card.description}
              listItems={card.listItems}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Image + Text Section */}
    <IntroSection
      imageSrc={contentImg}
      description={
        'Software development is a dynamic field that evolves with emerging technologies. By following structured methodologies and best practices, developers can create robust and user-friendly applications that drive business success.'
      }
      imageAlt="Software Development"
      reverse={true}
    />

    {/* Contact Section */}
    <ContactForm />
  </div>
);

export default SoftwareDevelopment;
