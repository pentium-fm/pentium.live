import React, { Component } from 'react';
import Slider from '../../shared/slider'

class Home extends Component {
  render () {
    return (
      <main className="container-fluid">
        <Slider />
        <div className="flex flex-row items-start flex-wrap min-h-screen w-full bg-white text-black pt-10">
          <div className="flex w-full items-center justify-center">
            <h1 className="text-lg lg:text-4xl font-bold">Episodes</h1>
          </div>
        </div>
      </main>
    )
  }
}

export default Home