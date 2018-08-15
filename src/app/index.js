var React = require('react')
var createReactClass = require('create-react-class')
var ReactDOM = require('react-dom')

// component
var TodoComponent = createReactClass({
  render: function() {
    return(
      <div>
        <h1>Hello {this.props.world}</h1>
        <hr></hr>
        <p><strong>Message: </strong>{this.props.message.content}</p>
        <p><strong>Fortune: </strong>{this.props.message.fortune}</p>
        <p><strong>From: </strong>{this.props.message.author}</p>
      </div>
    )
  }
})

var myMessage = {content: 'React is neat', fortune: 'Looking good', author: 'Me'}

// insert component into html
ReactDOM.render(<TodoComponent world="World" message={myMessage}/>, document.getElementById('todo-wrapper'))
