import "./videoPlayer.scss";

function VideoPlayer(props: any) {
  const { videoSrc, poster } = props;
  return (
    <div className="videoPlayer">
      <video className="videoPlayer__pane" poster = {poster} controls>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
