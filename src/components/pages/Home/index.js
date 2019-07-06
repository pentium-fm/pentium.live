import React, { Component } from "react";
import Slider from "../../shared/slider";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import fetchEpisodesAction from "../../../store/api";
import {
  getEpisodes,
  getLatestEpisode
} from "../../../store/reducers";

class Home extends Component {
  componentWillMount() {
    const { fetchEpisodes } = this.props;
    // cast
    fetchEpisodes();
  }

  render() {
    const {latest} = this.props;
    console.log(latest)
    return (
      <main className="container-fluid">
        <Slider episode={latest} />
        <div className="flex flex-row items-start flex-wrap min-h-screen w-full bg-white text-black pt-10">
          <div className="flex w-full items-center justify-center">
            <h1 className="text-lg lg:text-4xl font-bold">Episodes</h1>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  episodes: getEpisodes(state),
  latest: getLatestEpisode(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchEpisodes: fetchEpisodesAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home, Slider);
