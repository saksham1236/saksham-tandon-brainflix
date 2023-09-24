interface commentData {
    userName:string, commentText:string, date:string, likes:string
}

function CommentEl(props: commentData) {
    const {userName, commentText, date, likes} = props;
    return(
    <div className="commentEl">

        <div className="commentEl__user">
            <img className="commentEL__user__image" alt = "userImage"/>
        </div>

        <div className="commmentEl__header">
            <h3 className="commentEl__userName">{userName}</h3>
            <span className = "commentEl__date">{date}</span>
        </div>
        <div className = "commentEl__body">
            <p>{commentText}</p>
        </div>
    </div>
    )
}

export default CommentEl;