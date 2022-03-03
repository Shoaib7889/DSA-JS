class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.mycount = 0;
  }
  add(element) {
    var node = new Node(element);
    if (this.head == null) {
      //creating first elem
      this.head = node;
    } else {
      var current;
      //assigning first node to current variable
      current = this.head;
      //reaching to the last node
      while (current.next) {
        current = current.next;
      }
      //assigning new node at the end of the list
      current.next = node;
    }
    this.size++;
  }
  mergeSort(list) {
    // console.log("list ", list.element);
    if (list.next === null) return list;
    //left and right part seperate kie hain
    let count = 0;
    let countList = list;
    let leftPart = list;
    let leftPointer = list;
    let rightPart = null;

    // Counting the nodes in the received linkedlist
    while (countList.next !== null) {
      count++;
      countList = countList.next;
    }

    // counting the mid of the linked list
    let mid = Math.floor(count / 2);
    let count2 = 0;

    // separating the left and right part with
    // respect to mid node in tke linked list
    while (count2 < mid) {
      count2++;
      leftPointer = leftPointer.next;
    }

    rightPart = leftPointer.next
      ? new LinkedList(leftPointer.next)
      : leftPointer;
    leftPointer.next = null;

    // Here are two linked list which
    // contains the left most nodes and right
    // most nodes of the mid node
    this.mycount++;
    console.log(this.mycount);
    // console.log(leftPart, this.mycount);

    return this._mergeSort(
      this.mergeSort(leftPart),
      this.mergeSort(rightPart.head)
    );
  }
  _mergeSort(left, right) {
    let result = new LinkedList();

    let resultPointer = result.head;
    let pointerLeft = left;
    let pointerRight = right;

    // If true then add left most node value in result,
    // increment left pointer else do the same in
    // right linked list.
    // This loop will be executed until pointer's of
    // a left node or right node reached null
    while (pointerLeft && pointerRight) {
      let tempNode = null;

      // Check if the right node's value is greater than
      // left node's value
      if (pointerLeft.element > pointerRight.element) {
        tempNode = pointerRight.element;
        pointerRight = pointerRight.next;
      } else {
        tempNode = pointerLeft.element;
        pointerLeft = pointerLeft.next;
      }

      if (result.head == null) {
        result.head = new Node(tempNode);
        resultPointer = result.head;
      } else {
        resultPointer.next = new Node(tempNode);
        resultPointer = resultPointer.next;
      }
    }

    // Add the remaining elements in the last of resultant
    // linked list
    resultPointer.next = pointerLeft;
    while (resultPointer.next) resultPointer = resultPointer.next;

    resultPointer.next = pointerRight;

    // Result is  the new sorted linked list
    return result.head;
  }
  add_at_ind(element, ind) {
    const node = new Node(element);
    if (ind < 0 || ind > this.size) {
      console.log("Bande da put ban");
    } else {
      if (ind === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let curr = this.head,
          prev;
        let iterator = 0;
        while (iterator < ind) {
          iterator++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
  removeFrom(ind) {
    if (ind < 0 || ind > this.size) {
      console.log("Bande da put ban");
    } else {
      if (ind === 0) {
        var next = this.head.next;
        this.head = next;
      } else {
        let curr = this.head,
          prev;
        let iterator = 0;
        while (iterator < ind) {
          iterator++;
          prev = curr;
          curr = curr.next;
        }
        // node.next = curr;
        prev.next = curr.next;
      }
      this.size--;
    }
  }
  removeElem(elem) {
    let curr = this.head,
      prev;
    let iterator = 0;
    if (curr.element === elem) {
      this.head = this.head.next;
      return curr.element;
    }
    while (iterator < this.size) {
      if (curr.element === elem) {
        prev.next = curr.next;
        this.size--;
        return curr.element;
      }
      iterator++;
      prev = curr;
      curr = curr.next;
    }
    // node.next = curr;
    prev.next = curr.next;
  }
  indexOf(elem) {
    let curr = this.head,
      prev;
    let iterator = 0;
    while (iterator < this.size) {
      if (curr.element === elem) {
        console.log(iterator);
        return;
      }
      iterator++;
      prev = curr;
      curr = curr.next;
    }
    console.log("not found");
  }
  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    return false;
  }
  show_all_elems() {
    var curr = this.head;
    let count = 0;
    var str = "";
    while (curr) {
      str += curr.element + " -> ";
      curr = curr.next;
      count++;
      if (count === 100) return;
    }
    console.log(str);
  }
  list_size() {
    console.log(this.size);
  }
  isCyclic() {
    let arr = [];
    let listPointer = this.head;
    while (listPointer) {
      if (arr.includes(listPointer)) {
        return true;
      }
      arr.push(listPointer);
      listPointer = listPointer.next;
    }
    return false;
  }
  createCyleAtK(k) {
    let temp = this.head;
    let count = 1;
    while (count < k) {
      temp = temp.next;
      count++;
    }
    let joinPoint = temp;

    while (temp.next) {
      temp = temp.next;
    }

    temp.next = joinPoint;
    return this.head;
  }
}

const ll = new LinkedList();
ll.add(2);
ll.add(3);
ll.add(6);
ll.add(6);
ll.add(8);
ll.add(4);
ll.add(5);
ll.add(9);
// ll.mersort();
// ll.show_all_elems();
// console.log(ll.head, ll);
// ll.head = ll.mergeSort(ll.head);
// ll.add_at_ind(8, 1);
// ll.removeFrom(1);
// ll.show_all_elems();
// ll.removeElem(2);
// ll.show_all_elems();
// console.log(ll.isEmpty());
// ll.indexOf(2);

// cl(ll.isCyclic());
// ll.createCyleAtK(4);
// cl("iscyclic ---- " + ll.isCyclic());
// ll.show_all_elems();

/*

    LRU - doubly linked list

*/
class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.prev = null;
    this.next = null;
  }
}
class Dll {
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = tail;
    this.tail.prev = head;

    this.size = 0;
  }
  add(node) {
    node.next = this.tail;
    node.prev = this.tail.prev;

    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }
  remove(node) {
    // node.prev.next = node.next;
    // node.next.prev = node.prev;
    let next = node.next;
    let prev = node.prev;
    prev.next = next;
    next.prev = prev;

    this.size--;
  }
}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = {};
    this.Dll = new Dll();
  }

  get(key) {
    if (this.map[key]) {
      let node = this.map[key];
      this.Dll.remove(node);
      this.Dll.add(node);
      return node.val;
    }

    return -1;
  }

  put(key, value) {
    let newNode = new Node(key, value);
    if (this.map[key]) {
      let oldNode = this.map[key];
      this.Dll.remove(oldNode);
    }

    this.Dll.add(newNode);
    this.map[key] = newNode;

    if (this.Dll.size > this.capacity) {
      //remove the node after head;
      let removeNode = this.Dll.head.next;
      this.Dll.remove(removeNode);
      delete this.map[removeNode.key];
    }
  }
}

/*

cl func

*/
function cl(params) {
  console.log(params);
}
