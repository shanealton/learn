import React, { Component } from 'react'

export default class Zone extends Component {
  render() {
    return (
      <div>
        <h3><a href="#">{this.props.currentZone.name}</a></h3>
        <span>{this.props.currentZone.zipCode}</span>
        <span>{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}
