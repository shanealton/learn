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
      list: []
    }
  }

  componentDidMount() {
    superagent
      .get('/api/zone')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          alert('Error: ' + err)
          return
        }
        let results = response.body.results
        this.setState({list: results})
      })
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
