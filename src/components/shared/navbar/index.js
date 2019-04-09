import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../logo.svg'

class Navbar extends Component {
  render () {
    return (
      <div className="flex flex-no-wrap content-start items-center bg-white shadow border-b flex-grow">
        <div className="flex w-1/2 items-center">
          <div className="flex w-16 h-16 items-center">
            <Link to="/" className="w-16">
              <img src={Logo} alt="typehints" />
            </Link>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-end">
          <div className="flex flex-no-wrap content-start items-center">
            <ul className="flex w-full list-reset">
              <li className="p-5">
                <Link to="/about" className="hover:text-grey-darker no-underline text-grey">About</Link>
              </li>
              <li className="p-5">
                <Link to="/playlist" className="hover:text-grey-darker no-underline text-grey">Playlist</Link>
              </li> 
              <li className="p-5">
                <Link to="/contact" className="hover:text-grey-darker no-underline text-grey">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar