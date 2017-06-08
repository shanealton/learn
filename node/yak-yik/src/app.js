import React from 'react'
import ReactDOM from 'react-dom'
import Zones from './components/Zones'

class App extends React.Component {
  render() {
    return (
      <div>
        <Zones />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
