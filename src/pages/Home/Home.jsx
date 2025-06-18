import React from 'react';

function Home() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="font-[Poppins] font-normal text-2xl">This is Poppins font (h1)</h1>
      <h2 className="font-[Montserrat] font-normal text-xl">This is Montserrat font (h2)</h2>
      <p className="font-[inter] font-medium">This is Inter font (p)</p>

      {/* Add more content to test scrolling */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Welcome to TSC</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">Our Services</h3>
        <p>
          We provide comprehensive technology solutions and consulting services to help your
          business grow.
        </p>
        <p>
          From web development to digital marketing, we have the expertise to take your business to
          the next level.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">Why Choose Us</h3>
        <p>
          With years of experience and a dedicated team of professionals, we deliver results that
          exceed expectations.
        </p>
        <p>
          Our innovative approach and cutting-edge technology ensure your success in the digital
          landscape.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">Contact Information</h3>
        <p>
          Get in touch with us to discuss your project requirements and how we can help you achieve
          your goals.
        </p>
        <p>We're here to provide the best solutions for your business needs.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">Additional Content</h3>
        <p>
          This section ensures there's enough content to test scrolling behavior on mobile devices.
        </p>
        <p>The footer should remain fixed at the bottom while this content scrolls smoothly.</p>
      </div>
    </div>
  );
}

export default Home;
