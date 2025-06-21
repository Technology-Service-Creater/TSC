import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    jobTitle: '',
    phoneNumber: '',
    message: '',
    privacyPolicy: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="bg-blue-50">
      <div className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-neutral-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg font-medium font-['Montserrat'] text-neutral-600">
            Our team is here to help! Expect a response within 3-5 working days.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base font-['Montserrat'] transition-colors"
                required
              />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base font-['Montserrat'] transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base font-['Montserrat'] transition-colors"
                required
              />
            </div>

            {/* Organization */}
            <div className="form-group">
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base font-['Montserrat'] transition-colors"
              />
            </div>

            {/* Job Title */}
            <div className="form-group">
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base font-['Montserrat'] transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base font-['Montserrat'] transition-colors"
              />
            </div>

            {/* Message */}
            <div className="form-group md:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows="4"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base font-['Montserrat'] transition-colors resize-none"
                required
              />
            </div>

            {/* Privacy Policy */}
            <div className="form-group md:col-span-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  className="w-4 h-4 text-black rounded border-gray-300 focus:ring-black"
                  required
                />
                <span className="text-sm font-['Montserrat']">
                  I Acknowledge And Agree To The{' '}
                  <a href="/privacy-policy" className="text-black underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-group md:col-span-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-black text-white font-['Montserrat'] font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
              >
                CONNECT NOW
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
