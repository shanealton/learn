import React, { Component } from 'react'
import styled from 'styled-components'

const CommentItem = styled.div`
  margin: 5px 0;

  &:first-of-type {
    font-weight: 600;
  }

  &:last-of-type {
    font-size: 11px;
    color: #777;
  }
`

export default class Comment extends Component {
  render() {
    return (
      <div>
        <CommentItem>{this.props.currentComment.username}</CommentItem>
        <CommentItem>{this.props.currentComment.body}</CommentItem>
        <CommentItem>{this.props.currentComment.timestamp}</CommentItem>
      </div>
    )
  }
}
