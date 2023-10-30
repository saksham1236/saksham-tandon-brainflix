import "./videoListItem.scss";
import {fetchUrlLocal} from "../../routes/fetchUrl";


function videoListItem(props: any) {
  const port = process.env.PORT || 8080
  let { id, imgSrc, title, channelName } = props;
  if(!(imgSrc.includes("http")) || !(imgSrc.includes("https"))) {
    imgSrc = `${fetchUrlLocal}/${imgSrc}`;
    console.log(imgSrc);
  }
  return (
    <>
    <div className="videoListItem" custom-data = {id}>
      <div className="videoListItem__thumb">
        <img className="videoListItem__thumb__image" src={imgSrc} alt={`${title} by ${channelName}`} />
      </div>
      <div className="videoListItem__details">
        <h3 className="videoListItem__details__title">{title}</h3>
        <span className="videoListItem__details__channel">{channelName}</span>
      </div>
    </div>
    </>
  );
}

export default videoListItem;
