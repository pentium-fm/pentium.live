import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import apple from "../../../images/apple_podcasts.png";
import google from "../../../images/google_podcasts.png";
import sticher from "../../../images/stitcher_dark.png";
import spotify from "../../../images/spotify.png";
class Slider extends Component {
  render() {
    let { episode } = this.props;

    return (
      <div className="container mx-auto flex py-3 px-5 lg:px-24 lg:py-20 text-white">
        <div className="w-full px-4 mx-auto flex flex-wrap w-full">
          <div className="flex w-full md:w-1/2">
            <div className="flex flex-wrap items-center justify-start content-start w-full">
              <div className="flex flex-wrap content-start w-full py-3 md:mb-0 mb-5">
                <h1 className="font-bold text-lg lg:text-3xl mb-2">
                  {episode.title}
                </h1>
                <span
                  className="font-thin text-xs lg:text-sm"
                  dangerouslySetInnerHTML={{ __html: episode.description }}
                />
              </div>
              <div className="flex flex-wrap flex-row w-full md:py-3">
                <div className="flex w-full md:w-1/3 mb:pr-3 md:mb-0 mb-3">
                  <button className="bg-white text-black rounded-full hover:bg-green-custom hover:text-white transition w-full text-sm py-2 px-2">
                    <span className="icon">
                      <FontAwesomeIcon icon={faPlay} className="mr-2" />
                    </span>
                    <span className="text ml-2">Listen now</span>
                  </button>
                </div>
                <div className="flex w-full md:w-1/3 md:pl-3">
                  <button className="bg-transparent border border-white text-white hover:border-black hover:text-black transition rounded-full w-full text-sm py-2 px-2">
                    <span className="text ml-2">List of Episodes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex w-1/2">
            <div className="flex items-center justify-end w-full">
              <img
                src={"/static/media/pentium-logo.4b0953b2.jpg"}
                alt="Pentium Podcast"
                className="lg:w-64 md:w-56"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center w-full py-4">
            <div className="flex justify-start w-full mb-3">
              <h2>MORE PLACES TO LISTEN</h2>
            </div>
            <div className="flex justify-start w-full">
              <div className="mr-4">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy84ODlmMTJjL3BvZGNhc3QvcnNz"
                >
                <img src={google} alt="google" />
                </a>
              </div>
              <div className="mr-4">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://open.spotify.com/show/5zU91Rj1Q9WRLf24d2qQHt"
                >
                <img src={spotify} alt="spotify" />
                </a>
              </div>
              <div className="mr-4">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://itunes.apple.com/us/podcast/typehints/id1449284832?mt=2&uo=4"
                >
                <img src={apple} alt="apple" />
                </a>
              </div>
              <div className="mr-4">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.stitcher.com/podcast/anchor-podcasts/typehints"
                >
                <img src={sticher} alt="sticher" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
