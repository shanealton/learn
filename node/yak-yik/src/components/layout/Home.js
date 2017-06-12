import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../containers/Header'
import Logo from '../containers/Logo'
import Zones from '../containers/Zones'
import Comments from '../containers/Comments'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Content = styled.div`
  flex: 1;
  margin-left: 240px;
`

const Sidebar = styled.div`
  width: 240px;
  position: fixed;
  background: #F7F9FA;
  min-height: 100%;
`

const Body = styled.div`
  flex: 1;
  overflow-y: scroll;
`

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Sidebar>
          <Logo />
          <Zones />
        </Sidebar>

        <Content>
          <Header />
          <Body><Comments /></Body>
        </Content>
      </Container>
    )
  }
}
