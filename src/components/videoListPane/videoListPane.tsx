import "./videoListPane.scss";
import { Link } from "react-router-dom";
import VideoListItem from "./videoListItem/videoListItem";
import videoList from "../../assets/Data/videos.json";

function VideoListPane(props: any) {
    const { setId } = props;
  console.log(videoList);

  return (
    <div className="videoListPane">
      <h2 className="videoListPane__title">NEXT VIDEO</h2>
      {videoList.map((e) => {
        return (
          <Link to = {`/${e.id}`} onClick={() => {setId(e.id)}}>
            <VideoListItem
              key={e.id}
              imgSrc={e.image}
              title={e.title}
              channelName={e.channel}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default VideoListPane;
