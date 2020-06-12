import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BinarySearchTree from "./BinarySearchTree";
import BinarySearchTree from "./GeeksBST";
// import { Graphviz } from "graphviz-react";

const log = console.log;

function App() {

  const tree = new BinarySearchTree();

  const keys = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];
  keys.forEach((key) => tree.insert(key));


  const get = tree.getNode(9)
  log('get', get)

  return (
    <div className="App">
      <header className="App-header">
        {/* <Graphviz dot={tree.nodeGraphString()} /> */}
        

      </header>
    </div>
  );
}

export default App;
