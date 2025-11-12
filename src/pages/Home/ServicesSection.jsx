import ServicePill from './ServicePill';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    imageSrc: '/Images/AIML.png',
    altText: 'Integrating AI & ML in Software Development',
    students: '40+ Clients',
    duration: '10+ Services',
    title: 'Integrating AI & ML in Software Development',
    author: 'Integrating',
  },
  {
    imageSrc: '/Images/security.png',
    altText: 'Secure Software Development Life Cycle (SDLC)',
    students: '40+ Clients',
    duration: '10+ Services',
    title: 'Secure Software Development Life Cycle (SDLC)',
    author: 'Integrating',
  },
  {
    imageSrc: '/Images/web.png',
    altText: 'Web Development',
    students: '1,611 students',
    duration: '1h 42m',
    title: 'Web Development and App Development',
    author: '10+ Services',
  },
  {
    imageSrc: '/Images/mobile.png',
    altText: 'Mobile Application Development',
    students: '5,282 students',
    duration: '16h 8m',
    title: 'Mobile Application Development',
    author: 'Daniel Scott',
  },
  {
    imageSrc: '/Images/chat.png',
    altText: 'ChatGPT for Creatives',
    students: '16,267 students',
    duration: '1h 18m',
    title: 'ChatGPT for Creatives: AI-Powered SEO, Marketing, & Productivity',
    author: 'Peggy Dean',
  },
  {
    imageSrc: '/Images/Draw.png',
    altText: "How to Draw: A Beginner's Guide",
    students: '14,312 students',
    duration: '5h 57m',
    title: "How to Draw: A Beginner's Guide - Part 1 of The Drawing Laboratory",
    author: 'Brent Eviston',
  },
  {
    imageSrc: '/Images/photo1.png',
    altText: 'Learn Video Editing With Adobe Premiere Pro',
    students: '13,675 students',
    duration: '3h 44m',
    title: 'Learn Video Editing With Adobe Premiere Pro For Beginners (2025)',
    author: 'Jordy Vandeput',
  },
  {
    imageSrc: '/Images/iphone.png',
    altText: 'iPhone Photography Essentials',
    students: '12,395 students',
    duration: '1h 34m',
    title: 'iPhone Photography Essentials: Take Pro Photos With Your iPhone',
    author: 'Sean Dalton',
  },
];

const achievementsData = [
  {
    number: '5+',
    title: 'Years of Excellence',
    svg: (
      <svg
        className="absolute top-0 -right-1 w-8 h-8"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_312_19751"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path d="M24 0H0V24H24V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_312_19751)">
          <path
            d="M12.0008 17.75L5.82881 20.995L7.00781 14.122L2.00781 9.25495L8.90781 8.25495L11.9938 2.00195L15.0798 8.25495L21.9798 9.25495L16.9798 14.122L18.1588 20.995L12.0008 17.75Z"
            fill="url(#paint0_linear_312_19751)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_312_19751"
            x1="11.9938"
            y1="2.00195"
            x2="11.9938"
            y2="20.995"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A468DA" />
            <stop offset="1" stopColor="#149BF5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    number: '100%',
    title: 'Success Rate',
    svg: (
      <svg
        className="absolute -top-2 -right-1 w-10 h-10"
        width="24"
        height="29"
        viewBox="0 0 24 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_312_19763"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path d="M24 0H0V24H24V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_312_19763)">
          <path
            d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z"
            fill="#005BFF"
          />
          <path
            d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z"
            fill="url(#paint0_linear_312_19763)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_312_19763"
            x1="12"
            y1="4"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A468DA" />
            <stop offset="1" stopColor="#149BF5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    number: '200+',
    title: 'Thriving Projects',
    svg: (
      <svg
        className="absolute -top-1 -right-2 w-10 h-10"
        width="24"
        height="29"
        viewBox="0 0 24 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
          fill="#005BFF"
        />
        <path
          d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
          fill="url(#paint0_linear_312_19782)"
        />
        <path
          d="M6 9L8 11L12 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_312_19782"
            x1="9"
            y1="0"
            x2="9"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A468DA" />
            <stop offset="1" stopColor="#149BF5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

function ServicesSection({ services, selectedService, setSelectedService }) {
  const navigate = useNavigate();
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-1 line-clamp-32 lg:mb-16">
          <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl mb-4">
            Our Services
          </div>
          <div className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-6 leading-tight">
            Comprehensive Development <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
              Solutions Tailored for You
            </span>
          </div>
          <div className="font-[Montserrat] font-normal text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Our services encompass a wide range of development solutions tailored to your needs.
            From web to mobile. We ensure your projects are executed with precision and creativity.
          </div>
        </div>
        {/* Services Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service, idx) => (
            <ServicePill
              key={idx}
              title={service.title}
              selected={selectedService === idx}
              onClick={() => setSelectedService(idx)}
            />
          ))}
        </div>
      </div>
      {/* New Card Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={card.imageSrc} alt={card.altText} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                    <span>{card.students}</span>
                    <span>{card.duration}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">{card.title}</h3>
                  <p className="text-gray-700 text-sm">{card.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Achievements Section */}
        <div className="mt-10 flex flex-col lg:flex-row sm:gap-0 md:gap-4 sm:item-start md:items-center justify-around text-center md:max-w-3xl mx-auto space-y-8 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-start md:items-center justify-center gap-4">
            {achievementsData.map((achievement, index) => (
              <div key={index} className="flex  items-center gap-2">
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full font-bold text-gray-800 bg-radial from-blue-300 to-blue-100 text-3xl sm:text-4xl flex-shrink-0">
                  <span className="absolute inset-0 flex items-center justify-center text-xl">
                    {achievement.number}
                  </span>
                  {achievement.svg}
                </div>
                <p className="text-xl text-start sm:text-lg text-gray-600">{achievement.title}</p>
              </div>
            ))}
          </div>
          {/* Let's Talk Button */}
          <div className="mt-8 lg:mt-0">
            <button
              className="bg-gradient-to-b from-purple-500 to-blue-400 text-white px-6 py-2 w-44 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition duration-300"
              onClick={() => navigate('/contact')}
            >
              LET&apos;S TALK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

ServicesSection.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedService: PropTypes.number.isRequired,
  setSelectedService: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  visibleCount: PropTypes.number.isRequired,
  startIdx: PropTypes.number.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  canGoLeft: PropTypes.bool.isRequired,
  canGoRight: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ServicesSection;
