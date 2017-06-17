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

    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['zipCodes'] = updatedZone.zipCode.split(',')

    APIManager.post('/api/zone', updatedZone, (err, response) => {
      if (err) {
        console.log('Error: ' + err)
        return
      }
      console.log('Zone Created: ' + JSON.stringify(response))

      let updatedList = update(this.state.list, {$push: [response.result]})
      this.setState({list: updatedList})
    })
  }

  updateZone(e) {
    console.log('update: ' + e.target.id + ' == ' + e.target.value)
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[e.target.id] = e.target.value
    this.setState({zone: updatedZone})
  }

  render() {
    const listItems = this.state.list.map((zone, i) => {
      return (<li key={i}><Zone currentZone={zone} /></li>)
    })
    return (
      <div>
      <ul>{listItems}</ul>
      <input id="name" onChange={this.updateZone.bind(this)} type="text" placeholder="Zone" /><br />
      <input id="zipCode" onChange={this.updateZone.bind(this)} type="text" placeholder="Zip Code" /><br />
      <input onClick={this.addZone.bind(this)} type="submit" value="Add Zone" />
      </div>
    )
  }
}
