import { useState } from 'react';

const OurCompaniesSection = ({ companyData }) => {
  const [activeTab, setActiveTab] = useState(companyData[0].tab);

  const activeCompany = companyData.find(company => company.tab === activeTab);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 mt-14">
      <div className="mb-8">
        <span className="flex items-center text-gray-500 text-sm font-medium font-['Montserrat'] tracking-tight">
          <span className="text-2xl mr-2">
            <img src="/Images/Vector.png" alt="" />
          </span>{' '}
          UNMATCHED OPPORTUNITIES
        </span>
        <h2 className="text-neutral-800 text-4xl font-bold font-['Poppins'] leading-tight">
          Our Companies
        </h2>
        <p className="text-gray-600 text-base font-normal font-['Montserrat'] leading-relaxed">
          We foster affiliations and collaborations with renowned institutions, companies, brands,
          academic experts, and industry leaders, creating a diverse network that elevates your
          learning and provides you with the best opportunities.
        </p>
      </div>

      <div className="bg-[#383838] rounded-full p-2 flex justify-around mb-8">
        {companyData.map(company => (
          <button
            key={company.tab}
            className={`py-2 px-6 rounded-full text-lg font-semibold ${activeTab === company.tab ? 'font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent' : 'text-gray-300 hover:text-white'}`}
            onClick={() => setActiveTab(company.tab)}
          >
            {company.tab}
          </button>
        ))}
      </div>

      {activeCompany && (
        <div className="flex flex-col h-[30em] lg:flex-row items-center justify-between gap-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-start lg:w-1/2">
            {activeCompany.image && (
              <img src={activeCompany.image} alt={activeCompany.tab} className="h-16 mb-4" />
            )}
            <h3 className="text-neutral-800 text-3xl font-bold font-['Poppins'] leading-tight mb-4">
              {activeCompany.heading}
            </h3>
            <p className="text-gray-600 text-base font-semibold font-['Montserrat'] leading-relaxed mb-6">
              {activeCompany.description}
            </p>
            <a
              href={activeCompany.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              {activeCompany.buttonText} <span className="ml-2">→</span>
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center relative">
            {activeCompany.contentImage && (
              <img
                src={activeCompany.contentImage}
                alt="Content"
                className="w-full max-w-md rounded-lg shadow-md"
              />
            )}
            {activeCompany.downloadButton && (
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
                Download Now
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OurCompaniesSection;
