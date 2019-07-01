import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './sidebar';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  render() {
    let {show} = this.state;

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
                    to="/playlist"
                    className="hover:text-gray-700 no-underline text-gray"
                  >
                    Episodes
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
          <div className="flex w-full items-center justify-end">
            <span className="p-5 cursor-pointer">
              <FontAwesomeIcon
                icon={faBars}
                className="text-gray"
                onClick={() => {
                  this.setState({
                    show: !show
                  })
                }}
              />
            </span>
          </div>
        </div>
        <Sidebar showSideBar={show} />
      </div>
    );
  }
}

export default Navbar;
