import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const services = [
  {
    title: 'Management Communication',
    description:
      'Focuses on leadership communication, strategic decision-making, and company vision to ensure alignment between management and employees.',
  },
  {
    title: 'Marketing Communication',
    description:
      'Involves advertising, branding, public relations, and digital marketing to connect with customers and promote products/services.',
  },
  {
    title: 'Organizational Communication',
    description:
      'Deals with internal processes, corporate culture, and employee engagement to foster a productive and positive work environment.',
  },
];

const description = [
  {
    title: 'Internal Communication (Within the Organization)',
    description:
      'Formal: Company announcements, newsletters, meetings, policies\nInformal: Employee chat groups, town halls, casual discussions',
  },
  {
    title: 'External Communication (With Customers, Media & Public)',
    description:
      'Formal: Press releases, financial reports, official statements\nInformal: Social media interactions, brand storytelling, public engagement',
  },
];

const CorporateCommunications = () => (
  <div className="w-full px-2 py-2 sm:px-0 sm:py-0">
    <PageHeroSection
      title="Corporate Communications & Event Marketing"
      description="Strengthening Brand Presence"
      bgImage="/Images/CorporateCommunications_hero.jpg"
    />

    <IntroSection
      IntroSectionImage="/Images/CorporateCommunications_1.jpg"
      IntroSectionTitle="What is Corporate Communications?"
      description="Corporate communications refers to how organizations communicate with internal and external audiences, including employees, customers, investors, and the public. It ensures a consistent brand message and effective stakeholder engagement."
    />

    <section className="w-full max-w-[1200px] mx-auto bg-[#DEEBFC] py-8 px-3 sm:py-10 sm:px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 rounded-lg">
        <h2 className="text-center text-black text-xl sm:text-2xl md:text-3xl font-bold font-['Poppins'] leading-tight">
          Goals of Corporate Communications
        </h2>
        <div className="w-full flex flex-col gap-3 sm:gap-4">
          {[
            '✔ Build relationships with stakeholders',
            '✔ Maintain a strong brand image',
            '✔ Manage reputation and crisis communication',
            '✔ Establish credibility with customers',
            '✔ Foster employee engagement',
          ].map((goal, index) => (
            <div
              key={index}
              className="w-full bg-white px-4 py-3 rounded shadow-sm flex justify-center items-center"
            >
              <p className="text-black text-base sm:text-lg font-normal font-['Montserrat'] leading-snug text-center">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="text-center mt-10 mb-10">
      <h2 className="text-black font-['Poppins'] font-bold text-[31px] leading-[46.5px] tracking-[-0.62px]">
        Branches of Corporate Communication
      </h2>
    </div>

    <section className="mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>

    <div className="text-center mt-10 mb-10">
      <h2 className="text-black font-['Poppins'] font-bold text-[31px] leading-[46.5px] tracking-[-0.62px]">
        Types of Corporate Communication
      </h2>
    </div>

    <section className="mb-10 flex justify-center items-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {description.map((item, index) => (
            <ServiceCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>

    <ContactForm />
  </div>
);

export default CorporateCommunications;
