import React from "react";

const Contact = () => {
  return (
    <div id="contact" class="contact">
      <h1>Contact</h1>
      <br />
      <br />
      <br />
      <h2>Email: odeascott@gmail.com</h2>
      <div class="logos">
        <a href="https://www.facebook.com/scott.odea" target="_blank">
          <i
            class="fa fa-facebook-square"
            style={{ fontSize: "100px", color: "#4469B0" }}
          />
        </a>
        <a href="https://github.com/scottodea" target="_blank">
          {" "}
          <i
            class="fa fa-github-square"
            style={{ fontSize: "100px", color: "black" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/scott-o-dea-4ab587171/"
          target="_blank"
        >
          <i
            class="fa fa-linkedin-square"
            style={{ fontSize: "100px", color: "#1178B3" }}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCG1pv7A4ABMh4ltvfPB3rIw"
          target="_blank"
        >
          <i
            class="fa fa-youtube"
            style={{ fontSize: "100px", color: "#FC0D1B" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
