import React, { Component } from 'react'
import update from 'immutability-helper'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 500px;
  width: 100%;
`

const Breadcrumbs = styled.h3 `
  font-size: 13px;
  font-weight: 400;
  color: #637282;
  margin: 0 0 20px 0;
`

const CommentBox = styled.textarea`
  flex: 1 0 100%;
  width: 100%;
  height: 80px;
  padding: 15px;
  outline: none;
  border: 1px solid #E6E8EB;
  border-radius: 2px;
  resize: none;
  font-size: 12px;
`

const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  margin: 15px 0 15px auto;
  border: 1px solid transparent;
  border-radius: 2px;
  outline: none;
  background: #333;
  color: #fff;
  font-size: 12px;
`

export default class CreateComment extends Component {
  constructor() {
    super()
    this.state = {
      comment: {
        username: 'shanealton',
        body: ''
      }
    }
  }

  submitComment(e) {
    console.log('submitComment: ' + JSON.stringify(this.state.comment))
    this.props.onCreate(this.state.comment)
  }

  updateComment(e) {
    console.log(e.target.value)
    let updatedComment = update(this.state.comment, {body: {$set: e.target.value}})
    this.setState({comment: updatedComment})
  }

  render() {
    return (
      <Container>
        <Breadcrumbs>Add a comment</Breadcrumbs>
        <CommentBox onChange={this.updateComment.bind(this)} id="commentBox" type="text" placeholder="Say something..." />
        <SubmitButton onClick={this.submitComment.bind(this)}>Add Comment</SubmitButton>
      </Container>
    )
  }
}
