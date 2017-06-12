import React, { Component } from 'react'
import styled from 'styled-components'
import LogoIcon from '../presentation/LogoIcon'

const Container = styled.div`
  width: 100%;
  height: 96px;
  padding: 30px 0 0 15px;
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
