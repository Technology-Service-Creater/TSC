import { Facebook, Instagram, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#1E2222] text-white">
      <div className="max-w-screen-xl mx-auto flex items-start justify-between">
        <div className="flex flex-col gap-4 py-10">
          <div className="flex items-center gap-2">
            <img src="/Images/logo.png" alt="logo" className="h-24 w-20" />
            <Link to="/" className="font-[Poppins] font-normal text-2xl md:text-6xl">
              TSC
            </Link>
          </div>
          <div className="flex item-center justify-start gap-4">
            <Mail />
            support@technologyworldcreater.com
          </div>
          <div className="flex item-center justify-start gap-4">
            <MapPin />
            Sudam Nagar, Dighori, Nagpur
          </div>
          <div className="flex item-center justify-start gap-4">
            <Facebook />
            <Linkedin />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div>
          <div className="font-[Poppins] font-bold">Our Company</div>
          <div className="font-[Montserrat] font-medium">
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>News</div>
            <div>Contact</div>
          </div>
        </div>
        <div>
          <div className="font-[Poppins] font-bold">Services</div>
          <div className="font-[Montserrat] font-medium">
            <div>Market Research</div>
            <div>Market Analysis</div>
            <div>SEO Consultancy</div>
            <div>Page Ranking</div>
            <div>SMM</div>
          </div>
        </div>
        <div>
          <div className="font-[Poppins] font-bold">Features</div>
          <div className="font-[Montserrat] font-medium">
            <div>Brand Strategy</div>
            <div>Audience Analytics</div>
            <div>Copywriting</div>
            <div>Team Training</div>
            <div>Email Marketing</div>
          </div>
        </div>
        <div>
          <div className="font-[Poppins] font-bold">Subscribe</div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-2 font-[Montserrat] font-medium rounded-md bg-[#1E2222] text-white border border-gray-500"
            />
          </div>
          <button className="font-[Montserrat] font-medium flex items-center gap-2 px-4 py-2.5 rounded-md bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white w-full justify-center text-sm mt-4">
            Follow Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
