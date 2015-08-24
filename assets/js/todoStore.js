var TodoStore = {
  _state: {
    todo: [],
  },

  getState: function() {
    return this._state;
  },

  loadProject: function() {
    var obj = this;
    $.getJSON(routes.projectsIndex(), function(data) {
      obj._state.todo = data;
      obj.onChange();
    });
  },

  onChange: function() {},

  deleteProject: function(project) {
    var todo = this.getState().todo.filter(function(item) {
      return item.id !== project.id;
    });
    this._state.todo = todo;
    this.onChange();

    $.ajax({
      url: routes.projectsDestroy(project.id),
      dataType: 'json',
      cache: false,
      method: 'DELETE',
      success: function(data) {}.bind(this),
      error: function(xhr, status, err) {}.bind(this)
    });
  },

  deleteTask: function(project, task) {
    var todo = this.getState().todo.map(function(project) {
      var tasks = project.tasks.filter(function(taskItem) {
        return taskItem.id !== task.id;
      });
      project.tasks = tasks;
      return project;
    });

    this._state.todo = todo;
    this.onChange();

    $.ajax({
      url: routes.tasksDestory(project.id, task.id),
      dataType: 'json',
      cache: false,
      method: 'DELETE',
      success: function(data) {}.bind(this),
      error: function(xhr, status, err) {}.bind(this)
    });
  },

  createTask: function(project, taskInput) {
    var description = taskInput.value;
    var obj = this;
    if (!description) { return false; }
    $.post(routes.tasksCreate(project.id), { task: { description: description } }, function(data) {
      var todo = obj.getState().todo.map(function(projectItem) {
        if (projectItem.id === project.id) {
          projectItem.tasks.push({
            id: data.id,
            description: data.description,
            completed: data.completed
          });
        }
        return projectItem;
      });

      obj._state.todo = todo;
      obj.onChange();

      taskInput.value = '';
    });
  },

  createProject: function() {
    var obj = this;
    $.post(routes.projectsCreate(), function(data) {
      var todo = obj.getState().todo;
      todo.push({
        id: data.id,
        title: data.title,
        tasks: data.tasks,
      });

      obj._state.todo = todo;
      obj.onChange();
    });
  }
};
