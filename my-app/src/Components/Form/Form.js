import React from "react";
import TodoList from "../TodoList/TodoList";

function Form ({ inputText, setInputText, todos, setTodos, setStatus }) {
// Here we can write our JS code and functions to handle inputText
// (e) = event being passed as argument
function inputTextHandler(e) {
  //the event which tells us info about what has just happened on the input.
  //update our state to update the rest of our code when needed.
  setInputText(e.target.value);
};
function submitTodoHandler(e) {
  e.preventDefault();
  //setting the setTodos to create an object with the inputText, completed false and a random ID NO.
  setTodos([
    ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
  ])
  // RESET INPUT TEXT ON BROWSER TO EMPTY. SETS THE setInputText State back to zero/empty on display.
  setInputText("");
};
function statusHandler(e) {
 setStatus(e.target.value);
};

// ADD (e) = event to input or button with onChange/onClick atrributes inside Element as below.
// We are adding inputTextHandler function. Everytime our input changes inputTextHandler is being run.

    return (
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form











// import React from "react";

// function Input({handleState}){
//     //add set state thats updated from onchange 

//     return <input onChange={handleState} type="text"></input>
//      // hands in the function prop given in App.js
//     //onChange is to call the function when something is inputted
// }
        

// export default Input;