import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

class Slider extends Component {
  render() {
    return (
      <div className="flex w-full p-5 lg:px-24 lg:py-32 text-white">
        <div className="xl:w-3/4 w-full px-4 mx-auto flex flex-wrap w-full">
          <div className="flex w-full md:w-1/2">
            <div className="flex flex-wrap items-center justify-start w-full">
              <div className="block w-full py-3 md:mb-0 mb-5">
                <h1 className="font-bold text-lg lg:text-3xl mb-2">The brave new world of work</h1>
                <span className="font-thin text-xs lg:text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi accusantium quos amet eaque id dolorem quia blanditiis rem adipisci repellat ducimus alias enim explicabo sunt, ipsum commodi, consectetur ullam! Facere?</span>
              </div>
              <div className="flex flex-wrap flex-row w-full md:py-3">
                <div className="flex w-full md:w-1/2 mb:pr-3 md:mb-0 mb-3">
                  <button className="btn bg-white text-black rounded-full py-2 md:py-3 hover:bg-green-custom hover:text-white transition px-4 w-full">
                    <span className="icon">
                      <FontAwesomeIcon
                        icon={faPlay}
                        className="mr-2"
                      />
                    </span>
                    <span className="text ml-2">Listen now</span>
                  </button>
                </div>
                <div className="flex w-full md:w-1/2 md:pl-3">
                  <button className="btn bg-transparent border border-white text-white hover:border-black hover:text-black transition rounded-full py-2 md:py-3 px-4 w-full">
                    <span className="text ml-2">List of Episodes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex w-1/2">
            <div className="flex items-center justify-end w-full">
              <img src={"/static/media/pentium-logo.4b0953b2.jpg"} alt="Pentium Podcast" className="lg:w-64 md:w-56" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider