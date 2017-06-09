import React, { Component } from 'react'
import styled from 'styled-components'
import Zone from './Zone'

const List = styled.ul`
  list-style: none;

  li {
    padding: 15px;
  }

  h3 {
    margin: 0 0 10px 0;
  }

  span {
    display: block;
  }

  a {
    text-decoration: none;
    color: ${props => props.dark ? 'black' : 'palevioletred'};
  }
`;

export default class Zones extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        { name: 'Zone 1', zipCode: '10012', numComments: 10 },
        { name: 'Zone 2', zipCode: '10013', numComments: 20 },
        { name: 'Zone 3', zipCode: '10014', numComments: 30 },
        { name: 'Zone 4', zipCode: '10015', numComments: 40 }
      ]
    }
  }
  render() {
    const listItems = this.state.list.map((zone, i) => {
      return (<li key={i}><Zone currentZone={zone} /></li>)
    })
    return (
      <div>
        <List>{listItems}</List>
      </div>
    )
  }
}
