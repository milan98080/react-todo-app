var todo = [
  {
    id: 1,
    title: 'Project 1',
    tasks: [
      {
        id: 1,
        description: 'Project 1 Task 1',
        completed: true
      },
      {
        id: 2,
        description: 'Project 1 Task 2',
        completed: false
      }
    ],
  },
  {
    id: 2,
    title: 'Project 2',
    tasks: [
      {
        id: 3,
        description: 'Project 2 Task 1',
        completed: false
      },
      {
        id: 4,
        description: 'Project 2 Task 2',
        completed: true
      }
    ],
  },
  {
    id: 3,
    title: 'Project 3',
    tasks: [],
  },
];

var TodoStore = {
  _state: {
    todo: todo,
  },

  getState: function() {
    return this._state;
  },

  onChange: function() {},

  deleteProject: function(project) {
    var todo = this.getState().todo.filter(function(item) {
      return item.id !== project.id;
    });
    this._state.todo = todo;
    this.onChange();
  },


  deleteTask: function(task) {
    var todo = this.getState().todo.forEach()

    // var todo = this.getState().todo.filter(function(item) {
    //   var flag = true;
    //   item.tasks.forEach(function(elem){
    //     if (elem.id === task.id) {
    //       flag = false;
    //       return;
    //     }
    //   });

    //   return flag;
    // });
    this._state.todo = todo;
    this.onChange();
  }
};
