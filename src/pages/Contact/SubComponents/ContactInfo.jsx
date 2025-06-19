import React from 'react';
import { MapPin, Mail, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const ContactInfo = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#', color: '#E4405F' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: '#0A66C2' },
    { name: 'Facebook', icon: Facebook, url: '#', color: '#1877F2' },
    { name: 'Twitter', icon: Twitter, url: '#', color: '#1DA1F2' },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Information */}
        <div className="space-y-8 lg:sticky lg:top-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-neutral-800 mb-6">
              Head Office
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-6 h-6 mt-1 text-neutral-800 group-hover:text-black transition-colors" />
                <p className="text-base sm:text-lg font-medium font-['Montserrat'] text-neutral-700 group-hover:text-black transition-colors">
                  Sudam Nagar, Dighori, Nagpur, Maharashtra 440034
                </p>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="w-6 h-6 mt-1 text-neutral-800 group-hover:text-black transition-colors" />
                <a
                  href="mailto:support@technologyworldcreater.com"
                  className="text-base sm:text-lg font-medium font-['Montserrat'] text-neutral-700 group-hover:text-black transition-colors"
                >
                  support@technologyworldcreater.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] text-neutral-800 mb-4">
              Socialize with us
            </h3>
            <div className="flex items-center space-x-6">
              {socialLinks.map(social => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent
                      className="w-7 h-7 text-neutral-700 hover:text-black"
                      strokeWidth={1.5}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/Sudam+Nagar,+Dighori,+Nagpur,+Maharashtra+440034"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3 bg-black text-white font-['Montserrat'] font-semibold rounded-lg hover:bg-neutral-800 transition-colors items-center space-x-2"
          >
            <MapPin className="w-5 h-5" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        {/* Map */}
        <div className="w-full h-[450px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.8373287806837!2d79.12595067599551!3d21.12358888061706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1c1b3a55555%3A0x154d881b1e3f13d2!2sSudam%20Nagar%2C%20Dighori%2C%20Nagpur%2C%20Maharashtra%20440034!5e0!3m2!1sen!2sin!4v1709641611099!5m2!1sen!2sin&zoom=16&maptype=roadmap"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
