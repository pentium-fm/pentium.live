import React, { Component } from 'react'
import Logo from '../../logo.svg'

class Navbar extends Component {
  render () {
    return (
      <div className="flex flex-no-wrap content-start elements-center">
        <div className="w-1/3">
          <div className="w-8 h-8">
            <img src={Logo} alt="typehints" />
          </div>
        </div>
        <div className="w-2/3">
          <div className="flex flex-no-wrap content-start elements-center">
            <ul className="w-full list-reset">
              <li className="">About</li>
              <li className="">Playlist</li>
              <li className="">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar