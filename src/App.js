import React, { Suspense } from 'react';
import Navbar from './Components/Navbar';




const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
    </Suspense>
  );
};

export default App;
