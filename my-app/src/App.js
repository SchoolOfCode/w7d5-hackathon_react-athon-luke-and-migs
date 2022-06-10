// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/headerIndex.js"
import ListItem from './Components/List/listIndex.js';
import { useState } from "react";
import Input from "./Components/Input/inputIndex"



function App() {
  const [text, setText] = useState([]);
  //text is the do to list array
  //make a function in here that updates the todolist with a new item
  //pass this down to the input as a prop, this call the function to add
  //to the items list with the useState array
  return (
    <div className="App">
      <Header />
      <>
      <Input text={text} setText={setText}></Input>
      <ListItem text={text}/>
      </>
    </div>
  );
}

export default App;
