import React, { Component } from "react";
import Slider from "../../shared/slider";
import { connect } from "react-redux";

import * as actions from "../../../actions";

class Home extends Component {
  componentDidMount() {
    this.props.getAllEpisodes();

    setTimeout(_ => console.log(this.props.episodes), 1000);
  }
  render() {
    return (
      <main className="container-fluid">
        <Slider />
        <div className="flex flex-row items-start flex-wrap min-h-screen w-full bg-white text-black pt-10">
          <div className="flex w-full items-center justify-center">
            <h1 className="text-lg lg:text-4xl font-bold">Episodes</h1>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(Home);
