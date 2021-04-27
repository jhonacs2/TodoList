export class TodoList {
  constructor() {
    this.cargarLocalStorage();
  }

  newTodo(todo) {
    this.todo.push(todo);
    this.guardarLocalStorage();
  }

  addTask(id, task) {
    for (const taskList of this.todo) {
      if (taskList.idprojecto == id) {
        taskList.taskList.push(task);
        this.guardarLocalStorage();
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
            this.guardarLocalStorage();
          }
        }
      }
    }
  }

  deleteTask(id, idTask) {
    for (const project of this.todo) {
      if (project.idprojecto == id) {
         
         project.taskList = project.taskList.filter( task => task.id != idTask);
         this.guardarLocalStorage();
        // for (const task of project.taskList) {
          
          
        //   // if (task.id == idTask) {
        //   //   task.completed = !task.completed;
        //   // }
        // }
      }
    }
  }

  guardarLocalStorage(){

    localStorage.setItem('todo', JSON.stringify( this.todo ));
  }

  cargarLocalStorage(){
    this.todo = (localStorage.getItem('todo')) 
                      ? this.todo = JSON.parse (localStorage.getItem('todo'))
                      : []; 

  }    
}
