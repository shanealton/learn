import React, { Component } from 'react'
import styled from 'styled-components'
import Zones from './Zones'

const Container = styled.div`

`

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Zones />
      </Container>
    )
  }
}
