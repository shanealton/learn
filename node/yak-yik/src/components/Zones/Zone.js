import React, { Component } from 'react'
import styled from 'styled-components'

const ListItem = styled.div`
  padding: 15px;

  span {
    display: block;
    font-size: 13px;
  }

  a {
    display: block;
    margin: 0 0 10px 0;
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.dark ? 'black' : '#8a72be'};

    &:hover {
      opacity: 0.75;
    }
  }
`;

export default class Zone extends Component {
  render() {
    return (
      <ListItem>
        <a href="#">{this.props.currentZone.name}</a>
        <span>{this.props.currentZone.zipCode}</span>
        <span>{this.props.currentZone.numComments} comments</span>
      </ListItem>
    )
  }
}
