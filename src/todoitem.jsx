const React = require('react');

class ToDoItem extends React.Component{
  render(){
    return <li>{this.props.todo.text}</li>
  }
}

module.exports = ToDoItem
