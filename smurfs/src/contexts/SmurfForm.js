import React, { useState, useContext } from "react";
import axios from "axios";
import SmurfContext from "./SmurfContext";

function SmurfForm() {
    const [form, setForm] = useState({});
    const { setUpdate } = useContext(SmurfContext);
    const onChange = event => {
        event.preventDefault();
        setForm({...form, [event.target.name]: event.target.value})
    }
    const onSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:3333/smurfs", form)
            .then(response => {
                console.log(response);
                setUpdate(Date.now());
            })
            .catch(error => {
                console.log(error);
            })
        
            
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" placeholder="Name" onChange={onChange} />
                <input name="age" placeholder="Age" onChange={onChange} />
                <input name="height" placeholder="Height" onChange={onChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default SmurfForm;