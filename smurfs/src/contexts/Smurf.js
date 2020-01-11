import React from "react";

const Smurf = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <div>{props.age}</div>
            <div>{props.height}</div>
        </div>
    )
}

export default Smurf;