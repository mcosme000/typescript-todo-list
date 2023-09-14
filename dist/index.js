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
var displayTasks = function (tasks) {
    list.innerHTML = "";
    tasks.forEach(function (task) {
        var newTask = document.createElement("LI");
        newTask.innerText = task.text;
        var checkbox = document.createElement("INPUT");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function () {
            console.log("changed");
            task.completed = checkbox.checked;
            saveData();
        });
        newTask.append(checkbox);
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
