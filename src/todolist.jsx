const React = require('react');
const ToDoItem = require('./todoitem.jsx')
const Name = require('./name.jsx')

class ToDoList extends React.Component {
  getToDos(){
    return this.props.todos.map(t => <ToDoItem todo={t}/>)
  }
  render(){
    return <div>
      <h3>Hello, Here is a to do list</h3>
      <Name name="Jaimie" />
      <ol>{this.getToDos()}</ol>
    </div>
  }
}

module.exports = ToDoList
