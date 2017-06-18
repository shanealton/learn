import React, { Component } from 'react'
import update from 'immutability-helper'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: 240px;
  height: 166px;
  bottom: 0;
  background: #F7F9FA;
  padding: 15px;
  z-index: 1;
`

const Input = styled.input`
  width: 100%;
  margin: 5px 0;
  font-size: 11px;
  padding: 10px;
  outline: none;
  border-radius: 2px;
  border: 1px solid #ddd;
`

const SubmitButton = styled.input`
  width: 100%;
  padding: 10px 5px;
  margin-top: 5px;
  border: 0;
  outline: none;
  font-size: 12px;
  border-radius: 2px;
  background: #333;
  color: #fff;
`

export default class CreateZone extends Component {
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipCode: '',
        numComments: ''
      }
    }
  }

  submitZone(e) {
    console.log('submitZone: ' + JSON.stringify(this.state.zone))
    this.props.onCreate(this.state.zone)
  }

  updateZone(e) {
    console.log('update: ' + e.target.id + ' == ' + e.target.value)
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[e.target.id] = e.target.value
    this.setState({zone: updatedZone})
  }

  render() {
    return(
      <Container>
        <Input id="name" onChange={this.updateZone.bind(this)} type="text" placeholder="Zone" />
        <Input id="zipCode" onChange={this.updateZone.bind(this)} type="text" placeholder="Zip Code" />
        <SubmitButton onClick={this.submitZone.bind(this)} type="submit" value="Add Zone" />
      </Container>
    )
  }
}
