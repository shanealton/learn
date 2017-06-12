import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 96px;
  padding: 40px 0 0 15px;
`

const LogoIcon = styled.div`
  width: 30px;
  height: 30px;
  background: #777;
`

export default class Logo extends Component {
  render() {
    return (
      <Container>
        <LogoIcon />
      </Container>
    )
  }
}
