const ReactDOM = require("react-dom");
const React = require('react');
const ToDoList = require('./todolist.jsx');
const ToDoItem = require('./todoitem.jsx');
const data = require('./data.js');
const App = require('./app.jsx');

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('app')
)
