import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/CustomerSegmentation_Hero.jpg';
const introImg = '/Images/CustomerSegmentation-1.jpg';

const segmentationTypeCards = [
  {
    title: 'Demographic Segmentation',
    description: 'Factors such as age, gender, income, education level, and occupation.',
  },
  {
    title: 'Geographic Segmentation',
    description: 'Location details such as country, city, urban or rural area.',
  },
  {
    title: 'Psychographic Segmentation',
    description: 'Social class, values, interests, lifestyle, and personality characteristics.',
  },
  {
    title: 'Behavioral Segmentation',
    description:
      'Customer tendencies, habits, spending patterns, product usage, and desired benefits.',
  },
  {
    title: 'Technographic Segmentation',
    description: 'Technology usage, including mobile, desktop, software, and applications.',
  },
  {
    title: 'Needs-Based Segmentation',
    description: 'Product or service requirements based on specific customer needs.',
  },
];

const benefitsCards = [
  {
    title: 'Efficient Use of Marketing Resources',
    description:
      'Uses allocated marketing resources more effectively and maximizes cross- and up-selling opportunities.',
  },
  {
    title: 'More Accurate Offerings',
    description:
      'Personalized marketing campaigns allow businesses to target specific offers that encourage additional purchases.',
  },
  {
    title: 'Improved Customer Service',
    description: 'Personalization enhances customer experience, fostering loyalty and retention.',
  },
];

const CustomerSegmentation = () => (
  <div className="bg-[#F8F8FF] pb-12">
    {/* Hero Section */}
    <PageHeroSection
      title="Customer Segmentation"
      description="User Interface (UI) and User Experience (UX) design are essential for creating engaging, intuitive, and effective digital experiences."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="What is Segmentation Analysis?"
      description="Segmentation analysis is a crucial component of the customer segmentation process. It involves examining smaller sections of a larger market to identify unique consumer needs within each group. This information helps businesses better target their audience into appropriate segments based on criteria such as demographics, needs, priorities, and common interests."
      reverse={false}
    />

    {/* Overview Section */}
    <IntroInfo
      title="Types of Customer Segmentation"
      description="Customer segmentation can be done in several ways. For example, customer groups can be narrowed down to who the customers are and what they do or expanded to multiple more precise segments—with each type having more granular factors. The segments an organization uses vary depending on its size and industry, and different segmentation approaches should be used based on these factors."
    />

    {/* Segmentation Types */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Types of Customer Segmentation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {segmentationTypeCards.map((card, index) => (
          <ServiceCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Benefits Section */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Benefits of Customer Segmentation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefitsCards.map((card, index) => (
          <ServiceCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </section>

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default CustomerSegmentation;
