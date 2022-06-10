// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/headerIndex.js"
import ListItem from './Components/List/listIndex.js';
import { useState } from "react";
import Input from "./Components/Input/inputIndex"
import Button from "./Components/Button/buttonIndex.js"



function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleState(e){
    setText(e.target.value)
  }

  function handleClick(){
    setList([...list, text]);
    console.log(list)
  }
  //text is the do to list array
  //make a function in here that updates the todolist with a new item
  //pass this down to the input as a prop, this call the function to add
  //to the items list with the useState array
  return (
    <div className="App">
      <Header />
      <>
      <Input handleState={handleState}></Input>
      <Button handleClick={handleClick}></Button>
      <ListItem list={list}></ListItem>
      </>
    </div>
  );
}

export default App;
