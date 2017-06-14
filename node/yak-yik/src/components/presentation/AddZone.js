import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 240px;
  height: 80px;
  padding: 0 15px;
  font-size: 14px;
  line-height: 80px;
  cursor: pointer;
  color: #1B2733;
  z-index: 1;
  background: #F7F9FA;

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
      <Container onClick={this.props.onClick}>
        <ButtonAdd>+ Add Zone</ButtonAdd>
      </Container>
    )
  }
}
