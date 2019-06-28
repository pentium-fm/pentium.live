import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    let {showSideBar} = this.props
    return (
      <div className={`fixed bg-white z-20 top-0 shadow h-full flex flex-wrap items-start justify-center w-64 transition ${showSideBar ? 'left-0' : 'left-n'}`}>
        hello {showSideBar}
      </div>
    )
  }
}

export default Sidebar