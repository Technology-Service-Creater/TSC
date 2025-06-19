import React from 'react';
import AppRoutes from './routes/AppRoutes';
import ScrollToTopButton from './components/common/ScrollToTopButton';

const App = () => {
  return (
    <>
      <AppRoutes />
      <ScrollToTopButton />
    </>
  );
};

export default App;
