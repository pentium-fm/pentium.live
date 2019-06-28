import React, { Component } from "react";
import Disc from "../../../../images/pentium-logo.jpg";

class Player extends Component {
  render() {
    let { currentState, episode } = this.props;

    return (
      <div className="flex items-start justify-center flex-wrap w-full">
        <div className="w-full">
          <div className="flex items-center justify-center p-10">
            <div className="flex items-center justify-center w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden relative">
              <div className="flex justify-center items-center w-full absolute inset-0 z-10">
                <div className="rounded-full bg-white w-8 h-8" />
              </div>
              <img
                src={Disc}
                alt="Pentium"
                className={`rotate-center ${currentState}`}
              />
            </div>
          </div>
        </div>
        <div className="w-full" />

        <h3>{episode ? episode.title : ""}</h3>
        <p style={{ textAlign: "center" }}>
          {episode ? episode.description : ""}{" "}
        </p>
      </div>
    );
  }
}

export default Player;
