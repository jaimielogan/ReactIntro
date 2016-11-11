const React = require('react');

class Name extends React.Component {
  render(){
    return <h2>Your Name: {this.props.name}</h2>
  }
}

module.exports = Name;
