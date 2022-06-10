import React from "react";


function ListItem(props){
    const listArray = props.list
    return (
    <ul>
    {listArray.map((text) =>{
        return (
            <>
            <li >{text}</li>
            </>
        )
    })
    }
    </ul>) // hands in the prop given from app.js

}
export default ListItem;