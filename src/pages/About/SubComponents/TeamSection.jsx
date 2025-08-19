import { useState } from 'react';
import { Linkedin } from 'lucide-react';

const TeamSection = ({ teamMembers }) => {
  const [activeTab, setActiveTab] = useState('Board Of Director');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="bg-[#383838] rounded-full p-2 flex justify-around mb-8">
        {Object.keys(teamMembers).map(tab => (
          <button
            key={tab}
            className={`py-2 px-6 rounded-full text-lg font-semibold ${activeTab === tab ? 'font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent' : 'text-[#999999] hover:text-white'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers[activeTab].map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover object-top bg-[#D6E8F6]"
            />
            <div className="p-4 flex justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-800">{member.name}</h3>
                <p className="text-base text-gray-600 font-['Poppins'] font-bold">{member.title}</p>
              </div>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#383838] rounded-lg p-2 text-sm mt-2 block"
                >
                  <Linkedin />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
