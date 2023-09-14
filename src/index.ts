const form = document.querySelector("form")!;
const button = document.getElementById("submit")!;
const input = document.getElementById("input")! as HTMLInputElement;
const list = document.getElementById("tasks-container") as HTMLUListElement;


// retrieve data from LocalStorage:
const loadData = (): Todo[] => {
  const JSONdata = localStorage.getItem("todo");
  if (JSONdata === null) return []
  return JSON.parse(JSONdata)
}

const saveData = () => {
  localStorage.setItem("todo", JSON.stringify(tasks))
}

interface Todo {
  text: string,
  completed: boolean
}

const tasks: Todo[] = loadData();

const createNewTask = (task: Todo): HTMLLIElement => {
  const newTask = document.createElement("LI") as HTMLLIElement;
  newTask.innerText = task.text
  return newTask;
}

const createCheckbox = (task: Todo): HTMLInputElement => {
  const checkbox = document.createElement("INPUT") as HTMLInputElement;
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change", () => {
    console.log("changed");
    task.completed = checkbox.checked;
    saveData();
  })
  return checkbox;
}

const createDeleteButton = (): HTMLButtonElement => {
  const deleteBtn = document.createElement("BUTTON") as HTMLButtonElement;
  deleteBtn.innerText = "Delete Task";
  return deleteBtn;
}


const displayTasks = (tasks: Todo[]) => {
  list.innerHTML = "";
  tasks.forEach((task) => {
    const newTask = createNewTask(task)
    const checkbox = createCheckbox(task);
    const deleteBtn = createDeleteButton();
    newTask.append(checkbox)
    newTask.append(deleteBtn)
    list?.appendChild(newTask)
  })
}

const addNewTask = (task: string) => {
  const newTodo: Todo = {
    text: task,
    completed: false
  }
  tasks.push(newTodo);
  displayTasks(tasks);
  saveData();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewTask(input.value)
  input.value = ""
})

loadData();
displayTasks(tasks);
