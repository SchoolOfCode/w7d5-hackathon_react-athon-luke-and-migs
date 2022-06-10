// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/headerIndex.js"
import ListItem from './Components/List/listIndex.js';
import { useState } from "react";
import Input from "./Components/Input/inputIndex"



function App() {
  const [text, setText] = useState("");
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
