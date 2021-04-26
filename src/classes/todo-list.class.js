export class TodoList {
  constructor() {
    this.todo = [];
  }

  newTodo(todo) {
    this.todo.push(todo);
  }

  addTask(id, task) {
    for (const taskList of this.todo) {
      if (taskList.idprojecto == id) {
        taskList.taskList.push(task);
      }
    }
  }

  findTask(id) {
    for (const task of this.todo) {
      if (task.idprojecto == id) {
        return task.taskList;
      }
    }
  }

  findTaskLength(id) {
    for (const task of this.todo) {
      if (task.idprojecto == id) {
        return task.taskList.length;
      }
    }
  }

  taskCompleted(id, idTask) {
    for (const project of this.todo) {
      if (project.idprojecto == id) {
        for (const task of project.taskList) {
          if (task.id == idTask) {
            task.completed = !task.completed;
          }
        }
      }
    }
  }

  deleteTask(id, idTask) {
    for (const project of this.todo) {
      if (project.idprojecto == id) {
         
         project.taskList = project.taskList.filter( task => task.id != idTask);
         
        // for (const task of project.taskList) {
          
          
        //   // if (task.id == idTask) {
        //   //   task.completed = !task.completed;
        //   // }
        // }
      }
    }
  }
}
