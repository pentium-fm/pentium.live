import React, { Component } from "react";
import Slider from "../../shared/slider";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import fetchEpisodesAction from "../../../store/api";
import {
  getEpisodes,
  getLatestEpisode
} from "../../../store/reducers";
import Episodes from '../../shared/episodes';
import Player from '../../shared/player'

class Home extends Component {
  componentWillMount() {
    const { fetchEpisodes } = this.props;
    // cast
    fetchEpisodes();
  }

  render() {
    const { latest, episodes } = this.props;
    
    return (
      <main className="container-fluid">
        <Slider episode={latest} />
        <div className="flex flex-row content-start items-start flex-wrap min-h-screen w-full bg-white text-black mb-24 pt-10">
          <div className="container mx-auto">
            <div className="flex w-full items-center justify-center">
              <h1 className="text-lg lg:text-4xl font-bold">Episodes</h1>
            </div>
            <div className="flex flex-wrap w-full items-center justify-start content-center p-4">
              {
                episodes.map(episode => {
                  return (
                    <Episodes item={episode} key={episode.guid} />
                  );
                })
              }
            </div>
          </div>
        </div>
        <Player />
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
)(Home);
