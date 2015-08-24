var TodoStore = require('./todoStore');

var TodoAction = {
  deleteProject: function(project) {
    TodoStore.deleteProject(project);
  },

  deleteTask: function(project, task) {
    TodoStore.deleteTask(project, task);
  },

  createTask: function(project, taskInput) {
    TodoStore.createTask(project, taskInput);
  },

  completeTask: function(project, task, complete) {
    TodoStore.completeTask(project, task, complete);
  },

  createProject: function() {
    TodoStore.createProject();
  }
};

export default TodoAction;