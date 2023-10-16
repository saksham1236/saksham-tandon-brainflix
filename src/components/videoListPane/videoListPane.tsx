import "./videoListPane.scss";
import { Link } from "react-router-dom";
import VideoListItem from "./videoListItem/videoListItem";
import { useEffect } from "react";

function VideoListPane(props: any) {
    const { setId, id, videoList } = props;
    // console.log(videoList);
    const filteredVideoList = videoList.filter((element:any) => id !== element.id);

  return (
    <div className="videoListPane">
      <h2 className="videoListPane__title">NEXT VIDEO</h2>
      {filteredVideoList.map((e:any) => {
          return (
            <Link to = {`/saksham-tandon-brainflix/video/${e.id}`} onClick={() => {setId(e.id); window.scrollTo(0, 0);}}>
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
