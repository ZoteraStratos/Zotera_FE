import { Suspense } from "react";
import Layout from "./Components/Layout";
import Loader from "./Pages/ReuseableComponents/Loader";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Layout />
    </Suspense>
  );
};

export default App;
