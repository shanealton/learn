import React, { Component } from 'react'
import { APIManager } from '../../utils'
import update from 'immutability-helper'
import styled from 'styled-components'
import Zone from '../presentation/Zone'
import CreateZone from '../presentation/CreateZone'
import AddZone from '../presentation/AddZone'

export default class Zones extends Component {
  constructor() {
    super()
    this.state = {
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

  submitZone(zone) {
    console.log('Submit Zone from Zones: ' + JSON.stringify(zone))

    let updatedZone = Object.assign({}, zone)
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
    document.getElementById('name').value = ''
    document.getElementById('zipCode').value = ''
  }

  render() {
    const listItems = this.state.list.map((zone, i) => {
      return (<li key={i}><Zone currentZone={zone} /></li>)
    })
    return (
      <div>
        <ul>{listItems}</ul>
        <CreateZone onCreate={this.submitZone.bind(this)}/>
      </div>
    )
  }
}
