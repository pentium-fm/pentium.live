import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="text-black">
        <div className="mt-10">
          <h1>About</h1>
          <p className="mt-5">
            Pentium radio (formerly Typehints) is a Moroccan podcast (Moroccan
            dialect aka Darija) hosted by{" "}
            <b>
              {" "}
              <a href="https://twitter.com/Ginix_Labs">Hussein Jeffery</a>
            </b>{" "}
            and
            <b>
              {" "}
              <a href="https://twitter.com/Ginix_Labs">Abderrahim Soubai</a>
            </b>{" "}
            interested in web development and software engineering culture.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
