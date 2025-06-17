import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        {serviceId
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </h1>
      <div className="prose max-w-none">
        <p>Service details coming soon...</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
