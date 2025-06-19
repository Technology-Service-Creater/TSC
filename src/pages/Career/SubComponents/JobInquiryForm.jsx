import React from 'react';

const JobInquiryForm = () => (
  <section className="w-full bg-white py-14 px-4 flex flex-col items-center">
    <div className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-2">
        Having trouble finding what you need?
      </h2>
      <p className="text-center text-sm font-['Montserrat'] mb-8">
        Upload your resume, and we'll match you with opportunities that fit you best!
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="file"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Last Name"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Experience"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Position"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-black text-white px-8 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default JobInquiryForm;
