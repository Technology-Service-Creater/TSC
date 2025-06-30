import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ContactForm from '../../../../../components/common/ContactForm';

const employeeWhat = `
Employee Experience (EX) is the sum of all interactions an employee has with a company—
from recruitment to exit. It includes work culture, leadership, technology, benefits, and 
growth opportunities that shape their overall journey. A positive EX boosts engagement, 
productivity, and retention.
`;

const employeeWhy = `
<ul class='text-mb'>
  <li>✔ Drives Employee Satisfaction – Happy employees are more engaged and productive.</li>
  <li>✔ Boosts Retention & Loyalty – A great experience reduces turnover and attracts top talent.</li>
  <li>✔ Improves Business Performance – Motivated employees contribute to company success.</li>
  <li>✔ Enhances Company Culture – Fosters a supportive, inclusive, and collaborative environment.</li>
  <li>✔ Strengthens Employer Brand – A strong EX makes a company a top workplace choice.</li>
</ul>
`;

const employeeElements = `
<ul class='text-mb'>
  <li>✔ Seamless Onboarding – A smooth, welcoming start sets the tone for success.</li>
  <li>✔ Clear Career Growth Paths – Employees thrive when they see opportunities to advance.</li>
  <li>✔ Work-Life Balance – Flexible schedules, remote options, and well-being support.</li>
  <li>✔ Strong Company Culture – Inclusive, transparent, and open work environments.</li>
  <li>✔ Effective Leadership & Communication – Leaders who inspire, listen, and engage.</li>
  <li>✔ Technology & Tools – User-friendly systems that enhance daily productivity.</li>
  <li>✔ Recognition & Rewards – Celebrating achievements fosters motivation.</li>
</ul>
`;

const employeeBestPractices = `
<ul class='text-mb'>
  <li>✔ Listen to Employee Feedback – Regular surveys and open discussions matter.</li>
  <li>✔ Invest in Learning & Development – Upskilling leads to career satisfaction.</li>
  <li>✔ Foster a Culture of Recognition – Appreciation boosts morale and motivation.</li>
  <li>✔ Define & Model Leadership – Strong teamwork leads to increased collaboration and efficiency.</li>
  <li>✔ Prioritize Well-being – Mental health support and work-life balance are key.</li>
</ul>
`;

const EmployeeExperience = () => (
  <div>
    {/* Hero Section */}
    <PageHeroSection
      title="Employee Experience"
      description="Building a Culture of Engagement & Growth"
      bgImage="/Images/EmployeeExperience_hero.jpg"
    />

    {/* What is Employee Experience? */}
    <IntroSection
      title="What is Employee Experience (EX)?"
      description={employeeWhat}
      imageSrc="/Images/EmployeeExperience_2.jpg"
      imageAlt="Employee Collaboration"
    />

    {/* Why is Employee Experience Important? */}
    <IntroInfo title="Why is Employee Experience Important?" description={employeeWhy} />

    {/* Key Elements of a Great Employee Experience */}
    <IntroInfo title="Key Elements of a Great Employee Experience" description={employeeElements} />

    {/* Best Practices for Enhancing Employee Experience */}
    <IntroSection
      title="Best Practices for Enhancing Employee Experience"
      description={employeeBestPractices}
      imageSrc="/Images/EmployeeExperience_2.jpg"
      imageAlt="Team Discussion"
      reverse={true}
    />

    <ContactForm />
  </div>
);

export default EmployeeExperience;
