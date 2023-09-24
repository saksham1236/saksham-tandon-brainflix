import './commentSection.scss'
import TextInput from "../textInput/textInput";
import Button from "../button/button";
import commentIcon from "../../assets/Icons/add_comment.svg";
import CommentEl from './commentEl/commentEl';

interface propsCommentSection {
  id: string; 
  name: string; 
  comment: string; 
  likes: number; 
  timestamp: Date;
}

function CommentSection(props: any) {
  console.log(props.commentList);
  const { commentList } = props;
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
        {commentList.map((el:any) => {
          return(<CommentEl 
            key = {el.id}
            name = {el.name}
            commentText = {el.comment}
            date = "1232411324"
            />)
          })}
      </div>
    </div>
  );
}

export default CommentSection;
