import React from 'react';
import './App.scss';
import Nav from './components/nav/nav';
import VideoPlayer from './components/videoPlayer/videoPlayer';
import VideoDetails from './components/videoDetails/videoDetails';
import {  useState  } from 'react';
import videoData from './assets/Data/videos.json';

function App() {  
  const [id, SetId] = useState("c05b9a93-8682-4ab6-aff2-92ebb4bbfc14");
  console.log(id);
  console.log(videoData);
  
  return (
    <div className="App">
      <Nav />
      <VideoPlayer videoSrc = "hello" />
      <section className = "video__about">
        <VideoDetails
          videoId = {id}
              /> 
      </section>
    </div>
  );
}

export default App;
