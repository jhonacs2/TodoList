export class Todo {
    constructor(projecto){
        this.idprojecto = new Date().getTime();
        this.projecto = projecto;
        this.taskList = [];
    }

    newTask( tarea ){
        this.taskList.push(tarea);
    }
}

export class Task{

    constructor( tarea ){
        
        this.id = new Date().getTime();
        this.tarea = tarea;
        this.date = new Date();
        this.completed = false;
    }
}