import React from "react";


const Child = (props) => {
    return(
        <div className={props.className}>
            <p>{props.date}</p>
            <button>{props.logo}</button>
            <h1>{props.heading}</h1>
            <h2>{props.subheading}</h2>
            <p>{props.devices}</p>
        </div>
    )
}

export default Child;