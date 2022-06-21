// Project contains two classes:
// TodoList class: represents a collection (array) of Todo objects
// Todo class: represents a todo item and its associated data

class Todo {
  static DONE_MARKER = 'X';
  static UNDONE_MARKER = ' ';

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(item) {
    if (!(item instanceof Todo)) {
      throw new TypeError('can only add Todo objects');
    }

    this.todos.push(item);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every((todo) => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map((todo) => todo.toString()).join('\n');
    return `${title}\n${list}`;
  }
}

let list = new TodoList("Today's Todos");

let todo1 = new Todo('Buy milk');
let todo2 = new Todo('Clean room');
let todo3 = new Todo('Go to the gym');
let todo4 = new Todo('Go shopping');
let todo5 = new Todo('Feed the cats');
let todo6 = new Todo('Study for Launch School');

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);

console.log(`${list}`);

// console.log(list.first());
// console.log(list.last());

// let emptyList = new TodoList('Empty List');
// console.log(emptyList.first());
// console.log(emptyList.last());

// console.log(list.itemAt(1));

// list.markDoneAt(1);
// console.log(list);

// list.markUndoneAt(1);
// console.log(list);

// console.log(list.isDone());

// list.markDoneAt(0);
// list.markDoneAt(1);
// list.markDoneAt(2);
// list.markDoneAt(3);
// console.log(list.isDone());

// list.markUndoneAt(2);
// console.log(list.isDone());

// console.log(list.shift());
// console.log(list.pop());
// console.log(list);

// console.log(emptyList.shift());
// console.log(emptyList.pop());
// console.log(emptyList);

// console.log(list.removeAt(2));
// console.log(list.removeAt(0));
// console.log(list.removeAt(1));
// console.log(list);
