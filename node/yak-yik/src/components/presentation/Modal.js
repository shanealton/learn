import React, { Component } from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
`

const ModalBox = styled.div`
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -300px;
  width: 600px;
  height: 300px;
  z-index: 20;
  background: #f8f8f8;
  border-radius: 2px;
`

export default class Modal extends Component {
  render() {
    return (
      <div>
        <Overlay></Overlay>
        <ModalBox></ModalBox>
      </div>
    )
  }
}
