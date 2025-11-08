import PageHeroSection from '../../components/common/PageHeroSection';
import AboutTSCSection from './SubComponents/AboutTSCSection';
import RecentJobsSection from './SubComponents/RecentJobsSection';

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
    </div>
  );
};

export default Career;
