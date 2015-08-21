var React = require('react');
var Project = require('./project');

var ProjectList = React.createClass({

  render: function() {
    var todoList = this.props.todo;
    var projects = todoList.map(function(project) {
      return <Project project={project} key={project.id} />
    });

    return (
      <section className="list">
        {projects}
      </section>
    );
  }
});

module.exports = ProjectList;