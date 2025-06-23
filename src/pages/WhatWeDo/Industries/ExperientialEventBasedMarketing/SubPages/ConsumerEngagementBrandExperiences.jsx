import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const ConsumerEngagementBrandExperiences = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Consumer Engagement & Brand Experience "
      description="Web and mobile analytics help businesses understand user behavior, optimize experiences, and drive conversions. By collecting and analyzing real-time data, companies can make informed decisions that improve customer journeys and marketing effectiveness."
      bgImage="/Images/ConsumerEngagementBrandExperiences_hero.jpg"
    />

    <IntroSection
      IntroSectionImage="/Images/ConsumerEngagementBrandExperiences_1.jpg"
      IntroSectionTitle="What Defines Brand Experience in Today’s Market?"
      IntroSectionDescription={
        'In a world where consumers have endless choices, brand experience is no longer just about a product or service—it’s about every touchpoint a customer has with your brand. From the first click on your website to post-purchase support, each interaction shapes how customers perceive and connect with you'
      }
    />

    <IntroInfo
      title={'The Power of Emotional Connections in Brand Loyalty'}
      description={
        <>
          <div className="text-left ">
            <p>
              Consumers don’t just buy products—they invest in stories, values, and experiences that
              reflect who they are. Emotional connections drive loyalty, turning customers into
              long-term advocates.
            </p>
            <p>
              ✔ Authentic Storytelling – Brands that share compelling, relatable narratives build
              stronger connections.
            </p>
            <p>
              ✔ Personalized Experiences – When customers feel seen and understood, they engage
              more deeply.
            </p>
            <p>
              ✔ Community Building – Creating spaces where customers can interact and share
              experiences fosters a sense of belonging.
            </p>
            <p>
              When brands build emotional connections, customers don’t just return—they become brand
              ambassadors who spread the word and defend the brand even in challenging times.
            </p>
          </div>
        </>
      }
    />

    <IntroInfo
      title={'Leveraging Technology to Elevate Brand Interactions'}
      description={
        <>
          <div className="text-left ">
            <p>
              Technology is reshaping how brands engage, personalize, and connect with consumers.
              The key is to use innovation to enhance human connection, not replace it.
            </p>
            <p>
              ✔ Augmented & Virtual Reality – Immersive product demos and brand experiences that
              feel real
            </p>

            <p>✔ AI & Chatbots – Instant, personalized customer support that feels natural.</p>
            <p>
              ✔ Data-Driven Personalization – Smart recommendations and tailored content based on
              customer preferences.
            </p>
            <p>
              When integrated thoughtfully, technology removes friction and makes every interaction
              seamless, intuitive, and engaging.
            </p>
          </div>
        </>
      }
    />

    {/* Intro Section */}
    <IntroSection
      IntroSectionImage="/Images/ConsumerEngagementBrandExperiences_2.jpg"
      IntroSectionTitle="The Future of Brand Experience & Customer Engagement"
      IntroSectionDescription={
        <>
          <div className="text-left ">
            <p>
              ✔ AI & Predictive Analytics - Hyper-personalized experiences based on real-time
              behavior.
            </p>
            <p>
              ✔ Sustainability & Ethical Branding - Consumers are choosing brands that align with
              their social & environmental values.
            </p>

            <p>
              The brands that embrace innovation while staying human-centric will lead the future of
              customer engagement.
            </p>
          </div>
        </>
      }
      reverse={true}
    />

    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default ConsumerEngagementBrandExperiences;
