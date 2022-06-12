import React from "react";


const MyButton = (props) => {
    console.log(props)
    return (
        <>
            <button className={props.className}>{props.label}</button>
       </>
    )
}

export default MyButton;