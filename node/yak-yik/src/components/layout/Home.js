import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../containers/Header'
import Zones from '../containers/Zones'
import Comments from '../containers/Comments'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 100vh;
`

const Content = styled.div`
  flex: 1;
  margin-left: 240px;
  height: 100%;
`

const Sidebar = styled.div`
  width: 240px;
  position: fixed;
  background: #F7F9FA;
  min-height: 100%;
`

const Body = styled.div`
  flex: 1;
`

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Sidebar><Zones /></Sidebar>

        <Content>
          <Header />
          <Body><Comments /></Body>
        </Content>
      </Container>
    )
  }
}
