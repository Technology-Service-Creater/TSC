import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({
  title = null,
  description = null,
  subtitle = null,
  link = null,
  listItems = null,
}) => {
  const cardContent = (
    <div
      className="relative overflow-hidden bg-gradient-to-b  p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full "
      style={{
        background:
          'linear-gradient(180deg, rgba(164, 104, 218, 0.1) 0%, rgba(20, 155, 245, 0.1) 100%)',
      }}
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2 font-['Poppins']">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mb-4 font-['Montserrat']"> {subtitle}</p>}

        <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-purple-400 to-blue-400 my-4"></div>
        <p className="text-sm text-gray-600 mb-4 font-['Montserrat']">{description}</p>
        {listItems && listItems?.length > 0 && (
          <ul className="space-y-2 text-sm text-gray-600 font-['Montserrat']">
            {listItems?.map((item, index) => (
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
