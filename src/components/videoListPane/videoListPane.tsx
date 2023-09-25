import './videoListPane.scss';

import VideoListItem from "./videoListItem/videoListItem";
import videoList from '../../assets/Data/videos.json';

function VideoListPane(props:any) {
    console.log(videoList);
    
    return (
        
        <div className="videoListPane">
            <h2 className = "videoListPane__title">NEXT VIDEO</h2>
            {videoList.map((e) => { return(
            <VideoListItem
                key = {e.id}
                imgSrc = {e.image}
                title = {e.title}
                channelName = {e.channel}
            />
            )})}
        </div>
    )
}

export default VideoListPane;