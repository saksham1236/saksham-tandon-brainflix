import VideoPlayer from "../videoPlayer/videoPlayer";
import VideoDetails from "../videoDetails/videoDetails";
import VideoListPane from "../videoListPane/videoListPane";
import videoData from '../../assets/Data/videos.json'
import videoMetadata from "../../assets/Data/video-details.json";
import { useState } from "react";

function Main(props:any) {
    const {id , setId} = props;
    const currentVideo = videoMetadata.find((e) => e.id === id);
  return (
    <>
      <VideoPlayer videoSrc="hello" poster = {currentVideo?.image}/>
      <section className="videoBodyPane">
        <VideoDetails videoId={id} />
        <VideoListPane id = {id} setId = {setId}/>
      </section>
    </>
  );
}

export default Main;
