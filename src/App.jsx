import React, { Component } from "react";
import Home from "components/Home";
import About from "components/About";
import Portfolio from "components/Portfolio";
import Music from "components/Music";
import Contact from "components/Contact";
import Footer from "components/Footer";
import "components/style.css";
class App extends Component {
  componentWillMount() {
    const jquery = document.createElement("script");

    jquery.src = "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js";
    jquery.async = true;

    document.body.appendChild(jquery);

    const particles = document.createElement("script");
    particles.src = "./particles.js";
    particles.async = true;

    document.body.appendChild(particles);
  }

  componentDidMount() {
    const main = document.createElement("script");

    main.src = "./main.js";
    main.async = true;

    document.body.appendChild(main);
  }

  render() {
    return (
      <>
        <Home />
        <About />
        <Portfolio />
        <Music />
        <Contact />
        <Footer />
      </>
    );
  }
}
export default App;
