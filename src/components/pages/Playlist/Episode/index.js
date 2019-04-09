import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import Bars from '../../../shared/player/bars'

class Episode extends Component {
  constructor(props) {
    super(props)
    // set state
    this.state = {
      isPlaying: false
    }
  }

  setPlayStatus = (isCurrent) => {
    this.setState({
      isPlaying: isCurrent ? !this.state.isPlaying : true
    })
  }

  render() {
    let {episode, setCurrentPlaying, guid, currentPlaying} = this.props
    let {isPlaying} = this.state

    return (
      <div className="flex flex-wrap w-full items-center px-5 pt-3 bg-grey-custom-light" onClick={() => {
        setCurrentPlaying(guid)
        // change bars status
        this.setPlayStatus(currentPlaying === guid)
      }}>
        <div className="w-1/4">
          <img className="w-12 h-12" alt={episode.title} src={episode.image} />
        </div>
        <div className="flex w-3/4 border-b pb-3">
          <div className="flex items-center flex-wrap justify-start w-3/4">
            <div className="w-full py-2">
              <span className="block font-bold text-sm text-grey-custom-dark truncate">{episode.title}</span>
            </div>
            <div className="w-full py-2">
              <p className="font-base text-xs text-grey-custom truncate">{episode.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-end w-1/4">
            {currentPlaying === guid ? <Bars styles="mx-2" isPlaying={isPlaying} /> : ''}
            <audio controls className="hidden">
              <source src={episode.audio} type="audio/mpeg"/>
            </audio>
            <FontAwesomeIcon icon={faEllipsisV} className="text-grey-custom" />
          </div>
        </div>
      </div>
    )
  }
}

export default Episode