var React = require('react')
var createReactClass = require('create-react-class')
var ReactDOM = require('react-dom')
require('./css/index.css')

// Module requires
var TodoItem = require('./todoItem')

// component
var TodoComponent = createReactClass({

  getInitialState: function() {
    return {
      todos: ['code more', 'and more', 'and some more', 'vidya games'],
      month: 'August'
    }
  },

  render: function() {
    var todos = this.state.todos
    todos = todos.map(function(item, index) {
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      )
    }.bind(this)) // map todos into a new nested component and bind this function to 'this' component
    var changeMonth = setTimeout(function() {
      this.setState({
        month: "September"
      })
    }.bind(this), 5000) // changes month after 5 seconds
    return(
      <div id="todo-list">
        <p>Need to do for {this.state.month}:</p>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }, // render

  // Custom functions
  onDelete: function(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val
    })
    this.setState({
      todos: updatedTodos
    })
  } // filters items out of array and updates parent component state
})

// insert component into html
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'))
