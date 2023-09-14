"use strict";
var form = document.querySelector("form");
var button = document.getElementById("submit");
var input = document.getElementById("input");
var list = document.getElementById("tasks-container");
// retrieve data from LocalStorage:
var loadData = function () {
    var JSONdata = localStorage.getItem("todo");
    if (JSONdata === null)
        return [];
    return JSON.parse(JSONdata);
};
var saveData = function () {
    localStorage.setItem("todo", JSON.stringify(tasks));
};
var tasks = loadData();
var createNewTask = function (task) {
    var newTask = document.createElement("LI");
    newTask.innerText = task.text;
    return newTask;
};
var createCheckbox = function (task) {
    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
        console.log("changed");
        task.completed = checkbox.checked;
        saveData();
    });
    return checkbox;
};
var createDeleteButton = function () {
    var deleteBtn = document.createElement("BUTTON");
    deleteBtn.innerText = "Delete Task";
    return deleteBtn;
};
var displayTasks = function (tasks) {
    list.innerHTML = "";
    tasks.forEach(function (task) {
        var newTask = createNewTask(task);
        var checkbox = createCheckbox(task);
        var deleteBtn = createDeleteButton();
        newTask.append(checkbox);
        newTask.append(deleteBtn);
        list === null || list === void 0 ? void 0 : list.appendChild(newTask);
    });
};
var addNewTask = function (task) {
    var newTodo = {
        text: task,
        completed: false
    };
    tasks.push(newTodo);
    displayTasks(tasks);
    saveData();
};
form.addEventListener("submit", function (e) {
    e.preventDefault();
    addNewTask(input.value);
    input.value = "";
});
loadData();
displayTasks(tasks);
