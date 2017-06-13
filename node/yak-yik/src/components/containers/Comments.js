import React, { Component } from 'react'
import update from 'immutability-helper'
import styled from 'styled-components'
import Comment from '../presentation/Comment'

const Container = styled.div`
  padding: 10px 40px;
`

const Breadcrumbs = styled.h3 `
  font-size: 13px;
  font-weight: 400;
  color: #637282;
  margin: 0 0 20px 0;
`

const List = styled.ul`
  margin: 0;
  padding: 0;

  > li {
    list-style: none;
    border-bottom: 1px solid #E6E8EB;
    margin: 0 0;
    padding: 15px 0;
  }
`

export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comment: {
        username: '',
        body: '',
        timestamp: '1 hour ago'
      },
      list: [
        {body: 'comment 1', username: 'shanealton', timestamp: '1 hour ago'},
        {body: 'comment 2', username: 'shanealton', timestamp: '1 hour ago'},
        {body: 'comment 3', username: 'shanealton', timestamp: '1 hour ago'}
      ]
    }
  }

  submitComment() {
    let updatedList = update(this.state.list, {$push: [this.state.comment]})
    this.setState({list: updatedList})
  }

  updateUsername(e) {
    let updatedComment = update(this.state.comment, {username: {$set: e.target.value}})
    this.setState({comment: updatedComment})
  }

  updateBody(e) {
    let updatedComment = update(this.state.comment, {body: {$set: e.target.value}})
    this.setState({comment: updatedComment})
  }

  render() {
    const commentList = this.state.list.map((comment, i) => {
      return( <li key={i}><Comment currentComment={comment} /></li> )
    })
    return (
      <Container>
        <Breadcrumbs>Zone 1</Breadcrumbs>
        <List>{commentList}</List>

        <input onChange={this.updateUsername.bind(this)} type="text" placeholder="Username" /><br />
        <input onChange={this.updateBody.bind(this)}type="text" placeholder="Say something..." /><br />
        <button onClick={this.submitComment.bind(this)}>Add Comment</button>
      </Container>
    )
  }
}
