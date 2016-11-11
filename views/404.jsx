var React = require('react');
var DefaultLayout = require('./layouts/default');

class NotFound extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>404</div>
      </DefaultLayout>
    );
  }
}

module.exports = NotFound;