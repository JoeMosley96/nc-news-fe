import { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";

function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getComments(article_id)
      .then(({comments}) => {
        console.log(comments, "<--comments")
        setErr(null);
        setComments(comments);
        console.log(comments, "<--comments")
        return comments;
      })
      .catch((err) => {
        setErr(err);
      });
  }, [article_id]);

  if (err) {
    return (
      <section>
        <h2>{err.request.status}</h2>
        <p>{err.message}</p>
      </section>
    );
  }
  
  if (comments.length) {
    return (
      <ol className="commentList">
        <h2> Comments </h2>
        {comments.map((comment) => {
            console.log(comment)
          return <CommentCard comment={comment} />;
        })}
      </ol>
    );
  }
}
export default CommentList;
