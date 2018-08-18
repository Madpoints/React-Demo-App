var React = require('react')
var createReactClass = require('create-react-class')
var ReactDOM = require('react-dom')

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
  } // filters items out of array updates parent component state

})

// component
var TodoItem = createReactClass({
  
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.deleteItem}> x </span>
        </div>
      </li>
    )
  },

  // Custom functions
  deleteItem: function() {
    this.props.onDelete(this.props.item)
  }

})

// insert component into html
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'))
