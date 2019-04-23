import React from "react";
const Portfolio = () => {
  return (
    <div id="portfolio" class="portfolio">
      <h1>Portfolio</h1>
      <div class="port-flex">
        <div class="port-display">
          <a href="https://ancient-inlet-87473.herokuapp.com/" target="_blank">
            <img src="Contrack.jpg" alt="Contrack" />
          </a>
          <h2>Contrack</h2>
        </div>

        <div class="port-display">
          <a
            href="http://swellbeing.s3-website-ap-southeast-2.amazonaws.com/"
            target="_blank"
          >
            {" "}
            <img src="Swellbeing.jpg" alt="Swellbeing" />
          </a>
          <h2>Swellbeing</h2>
        </div>

        <div class="port-display">
          <img src="decibel.jpg" alt="Decibel" />
          <h2>Decibel</h2>
        </div>

        <div class="port-display">
          <a
            href="http://image-finder.s3-website-ap-southeast-2.amazonaws.com/"
            target="_blank"
          >
            <img src="ImageFinder.jpg" alt="ImageFinder" />
          </a>
          <h2>Image Finder</h2>
        </div>
      </div>

      <h2 class="skills">Skills</h2>
      <div class="code-logos">
        <img src="Ruby.png" alt="Ruby" />
        <img id="fatten" src="HTML.png" alt="HTML" />
        <img src="CSS.png" alt="CSS" />
        <img src="Javascript.png" alt="Javascript" />
        <img src="react.png" alt="React" />
        <img src="mongo.jpeg" alt="Mongo" />
        <img src="rails.png" alt="Rails" />
        <img src="sass.svg" alt="Sass" />
        <img src="Redux.png" alt="Redux" />
      </div>
    </div>
  );
};

export default Portfolio;
