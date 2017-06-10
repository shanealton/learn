import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { injectGlobal } from 'styled-components'
import Home from './components/Home'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');

  body {
    font-family: 'Open Sans', sans-serif;
  }
`

const Container = styled.div``

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
