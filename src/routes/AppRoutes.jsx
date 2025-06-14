import React from 'react'

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whatwedo" element={<WhatWeDo />} >
            <Route path="/whatwedo/web-development" element={<WebDevelopment />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default AppRoutes
