import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    let { show } = this.state;

    return (
      <div className="flex flex-no-wrap content-start items-center flex-grow">
        <div className="flex w-full z-10">
          <div className="hidden w-full items-center justify-end">
            <div className="flex flex-no-wrap content-start items-center">
              <ul className="flex w-full list-reset">
                <li className="p-5">
                  <Link
                    to="/"
                    className="hover:text-gray-700 no-underline text-gray"
                  >
                    Home
                  </Link>
                </li>
                <li className="p-5">
                  <Link
                    to="/about"
                    className="hover:text-gray-700 no-underline text-gray"
                  >
                    About
                  </Link>
                </li>
                <li className="p-5">
                  <Link
                    to="/contact"
                    className="hover:text-gray-700 no-underline text-gray"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap w-full items-center justify-end">
            <a href="https://forms.gle/DN2N53cPWKHGaDRZ7" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border border-white text-white hover:border-black hover:text-black transition rounded-full w-full text-sm py-2 px-2">
                <span className="text ml-2"> Ask a question </span>
              </button>
            </a>

            <div className="flex flex-wrap items-center content-start justify-center px-4 py-3 lg:p-4">
              <span className="text-2xl text-center cursor-pointer w-full">
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-gray"
                  onClick={() => {
                    this.setState({
                      show: !show
                    });
                  }}
                />
              </span>
              <span className="text-white text-center text-xs capitalize w-full">
                menu
              </span>
            </div>
          </div>
        </div>
        <Sidebar showSideBar={show} />
      </div>
    );
  }
}

export default Navbar;
