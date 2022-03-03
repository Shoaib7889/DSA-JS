/* implemented using Heap pkg */

// import Heap from "heap";

// let hp = new Heap((a, b) => a - b);
// hp.push(3);
// hp.push(1);
// hp.push(2);
// for (let i of hp.nodes) console.log(i);
// // console.log(hp.pop())

/* Heaps custom implemented */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

/* implemented by custom HEAP */

let MinHeap = function () {
  let heap = [null];

  this.insert = (num) => {
    heap.push(num);
    //means there are more than one node
    if (heap.legth > 2) {
      let idx = heap.legth - 1;
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        //if the node is not the parent
        if (idx > 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)],
          ];
          //make the upper node as the parent
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else break;
        }
      }
    }
    console.log(heap);
  };

  this.remove = function () {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };

  this.sort = function () {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
};

const minHeapObj = new MinHeap();
minHeapObj.insert(5);
minHeapObj.insert(2);
minHeapObj.insert(4);
minHeapObj.insert(1);
minHeapObj.insert(8);
// console.log(minHeapObj.remove());
console.log(minHeapObj.sort());

let MaxHeap = function () {
  let heap = [null];

  this.print = () => heap;

  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] > heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = function () {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };
};

//                  maxHeap to minHeap

function minHeapify(heap, index) {
  var left = index * 2;
  var right = index * 2 + 1;
  var smallest = index;

  if (heap.length > left && heap[smallest] > heap[left]) {
    smallest = left;
  }
  if (heap.length > right && heap[smallest] > heap[right]) smallest = right;
  if (smallest != index) {
    var tmp = heap[smallest];
    heap[smallest] = heap[index];
    heap[index] = tmp;
    minHeapify(heap, smallest);
  }
  return heap;
}

function convertMax(maxHeap) {
  for (var i = Math.floor(maxHeap.length / 2); i > -1; i--)
    maxHeap = minHeapify(maxHeap, i);
  return maxHeap;
}

var maxHeap = [9, 4, 7, 1, -2, 6, 5];
// console.log(convertMax(maxHeap));
