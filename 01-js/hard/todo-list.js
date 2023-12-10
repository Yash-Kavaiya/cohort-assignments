/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      throw new Error('Index out of range');
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      throw new Error('Index out of range');
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      throw new Error('Index out of range');
    }
  }

  clear() {
    this.todos = [];
  }
}

// Test cases
const todoList = new Todo();
todoList.add('Task 1');
todoList.add('Task 2');
console.log(todoList.getAll()); // Expected output: ['Task 1', 'Task 2']
todoList.update(0, 'Updated Task 1');
console.log(todoList.get(0)); // Expected output: 'Updated Task 1'
todoList.remove(1);
console.log(todoList.getAll()); // Expected output: ['Updated Task 1']
todoList.clear();
console.log(todoList.getAll()); // Expected output: []
module.exports = Todo;
