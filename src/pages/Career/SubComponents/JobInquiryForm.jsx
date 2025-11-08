import React, { useState, forwardRef } from 'react';

const JobInquiryForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    experience: '',
    position: '',
    file: null,
  });

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div ref={ref} className="w-full bg-white py-14 px-4 flex flex-col items-center">
      <section className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] text-neutral-800 mb-4">
            Having trouble finding what you need?
          </h2>
          <p className="text-base sm:text-lg font-medium font-['Montserrat'] text-neutral-600">
            Upload your resume, and we&apos;ll match you with opportunities that fit you best!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="form-group">
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Experience"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base font-['Montserrat'] transition-colors"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Position"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base font-['Montserrat'] transition-colors"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base font-['Montserrat'] transition-colors"
                required
              />
            </div>
            <div className="form-group md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="px-16 py-3 bg-black text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
});

JobInquiryForm.displayName = 'JobInquiryForm';

export default JobInquiryForm;
