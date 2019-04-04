import React, { Component } from 'react'
import Disc from '../../../../images/typehints_disc.png'

class Player extends Component {
  render() {
    return (
      <div className="flex items-center justify-center flex-wrap w-full">
        <div className="w-full">
          <div className="flex items-center justify-center p-10">
            <div className="w-48 h-48">
              <img src={Disc} alt="Typehints" className="rotate-center" />
            </div>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    )
  }
}

export default Player
