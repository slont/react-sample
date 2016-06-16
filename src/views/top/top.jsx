import React from 'react'
import ReactDOM from 'react-dom'

class Top extends React.Component {
  render() {
    return (
        <h1>Top</h1>
    )
  }
}

ReactDOM.render(
  <Top />, document.getElementById('contents')
);