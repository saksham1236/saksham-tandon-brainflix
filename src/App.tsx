import React, { useEffect } from "react";
import "./App.scss";
import { useState } from "react";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";

import axios from "axios";
import fetchUrl from "./components/routes/fetchUrl";
import apiKey from "./components/keys/apiKey";

import Nav from "./components/nav/nav";
import Main from "./pages/mainPage/main-body";
import UploadPage from "./pages/uploadPage/uploadPage";

function App() {
  let fetchedList:any = [];
  const [videoList, setVideoList]:any = useState([]);
  const { videoId } = useParams()
  const [id, setId] = useState();
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    let fetchedList:any = [];
    axios.get(`${fetchUrl}/videos?api_key=${apiKey}`)
    .then((res:any) => {
        fetchedList = [...res.data];
        console.log("from function", fetchedList);
        setVideoList(fetchedList);
        setId(fetchedList[0].id);
    }).catch((error:object) => {
        console.log(error);
    });
  },[]);

  if(!fetchedList) {
    return (<h1>Loading</h1>)
  } else {
    return (
      <div className="App">
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Main id={id} setId = {setId} videoList = {videoList}/>}/>
            <Route path = "*" element ={<section><h2>Page Not Found</h2></section>}/>
            <Route path = "/video/:videoId" element={<Main id={id} setId = {setId} videoList = {videoList}/>}/>
            <Route path = "/upload" element={<UploadPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
