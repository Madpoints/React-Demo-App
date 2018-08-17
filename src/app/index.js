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
    // map todos into a new nested component
    todos = todos.map(function(item, index) {
      return (
        <TodoItem item={item} key={index}/>
      )
    })
    // bind this function to 'this' component
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
  } // render
})

// component
var TodoItem = createReactClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    )
  }
})

// insert component into html
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'))
