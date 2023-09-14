"use strict";
var form = document.querySelector("form");
var button = document.getElementById("submit");
var input = document.getElementById("input");
var list = document.getElementById("tasks-container");
var addNewTask = function (task) {
    var newTask = document.createElement("LI");
    newTask.innerText = task;
    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    newTask.append(checkbox);
    list === null || list === void 0 ? void 0 : list.appendChild(newTask);
};
form.addEventListener("submit", function (e) {
    e.preventDefault();
    addNewTask(input.value);
    input.value = "";
});
