import React, { Component } from 'react'
import Episode from './Episode'
import Player from './Player'

class Playlist extends Component {
  constructor(props) {
    super(props)
    // set state
    this.state = {
      episodes: []
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
        console.log(item)
        return {
          guid: item.querySelector('guid').textContent,
          title: item.querySelector('title').textContent,
          description: item.querySelector('description').textContent.replace(/(<([^>]+)>)/ig,""),
          audio: item.querySelector('enclosure').getAttribute('url'),
          image: item.getElementsByTagName('itunes:image')[0].getAttribute('href')
        }
      })

      this.setState({
        episodes: items
      })
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="flex flex-wrap w-full sm:w-3/4 h-full">
          <Player />
        </div>
        <div className="flex flex-wrap w-full sm:w-1/4 h-full">
          {this.state.episodes.map(episode => {
            return (
              <div className="flex flex-wrap w-full" key={episode.guid}>
                <Episode episode={episode} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Playlist