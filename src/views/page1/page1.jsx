import React from 'react'
import ReactDOM from 'react-dom'

class Page1 extends React.Component {
  render() {
    return (
        <h1>Page1</h1>
    )
  }
}

ReactDOM.render(
  <Page1 />, document.getElementById('container')
);