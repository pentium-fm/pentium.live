import React, { Component } from 'react'

export default class bars extends Component {
  constructor(props) {
    super(props)
    // set state
    this.state = {}
  }

  componentWillMount() {
    this.setState({
      status: this.props.status || 'paused'
    })
  }

  render() {
    return (
      <div className={`bars bars--${this.state.status}`}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    )
  }
}
