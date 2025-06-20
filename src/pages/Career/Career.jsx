import React from 'react';
import PageHeroSection from '../../components/common/PageHeroSection';
// import careerHero from '../../../public/Images/careerHero.png';
import AboutTSCSection from './SubComponents/AboutTSCSection';
import RecentJobsSection from './SubComponents/RecentJobsSection';
import JobInquiryForm from './SubComponents/JobInquiryForm';

const Career = () => {
  return (
    <div className="w-full min-h-screen bg-[#F7F9FB]">
      <PageHeroSection
        title="Careers"
        description="We offer exciting career opportunities across various sectors. Grow with us, innovate, and make an impact in a dynamic work environment."
        bgImage="/Images/careerHero.png"
      />
      {/* Subcomponents for Why TSC, Connect and Grow, Recent Jobs, and Job Form will go here */}
      <AboutTSCSection />
      <RecentJobsSection />
      <JobInquiryForm />
    </div>
  );
};

export default Career;
