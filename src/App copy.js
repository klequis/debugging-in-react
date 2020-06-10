import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BinarySearchTree from "./BinarySearchTree";
import { Graphviz } from "graphviz-react";

const log = console.log;

function App() {
  const getHi = () => "hi";

  const tree = new BinarySearchTree();

  const keys = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];
  keys.forEach((key) => tree.insert(key));

  // const inOrderResult = [];
  // tree.inOrderTraverse((x) => inOrderResult.push(x));
  // const inOrderExpected = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25];
  // for (let i = 0; i < keys.length; i++) {
  //   if (inOrderExpected[i] !== inOrderResult[i]) {
  //     console.log("ERROR - in order keys are not not correct");
  //   }
  // }

  // const preOrderResult = [];
  // tree.preOrderTraverse((x) => preOrderResult.push(x));
  // const preOrderExpected = [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25];
  // for (let i = 0; i < keys.length; i++) {
  //   if (preOrderExpected[i] !== preOrderResult[i]) {
  //     console.log("ERROR - pre order keys are not not correct");
  //   }
  // }

  // const postOrderResult = [];
  // tree.postOrderTraverse((x) => postOrderResult.push(x));
  // const postOrderExpected = [];
  // for (let i = 0; i < keys.length; i++) {
  //   if (postOrderExpected[i] !== postOrderResult[i]) {
  //     console.log("ERROR - post order keys are not not correct");
  //   }
  // }

  // tree.remove(7);
  // const removeResult = [];
  // tree.inOrderTraverse((x) => removeResult.push(x));


  const get = tree.getNode(9)
  log('get', get)

  const arrayToString = (arr) => {
    const a = arr.map((num) => {
      return num.length === 1 ? num : `${num}`.padStart(2, "0");
    });
    return a.join(",");
  };

  // const makeTableRow = (operation, data) => {
  //   // const inOrderExpected = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25];
  //   if (data.length === 0) {
  //     return null
  //   }
  //   return (
  //     <tr>
  //       <td>{operation}</td>
  //       <td>{data.length}</td>
  //       {inOrderExpected.map(num => {
  //         return  <td key={num} style={{ paddingRight: 8, paddingLeft: 8 }}>{data.includes(num) ? num : ''}</td>
  //       })}
  //     </tr>
  //   )
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Graphviz dot={tree.nodeGraphString()} /> */}
        
        {/* <table>
          <thead>
            <tr>
              <td>Operation</td>
              <td>Length</td>
              <td colSpan={inOrderExpected.length}>Data</td>
            </tr>
          </thead>
          <tbody>
            {makeTableRow('in order', inOrderResult)}
            {makeTableRow('pre order', preOrderResult)}
            {makeTableRow('post order', postOrderResult)}
            {makeTableRow('remove 5', removeResult)}
          </tbody>
        </table> */}

      </header>
    </div>
  );
}

export default App;
