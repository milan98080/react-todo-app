var React = require('react');

var Task = React.createClass({

  getTask: function() {
    return this.props.task;
  },

  onDeleteTask: function(event) {
    event.preventDefault();

    if (confirm('Are you sure ?')) {
      TodoAction.deleteTask(this.props.project, this.getTask());
    }
  },

  onCompleteTask: function(event) {
    var projectId = this.props.project.id;
    var taskId = this.getTask().id;
    var complete = event.target.checked;
    $.ajax({
      url: routes.tasksComplete(projectId, taskId),
      dataType: 'json',
      cache: false,
      method: 'PUT',
      data: { task: { complete: complete } },
      success: function(data) {}.bind(this),
      error: function(xhr, status, err) {}.bind(this)
    });
  },

  render: function() {

    var task = this.getTask();
    var completed = task.completed === true ? true : false;

    return (

      <tr className='completed-task'>
        <td className='todo-list-checkbox'>
          <input defaultChecked={completed} type='checkbox' onChange={this.onCompleteTask} />
        </td>
        <td className='todo-list-divider'>&nbsp;</td>
        <td className='todo-list-task'>
          <p>{task.description}</p>
        </td>
        <td className='todo-list-actions'>
          <ul className='hidden'>
            <li>
              <a className='todo-list-task-edit' href='#'>Edit</a>
            </li>
            <li>
              <a className='todo-list-task-delete' href='#' onClick={this.onDeleteTask}>Delete</a>
            </li>
          </ul>
        </td>
      </tr>
    );
  }
});

module.exports = Task;