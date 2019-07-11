import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  getCurrentEpisode
} from "../../../store/reducers";
import { setCurrentEpisode } from "../../../store/middleware";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-regular-svg-icons";

class Episodes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playPauseIcon: faPlayCircle,
      isCurrent: false
    }
  }

  componentWillReceiveProps(nextProps) {
    let { current } = nextProps;
    let { guid } = this.props.item;

    if (current) {
      if (current.guid === guid) {
        this.setState({
          playPauseIcon: faPauseCircle,
          isCurrent: true
        })
      } else {
        this.setState({
          playPauseIcon: faPlayCircle,
          isCurrent: false
        })
      }
    }
  }

  render() {
    let { title, description } = this.props.item;
    let { setPlayingEpisode, item } = this.props;
    let { playPauseIcon, isCurrent } = this.state;
    
    return (
      <div className="flex flex-wrap p-3 w-full md:w-1/2 lg:w-1/3">
        <div className={`flex flex-wrap items-start shadow p-3 h-48 transition ${isCurrent ? 'bg-blue-custom text-white' : ''}`}>
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
              }} className={`flex items-center uppercase cursor-pointer transition ${isCurrent ? 'text-white' : 'text-blue-600 hover:text-green-custom'}`}>
                <FontAwesomeIcon
                  icon={playPauseIcon}
                  className="mr-2 text-xs"
                />
                <span className="text-xs">listen now</span>
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