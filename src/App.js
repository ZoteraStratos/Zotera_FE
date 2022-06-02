import React, { Suspense } from "react";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout />
    </Suspense>
  );
};

export default App;
