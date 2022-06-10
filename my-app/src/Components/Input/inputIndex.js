import React from "react";

const handleClick = () => {
    console.log()
    // let newListItem =
}

function Input({text, setText}){
    return(
    <div className="input">
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}>

        </input>
        

        <button onClick={handleClick}>
            Click me
        </button>
    </div>
    )
}



export default Input;