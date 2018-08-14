var React = require('react')
var createReactClass = require('create-react-class')
var ReactDOM = require('react-dom')

// component
var TodoComponent = createReactClass({
  render: function() {
    return(
      <h1>Hello World</h1>
    )
  }
})

// insert component into html
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'))
