import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Pages
import Navbar from "./shared/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Playlist from "./pages/Playlist";
import NotFound from "./pages/404";
import Contact from "./pages/Contact";
// Styles
import "../css/main.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main h-full">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/playlist" component={Playlist} />
            <Route path="/contact" component={Contact} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
