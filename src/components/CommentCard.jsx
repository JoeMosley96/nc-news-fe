import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React from "react";
import { CardHeader } from "react-bootstrap";

function CommentCard({comment}) {

  return (
    <li className="commentCard">
      <Card>
        <Card.Body>
          <Card.Text>{comment.body}</Card.Text>
          <Card.Text>By {comment.author}</Card.Text>
          <Card.Text> {comment.created_at}</Card.Text>
          <Card.Text>{comment.votes} votes</Card.Text>
        </Card.Body>
      </Card>
    </li>
  );
}

export default CommentCard;