var React = require('react');

var ProjectBar = React.createClass({

  render: function() {

    return (
      <div className='todo-bar'>
        <div className='todo-bar-new'>
          <form>
            <input name='' placeholder='Start typing here to create a task...' type='text'>
              <button>Add Task</button>
            </input>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = ProjectBar;