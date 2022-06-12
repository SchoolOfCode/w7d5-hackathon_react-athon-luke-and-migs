import React from "react";

function Todo({ text, todo, todos, setTodos }) {
    //Events
    function deleteHandler() {
       //comparing the element that we are clicking on to the state.
       // filtering the state out, to find the element that matches what we are clicking on.
       // If it matches it deletes it onClick.
       setTodos(todos.filter((element) => element.id !== todo.id));
    };

    function completeHandler() {
        setTodos(todos.map(item => {
            if(item.id === todo.id){ 
                return {
                    ...item, completed: !item.completed, 
                };
            }
            return item;
        })
    )
    };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
