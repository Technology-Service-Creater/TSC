import { useState } from 'react';
import { Linkedin } from 'lucide-react';

const TeamSection = ({ teamMembers }) => {
  const [activeTab, setActiveTab] = useState('Board Of Director');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 mt-20 md:mt-5">
      <div className="bg-[#383838] rounded-full p-2 flex justify-around mb-8">
        {Object.keys(teamMembers).map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base lg:text-lg font-semibold ${activeTab === tab ? 'font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent' : 'text-[#999999] hover:text-white'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers[activeTab].map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 sm:h-56 md:h-40 object-contain object-top bg-[#D6E8F6]"
              />
            </div>
            <div className="p-4 mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-['Poppins'] font-bold">
                  {member.title}
                </p>
              </div>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#383838] rounded-lg p-2 text-sm mt-2 sm:mt-0 block"
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
