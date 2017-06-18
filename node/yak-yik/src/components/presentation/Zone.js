import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;

  :hover {
    background: #E6E8EB;
  }
`

const Avatar = styled.div`
  margin: 2px 1em 0 0;
  width: 30px;
  max-width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #D0D2D3;
`

const MediaBody = styled.div`
  flex: 1;
  padding: 0 5px;
`

const Name = styled.div`
  flex: 1;
  font-size: 13px;
  color: #1b2733;
`

const CommentCount = styled.p`
  flex: 1 0 50%;
  font-size: 12px;
  color: #637282;
`

export default class Zone extends Component {
  render() {
    const zoneActive = {
      background: '#E6E8EB'
    }
    const active = (this.props.isSelected) ? zoneActive : null
    return (
      <ListItem style={active}>
        <Avatar />
          <MediaBody>
            <Name>{this.props.currentZone.name}</Name>
            <CommentCount>{this.props.currentZone.numComments} comments</CommentCount>
          </MediaBody>
      </ListItem>
    )
  }
}
