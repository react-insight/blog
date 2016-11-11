var React = require('react');

class Topic extends React.Component {
  render() {
    return (
        <li>
         <div className="t-user">{this.props.topic.name}</div>
         <div className="t-title">{this.props.topic.description}</div>
        </li>
    );
  }
}

module.exports = Topic;