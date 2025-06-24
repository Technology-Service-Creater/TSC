import React from 'react';
import PageHeroSection from '../../../../components/common/PageHeroSection';
import IntroSection from '../../../../components/common/IntroSection';
import ServiceCard from '../../../../components/common/ServiceCard';
import ContactForm from '../../../../components/common/ContactForm';

const heroImg = '/Images/EventServicesMarketing_Hero.jpg';
const introImg = '/Images/EventServicesMarketing-1.jpg';
const contentImg = '/Images/EventServicesMarketing-2.jpg';

const toKebabCase = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/(^-|-$)/g, '');
const industryPath = 'event-services-marketing';

const serviceCards = [
  {
    title: 'Brand Acts',
    description:
      "Brand acts involve creating memorable experiences that represent a brand's values and personality. These include unique experiences, public stunts, and interactive activities that engage the audience and leave a lasting impression.",
  },
  {
    title: 'Event Marketing',
    description:
      'Event marketing is the process of planning, organizing, and executing events to promote a product, service, or brand. This can include anything from trade shows and conferences to product launches and networking events. The goal is to create meaningful connections with the audience.',
  },
  {
    title: 'Employee Experience',
    description:
      'Employee experience focuses on creating a sense of engagement and satisfaction for employees through tailored activities, workshops, and recognition events. A positive company culture and recognition programs foster a positive work environment.',
  },
  {
    title: 'Integrated Marketing',
    description:
      'Integrated marketing involves coordinating various marketing channels and tactics to deliver a cohesive message. This approach ensures that all aspects of an event, from digital campaigns to physical signage, are aligned and working together to achieve the desired outcome.',
  },
  {
    title: 'Sponsorship Activation',
    description:
      'Sponsorship activation refers to the execution of sponsorship agreements and partnerships. This can include branded giveaways, interactive displays, and exclusive experiences for event attendees.',
  },
  {
    title: 'Digital Experience',
    description:
      'Digital experience relates to all online interactions and touchpoints associated with an event. This can include virtual events, live streaming, and social media engagement to reach a global audience.',
  },
  {
    title: 'Experience Content',
    description:
      'Experience content includes creating and curating digital and physical content that enhances the event experience. This can include videos, blogs, and presentations to attendees before, during, and after the event.',
  },
  {
    title: 'Broadcast Design',
    description:
      'Broadcast design involves creating visually engaging live and recorded event content. This can include stage design, lighting, and multimedia displays that enhance the viewing experience.',
  },
  {
    title: 'Trade Show Displays and Experiences',
    description:
      'Trade show displays and experiences focus on creating engaging and interactive booths, exhibits, and demonstrations that attract and engage attendees.',
  },
].map(card => ({
  ...card,
  link: `/industries/${industryPath}/${toKebabCase(card.title)}`,
}));

const eventTypes = [
  {
    title: 'Weddings',
    description:
      'Integrated marketing involves coordinating various marketing channels and tactics to deliver a cohesive message. This approach ensures that all aspects of an event, from digital campaigns to physical signage, are aligned and working together to achieve the desired outcome.',
  },
  {
    title: 'Corporate Events',
    description:
      'Sponsorship activation refers to the execution of sponsorship agreements and partnerships. This can include branded giveaways, interactive displays, and exclusive experiences for event attendees.',
  },
  {
    title: 'Conventions and Trade Shows',
    description:
      'Digital experience encompasses all digital interactions and touchpoints associated with an event, such as virtual events, live streaming, and social media engagement. This approach enables broader reach and engagement with a global audience.',
  },
  {
    title: 'Music Festivals and Concerts',
    description:
      'Experience content includes creating and curating digital and physical content that enhances the event experience. This can include videos, blogs, and presentations to attendees before, during, and after the event.',
  },
  {
    title: 'Sports Events',
    description:
      'Broadcast design involves creating visually engaging live and recorded event content. This can include stage design, lighting, and multimedia displays that enhance the viewing experience.',
  },
  {
    title: 'Meetings and Incentives',
    description:
      'Trade show displays and experiences focus on creating engaging and interactive booths, exhibits, and demonstrations that attract and engage attendees.',
  },
  {
    title: 'Social Galas and Fundraisers',
    description:
      'Social galas and fundraisers are events which include auctions, dinners, and entertainment to engage and inspire attendees.',
  },
  {
    title: 'Product Launches',
    description:
      'Product launches are events designed to introduce new products to the market. These events often include live demonstrations, presentations, and media coverage.',
  },
  {
    title: 'Experiential Marketing',
    description:
      'Experiential marketing focuses on creating immersive brand experiences that engage the senses. This may include pop-up shops, interactive installations, and live demonstrations.',
  },
].map(event => ({
  ...event,
  link: `/industries/${industryPath}/${toKebabCase(event.title)}`,
}));

const EventServicesMarketing = () => (
  <div className="bg-[#F7FAFF]">
    {/* Hero Section */}
    <PageHeroSection
      title="Event Services & Marketing"
      description="Organizing and promoting events to attract attendees, planning logistics, coordinating with vendors, and executing promotional strategies to ensure successful and engaging events."
      bgImage={heroImg}
    />

    {/* Intro Section */}
    <IntroSection
      imageSrc={introImg}
      title="Event Services & Marketing"
      description={
        'Event services and marketing play a crucial role in creating memorable experiences and driving engagement. Whether for corporate events, brand activations, or private gatherings, effective event planning and marketing strategies ensure successful outcomes and brand visibility.'
      }
      imageAlt="Event Services & Marketing"
      reverse={false}
    />

    {/* Service Cards Section */}
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map(card => (
            <ServiceCard
              key={card.title}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Types of Events Section */}
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-neutral-800 mb-8 text-center">
          Types of Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTypes.map(event => (
            <ServiceCard
              key={event.title}
              title={event.title}
              description={event.description}
              link={event.link}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Intro Section */}
    <IntroSection
      imageSrc={contentImg}
      title="Event Services & Marketing"
      description={
        'Effective event services and marketing require strategic planning, creativity, and audience engagement. By leveraging innovative marketing techniques and seamless event execution, businesses can maximize impact, strengthen brand presence, and build long-lasting connections.'
      }
      imageAlt="Event Services & Marketing"
      reverse={false}
    />

    {/* Contact Section */}
    <ContactForm />
  </div>
);

export default EventServicesMarketing;
