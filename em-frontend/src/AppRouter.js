// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import SignUp from "./components/Auth/SignUp";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/signup" component={SignUp} />
      <Route component={NotFound} />
    </Router>
  );
};

export default AppRouter;
