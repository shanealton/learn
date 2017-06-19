import React, { Component } from 'react'
import { APIManager } from '../../utils'
import update from 'immutability-helper'
import Zone from '../presentation/Zone'
import CreateZone from '../presentation/CreateZone'

export default class Zones extends Component {
  constructor() {
    super()
    this.state = {
      selected: 0,
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

  selectZone(index) {
    this.setState({selected: index})
  }

  render() {
    const listItems = this.state.list.map((zone, i) => {
      let selected = (i == this.state.selected)
      return (<li key={i}><Zone index={i} select={this.selectZone.bind(this)} isSelected={selected} currentZone={zone} /></li>)
    })
    return (
      <div>
        <ul>{listItems}</ul>
        <CreateZone onCreate={this.submitZone.bind(this)}/>
      </div>
    )
  }
}
