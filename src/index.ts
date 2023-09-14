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

const displayTasks = (tasks: Todo[]) => {
  list.innerHTML = "";
  tasks.forEach((task) => {
    const newTask = document.createElement("LI") as HTMLLIElement;
    newTask.innerText = task.text
    const checkbox = document.createElement("INPUT") as HTMLInputElement;
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      console.log("changed");
      task.completed = checkbox.checked;
      saveData();
    })
    newTask.append(checkbox)
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
