import { expect } from 'chai'
import BinarySearchTree from '../src/BinarySearchTree'
const log = console.log

const nodeMap = {
  '11': {
    left: 7,
    right: 15
  },
  '7': {
    left: 5,
    right: 9
  },
  '15': {
    left: 13,
    right: 20
  },
  '5': {
    left: 3,
    right: 6
  },
  '9': {
    left: 8,
    right: 10
  },
  '13': {
    left: 12,
    right: 14
  },
  '20': {
    left: 18,
    right: 25
  },

  '3': {
    left: null,
    right: null
  },
  '6': {
    left: null,
    right: null
  },
  '8': {
    left: null,
    right: null
  },
  '10': {
    left: null,
    right: null
  },

  '12': {
    left: null,
    right: null
  },
  '14': {
    left: null,
    right: null
  },
  '18': {
    left: null,
    right: null
  },
  '25': {
    left: null,
    right: null
  }
}

const keys = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
function checkInOrderResult(expected, result) {
  for (let i = 0; i < keys.length; i++) {
    if (expected[i] !== result[i]) {
      console.log('ERROR - in order keys are not not correct')
      return false
    }
  }
  return true
}

describe.skip('nodes are correct', function () {
  let tree

  beforeEach(() => {
    tree = new BinarySearchTree()
    keys.forEach((key) => tree.insert(key))
  })

  it('check inOrderTraverse result', function () {
    const inOrderExpected = [
      3,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      18,
      20,
      25
    ]
    const inOrderResult = []
    tree.inOrderTraverse((x) => inOrderResult.push(x))
    expect(checkInOrderResult(inOrderExpected, inOrderResult)).to.be.true
  })

  it('check all nodes', function () {
    keys.forEach((key) => {
      const n = tree.getNode(key)
      expect(n.key).to.equal(key)
      if (nodeMap[key].left !== null) {
        expect(n.left.key).to.equal(nodeMap[key].left)
      } else {
        expect(n.left).to.equal(nodeMap[key].left)
      }
      if (nodeMap[key].right !== null) {
        expect(n.right.key).to.equal(nodeMap[key].right)
      } else {
        expect(n.right).to.equal(nodeMap[key].right)
      }
    })
  })

  it('check tree nodes', function () {
    // log(tree.inOrderTraverse(console.log))
    tree.remove(7)
    const inOrderExpected = [3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]
    const inOrderResult = []
    tree.inOrderTraverse((x) => inOrderResult.push(x))
    expect(checkInOrderResult(inOrderExpected, inOrderResult)).to.be.true
  })
})
