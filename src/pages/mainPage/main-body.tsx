//Dependencies
import { useEffect, useState } from "react";
import axios from "axios";
//Components
import VideoPlayer from "../../components/videoPlayer/videoPlayer";
import VideoDetails from "../../components/videoDetails/videoDetails";
import VideoListPane from "../../components/videoListPane/videoListPane";
import videoMetadata from "../../assets/Data/video-details.json"
//Routes and Variables
import fetchUrl, {fetchUrlLocal} from '../../components/routes/fetchUrl';
import apiKey from "../../components/keys/apiKey";


function Main(props:any) {
  const port = process.env.PORT || 8080;
  const {id , setId, videoList} = props;
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    // axios.get(`${fetchUrl}/videos/${id}?api_key=${apiKey}`)
    axios.get(`${fetchUrlLocal}/videos/${id}`)
    .then((res:any) => {
      setVideoData(res.data);
        console.log("videoData", res.data);
    }).catch((error:object) => {
        console.log(error);
    });
  },[id]);
  if(!videoData) {
    return (<h1>Loading</h1>);
  } else {
    return (
      <>
        <VideoPlayer videoData = {videoData}/>
        <section className="videoBodyPane">
          <VideoDetails videoData = {videoData} />
          <VideoListPane id = {id} setId = {setId} videoList = {videoList}/>
        </section>
      </>
    );
  }

}

export default Main;
