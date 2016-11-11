var React = require('react');
var DefaultLayout = require('./layouts/default');
var Topic = require('./topic');
class Topics extends React.Component {
  getUserList() {
      return this.props.topics.map((u,index) => <Topic key={index} topic={u}/>)
  }
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <ul>{this.getUserList()}</ul>
      </DefaultLayout>
    );
  }
}

module.exports = Topics;