import { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder"


function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getComments(article_id)
      .then(({ comments }) => {
        setErr(null);
        setComments(comments);
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
        <li><CommentAdder key={`${article_id}commentAdder`} setComments={setComments} article_id={article_id}/></li>
        {comments.map((comment) => {
          // console.log(comment)
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ol>
    );
  } else {
    return (
      <ol>
        <h2>No Comments</h2>
        <li key="adder1">
          <CommentAdder key={`${article_id}commentAdder1`} setComments={setComments}/>
        </li>
      </ol>
    );
  }
}
export default CommentList;
