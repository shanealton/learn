import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 96px;
  padding: 40px 40px 0 40px;
  flex: 1 0 100%;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #1b2733;
`

const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #777;
`

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Controls>
          <Heading>Comments</Heading>
          <Profile />
        </Controls>
      </Container>
    )
  }
}
