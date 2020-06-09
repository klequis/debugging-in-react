import React from 'react';
import logo from './logo.svg';
import './App.css';
import BinarySearchTree from './BinarySearchTree'

const log = console.log


function App() {

  const getHi = () => 'hi'

  const tree = new BinarySearchTree()

// const keys = [3, 5, 6, 7, 9, 8, 10, 11, 12, 13, 14, 15, 18, 20, 25]
// const keysMe = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
const keys = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
// log('keys', keys)
keys.forEach((key) => tree.insert(key))

// tree.remove(5)

const ret = []
tree.inOrderTraverse(x => ret.push(x))
// log('ret', ret)
// Check inOrderTraverse
// const result = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]
// for (let i = 0; i < keys.length; i++) {
//   if (result[i] !== ret[i]) {
//     console.log('ERROR - keys are not equal')
//   }
// }

  return (
    <div className="App">
      <header className="App-header">
      <h1>{getHi()}</h1>
      </header>
    </div>
  );
}

export default App;
