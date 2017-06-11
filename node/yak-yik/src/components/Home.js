import React, { Component } from 'react'
import styled from 'styled-components'
import Zones from './Zones/index'
import Comments from './Comments/index'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <Zones />
          </div>
          <div className="col-sm-9">
            <Comments />
          </div>
        </div>
      </div>
    )
  }
}
