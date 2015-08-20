var React = require('react');
var ProjectHeader = require('./header');
var ProjectBar = require('./bar');
var ProjectTaskList = require('../task/list');

var Project = React.createClass({

  render: function() {

    return (
      <article key="">
        <ProjectHeader />
        <ProjectBar />
        <ProjectTaskList />
      </article>
    );
  }
});

module.exports = Project;