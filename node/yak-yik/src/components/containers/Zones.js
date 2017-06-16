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
        name: 'Zone 5',
        zipCode: '10016',
        numComments: '60'
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
  }

  updateZone(e) {
    let updatedList = update(this.state.list, {$push: [this.state.zone]})
    this.setState({list: updatedList})
  }

  render() {
    const listItems = this.state.list.map((zone, i) => {
      return (<li key={i}><Zone currentZone={zone} /></li>)
    })
    return (
      <div>
      <ul>{listItems}</ul>
      <AddZone onClick={this.updateZone.bind(this)}/>
      </div>
    )
  }
}
