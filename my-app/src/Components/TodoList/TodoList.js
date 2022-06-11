import React from "react";
//Import Components
import Todo from "../Todo/Todo.js"

function TodoList ({ todos }) {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {todos.map((todo) => (
                <Todo key={todo.id} text={todo.text} />
            ))}
            </ul>
        </div>
    );
}

export default TodoList;











// function ListItem(props){
//     const listArray = props.list
//     return (
//     <ul>
//     {listArray.map((text) =>{
//         return (
//             <>
//             <li >{text}</li>
//             </>
//         )
//     })
//     }
//     </ul>) // hands in the prop given from app.js

// }
// export default ListItem;