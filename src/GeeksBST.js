import { yellow } from './logger'

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class GeeksBST {
  constructor() {
    this.root = null
    this.numNodes = 0
  }

  numberOfNodes() {
    return this.numNodes
  }
  insert(key) {
    var newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
    this.numNodes++
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key)
    this.numNodes--
  }

  removeNode(node, key) {
    if (node === null) {
      return null
    } else if (key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      var aux = this.findMinNode(node.right)
      node.key = aux.key

      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node
    } else {
      return this.findMinNode(node.left)
    }
  }

  getRootNode() {
    return this.root
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)  
  }
  

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  search(node, key) {
    if (node === null) {
      return null
    } else if (key < node.key) {
      return this.search(node.left, key)
    } else if (key > node.key) {
      return this.search(node.right, key)
    } else {
      return node
    }
  }
}

export default GeeksBST