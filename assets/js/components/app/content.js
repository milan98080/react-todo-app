var React = require('react');
var ProjectList = require('../project/list');
var TodoButton = require('../button');

var AppContent = React.createClass({

  // getInitialState: function() {
  //   return {todo: todo}
  // },

  // handleProjectDelete: function() {
  //   alert(12);
  // },

  render: function() {

    return (
      <div className="content">
        <ProjectList todo={this.props.todo} />
        <TodoButton />
      </div>
    );
  }
});

module.exports = AppContent;