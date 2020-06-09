import { Compare, defaultCompare } from './util'
import Node from './Node'

const log = console.log

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
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode(node, callback, row = 0, col = 0) {
    
    if (node != null) {
      ++row
      log('1')
      --col
      this.inOrderTraverseNode(node.left, callback, row, col);
      log('2')
      
      console.log(node.key)
      log('3')
      debugger
      ++col
      this.inOrderTraverseNode(node.right, callback, row, col);
      log('4')
    }
  }
  remove(key) {
    this.removeNode(this.root, key)
  }
  // Remove node 5
  removeNode = (node, key = 5, prevNode = null) => {


    // log()
    // printNode('node', node)
    // printNode('prevNode', prevNode)

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

export default BinarySearchTree