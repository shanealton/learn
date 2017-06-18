import React, { Component } from 'react'
import { APIManager } from '../../utils'
import update from 'immutability-helper'
import styled from 'styled-components'
import Comment from '../presentation/Comment'
import CreateComment from '../presentation/CreateComment'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 500px;
  padding: 10px 40px;
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

  submitComment(comment) {
    console.log('Submit Comment from Comments: ' + JSON.stringify(comment))
    APIManager.post('/api/comment', comment, (err, response) => {
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

  render() {
    const commentList = this.state.list.map((comment, i) => {
      return(<li key={i}><Comment currentComment={comment} /></li>)
    })
    return (
      <Container>
        <CreateComment onCreate={this.submitComment.bind(this)}/>
        <CommentsList>{commentList}</CommentsList>
      </Container>
    )
  }
}
