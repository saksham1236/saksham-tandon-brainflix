import React from "react";
import "./App.scss";
import Nav from "./components/nav/nav";
import axios from "axios";
import { useState } from "react";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import Main from "./components/main-body/main-body";

function App() {
  const { videoId } = useParams()
  const [id, setId] = useState("c05b9a93-8682-4ab6-aff2-92ebb4bbfc14");
  console.log(videoId);
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Main id={id} setId = {setId}/>}/>
          <Route path = "*" element ={<section><h2>Page Not Found</h2></section>}/>
          <Route path=":videoId" element={<Main id={id} setId = {setId}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
