var React = require('react');
var AppHeader = require('./components/app/header');
var AppContent = require('./components/app/content');

var todo = [];

var TodoApp = React.createClass({

  render: function() {

    return (
      <div className='main'>
        <AppHeader />
        <AppContent />
      </div>
    );
  }
});

React.render(<TodoApp />, document.body);
