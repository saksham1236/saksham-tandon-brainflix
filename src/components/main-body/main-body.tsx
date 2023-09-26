import VideoPlayer from "../videoPlayer/videoPlayer";
import VideoDetails from "../videoDetails/videoDetails";
import VideoListPane from "../videoListPane/videoListPane";
import videoData from '../../assets/Data/videos.json'
import videoMetadata from "../../assets/Data/video-details.json";

function Main(props:any) {
    const { id , setId} = props;
  return (
    <>
      <VideoPlayer videoSrc="hello" />
      <section className="videoBodyPane">
        <VideoDetails videoId={id} />
        <VideoListPane setId = {setId}/>
      </section>
    </>
  );
}

export default Main;
