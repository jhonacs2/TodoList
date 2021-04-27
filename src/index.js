import {Todo,TodoList,Task} from './classes';
import { newProject, newTask } from './components';
import {} from './components-task';
export const todoList = new TodoList();
todoList.todo.forEach( all => newProject(all) );

//crea projecto
// const projecto1 = new Todo('Projecto Uno');
// //añade al projecto
// todoList.newTodo(projecto1);
// //crear tarea
// const tarea1 = new Task('Aprender Poo');

// todoList.addTask(1,tarea1)

// console.log(todoList.todo[0].taskList.completed)

// console.log(todoList)





