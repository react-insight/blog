var React = require('react');
var DefaultLayout = require('./layouts/default.jsx');
class BlogError extends React.Component {
    render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>error</div>
      </DefaultLayout>
    );
  }
}

module.exports = BlogError;