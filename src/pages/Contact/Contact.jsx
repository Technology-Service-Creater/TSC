import React from 'react';
import PageHeroSection from '../../components/common/PageHeroSection';
import ContactForm from './SubComponents/ContactForm';
import ContactInfo from './SubComponents/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F5FEFF]">
      <PageHeroSection
        title="Contact Us"
        description="Need assistance or more information? Our team is here to help! Expect a response within 3-5 working days."
        bgImage="/Images/contactHero.jpg"
      />
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contact;
