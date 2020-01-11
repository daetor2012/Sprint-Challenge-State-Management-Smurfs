import React, { useContext } from "react";
import SmurfContext from "./SmurfContext";
import Smurf from "./Smurf";

function Smurfs() {
    const { smurfs } = useContext(SmurfContext);
    console.log(smurfs);
    if(!smurfs) return <div>Loading...</div>
    return (
        <div>
            {smurfs.map(data => {
                return (
                    <Smurf name={data.name} age={data.age} height={data.height} />
                )
            })}
        </div>
        
    )
}

export default Smurfs;