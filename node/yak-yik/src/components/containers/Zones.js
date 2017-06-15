import React, { Component } from 'react'
import update from 'immutability-helper'
import styled from 'styled-components'
import superagent from 'superagent'
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
      list: [
        // { name: 'Zone 1', zipCode: '10012', numComments: 10 },
        // { name: 'Zone 2', zipCode: '10013', numComments: 20 },
        // { name: 'Zone 3', zipCode: '10014', numComments: 30 },
        // { name: 'Zone 4', zipCode: '10015', numComments: 40 }
      ]
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
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
