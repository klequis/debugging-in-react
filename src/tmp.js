import { Compare, defaultCompare } from './util'
import { Node } from './binaryTree/Node'
import nodemon from 'nodemon'


const log = console.log

const printNode = (msg = '', node = null) => {
  if (!node) {
    return log(msg, null)
  }
  return log(
    `${msg} ${node.key}`,
    `{ 
        node: ${node.key}, 
        left: ${node.left === null ? null : node.left.key}, 
        right: ${node.right === null ? null : node.right.key},
        row: ${node.row},
        col: ${node.col}
      }`
  )
} 

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = undefined
  }
  insert(key) {
    // special case: first key
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // node.row = 'hi'
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else if (node.right == null) {
      node.right = new Node(key)
    } else {
      this.insertNode(node.right, key)
    }
  }
  getRoot() {
    return this.root
  }
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback, row = 0, col = 0) {
    row = row + 1
    const key = node !== null ? node.key : null
    log('node', key)
    log()
    if (node != null) {
      // log('1')
      this.inOrderTraverseNode(node.left, callback, row, col);
      // log('2')
      callback(node.key);
      col = col + 1
      node.row = row
      node.col = col
      // printNode('node', node)
      // log('-----')
      // log('3')
      this.inOrderTraverseNode(node.right, callback, row, col);
      // log('4')
    } else {
      col = col - 1
    }
  }
  remove(key) {
    this.removeNode(this.root, key)
  }
  // Remove node 5
  removeNode = (node, key = 5, prevNode = null) => {


    log()
    printNode('node', node)
    printNode('prevNode', prevNode)

    if (key < node.key) {
      log('key is less than')
      prevNode = node
      node = node.left
      this.removeNode(node, key, prevNode)
    } else if (node.key === key) {
      log('key is equal to')
      prevNode.left = node.left
      prevNode.right = node.right
      node.left = null
      node.right = null
    }
  }
  printTree() {

  }
}


const tree = new BinarySearchTree()

// const keys = [3, 5, 6, 7, 9, 8, 10, 11, 12, 13, 14, 15, 18, 20, 25]
// const keysMe = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
const keys = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
log('keys', keys)
keys.forEach((key) => tree.insert(key))

// tree.remove(5)

const ret = []
debugger
tree.inOrderTraverse(x => ret.push(x))
log('ret', ret)
// Check inOrderTraverse
const result = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]
for (let i = 0; i < keys.length; i++) {
  if (result[i] !== ret[i]) {
    console.log('ERROR - keys are not equal')
  }
}



