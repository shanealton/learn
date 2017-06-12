import React, { Component } from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`
  min-height: 100vh;
  padding: 10px 40px;
`

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #1b2733;
  margin: 0 0 30px 0;
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
    margin: 15px 0;
  }
`

export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {body: 'comment 1', username: 'shanealton', timestamp: '1 hour ago'},
        {body: 'comment 2', username: 'shanealton', timestamp: '1 hour ago'},
        {body: 'comment 3', username: 'shanealton', timestamp: '1 hour ago'}
      ]
    }
  }
  render() {
    const commentList = this.state.list.map((comment, i) => {
      return( <li key={i}><Comment currentComment={comment} /></li> )
    })
    return (
      <Container>
        <Heading>Comments</Heading>
        <Breadcrumbs>Zone 1</Breadcrumbs>
        <List>{commentList}</List>
      </Container>
    )
  }
}
