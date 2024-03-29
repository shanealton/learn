import React, { Component } from 'react'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'

const Container = styled.div`
  display: flex;
`

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  margin: 3px 15px 0 0;
  border-radius: 2px;
  background: #D0D2D3;
`

const CommentBody = styled.div`
  flex: 1;
`

const CommentItem = styled.div`
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

const Action = styled.a`
  font-size: 11px;
  color: #637282;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #637282;
  }
`

export default class Comment extends Component {
  render() {
    return (
      <Container>
        <Avatar />

        <CommentBody>
          <CommentItem>{this.props.currentComment.username}
            <span><TimeAgo date={this.props.currentComment.timestamp} /></span>
          </CommentItem>

          <CommentItem>{this.props.currentComment.body}</CommentItem>
          <Action>Reply</Action>
        </CommentBody>
      </Container>
    )
  }
}
