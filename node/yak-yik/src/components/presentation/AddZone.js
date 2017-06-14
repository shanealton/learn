import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  padding: 0 15px;
  font-size: 14px;
  line-height: 80px;
  cursor: pointer;
  color: #1B2733;

  &:hover {
    background: #E6E8EB;
  }
`

const ButtonAdd = styled.div`
  border-top: 1px solid #E6E8EB;
`

export default class AddZone extends Component {
  render() {
    return (
      <Container>
        <ButtonAdd>+ Add Zone</ButtonAdd>
      </Container>
    )
  }
}
