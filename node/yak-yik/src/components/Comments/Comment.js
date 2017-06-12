import React, { Component } from 'react'
import styled from 'styled-components'

const CommentItem = styled.div`
  margin: 5px 0;
  font-size: 12px;

  &:first-of-type {
    font-weight: 600;
    font-size: 14px;
  }

  > span {
    font-size: 11px;
    font-weight: 400;
    margin-left: 10px;
  }
`

export default class Comment extends Component {
  render() {
    return (
      <div>
        <CommentItem>{this.props.currentComment.username}
          <span>{this.props.currentComment.timestamp}</span>
        </CommentItem>

        <CommentItem>{this.props.currentComment.body}</CommentItem>
      </div>
    )
  }
}
