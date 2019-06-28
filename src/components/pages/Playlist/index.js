import React, { Component } from "react";
import Episode from "./Episode";
import Player from "./Player";
import Disc from "../../../images/pentium-logo.jpg";

class Playlist extends Component {
  constructor(props) {
    super(props);
    // set state
    this.state = {
      episode: null,
      episodes: [],
      currentPlaying: null,
      playStatus: false,
      playPauseStatus: "paused"
    };
  }

  componentDidMount() {
    fetch("https://anchor.fm/s/889f12c/podcast/rss")
      .then(response => response.text())
      .then(xml => {
        let parser = new DOMParser();
        let document = parser.parseFromString(xml, "application/xml");
        // set array of items
        let items = Array.from(document.getElementsByTagName("item")).map(
          item => {
            return {
              guid: item.querySelector("guid").textContent,
              title: item.querySelector("title").textContent,
              description: item
                .querySelector("description")
                .textContent.replace(/(<([^>]+)>)/gi, ""),
              audio: item.querySelector("enclosure").getAttribute("url"),
              image: Disc
            };
          }
        );

        this.setState({
          episodes: items
        });
      });
  }

  setCurrentPlaying = currentPlaying => {
    var sounds = document.getElementsByTagName("audio");
    for (let i = 0; i < sounds.length; i++) sounds[i].pause();
    this.setState({
      currentPlaying
    });
  };

  setPlayPauseStatus = playPauseStatus => {
    playPauseStatus = playPauseStatus ? "playing" : "paused";
    this.setState({ playPauseStatus });
  };

  render() {
    let { playPauseStatus } = this.state;

    return (
      <div className="container-fluid lg:container flex flex-wrap flex-row md:flex-row-reverse">
        <div className="flex flex-wrap w-full md:w-2/3 lg:w-3/4">
          <Player episode={this.state.episode} currentState={playPauseStatus} />
        </div>
        <div className="flex flex-wrap w-full md:w-1/3 lg:w-1/4 flex-grow max-h-xs lg:max-h-screen bg-gray-custom-light overflow-hidden">
          <div className="flex flex-wrap w-full h-full overflow-auto">
            {this.state.episodes.map(episode => {
              return (
                <div className="flex flex-wrap w-full" key={episode.guid}>
                  <Episode
                    episode={episode}
                    guid={episode.guid}
                    setCurrentPlaying={this.setCurrentPlaying}
                    setPlayPauseStatus={this.setPlayPauseStatus}
                    currentPlaying={this.state.currentPlaying}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
