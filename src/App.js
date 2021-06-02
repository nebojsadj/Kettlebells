import React, { useState, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import { animateScroll as Scroll } from "react-scroll";
import Buy from "./components/Buy/Buy";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Kettlebells from "./components/Kettlebells/Kettlebells";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const [secondRoute, setSecondRoute] = useState(true);
  const [order, setOrder] = useState([]);
  const { pathname } = useLocation();

  const toggle = () => {
    setSideOpen(!sideOpen);
  };

  const forBuy = (buy) => {
    setOrder([...order, buy]);
  };

  useEffect(() => {
    pathname === "/" ? setSecondRoute(false) : setSecondRoute(true);
    Scroll.scrollToTop();
  }, [pathname]);

  return (
    <>
      <Navbar secondRoute={secondRoute} toggle={toggle} />
      <Sidebar toggle={toggle} sideOpen={sideOpen} />
      <Route path="/" exact>
        <Kettlebells forBuy={forBuy} />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/buy">
        <Buy order={order} setOrder={setOrder} />
      </Route>
      <Footer />
    </>
  );
}

export default App;
