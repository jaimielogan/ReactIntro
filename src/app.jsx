const React = require('react');
const ToDoList = require('./todolist.jsx');
const Name = require('./name.jsx');
const data = require('./data.js');

class App extends React.Component {
  render(){
    return <main>
      <ToDoList todos={this.props.data.todos} />
      <Name name={this.props.data.name} />
    </main>
  }
}

module.exports = App
