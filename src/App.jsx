import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Welcomanimation from "./components/Animation/Welcomanimation.jsx";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [visiHidden, setVisiHidden] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisiHidden(false);
    }, 6500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {visiHidden ? (
        <AnimatePresence>
          <Welcomanimation />
        </AnimatePresence>
      ) : (
     
          <div className="w-full min-h-[100vh] relative">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
  
      )}
    </>
  );
};

export default App;
