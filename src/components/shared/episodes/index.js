import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  getCurrentEpisode
} from "../../../store/reducers";
import { setCurrentEpisode } from "../../../store/middleware";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

class Episodes extends Component {
  render() {
    let { title, description } = this.props.item;
    let { setPlayingEpisode, item } = this.props;
    
    return (
      <div className="flex flex-wrap p-3 w-full md:w-1/2 lg:w-1/3">
        <div className="flex flex-wrap items-start shadow p-3 h-48">
          <div className="flex items-center content-start justify-start w-full mb-2">
            <span className="text-base font-bold">{title}</span>
          </div>
          <div className="flex items-center content-start justify-start w-full mb-5">
            <p className="text-sm font-thin" dangerouslySetInnerHTML={{ __html: `${description.replace('&nbsp;', '').slice(0, 175)}...` }}/>
          </div>
          <div className="flex items-center content-start justify-start w-full mt-auto">
            <div className="flex items-center">
              <button onClick={() => {
                setPlayingEpisode(item);
              }} className="flex items-center text-blue-600 uppercase cursor-pointer transition hover:text-green-custom text-xs">
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="mr-2"
                />
                <span>listen now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  current: getCurrentEpisode(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setPlayingEpisode: setCurrentEpisode
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episodes);