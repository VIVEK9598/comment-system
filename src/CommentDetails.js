import React from 'react';

const CommentDetails = props => {
    console.log(props);
    return (
        <div className="ui comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">{props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.commentTime}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
            </div>
        </div>
    );
}
export default CommentDetails;
