import React from 'react';

const jobs = [
  {
    id: 1,
    title: 'Data Anysist',
    department: 'IT',
    skills: 'Data Modeling',
    experience: '2-4 Yrs',
    location: 'Nagpur',
  },
  // ... repeat for 6 jobs (can be same for mockup)
  {
    id: 2,
    title: 'Data Anysist',
    department: 'IT',
    skills: 'Data Modeling',
    experience: '2-4 Yrs',
    location: 'Nagpur',
  },
  {
    id: 3,
    title: 'Data Anysist',
    department: 'IT',
    skills: 'Data Modeling',
    experience: '2-4 Yrs',
    location: 'Nagpur',
  },
  {
    id: 4,
    title: 'Data Anysist',
    department: 'IT',
    skills: 'Data Modeling',
    experience: '2-4 Yrs',
    location: 'Nagpur',
  },
  {
    id: 5,
    title: 'Data Anysist',
    department: 'IT',
    skills: 'Data Modeling',
    experience: '2-4 Yrs',
    location: 'Nagpur',
  },
  {
    id: 6,
    title: 'Data Anysist',
    department: 'IT',
    skills: 'Data Modeling',
    experience: '2-4 Yrs',
    location: 'Nagpur',
  },
];

const RecentJobsSection = () => (
  <section className="w-full bg-[#181A1B] py-14 px-4 flex flex-col items-center">
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Poppins'] text-white mb-8">
        Recent Jobs
      </h2>
      <div className="flex justify-end mb-8">
        <input
          type="text"
          placeholder="Search your expertise here"
          className="w-full max-w-xs px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map(job => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center min-h-[220px]"
          >
            <div className="w-full flex flex-col items-center mb-4">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                {job.department}
              </span>
              <h3 className="text-lg font-bold font-['Poppins'] mb-1">{job.title}</h3>
            </div>
            <div className="w-full text-center text-sm font-['Montserrat'] text-gray-700 mb-4">
              <div>Skills: {job.skills}</div>
              <div>Experience: {job.experience}</div>
              <div>Location: {job.location}</div>
            </div>
            <button className="mt-auto bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
              APPLY NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecentJobsSection;
