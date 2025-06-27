import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
        {description && (
          <p
            className="text-sm text-gray-600 mb-4 font-['Montserrat']"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {listItems && listItems?.length > 0 && (
          <ul className="space-y-2 text-sm text-gray-600 font-['Montserrat']">
            {listItems?.map((item, index) => (
              <li key={index} className="flex items-start">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        {link && (
          <div className="mt-6 flex-1 flex items-end">
            <Link
              to={link}
              className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white font-semibold font-['Montserrat'] shadow hover:from-[#149BF5] hover:to-[#A468DA] transition-colors duration-200 text-sm"
            >
              Explore More <ArrowRight className="inline ml-2 w-4 h-4 align-middle" />
            </Link>
          </div>
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
