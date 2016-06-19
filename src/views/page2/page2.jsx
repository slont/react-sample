import React from 'react'
import ReactDOM from 'react-dom'

class Page2 extends React.Component {
  render() {
    return (
        <h1>Page2</h1>
    )
  }
}

ReactDOM.render(
  <Page2 />, document.getElementById('container')
);