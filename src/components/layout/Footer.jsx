import { Facebook, Instagram, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1E2222] text-white">
      {/* Subtle background pattern */}
      <div className="relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#A468DA] to-[#149BF5]"></div>
        </div>

        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start justify-between py-8 lg:py-14 px-4 sm:px-6 relative z-10">
          {/* Company Info Section */}
          <div className="flex flex-col gap-4 w-full lg:w-auto mb-8 lg:mb-0">
            <div className="flex items-center gap-2 group">
              <img
                src="/Images/logo.png"
                alt="logo"
                className="h-16 w-14 lg:h-24 lg:w-20 transition-transform duration-300 group-hover:scale-105"
              />
              <Link
                to="/"
                className="font-[Poppins] font-bold text-xl lg:text-2xl xl:text-6xl transition-all duration-300 hover:text-[#A468DA] hover:drop-shadow-lg"
              >
                TSC
              </Link>
            </div>
            <div className="flex items-center justify-start gap-3 lg:gap-4 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer group">
              <Mail className="w-4 h-4 lg:w-5 lg:h-5 group-hover:text-[#A468DA] transition-colors duration-300" />
              <span className="font-[Montserrat] text-xs lg:text-sm">
                support@technologyworldcreater.com
              </span>
            </div>
            <div className="flex items-center justify-start gap-3 lg:gap-4 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer group">
              <MapPin className="w-4 h-4 lg:w-5 lg:h-5 group-hover:text-[#A468DA] transition-colors duration-300" />
              <span className="font-[Montserrat] text-xs lg:text-sm">
                Sudam Nagar, Dighori, Nagpur
              </span>
            </div>
            <div className="flex items-center justify-start gap-3 lg:gap-4">
              <Facebook className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 hover:text-[#A468DA] transition-all duration-300 cursor-pointer hover:scale-110 hover:drop-shadow-lg" />
              <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 hover:text-[#A468DA] transition-all duration-300 cursor-pointer hover:scale-110 hover:drop-shadow-lg" />
              <Twitter className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 hover:text-[#A468DA] transition-all duration-300 cursor-pointer hover:scale-110 hover:drop-shadow-lg" />
              <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 hover:text-[#A468DA] transition-all duration-300 cursor-pointer hover:scale-110 hover:drop-shadow-lg" />
            </div>
          </div>

          {/* Links Sections - Mobile Grid */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row gap-6 lg:gap-8 w-full lg:w-auto">
            {/* Our Company */}
            <div className="flex flex-col gap-3 lg:gap-5">
              <div className="font-[Poppins] font-bold text-lg lg:text-xl relative">
                Our Company
                <div className="absolute -bottom-1 lg:-bottom-2 left-0 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-[#A468DA] to-[#149BF5] rounded-full"></div>
              </div>
              <div className="font-[Montserrat] font-medium flex flex-col gap-2 lg:gap-5">
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Home
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  About
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Services
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  News
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Contact
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-3 lg:gap-5">
              <div className="font-[Poppins] font-bold text-lg lg:text-xl relative">
                Services
                <div className="absolute -bottom-1 lg:-bottom-2 left-0 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-[#A468DA] to-[#149BF5] rounded-full"></div>
              </div>
              <div className="font-[Montserrat] font-medium flex flex-col gap-2 lg:gap-5">
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Market Research
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Market Analysis
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  SEO Consultancy
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Page Ranking
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  SMM
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 lg:gap-5">
              <div className="font-[Poppins] font-bold text-lg lg:text-xl relative">
                Features
                <div className="absolute -bottom-1 lg:-bottom-2 left-0 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-[#A468DA] to-[#149BF5] rounded-full"></div>
              </div>
              <div className="font-[Montserrat] font-medium flex flex-col gap-2 lg:gap-5">
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Brand Strategy
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Audience Analytics
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Copywriting
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Team Training
                </div>
                <div className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1 lg:hover:translate-x-2 transform text-sm lg:text-base">
                  Email Marketing
                </div>
              </div>
            </div>

            {/* Subscribe */}
            <div className="flex flex-col gap-3 lg:gap-5">
              <div className="font-[Poppins] font-bold text-lg lg:text-xl relative">
                Subscribe
                <div className="absolute -bottom-1 lg:-bottom-2 left-0 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-[#A468DA] to-[#149BF5] rounded-full"></div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-2 lg:p-3 font-[Montserrat] font-medium rounded-lg bg-[#2A2F2F] text-white border border-gray-600 focus:border-[#A468DA] focus:outline-none focus:ring-2 focus:ring-[#A468DA] focus:ring-opacity-30 transition-all duration-300 placeholder-gray-400 hover:border-gray-500 text-sm lg:text-base"
                />
              </div>
              <button className="font-[Montserrat] font-medium flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white w-full justify-center text-xs lg:text-sm mt-2 lg:mt-4 hover:shadow-xl hover:shadow-[#A468DA]/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#A468DA] focus:ring-opacity-50 active:scale-95">
                Follow Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom border with gradient */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

        {/* Copyright section */}
        <div className="max-w-screen-xl mx-auto py-3 lg:py-6 px-4 sm:px-6 text-center">
          <p className="text-gray-400 font-[Montserrat] text-xs lg:text-sm">
            © {new Date().getFullYear()} TSC. All rights reserved. | Technology World Creater
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
