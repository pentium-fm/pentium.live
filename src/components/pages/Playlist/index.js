import React, { Component } from 'react'
import Episode from './Episode'
import Player from './Player'
import Disc from '../../../images/typehints_disc.png'

class Playlist extends Component {
  constructor(props) {
    super(props)
    // set state
    this.state = {
      episodes: [],
      currentPlaying: null,
      playStatus: false
    }
  }

  componentDidMount() {
    fetch('https://anchor.fm/s/889f12c/podcast/rss')
    .then(response => response.text())
    .then(xml => {
      let parser = new DOMParser()
      let document = parser.parseFromString(xml, "application/xml")
      // set array of items
      let items = Array.from(document.getElementsByTagName('item')).map((item) => {
        return {
          guid: item.querySelector('guid').textContent,
          title: item.querySelector('title').textContent,
          description: item.querySelector('description').textContent.replace(/(<([^>]+)>)/ig,""),
          audio: item.querySelector('enclosure').getAttribute('url'),
          image: Disc
        }
      })

      this.setState({
        episodes: items
      })
    })
  }

  setCurrentPlaying = (currentPlaying) => {
    this.setState({currentPlaying})
  }

  render() {
    return (
      <div className="container-fluid lg:container flex flex-wrap flex-row md:flex-row-reverse">
        <div className="flex flex-wrap w-full md:w-2/3 lg:w-3/4 h-full">
          <Player />
        </div>
        <div className="flex flex-wrap w-full md:w-1/3 lg:w-1/4 h-full">
          {this.state.episodes.map(episode => {
            return (
              <div className="flex flex-wrap w-full" key={episode.guid}>
                <Episode episode={episode}
                  guid={episode.guid}
                  setCurrentPlaying={this.setCurrentPlaying}
                  currentPlaying={this.state.currentPlaying}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Playlist