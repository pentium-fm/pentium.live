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
              <a href="https://twitter.com/JefferyHus">Hussein Jeffery</a>
            </b>{" "}
            and
            <b>
              {" "}
              <a href="https://twitter.com/Ginix_Labs">Abderrahim Soubai</a>
            </b>{" "}
            interested in web development and software engineering culture.
          </p>
        </div>

        <div class="flex my-4 mt-16">
          <div className="w-1/2 bg-gray-400 md:flex rounded-lg p-6">
            <img
              className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
              src="https://avatars1.githubusercontent.com/u/3521144?s=460&v=4"
              alt="Jeffery"
            />
            <div className="text-center md:text-left">
              <h2 className="text-lg">Jaafary EL Hussein</h2>
              <div className="text-purple-500">Software engineer</div>
              <div className="text-gray-600" />
            </div>
          </div>

          <div className="w-1/2 bg-gray-400  md:flex bg-white rounded-lg p-6">
            <img
              className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
              src="https://avatars0.githubusercontent.com/u/11523791?s=460&v=4"
              alt="Abderrahim"
            />
            <div className="text-center md:text-left">
              <h2 className="text-lg">Abderrahim SOUBAI-ELIDRISI</h2>
              <div className="text-purple-500">Fullstack web developer</div>
              <div className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
