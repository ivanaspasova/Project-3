import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";

import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Copyright from "./components/copyright.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div>
            <Route exact path="/" component={Home} />

            <Route exact path="/cart" component={Cart} />
          </div>

          <Footer />
          <Copyright />
        </div>
      </Router>
    );
  }
}

export default App;
