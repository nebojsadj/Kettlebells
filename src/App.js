import React from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Main/Home/Home";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product"></Route>
        <Route path="/contacts"></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
