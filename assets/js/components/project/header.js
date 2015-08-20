var React = require('react');

var ProjectHeader = React.createClass({

  render: function() {

    return (
      <div className='todo-header'>
        <h3>iHUB Rails meetup</h3>
        <ul className='hidden'>
          <li>
            <a className='todo-action-edit' href='#' title='Edit'>Edit</a>
          </li>
          <li>
            <a className='todo-action-remove' href='#' title='Delete'>Delete</a>
          </li>
        </ul>
        <input name='' type='text' />
      </div>
    );
  }
});

module.exports = ProjectHeader;