

class Todo {
  constructor(title) {
    this.title = title;
    this.done = false;
  }

  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  isDone() {
    return this.done
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  getTitle() {
    return this.title;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`
  }
}

//ask chase why the String and toString works and includes the [] ====> so confused;



// omitted code

// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

    add(task) {
      if (typeof task !== 'object' || task.constructor !== Todo) {
        throw new Error("Must be an object from the Todo class! Sorry try again.")
      } else {
        this.todos.push(task);
      }
    }

    size() {
      return this.todos.length;
    }

    first() {
    
      return this.todos.length === 0 ? undefined : this.todos[0];
    }

    last() {
      return this.todos.length === 0 ? undefined : this.todos[this.todos.length - 1];
    }

    itemAt(index) {
      this._validateIndex(index);
      return this.todos[index];
    }
  
    _validateIndex(index) { // _ in name suggests a "private" method
      if (!(index in this.todos)) {
        throw new ReferenceError(`invalid index: ${index}`);
      }
    }

    markDoneAt(index) {
      this.itemAt(index).markDone();
    }
    
    markUndoneAt(index) {
      this.itemAt(index).markUndone();
    }

    isDone() {
      return this.todos.every(obj => obj.isDone() === true);
    }

    shift() {
      //guard clause
      if(this.todos.length === 0) return undefined;
      return this.todos.shift();
    }

    pop() {
      //guard clause
      if(this.todos.length === 0) return undefined;
      return this.todos.pop();
    }

    removeAt(index) {
      this._validateIndex(index)
      return this.todos.splice(index, 1);
    }

    toString() {
      this.todos.forEach(obj => {
        console.log(`${obj.toString()}`)
      })
    }

    forEach(callback) {
      this.todos.forEach(el => callback(el));
    }

    filter(callback) {
      let newList = new TodoList(this.title);
      this.forEach(todo => {
        if (callback(todo)) {
          newList.add(todo);
        }
      });
  
      return newList;
    }
  }

  findByTitle(title) {
    // let arr = this.todos.filter(obj => obj.title === title);
    // return arr[0]

    return this.todos.filter(todo => todo.getTitle() === title).first();
  }

  allDone() {
    
  }
    
    // markDoneAt(index) {
    //   if (this.todos[index]) {
    //     this.todos[index].done = true;
    //   } else if (!index || index > this.todos.length - 1) {
    //     throw new ReferenceError("Missing or falsy value passed in");
    //   }
    // }

    // markUndoneAt(index) {
    //   if (this.todos[index]) {
    //     this.todos[index].done = false;
    //   } else if (!index || index > this.todos.length - 1) {
    //     throw new ReferenceError("Missing or falsy value passed in");
    //   }
    // }
  // rest of class needs implementation
}


// Omitted code

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
todo1.markDone();
todo5.markDone();

let doneTodos = list.filter(todo => todo.isDone());
console.log(doneTodos);