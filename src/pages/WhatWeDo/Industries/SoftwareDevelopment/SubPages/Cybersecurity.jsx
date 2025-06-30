import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/Cybersecurity_Hero.jpg'; // Replace with your actual image
const introImg = '/Images/Cybersecurity-1.jpg'; // Replace with your actual image
const keyTakeawayImg = '/Images/Cybersecurity-2.jpg'; // Replace with your actual image

const featureCards = [
  {
    title: 'Code Generation & Optimization',
    description: `<ul><li>Automated Code Generation: AI-powered tools like GitHub Copilot and OpenAI Codex generate code snippets or entire functions from natural language descriptions.</li><li>Code Optimization: ML algorithms analyze code to suggest improvements, enhancing performance, reducing memory usage, and improving readability.</li></ul>`,
  },
  {
    title: 'Bug Detection & Debugging',
    description: `<ul><li>Automated Bug Detection: AI tools identify potential bugs, security vulnerabilities, and inefficiencies, offering recommendations for fixes.</li><li>Intelligent Debugging: ML models assist in pinpointing root causes of issues, reducing troubleshooting time.</li></ul>`,
  },
  {
    title: 'Testing & Quality Assurance',
    description: `<ul><li>Automated Testing: AI-driven tools create test cases, execute tests, and analyze results to ensure comprehensive coverage and faster cycles.</li><li>Predictive Quality Analysis: ML models forecast issues based on historical data, enabling proactive quality improvements.</li></ul>`,
  },
  {
    title: 'Project Management & Collaboration',
    description: `<ul><li>Resource Allocation: AI analyzes project data to optimize resource usage, predict timelines, and identify bottlenecks.</li><li>AI-Powered Collaboration: AI tools improve team communication, manage documentation, and streamline workflows.</li></ul>`,
  },
  {
    title: 'Natural Language Processing (NLP)',
    description: `<ul><li>Chatbots & Virtual Assistants: AI-driven assistants provide coding help, documentation search, and issue resolution within development environments.</li><li>Automated Documentation: NLP models generate and update documentation based on code changes and project updates.</li></ul>`,
  },
  {
    title: 'Continuous Integration & Delivery (CI/CD)',
    description: `<ul><li>Automated Deployment: AI optimizes deployment pipelines, monitors application performance, and initiates rollback strategies if needed.</li><li>Continuous Monitoring: ML detects anomalies, predicts failures, and triggers alerts for proactive resolution.</li></ul>`,
  },
  {
    title: 'Continuous Integration & Delivery (CI/CD)',
    description: `<ul><li>Adaptive Interfaces: AI personalizes UI based on user behavior and preferences, enhancing the overall experience.</li><li>Recommendation Systems: ML-driven recommendations tailor content, features, and product suggestions to individual users.</li></ul>`,
  },
  {
    title: 'Personalization & User Experience',
    description: `<ul><li>Threat Detection: AI-powered security tools continuously monitor traffic and system logs to detect threats and vulnerabilities.</li><li>Secure Coding Practices: ML assists developers by identifying insecure coding patterns and suggesting best practices.</li></ul>`,
  },
];

const Cybersecurity = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Cybersecurity"
      description="Cybersecurity is essential in software development to protect applications and data from threats and vulnerabilities."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Secure Software Development Life Cycle (SDLC)"
      description="Artificial Intelligence (AI) and Machine Learning (ML) are transforming software development by enhancing efficiency, improving quality, and enabling advanced capabilities."
      reverse={false}
    />

    {/* Feature Cards Grid */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureCards.map((card, idx) => (
          <ServiceCard key={idx} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Key Takeaways IntroSection */}
    <IntroSection
      imageSrc={keyTakeawayImg}
      title="Key Takeaways"
      description="Leveraging AI and ML in software development enhances productivity, improves code quality, and fosters innovation. Integrating these technologies can streamline development processes, automate repetitive tasks, and create smarter, more efficient software solutions."
      reverse={true}
    />

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default Cybersecurity;
