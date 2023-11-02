// Practice Problem 1 on Closures and Private data Lesson

function makeCounterLogger(num) {
  return function(num2) {
    if (num < num2) {
      for(let index = num; index <= num2; index++) {
        console.log(index);
      } 
    } else {
      for (let index = num ; index >= num2; index--) {
        console.log(index);
      }
    }
  }
}

// let countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8

// countlog(2);
// // 5
// // 4
// // 3
// // 2

// practice problem 2

function makeList() {
  let list = [];
  return function(arg) {
    if (!list.includes(arg)) {
      if(!(arg === undefined)) {
        list.push(arg);
        console.log(`${arg} added!`)
      }
      // console.log(list);
    } else if (list.includes(arg)) {
      let index = list.indexOf(arg);
      list.splice(index, 1);
      console.log(`${arg} removed!`)
      // console.log(list)
    } else if (arg === undefined) {
      if(list.length > 0) {
        list.forEach(el => console.log(el));
      }
      if (list.length === 0) {
        console.log('You are done with all your tasks for the day, great job!');
      }
    }
  }
}


// let list2 = makeList();
// list2();
// // The list is empty.

// list2("make breakfast");
// // make breakfast added!

// list2("read book");
// // read book added!

// list2();
// // make breakfast
// // read book

// list2("make breakfast");
// // make breakfast removed!

// list2();
// // read book

// updating the application programming interface

function makeList() {
  return {
    listLong : [],
    add(arg) {
      this.listLong.push(arg)
      console.log(`${arg} added!`)
    },
    list() {
      this.listLong.forEach(el => console.log(el));
    },
    remove(arg) {
      let index = this.listLong.indexOf(arg);
      this.listLong.splice(index, 1);
      console.log(`${arg} removed!`)
    }
  }
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn