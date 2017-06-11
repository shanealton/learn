import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { injectGlobal } from 'styled-components'
import Home from './components/Home'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');

  ul,li {
    list-style: none;
  }

  p, ul, li, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <div><Home /></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
