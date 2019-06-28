import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faPlay,
  faPause
} from "@fortawesome/free-solid-svg-icons";
import Bars from "../../../shared/player/bars";

class Episode extends Component {
  constructor(props) {
    super(props);
    // set state
    this.state = {
      isPlaying: false,
      playPauseButton: faPlay
    };
  }

  setPlayStatus = isCurrent => {
    let playingNow = isCurrent ? !this.state.isPlaying : true;
    this.setState({
      isPlaying: playingNow,
      playPauseButton: playingNow ? faPause : faPlay
    });
    // play the sound
    if (playingNow) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  };

  render() {
    let {
      episode,
      setCurrentPlaying,
      guid,
      currentPlaying,
      setPlayPauseStatus
    } = this.props;
    let { isPlaying, playPauseButton } = this.state;

    return (
      <div className="flex flex-wrap w-full items-center px-5 pt-3">
        <div className="w-1/4 pr-6">
          <div
            className="w-full h-12 relative bg-center bg-cover"
            style={{ backgroundImage: `url(${episode.image})` }}
          >
            <div className="flex items-center justify-center black-transparent inset-0 z-10 absolute">
              <FontAwesomeIcon
                icon={playPauseButton}
                className="text-white"
                onClick={() => {
                  setCurrentPlaying(guid);
                  setPlayPauseStatus(!isPlaying);

                  // change bars status
                  this.setPlayStatus(currentPlaying === guid);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex w-3/4 border-b pb-3">
          <div className="flex items-center flex-wrap justify-start w-3/4">
            <div className="w-full py-2">
              <span className="block font-bold text-sm text-gray-custom-dark truncate">
                {episode.title}
              </span>
            </div>
            <div className="w-full py-2">
              <p className="font-base text-xs text-gray-custom truncate">
                {episode.description}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end w-1/4">
            {currentPlaying === guid ? (
              <Bars styles="mx-2" isPlaying={isPlaying} />
            ) : (
              ""
            )}
            <audio
              controls
              className="hidden"
              ref={audio => (this.audio = audio)}
            >
              <source src={episode.audio} type="audio/mpeg" />
            </audio>
            <FontAwesomeIcon icon={faEllipsisV} className="text-gray-custom" />
          </div>
        </div>
      </div>
    );
  }
}

export default Episode;
