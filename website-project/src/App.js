import React from "react";
import Website from "./website.js";
import Navbar from "./navbar.js";
import Paragraph from "./paragraph.js";
import Cards from "./cards.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Website />
        <Navbar />
        <Paragraph />
        <Cards />
      </div>
    );
  }
}

export default App;
