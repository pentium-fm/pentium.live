import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCurrentEpisode
} from "../../../store/reducers";

class Player extends Component {
  componentWillReceiveProps(nextProps) {
    let { current } = nextProps;

    if (current) {
      if (this.audio) {
        this.audio.pause();
        this.audio.load();
        this.audio.play();
      }
    }
  }
  
  render() {
    let { audio } = this.props.current;

    return (
      <div className="flex fixed w-full p-5 bg-white shadow bottom-0 left-0">
        {audio ? (
          <audio
            className="hidden"
            autoPlay
            controls
            ref={audio => (this.audio = audio)}
          >
            <source src={audio} type="audio/mpeg" />
          </audio>
        ) : ""}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  current: getCurrentEpisode(state)
})

export default connect(
  mapStateToProps
)(Player);