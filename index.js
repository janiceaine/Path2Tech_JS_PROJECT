const fs = require("fs");
const path = require("path");

const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  },
];

// Function to load todos from JSON file
function loadTodosFromJSON() {
  const filePath = path.join(__dirname, "assets", "todos.json");
  try {
    const data = fs.readFileSync(filePath, "utf8");
    todos.push(...JSON.parse(data));
    console.log("Todos loaded from JSON file");
  } catch (error) {
    console.log("Error loading todos from JSON file");
  }
}

// Function to save todos to JSON file
function saveTodosToJSON() {
  const filePath = path.join(__dirname, "assets", "todos.json");
  try {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf8");
    console.log("Todos saved to JSON file.");
  } catch (error) {
    console.log("Error saving todos to JSON file");
  }
}

// Function to add a new todo
function addTodo(title, description){
  todos.push({ title, description, complete: false});
  console.log(`Added todo: "${title}"`);
}

// Function to remove a todo
function removeTodo(title){
  const index = todos.findIndex((todo) => todo.title === title);
  if (index !== -1) {
    console.log(`Removed todo: "${todos[index].title}"`);
    todos.splice(index, 1);
  } else {
    console.log (`Todo with title "${title}" not found`);
  }
}

// Function to edit a todo
function editTodo(oldTitle, newTitle, newDescription){
  const todo = todos.find((todo) => todo.title === oldTitle);
  if (todo) {
    todo.title = newTitle || todo.title;
    todo.description = newDescription || todo.description;
    console.log(`Edited todo: "${oldTitle}"`);
  } else {
    console.log(`Todo with title "${oldTitle}" not found`);
  }
}

// Function to mark a todo as complete
function markTodoComplete(title){
  const todo = todos.find((todo) => todo.title === title);
  if (todo) {
    todo.complete = true;
    console.log(`Marked todo: "${title}" as complete`);
  } else {
    console.log(`Todo with title "${title}" not found`);
  }
}

// Function to display the total number of todos and completed todos
function displayTodoLength(){
  const total = todos.length;
  const completed = todos.filter((todo) => todo.complete).length;
  console.log(`Total Todos: ${total}, Completed Todos: ${completed}`);
}

function app(){
  console.log('Welcome to the Todo Application');
  console.log('================================');
  // You will need to call your methods below this comment to edit the todos array
  loadTodosFromJSON();

  addTodo("Paint the house", "Buy some paint and paint the house");
  markTodoComplete("Make dinner");
  removeTodo("Initial Todo");
  editTodo("Walk the dog", "Walk the cat", "Take the cat for a walk in the park");
  displayTodoLength();

  

  // You will need to call your methods above this comment to edit the todos array
  console.log('Here is a list of your todos:');
  todos.forEach((todo, index) => {
    console.log (`${index + 1}. [${todo.complete ? "X" : " "}] ${todo.title} - ${todo.description}`);
  });

  saveTodosToJSON();
  // Print the length of the todos array below this comment

  // Print the length of the todos array above this comment
  // Iterate over the todos array and console.log each todo below this comment
  
}

app();