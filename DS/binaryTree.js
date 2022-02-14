class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  add(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        //recursivily reach at the end of the branch and when found null, insert the node
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        //recursivily rea
      } else this.insertNode(node.right, newNode);
    }
  }
  BFS(root) {
    let que = [],
      res = [];
    let currNode = root;
    que.push(root);
    while (currNode) {
      currNode = que.shift();
      res.push(currNode.data);
      if (currNode.left !== null) que.push(currNode.left);
      if (currNode.right !== null) que.push(currNode.right);
      currNode = currNode.left;
    }
    return res;
  }
}

const BT = new BinaryTree();
const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.right = new Node(5);
// console.log(node);

console.log(BT.BFS(node));
