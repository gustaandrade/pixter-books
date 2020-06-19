import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Detail from "./pages/Detail";

function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
