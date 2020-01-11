import React, { useState, useEffect } from "react";
import "./App.css";
import Smurfs from "../contexts/Smurfs";
import SmurfContext from "../contexts/SmurfContext";
import SmurfForm from "../contexts/SmurfForm";
import axios from "axios";

function App() {
  const [smurfs, setSmurfs] = useState("");
  const [update, setUpdate] = useState();

  useEffect(() => {
    axios
        .get("http://localhost:3333/smurfs")
        .then (response => {
            console.log(response);
            setSmurfs(response.data);
        })
        .catch (error => {
            console.log(error);
        })
}, [update])
    console.log(smurfs);
    return (
      <SmurfContext.Provider value={{ smurfs, setUpdate }}>
        <div className="App">
          <SmurfForm />
          <Smurfs />
        </div>
      </SmurfContext.Provider>
    );
  }


export default App;
