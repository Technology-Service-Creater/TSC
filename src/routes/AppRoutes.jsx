import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import Contact from '../pages/Contact/Contact';
import WhatWeDo from '../pages/WhatWeDo/WhatWeDo';
import ServiceDetails from '../pages/WhatWeDo/Services/ServiceDetails';
import IndustryDetails from '../pages/WhatWeDo/Industries/IndustryDetails';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/industries/:industryId" element={<IndustryDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
