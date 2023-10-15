import "./commentSection.scss";
import TextInput from "../textInput/textInput";
import Button from "../button/button";
import commentIcon from "../../assets/Icons/add_comment.svg";
import CommentEl from "./commentEl/commentEl";
import UserProfile from "../userProfile/userProfile";

function CommentSection(props: any) {
  const { videoData } = props;
  const commentList = videoData.comments;
  return (
    <div className="commentSection">
      <h2 className="commentSection__title">{commentList.length} Comments</h2>
      <div className="commentSection__addComments">
        <div className="commentSection__user">
          <UserProfile />
        </div>
        <div className="commentSection__addComments__outer">
          <div className="commentSection__addComments__inner">
            <h3 className="commentSection__addComments__title">
              JOIN THE CONVERSATION
            </h3>
            <TextInput
              name="commentSection__commentInput"
              customClass="commentInput"
              placeHolder="Add a Comment"
            />
          </div>

          <Button
            iconSrc={commentIcon}
            iconAlt="Comment Icon"
            buttonLabel="COMMENT"
          />
        </div>
      </div>

      <div className="commentSection__list">
        {commentList.map((el: any) => {
          return (
            <CommentEl
              key={el.id}
              name={el.name}
              commentText={el.comment}
              date={el.timestamp}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CommentSection;
