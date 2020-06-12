import { expect } from 'chai'
import GeeksBST from '../src/GeeksBST'
import { keys, inOrderExpected, preOrderExpected, postOrderExpected } from './fixture'
import { green } from '../src/logger'

function checkOrderResult(expected, result) {
  for (let i = 0; i < keys.length; i++) {
    if (expected[i] !== result[i]) {
      console.log('ERROR - in order keys are not not correct')
      return false
    }
  }
  return true
}

describe('nodes are correct', function () {
  let tree

  beforeEach(() => {
    tree = new GeeksBST()
    keys.forEach((key) => tree.insert(key))
  })

  it('numNodes should === keys.length', function () {
    expect(tree.numberOfNodes()).to.equal(keys.length)
  })

  it('inOrderTraverse should equal inOrderResult[]', function () {
    const result = []
    tree.inOrderTraverse((x) => result.push(x))
    expect(checkOrderResult(inOrderExpected, result)).to.be.true
    
  })

  it('preOrderTraverse should equal preOrderResult[]', function () {
    const result = []
    tree.preOrderTraverse((x) => result.push(x))
    expect(checkOrderResult(preOrderExpected, result)).to.be.true
    
  })

  it('postOrderTraverse should equal postOrderResult[]', function () {
    const result = []
    tree.postOrderTraverse((x) => result.push(x))
    expect(checkOrderResult(postOrderExpected, result)).to.be.true
    
  })
})
