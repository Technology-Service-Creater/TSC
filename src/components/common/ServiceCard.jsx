import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, listItems, link }) => {
  const cardContent = (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-100 to-blue-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full border border-gray-100">
      {/* Gradient Blob */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-purple-200 via-blue-200 to-transparent rounded-full opacity-30 blur-2xl"></div>

      <div className="relative z-10">
        <h3
          className="text-xl font-bold text-gray-800 mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h3>
        <div className="h-[3px] w-full bg-gradient-to-r from-purple-400 to-blue-400 my-4"></div>
        <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {description}
        </p>
        {listItems && listItems.length > 0 && (
          <ul
            className="space-y-2 text-sm text-gray-600"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-purple-500 text-2xl leading-none">&middot;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ServiceCard;
