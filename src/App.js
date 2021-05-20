import React, { useState, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import { animateScroll as Scroll } from "react-scroll";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Kettlebells from "./components/Kettlebells/Kettlebells";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const [secondRoute, setSecondRoute] = useState(true);
  const { pathname } = useLocation();

  const toggle = () => {
    setSideOpen(!sideOpen);
  };

  useEffect(() => {
    pathname === "/" ? setSecondRoute(false) : setSecondRoute(true);
    Scroll.scrollToTop();
  }, [pathname]);

  return (
    <>
      <Navbar secondRoute={secondRoute} toggle={toggle} />
      <Sidebar sideOpen={sideOpen} toggle={toggle} />
      <Route path="/" exact>
        <Kettlebells />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Footer />
    </>
  );
}

export default App;
