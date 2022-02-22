class Nodee {
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
    const newNode = new Nodee(data);
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
const node = new Nodee(1);
node.left = new Nodee(2);
node.right = new Nodee(3);
node.left.left = new Nodee(4);
node.left.right = new Nodee(5);
// console.log(node);
console.log(BT.BFS(node));

/**
 *
 *    AVL Tree
 */

class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.key = val;
    this.height = 0;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // A utility function to get
  // the height of the tree
  height(N) {
    if (N == null) return 0;
    return N.height;
  }
  max(a, b) {
    return a > b ? a : b;
  }
  getBalance(N) {
    if (N == null) return 0;

    return this.height(N.left) - this.height(N.right);
  }

  rightRotate(y) {
    var x = y.left;
    var T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

    // Return new root
    return x;
  }
  leftRotate(x) {
    var y = x.right;
    var T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

    // Return new root
    return y;
  }
  insert(node, key) {
    /*  normal BST insertion */
    if (node == null) return new Node(key);

    if (key < node.key) node.left = this.insert(node.left, key);
    else if (key > node.key) node.right = this.insert(node.right, key);
    // Duplicate keys not allowed
    else return node;

    /* Update height of this ancestor node */
    node.height = 1 + this.max(this.height(node.left), this.height(node.right));

    /* Get the balance factor of this ancestor
            node to check whether this node became
            unbalanced */
    var balance = this.getBalance(node);

    // If this node becomes unbalanced, then
    // there are 4 cases Left Left Case
    if (balance > 1 && key < node.left.key) return this.rightRotate(node);

    // Right Right Case
    if (balance < -1 && key > node.right.key) return this.leftRotate(node);

    // Left Right Case
    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    /* return the not changed node pointer */
    return node;
  }

  // A utility function to print preorder traversal
  // of the tree.
  // The function also prints height of every node
  preOrder(node) {
    if (node != null) {
      document.write(node.key + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}
var tree = new AVLTree();
//root will be changed everytime new node inserted so,
//we are passing updated root at each new insertion
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);

document.write("Preorder traversal of the " + "constructed AVL tree is <br>");
tree.preOrder(tree.root);
