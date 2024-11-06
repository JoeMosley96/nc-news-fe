import { useState } from "react";
import { postComment } from "../api";
import Button from "react-bootstrap/Button";

const CommentAdder = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentObj = {
      body: newComment,
      votes: 0,
      author: "grumpy19"
    };
    
    postComment(article_id, commentObj)
    .then(({comment})=>{
      setErr(null)
      setNewComment("")
      setComments((currComments)=>{
        return[comment, ...currComments]
      })
    })
    .catch((err)=>{
      setErr(err)
    })
  };

  if (err) {
    return (
      <section>
        <h2>{err.response.status}</h2>
        <p>{err.response.data.msg}</p>
      </section>
    );
  }

  return (
    <form className="commentAdder" onSubmit={handleSubmit}>
      <label htmlFor="newComment"></label>
      <textarea
      placeholder = "Write Comment"
      className="newComment"
      multiline = "true"
      value={newComment}
      onChange = {(e)=>setNewComment(e.target.value)}>
      </textarea>
      <button className = "btn btn-primary" >Add</button>
    </form>
  );
};

export default CommentAdder
