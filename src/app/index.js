var React = require('react')
var createReactClass = require('create-react-class')
var ReactDOM = require('react-dom')

// component
var TodoComponent = createReactClass({
  getInitialState: function() {
    return {
      todos: ['code more', 'and more', 'and some more'],
      month: 'August'
    }
  },
  render: function() {
    // bind this funxtion to 'this' component
    var changeMonth = setTimeout(function() {
      this.setState({
        month: "September"
      })
    }.bind(this), 5000) // changes month after 5 seconds
    return(
      <div id="todo-list">
        <p>Need to do for {this.state.month}:</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>
    )
  } // render
})

// insert component into html
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'))
