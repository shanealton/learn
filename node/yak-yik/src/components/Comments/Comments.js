import React, { Component } from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`
  min-height: 100vh;
  padding: 16px 20px;
  background: #f9f9f9;
`

const Heading = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 20px 0 20px 0;
`

export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        { body: 'comment 1', username: 'shanealton', timestamp: '10:30pm' },
        { body: 'comment 2', username: 'shanealton', timestamp: '10:30pm' },
        { body: 'comment 3', username: 'shanealton', timestamp: '10:30pm' }
      ]
    }
  }
  render() {
    const commentList = this.state.list.map((comment, i) => {
      return( <li key={i}><Comment currentComment={comment} /></li> )
    })
    return (
      <Container>
        <Heading>Comments:</Heading>
        <ul>{commentList}</ul>
      </Container>
    )
  }
}
