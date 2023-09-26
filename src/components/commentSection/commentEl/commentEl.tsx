import "./commentEl.scss";
import Divider from "../../divider/divider";
import convertDate from "../../functions/dateConvert";

interface commentData {
  key: string;
  name: string;
  commentText: string;
  date: string;
}

function CommentEl(props: commentData) {
  const { key, name, commentText, date } = props;
  return (
    <>
      <Divider />
      <div className="commentEl">
        <div className="commentEl__user">
        </div>
        <div className="commentEl__inner">
          <div className="commentEl__header">
            <h3 className="commentEl__userName">{name}</h3>
            <span className="commentEl__date">{convertDate(date)}</span>
          </div>
          <div className="commentEl__body">
            <p>{commentText}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentEl;
