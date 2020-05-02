import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AppConsumer } from "./context";
import { Search } from "./pages/search";

function App() {
  return (
    <AppConsumer>
      <Route path="/" component={Home} exact />
      <Route path="/search" component={Search} exact />
    </AppConsumer>
  );
}

export default App;
