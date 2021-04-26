import { todoList } from ".";
import { Task, Todo } from "./classes";

//html references
const buttonNewProject = document.querySelector("#new-project");
const containerProjects = document.querySelector(".container-projects");
const inputProject = document.querySelector(".input-project");
const listTask = document.querySelector(".todo-list");
const newTaskButton = document.querySelector("#new-task");
const newTaskInput = document.querySelector(".input-task");
const containerlist = document.querySelector(".containerlist");
let idProject = "";
newTaskInput.disabled = true;
// const containerProjectsChildren = document.querySelectorAll('.project')
//create html project
export const newProject = (task) => {
  const htmlProject = `
    <div class="project" data-id="${task.idprojecto}">
          <p>${task.projecto}</p>
    </div>
    `;
  const div = document.createElement("div");
  div.innerHTML = htmlProject;

  containerlist.appendChild(div);

  return div;
};

//create html tasks

export const newTask = (task) => {
  const htmlTask = `
    <li class="${task.completed ? "completed" : ""}" data-id="${task.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${task.completed ? "checked" : ""}>
            <label>${task.tarea} <span>${task.date}</span></label>
            <button class="destroy"></button>
        </div>
    </li>
    `;
  const div = document.createElement("div");

  div.innerHTML = htmlTask;
  listTask.append(div.firstElementChild);

  return div.firstElementChild;
};

//events

buttonNewProject.addEventListener("click", () => {
  const newProjectDescribe = new Todo(inputProject.value);

  if (inputProject.value != "") {
    todoList.newTodo(newProjectDescribe);
    newProject(newProjectDescribe);
    inputProject.value = "";
  }
});

containerlist.addEventListener("click", (e) => {
  listTask.innerHTML = "";
  newTaskInput.disabled = false;
  const elementName = e.target.parentElement.getAttribute("data-id");
  idProject = elementName;

  if (todoList.findTaskLength(idProject) > 0) {
    const tasks = todoList.findTask(idProject);
    tasks.forEach((element) => {
      newTask(element);
    });
  }
});

newTaskButton.addEventListener("click", () => {
  const taskToDo = new Task(newTaskInput.value);
  if (newTaskInput.value != "") {
    todoList.addTask(idProject, taskToDo);
    newTask(taskToDo);
    newTaskInput.value = "";
  }
});

//changue state of the taks to COmpleted or no completed
listTask.addEventListener("click", (e) => {
  const idTask = e.target.parentElement.parentElement.getAttribute("data-id");
  const elementCompleted = e.target.parentElement.parentElement;
  if (e.target.localName == "input") {
    todoList.taskCompleted(idProject, idTask);
    elementCompleted.classList.toggle("completed");
  }
  if(e.target.localName == 'button'){
    todoList.deleteTask(idProject,idTask);
    listTask.removeChild(elementCompleted);
  }
});
