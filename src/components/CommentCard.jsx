import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React from "react";
import Button from "react-bootstrap/Button";
import { CardHeader } from "react-bootstrap";
import {deleteComment} from "../api"

function CommentCard({comment, setComments}) {
  

  function handleClick(event){
    const commentIdToDelete = event.target.value
    deleteComment(commentIdToDelete).then(()=>{
      setComments((currComments)=>{
        return [...currComments].filter((comment)=>{
          return comment.comment_id !== Number(commentIdToDelete)})
        
      })
    })
  }

  return (
    <li className="commentCard">
      <Card>
        <Card.Body>
          <Card.Text>{comment.body}</Card.Text>
          <Card.Text>By {comment.author}</Card.Text>
          <Card.Text> {comment.created_at}</Card.Text>
          <Card.Text>{comment.votes} votes</Card.Text>
          {comment.author==="grumpy19"?<Button value = {comment.comment_id} className = "btn btn-danger" onClick={handleClick}>Delete</Button>:null}
        </Card.Body>
      </Card>
    </li>
  );
}

export default CommentCard;