import React, { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Data Analyst',
    department: 'IT',
    skills: 'Data Modeling',
    experience: '2-4 Yrs',
    location: 'Nagpur',
    description: 'Analyze and interpret complex data to help companies make decisions.',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    department: 'Engineering',
    skills: 'React, JavaScript, CSS',
    experience: '1-3 Yrs',
    location: 'Remote',
    description: 'Build and maintain user interfaces for web applications.',
  },
  {
    id: 3,
    title: 'Backend Developer',
    department: 'Engineering',
    skills: 'Node.js, Databases',
    experience: '2-5 Yrs',
    location: 'Bangalore',
    description: 'Develop and optimize server-side logic and APIs.',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    department: 'Design',
    skills: 'Figma, Prototyping',
    experience: '1-4 Yrs',
    location: 'Pune',
    description: 'Design user experiences and interfaces for digital products.',
  },
  {
    id: 5,
    title: 'Project Manager',
    department: 'Management',
    skills: 'Agile, Communication',
    experience: '3-6 Yrs',
    location: 'Nagpur',
    description: 'Lead project teams and ensure timely delivery of milestones.',
  },
  {
    id: 6,
    title: 'QA Engineer',
    department: 'Quality Assurance',
    skills: 'Testing, Automation',
    experience: '2-4 Yrs',
    location: 'Remote',
    description: 'Test and ensure the quality of software products.',
  },
];

const RecentJobsSection = () => {
  const [search, setSearch] = useState('');

  const filteredJobs = jobs.filter(job => {
    const searchLower = search.toLowerCase();
    return (
      job.title.toLowerCase().includes(searchLower) ||
      job.department.toLowerCase().includes(searchLower) ||
      job.skills.toLowerCase().includes(searchLower) ||
      job.location.toLowerCase().includes(searchLower) ||
      job.description.toLowerCase().includes(searchLower)
    );
  });

  return (
    <section className="w-full bg-[#181A1B] py-14 px-4 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Poppins'] text-white">
            Recent Jobs
          </h2>
          <input
            type="text"
            placeholder="Search your expertise here"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-72 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-500 text-base font-['Montserrat'] transition"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredJobs.length === 0 ? (
            <div className="col-span-full text-center text-white text-lg py-10">No jobs found.</div>
          ) : (
            filteredJobs.map(job => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-start shadow-sm w-full"
              >
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  {job.department}
                </span>
                <h3 className="text-lg font-bold font-['Poppins'] mb-1 text-gray-900">
                  {job.title}
                </h3>
                <div className="text-sm font-['Montserrat'] text-gray-700 mb-2">
                  <div>
                    <span className="font-semibold text-gray-900">Skills:</span> {job.skills}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Experience:</span>{' '}
                    {job.experience}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Location:</span> {job.location}
                  </div>
                </div>
                <div className="text-xs font-['Montserrat'] text-gray-600 mb-4">
                  {job.description}
                </div>
                <button className="mt-auto bg-[#181A1B] text-white px-6 py-2 rounded-lg font-semibold hover:bg-neutral-800 transition">
                  APPLY NOW
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default RecentJobsSection;
