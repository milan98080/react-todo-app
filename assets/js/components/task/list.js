var React = require('react');
var Task = require('./task');

var TaskList = React.createClass({

  render: function() {

    var tasks = this.props.tasks.map(function(task) {
      return <Task task={task} key={task.id} />
    });

    return (
      <div className='todo-list'>
        <table>
          <tbody>
            {tasks}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = TaskList;