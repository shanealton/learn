import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import Zones from './components/Zones'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');

  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Zones />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
