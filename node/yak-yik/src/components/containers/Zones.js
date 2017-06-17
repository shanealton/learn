import React, { Component } from 'react'
import { APIManager } from '../../utils'
import update from 'immutability-helper'
import styled from 'styled-components'
import Zone from '../presentation/Zone'
import AddZone from '../presentation/AddZone'

export default class Zones extends Component {
  constructor() {
    super()
    this.state = {
      zone: {
        name: '',
        zipCode: '',
        numComments: ''
      },
      list: []
    }
  }

  componentDidMount() {
    APIManager.get('/api/zone', null, (err, response) => {
      if (err) {
        console.log('Error: ' + err.message)
        return
      }
      this.setState({list: response.results})
    })
  }

  addZone() {
    console.log('Add Zone: ' + JSON.stringify(this.state.zone))
    let updatedList = update(this.state.list, {$push: [this.state.zone]})
    this.setState({list: updatedList})
  }

  updateZone(e) {
    console.log(e.target.value)
    let updatedZone = update(this.state.zone, {name: {$set: e.target.value}})
    this.setState({zone: updatedZone})
  }

  updateZip(e) {
    console.log(e.target.value)
    let updatedZone = update(this.state.zone, {zipCode: {$set: e.target.value}})
    this.setState({zone: updatedZone})
  }

  // updateZone(e) {
  //   let updatedList = update(this.state.list, {$push: [this.state.zone]})
  //   this.setState({list: updatedList})
  // }
  // <AddZone onClick={this.updateZone.bind(this)}/>

  render() {
    const listItems = this.state.list.map((zone, i) => {
      return (<li key={i}><Zone currentZone={zone} /></li>)
    })
    return (
      <div>
      <ul>{listItems}</ul>
      <input onChange={this.updateZone.bind(this)} type="text" placeholder="Zone" /><br />
      <input onChange={this.updateZip.bind(this)} type="text" placeholder="Zip Code" /><br />
      <input onClick={this.addZone.bind(this)} type="submit" value="Add Zone" />
      </div>
    )
  }
}
