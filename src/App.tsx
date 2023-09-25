import React from 'react';
import './App.scss';
import Nav from './components/nav/nav';
import VideoPlayer from './components/videoPlayer/videoPlayer';
import VideoDetails from './components/videoDetails/videoDetails';
import {  useState  } from 'react';
import videoData from './assets/Data/videos.json';
import videoMetadata from './assets/Data/video-details.json';
import VideoListPane from './components/videoListPane/videoListPane';
import axios from 'axios';


function App() {  
  const [id, SetId] = useState("c05b9a93-8682-4ab6-aff2-92ebb4bbfc14");
  const[videoData, setVideoData] = useState({});
  
  return (
    <div className="App">
      <Nav />
      <VideoPlayer videoSrc = "hello" />
      <section className = "videoBodyPane">
        <VideoDetails
          videoId = {id}
              /> 
        <VideoListPane />
      </section>
    </div>
  );
}

export default App;
