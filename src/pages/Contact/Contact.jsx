import React from 'react';
import PageHeroSection from '../../components/common/PageHeroSection';
import ContactInfo from './SubComponents/ContactInfo';
import ContactForm from '../../components/common/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F5FEFF]">
      <PageHeroSection
        title="Contact Us"
        description="Need assistance or more information? Our team is here to help! Expect a response within 3-5 working days."
        bgImage="/Images/contactHero.jpg"
      />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
