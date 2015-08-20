var React = require('react');

var TodoButton = React.createClass({

  render: function() {

    return (
      <div className='new-todo'>
        <form className="button_to">
          <input type="submit" value="Add TODO List" />
        </form>
      </div>
    );
  }
});

module.exports = TodoButton;