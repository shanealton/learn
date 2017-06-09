import React, { Component } from 'react'

export default class Zone extends Component {
  render() {
    return (
      <div>
        <h2><a href="#">{this.props.currentZone.name}</a></h2>
        <span>{this.props.currentZone.zipCode}</span><br />
        <span>{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}
