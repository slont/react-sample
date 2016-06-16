import React from 'react'
import ReactDOM from 'react-dom'

class Component1 extends React.Component {
  render() {
    return (
        <h1>Component1</h1>
    )
  }
}

ReactDOM.render(
  <Component1 />, document.getElementById('component1')
);