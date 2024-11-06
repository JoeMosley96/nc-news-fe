import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React from "react";
import Button from "react-bootstrap/Button";
import { CardFooter, CardHeader } from "react-bootstrap";
import { deleteComment } from "../api";
import { convertTimestampToDate } from "../utils/utils";

function CommentCard({ comment, setComments }) {
  function handleClick(event) {
    const commentIdToDelete = event.target.value;
    deleteComment(commentIdToDelete).then(() => {
      setComments((currComments) => {
        return [...currComments].filter((comment) => {
          return comment.comment_id !== Number(commentIdToDelete);
        });
      });
    });
  }
  

  return (
    <li className="commentCard">
      <Card>
        <Card.Body>
        <div className="commentTop">
            <Card.Text>{comment.author}</Card.Text>
            <Card.Text>
              
              {convertTimestampToDate(comment.created_at)}
            </Card.Text>
          </div>
          <div className="commentBody">
            <Card.Text>{comment.body}</Card.Text>
          </div>
        </Card.Body>
        <CardFooter>
          <div className="commentBottom">
            <p>{comment.votes} votes</p>
            {comment.author === "grumpy19" ? (
              <Button
                value={comment.comment_id}
                className="btn btn-danger deleteButton"
                onClick={handleClick}
              >
                Delete
              </Button>
            ) : null}
          </div>
        </CardFooter>
      </Card>
    </li>
  );
}

export default CommentCard;
