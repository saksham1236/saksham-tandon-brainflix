import './commentSection.scss'
import TextInput from "../textInput/textInput";
import Button from "../button/button";
import commentIcon from "../../assets/Icons/add_comment.svg";
import CommentEl from './commentEl/commentEl';

function CommentSection(props: any) {


  return (
    <div className="commentSection">
      <h2 className="commentSection__title">Comments</h2>
      <div className="commentSection__addComments">
        <TextInput
          name="commentSection__commentInput"
          customClass="commentInput"
          placeHolder="Add a Comment"
        />
        <Button
          iconSrc={commentIcon}
          iconAlt="Comment Icon"
          buttonLabel="Comment"
        />
      </div>

      <div className='commentSection__list'>
        <CommentEl
           userName = "Hello"
           commentText = "Ssup"
           date = "11/1/11"
           likes = "23234"
        />
      </div>
    </div>
  );
}

export default CommentSection;
