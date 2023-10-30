import "./videoPlayer.scss";
import { fetchUrlLocal } from "../routes/fetchUrl";

function VideoPlayer(props: any) {
  const port = process.env.PORT || 8080
  const { videoData } = props;
  let imgSrc = videoData.image;
  if(!(imgSrc.includes("http")) || !(imgSrc.includes("https"))) {
    imgSrc = `${fetchUrlLocal}/${imgSrc}`;
    console.log(imgSrc);
  }
  if(!videoData) {
    return(<h1>Loading</h1>)
  } else {
    return (
      <div className="videoPlayer">
        <video className="videoPlayer__pane" poster = {imgSrc} controls>
          <source src={`${fetchUrlLocal}/${videoData.video}`} type="video/mp4" />
        </video>
      </div>
    );
  }

}

export default VideoPlayer;
