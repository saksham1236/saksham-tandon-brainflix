import "./videoPlayer.scss";

function VideoPlayer(props: any) {
  const { videoData } = props;
  if(!videoData) {
    return(<h1>Loading</h1>)
  } else {
    return (
      <div className="videoPlayer">
        <video className="videoPlayer__pane" poster = {videoData.image} controls>
          <source src={videoData.video} type="video/mp4" />
        </video>
      </div>
    );
  }

}

export default VideoPlayer;
