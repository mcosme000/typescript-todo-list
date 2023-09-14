const form = document.querySelector("form")!;
const button = document.getElementById("submit")!;
const input = document.getElementById("input")! as HTMLInputElement;
const list = document.getElementById("tasks-container");

const addNewTask = (task: string) => {
  let newTask = document.createElement("LI") as HTMLLIElement;
  newTask.innerText = task
  let checkbox = document.createElement("INPUT") as HTMLInputElement;
  checkbox.type = "checkbox";
  newTask.append(checkbox);
  list?.appendChild(newTask);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewTask(input.value)
  input.value = ""
})
