import React, { Component } from 'react'

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
      <div className="flex flex-wrap">
        {this.state.episodes.map(episode => {
          return (
            <div className="card bg-white border shadow flex flex-no-wrap w-1/3" key={episode.guid}>
              <div className="card-header p-3 w-1/3">
                <img className="w-16 h-16" src={episode.image} alt={episode.title} />
              </div>
              <div className="card-body p-3 w-auto">
                <div className="flex flex-wrap flex-row w-full">
                  <div className="w-full">
                    <h3 className="text-black font-bold">{episode.title}</h3>
                  </div>
                  <div className="text-grey-dark font-sm w-full">
                    <p className="py-2">{episode.description}</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <audio controls>
                  <source src={episode.audio} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Playlist