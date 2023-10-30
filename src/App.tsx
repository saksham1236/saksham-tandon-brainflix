//Importing CSS
import "./App.scss";
//Imports
import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";

//Importing Components
import fetchUrl, {fetchUrlLocal} from "./components/routes/fetchUrl";
import apiKey from "./components/keys/apiKey";
import Nav from "./components/nav/nav";
import Main from "./pages/mainPage/main-body";
import UploadPage from "./pages/uploadPage/uploadPage";

function App() {
  const port = process.env.PORT || 8080
  let fetchedList:any = [];
  const [videoList, setVideoList]:any = useState([]);
  const { videoId } = useParams()
  const [id, setId] = useState();
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    axios.get(`${fetchUrlLocal}/videos`)
    .then((res:AxiosResponse) => {
        fetchedList = [...res.data];
        console.log("from function", fetchedList);
        setVideoList(fetchedList);
        setId(fetchedList[0].id);
    }).catch((error:AxiosError) => {
        console.log(error);
    });
  },[]);

  if(!fetchedList) {
    return (<h1>Loading</h1>)
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path = "/saksham-tandon-brainflix" element={<Main id={id} setId = {setId} videoList = {videoList}/>}/>
            <Route path = "*" element ={<section><h2>Page Not Found</h2></section>}/>
            <Route path = "/saksham-tandon-brainflix/video/:videoId" element={<Main id={id} setId = {setId} videoList = {videoList}/>}/>
            <Route path = "/saksham-tandon-brainflix/upload" element={<UploadPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
