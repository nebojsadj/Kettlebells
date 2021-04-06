import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/Main/Home";
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
    </>
  );
}

export default App;
