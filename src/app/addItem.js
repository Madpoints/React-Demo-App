var React = require('react')
var createReactClass = require('create-react-class')
require('./css/addItem.css')

var AddItem = createReactClass({

  render: function() {
    return(
      <form id="add-todo" onSubmit={this.submit}>
        <input type="text" placeholder="Add todo" ref="newItem" required/>
        <input type="submit" value="Submit"/>
      </form>
    )
  },

  // Custom functions
  submit: function(event) {
    event.preventDefault()
    this.props.onAdd(this.refs.newItem.value)
  } 
})

module.exports = AddItem
