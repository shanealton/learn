import React, { Component } from 'react'
import styled from 'styled-components'
import Zones from './Zones/index'
import Comments from './Comments/index'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const FlexZone = styled.div`
  width: 240px;
  background: #F7F9FA;
  height: 100vh;
`

const FlexComment = styled.div`
  flex: 1;
  height: 100vh;
`

export default class Home extends Component {
  render() {
    return (
      <Container>
        <FlexZone>
          <Zones />
        </FlexZone>
        <FlexComment>
          <Comments />
        </FlexComment>
      </Container>
    )
  }
}
