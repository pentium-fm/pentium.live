import React, { Component } from 'react'

export default class bars extends Component {
  constructor(props) {
    super(props)
    // create refs
    this.svg = React.createRef()
    // set state
    this.state = {}
  }

  componentDidUpdate() {
    return this.props.isPlaying ? this.svg.current.unpauseAnimations() : this.svg.current.pauseAnimations()
  }

  render() {
    let {styles} = this.props
    
    return (
      <div className={`bars ${styles}`}>
        <svg width="10.5" height="10.5" ref={this.svg}>
          <g transform="translate(0,10.5)">
            <g transform="scale(1,-1)">
            <rect x="0" y="0" width="2" height="3.5" fill="#7F8287" transform="scale(1 2.6738)">
              <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0s" dur="0.8s" repeatCount="indefinite"></animateTransform>
            </rect>
            <rect x="4" y="0" width="2" height="3.5" fill="#7F8287" transform="scale(1 2.3262)">
              <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.2s" dur="0.8s" repeatCount="indefinite"></animateTransform>
            </rect>
            <rect x="8" y="0" width="2" height="3.5" fill="#7F8287" transform="scale(1 1.3262)">
              <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.4s" dur="0.8s" repeatCount="indefinite"></animateTransform>
            </rect>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}
