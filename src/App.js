import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AppConsumer } from "./context";
import { Search } from "./pages/search";
import { Footer } from "./components/Footer";

function App() {
  return (
    <AppConsumer>
      <Route path="/" component={Home} exact />
      <Route
        path="/search/:country/:currency/:locale/:originplace/:destinationplace/:outboundpartialdate/:inboundpartialdate"
        component={Search}
        exact
      />

      <Footer />
    </AppConsumer>
  );
}

export default App;
