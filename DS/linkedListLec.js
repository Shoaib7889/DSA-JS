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
  addRec(element, node) {
    if (node.next == null) {
      let nodee = new Node(element);
      node.next = nodee;
      this.size++;
      return nodee;
    }
    node = node.next;
    this.addRec(element, node);
  }
  removeDupRec(head, node) {
    cl(head, node);
    if (node === null) {
      return;
    }
    let val = node.element;
    if (node.next && val !== node.next.element) {
      head = node.next;
    }
    node = node.next;
    this.removeDup(head, node);
  }
  isCyclicPointer(l1, l2) {
    let s = l1;
    let f = l2;
    while (f !== null && s !== null) {
      f = f.next;
      s = s.next;
      if (f == s) {
        return true;
      }
    }
    return false;
  }
  noOfCycles(l1, l2) {
    let s = l1;
    let f = l2;
    while (f !== null && s !== null) {
      f = f.next;
      s = s.next;
      if (f === s) {
        s = s.next;
        let count = 0;
        while (s !== f) {
          count++;
          s = s.next;
        }
        return count;
      }
    }
    return 0;
  }
  middleNo() {
    let f = this.head;
    let s = this.head;
    while (f !== null && f.next !== null) {
      s = s.next;
      f = f.next.next;
    }
    return s.element;
  }

  removeDup(node) {
    if (node === null) return node;
    let head = node;
    while (node.next) {
      if (node.element === node.next.element) node.next = node.next.next;
      else {
        node = node.next;
      }
    }
    return head;
  }
  mergeSortedLists(l1, l2) {
    let resList = new LinkedList();
    while (l1 && l2) {
      if (l1.element < l2.element) {
        resList.add(l1.element);
        l1 = l1.next;
      } else {
        resList.add(l2.element);
        l2 = l2.next;
      }
    }
    while (l1) {
      resList.add(l1.element);
      l1 = l1.next;
    }
    while (l2) {
      resList.add(l2.element);
      l2 = l2.next;
    }
    return resList;
  }
  reverseIt() {
    let h = this.head;
    let prev = null,
      curr = this.head,
      nextt = this.head.next;
    while (curr !== null) {
      curr.next = prev;
      prev = curr;
      curr = nextt;
      if (nextt !== null) nextt = nextt.next;
    }
    this.head = prev;
    console.log(this.head);
  }
  mergeSort(list) {
    // console.log("list ", list.element);
    if (list !== null && list.next === null) return list;
    //left and right part seperate kie hain
    if (list !== null) {
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
  //delete elemnet witout head ref
  deleteDirectElem(node) {}
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
  show_all_elems(headNode) {
    // var curr ;
    var curr = this.head;
    // if (headNode) {
    //   curr = headNode;
    // } else {
    //   curr = this.head;
    // }
    // console.log(curr);

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
const llNew = new LinkedList();
ll.add(2);
ll.add(3);
ll.add(4);
// ll.add(6);
// ll.add(6);
// ll.add(8);
// ll.add(4);
// ll.add(4);
// ll.add(9);

llNew.add(8);
llNew.add(10);
llNew.add(12);

// ll.addRec(10, ll.head);
// ll.addRec(10, ll.head);

// ll.show_all_elems();
// let list = ll.mergeSortedLists(ll.head, llNew.head);
// cl(list);

ll.reverseIt();
ll.show_all_elems();

// ll.show_all_elems();
// cl(ll.removeDup(ll.head));
// cl(ll.middleNo());
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

function cl(params) {
  console.log(params);
}
