import Project from "./project";
import Task from "./task";
import TodoList from "./todolist";

export default class Storage {
  static saveTodoList(data) {
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  static getTodoList() {
    const todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem("todoList"))
    );

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );

    todoList.getProjects().forEach((project) => {
      project.setTasks(
        project.getTasks().map((task) => Object.assign(new Task(), task))
      );
    });
    return todoList;
  }

  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }

  static deleteProject(projectName) {
    const todolist = Storage.getTodoList();
    todolist.addProject(projectName);
    Storage.saveTodoList(todolist);
  }

  static addTask(projectName, task) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).addTask(task);
    Storage.saveTodoList(todoList);
  }

  static deleteTask(projectName, taskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveTodoList(todoList);
  }

  static renameTask(projectName, oldTaskName, newTaskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTasks(oldTaskName).setName(newTaskName);
    Storage.saveTodoList(todoList);
  }

  static setTasksDate(projectName, taskName, date) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTasks(taskName).setDate(date);
    Storage.saveTodoList(todoList);
  }

  static updateTodayProject() {
    const todoList = Storage.getTodoList();
    todoList.updateTodayProject();
    Storage.saveTodoList(todoList);
  }

  static updateThisWeekProject() {
    const todoList = Storage.getTodoList();
    todoList.updateThisWeekProject();
    Storage.saveTodoList(todoList);
  }
}
