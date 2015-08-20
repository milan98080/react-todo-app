var React = require('react');

var TaskList = React.createClass({

  render: function() {

    return (
      <div className='todo-list'>
        <table>
          <tbody>
            <tr className='completed-task' data-task-id='44'>
              <td className='todo-list-checkbox'>
                <input checked='checked' type='checkbox' />
              </td>
              <td className='todo-list-divider'>&nbsp;</td>
              <td className='todo-list-task'>
                <p>Make a demo bookshelf app using Rails.</p>
              </td>
              <td className='todo-list-actions'>
                <ul className='hidden'>
                  <li>
                    <a className='todo-list-task-sort' href='#'>Sort</a>
                  </li>
                  <li>
                    <a className='todo-list-task-edit' href='#'>Edit</a>
                  </li>
                  <li>
                    <a className='todo-list-task-delete' href='#'>Delete</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = TaskList;