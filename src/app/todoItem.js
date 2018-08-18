var React = require('react')
var createReactClass = require('create-react-class')
require('./css/todoItem.css')

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
  } // deletes item
})

module.exports = TodoItem
