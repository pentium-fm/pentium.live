import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCurrentEpisode
} from "../../../store/reducers";

class Player extends Component {
  componentDidUpdate = () => {
    console.log("hey")
  }

  render() {
    let { audio } = this.props.current;

    return (
      <div className="flex fixed bottom left">
        <audio
          controls
          ref={audio => (this.audio = audio)}
        >
          <source src={audio} type="audio/mpeg" />
        </audio>
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