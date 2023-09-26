import "./videoDetails.scss";
import videoDetailsData from "../../assets/Data/video-details.json";
import eyeIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import Divider from "../divider/divider";
import dateConvert from "../functions/dateConvert";
import CommentSection from "../commentSection/commentSection";

function videoDetails(props: any) {
  const { videoId } = props;
  const videoData = videoDetailsData.find((element) => element.id === videoId);
  console.log(videoData);

  return (
      <div className="videoDetail">
        <div className="videoDetail__header">
          <h1 className="videoDetail__title">{videoData?.title}</h1>
          <div className="videoDetail__secondary">
            <div className="videoDetail__secondary__post">
              <h2 className="videoDetail__subtitle">By {videoData?.channel}</h2>
              <span className="videoDetail__date">
                {dateConvert(videoData?.timestamp)}
              </span>
            </div>
            <div className="videoDetail__secondary__stats">
              <span className="videoDetail__secondary__stats__views">
                <img src={likesIcon} alt="Likes Icon" />
                {videoData?.likes}
              </span>
              <span className="videoDetail__secondary__stats__likes">
                <img src={eyeIcon} alt="Views Icon" />
                {videoData?.views}
              </span>
            </div>
          </div>
        </div>
        <Divider />
        <div className="videoDetail__description">
          <p>{videoData?.description}</p>
        </div>
        <CommentSection commentList={videoData?.comments} />
      </div>
  );
}
export default videoDetails;
