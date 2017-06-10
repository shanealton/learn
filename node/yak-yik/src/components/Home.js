import React, { Component } from 'react'
import styled from 'styled-components'
import Zones from './Zones/Zones'
import Comments from './Comments/Comments'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Zones />
          </div>
          <div className="col-md-8">
            <Comments />
          </div>
        </div>
      </div>
    )
  }
}
