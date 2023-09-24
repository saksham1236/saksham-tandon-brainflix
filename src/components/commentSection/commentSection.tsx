import TextInput from "../textInput/textInput";
import Button from "../button/button";
import commentIcon from "../../assets/Icons/add_comment.svg";

function CommentSection(props: any) {


  return (
    <div className="commentSection">
      <h2 className="commentSection__title">Comments</h2>
      <div className="addComments">
        <TextInput
          name="commentSection__commentInput"
          customClass="commentInput"
          placeHolder="add Comment"
        />
        <Button
          iconSrc={commentIcon}
          iconAlt="Comment Icon"
          buttonLabel="Comment"
        />
      </div>
    </div>
  );
}

export default CommentSection;
