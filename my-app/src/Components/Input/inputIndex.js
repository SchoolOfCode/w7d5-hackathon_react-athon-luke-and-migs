import React from "react";

const handleClick = () => {
    console.log("Hello")
    // let newListItem =
}

function Input({text, setText}){

    //add set state thats updated from onchange 

    return(
    <>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}>

        </input>
        

        <button onClick={handleClick}>
            Click me
        </button>
    </>
    )
}



export default Input;