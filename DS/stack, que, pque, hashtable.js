// function func() {
// var a = "Geeks";
// let a = "asdf";
// let d = "Geeks";
// var e = "Geeks";
// var e = "Geeks";

// if (true) {
//   var a = "GeeksforGeeks"; // Legal Shadowing
//   var a = "GeeksforGeeks"; // Legal Shadowing
//   let b = "Geeks"; // Illegal Shadowing
//   let c = "C Geeks"; // Illegal Shadowing
//   // console.log(a); // It will print 'GeeksforGeeks'
//   // console.log(b); // It will print error
//   // console.log(c); // It will print error
// }
// console.log(a);
// }
// func();

// class Stack {
//   constructor() {
//     this.count = 0;
//     this.stack = {};
//   }
//   push(elem) {
//     this.stack[this.count] = elem;
//     this.count++;
//   }
//   pop() {
//     if (this.count === 0) return 0;
//     this.count--;
//     let res = this.stack[this.count];
//     delete this.stack[this.count];
//     return res;
//   }
// }

// class Stack {
//   constructor() {
//     this.count = 0;
//     this.stack = [];
//   }
//   push(elem) {
//     this.stack.push(elem);
//     this.count++;
//   }
//   pop() {
//     if (this.count === 0) return 0;
//     let res = this.stack.pop();
//     this.count--;
//     return res;
//   }
//   size() {
//     return console.log(this.stack.length);
//   }
//   top() {
//     return console.log(this.stack[this.stack.length - 1]);
//   }
// }

// let stck = new Stack();
// stck.push(5);
// stck.push(6);
// stck.push(7);
// // console.log(stck.pop());
// // stck.size();
// stck.top();

// class Queue {
//   constructor() {
//     this.count = 0;
//     this.q = [];
//   }
//   enqueue(elem) {
//     this.q.unshift(elem);
//     this.count++;
//   }
//   dequeue() {
//     this.q.pop();
//     this.count--;
//   }
//   front() {
//     console.log(this.q[0]);
//   }
//   size() {
//     console.log(this.q.length);
//   }
// }

// let que = new Queue();
// que.push(5);
// que.push(6);
// que.push(7);
// // console.log(stck.pop());
// // stck.size();
// stck.top();

// class PQueue {
//   constructor() {
//     this.count = 0;
//     this.q = [];
//   }
//   enqueue(elem) {
//     if (this.q.length === 0) {
//       this.q.unshift(elem);
//       this.count++;
//       return;
//     }
//     var added = false;
//     for (let i = 0; i < this.q.length; i++){
//       if(elem[1]<this.q[i]){
// this.q.splice(i, 0, elem);
// }
//     }
//     if (added) this.q.push(elem);
//     this.count++;
//   }
//   dequeue() {
//     this.q.pop();
//     this.count--;
//   }
//   front() {
//     console.log(this.q[0]);
//   }
//   size() {
//     console.log(this.q.length);
//   }
//   show() {
//     console.log(this.q);
//   }
// }
// let pque = new PQueue();
// pque.enqueue(["a", 3]);
// pque.enqueue(["b", 2]);
// pque.enqueue(["c", 4]);
// pque.enqueue(["d", 0]);
// // stck.size();
// pque.show();

class CircularQueue {
    constructor(size) {
      this.front=0
      this.end=0
    this.size = size;
    this.count = 0;
    this.q = new Array(size);
  }
    enqueue(elem) {
        this.q[this.end++] = elem;
        this.end = this.end % this.size;
    this.count++;
  }
  dequeue() {
      let rem = this.q[this.front++];
        this.front = this.front % this.size;
      this.count--;
      return rem;
  }
  front() {
    console.log(this.q[this.front]);
  }
}
const cQue = new CircularQueue(10);
cQue.enqueue(2);
cl(cQue.dequeue());



// ----------------------

// class HashTable {
//   constructor(tbleSize) {
//     this.size = 0;
//     this.tbl = new Array(tbleSize);
//   }
//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash += key.charCodeAt(i);
//     }
//     return hash % this.tbl.length;
//   }
//   set(key, value) {
//     let index = this._hash(key);
//     this.tbl[index] = value; // you can also store only value
//     // this.tbl[index] = [key, value];
//     this.size++;
//   }
//   get(key) {
//     let index = this._hash(key);
//     return this.tbl[index];
//   }
// }
// let ht = new HashTable(10);
// ht.set("Human", ["shoaib", "ali", "raza"]);
// ht.set("Animal", ["zebra", "crossing", "lion"]);
// console.log(ht.get("Human"));

// console.log("Shoaib".charCodeAt(0));


/*

cl func

*/
function cl(params) {
  console.log(params);
}
