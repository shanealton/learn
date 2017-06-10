import React, { Component } from 'react'
import styled from 'styled-components'

export default class Comment extends Component {
  render() {
    return (
      <div>
        {this.props.currentComment.username} <br />
        {this.props.currentComment.body} <br />
        {this.props.currentComment.timestamp}
      </div>
    )
  }
}
