import React, { Component } from 'react'
import { APIManager } from '../../utils'
import update from 'immutability-helper'
import styled from 'styled-components'
import Comment from '../presentation/Comment'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 500px;
  padding: 10px 40px;
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

const CommentsList = styled.ul`
  flex: 1 0 100%;
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
        username: 'shanealton',
        body: ''
      },
      list: []
    }
  }

  componentDidMount() {
    APIManager.get('/api/comment', null, (err, response) => {
      if (err) {
        console.log('Error: ' + err.message)
        return
      }
      this.setState({list: response.results})
    })
  }

  submitComment() {
    APIManager.post('/api/comment', this.state.comment, (err, response) => {
      if (err) {
        console.log('Error: ' + err)
        return
      }
      console.log('Comment created: ' + JSON.stringify(response))

      let updatedList = update(this.state.list, {$push: [response.result]})
      this.setState({list: updatedList})
    })
    document.getElementById('commentBox').value = ''
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
        <Breadcrumbs>Add a comment</Breadcrumbs>
        <CommentBox id="commentBox" onChange={this.updateBody.bind(this)} type="text" placeholder="Say something..." />
        <SubmitButton onClick={this.submitComment.bind(this)}>Add Comment</SubmitButton>

        <CommentsList>{commentList}</CommentsList>
      </Container>
    )
  }
}
