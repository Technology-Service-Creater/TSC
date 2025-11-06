import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import emailjs

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Replace with your EmailJS Service ID, Template ID, and Public Key
      const serviceId = 'service_0bcnwtt';
      const templateId = 'template_uig70ej';
      const publicKey = 'KGIfXKJD-n6ERc7-g';

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        to_name: 'TSC', // Or your name/company name
        message: formData.message,
        organization: formData.organization,
        jobTitle: formData.jobTitle,
        phoneNumber: formData.phoneNumber,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({
        // Clear form after successful submission
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        jobTitle: '',
        phoneNumber: '',
        message: '',
        privacyPolicy: false,
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-blue-50">
      <div className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-neutral-800 mb-4">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg font-medium font-['Montserrat'] text-neutral-600">
            Thank you for your interest in TSC&apos;s services. Please provide the following
            information about your business needs to help us serve you better. This information will
            enable us to route your request to the appropriate person. You should receive a response
            within 48 hours.
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
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'CONNECT NOW'}
              </button>
            </div>
          </div>
          {submitMessage && (
            <p
              className={`text-center mt-4 ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
