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

  createProject: function() {
    TodoStore.createProject();
  }
};