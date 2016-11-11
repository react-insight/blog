var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
        <meta charset="utf-8"/>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="static/css/style.css"/>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;