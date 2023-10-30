import "./videoPlayer.scss";
import { fetchUrlLocal } from "../routes/fetchUrl";

function VideoPlayer(props: any) {
  const port = process.env.PORT || 8080
  const { videoData } = props;
  if(!videoData) {
    return(<h1>Loading</h1>)
  } else {
    return (
      <div className="videoPlayer">
        <video className="videoPlayer__pane" poster = {`${fetchUrlLocal}/${videoData.image}`} controls>
          <source src={`${fetchUrlLocal}/${videoData.video}`} type="video/mp4" />
        </video>
      </div>
    );
  }

}

export default VideoPlayer;
