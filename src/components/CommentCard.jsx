import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { CardFooter, CardHeader } from "react-bootstrap";
import { deleteComment, patchComment, getUser } from "../api";
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

  const actualVoteCount = comment.votes;
  const [displayedVoteCount, setDisplayedVoteCount] = useState(actualVoteCount);
  const [disabledButtonsLogic, setdisabledButtonsLogic] = useState([
    false,
    false,
  ]); //i.e. both buttons are initially not disabled
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    setDisplayedVoteCount(actualVoteCount);
    getUser(comment.author).then((data) => {
      setUserAvatar(data.user.avatar_url);
    });
  }, [actualVoteCount]);

  function handleVoteClick(comment_id, increment, button_index) {
    patchComment(comment_id, increment);
    const incrementedVoteCount = displayedVoteCount + increment;
    setDisplayedVoteCount(incrementedVoteCount);

    //set button states - user should not be able to incrmenet the vote count by more than one in either direction
    let disabledButtonsLogicCopy = [...disabledButtonsLogic];
    if (
      (incrementedVoteCount - actualVoteCount < 0 && button_index === 1) ||
      (incrementedVoteCount - actualVoteCount > 0 && button_index === 0)
    ) {
      disabledButtonsLogicCopy[button_index] = true;
    } else {
      disabledButtonsLogicCopy = [false, false];
    }

    setdisabledButtonsLogic(disabledButtonsLogicCopy);
  }

  return (
    <li className="commentCard">
      <Card>
        <Card.Body>
          <div className="commentTop">
            <div className="commentUsername">
              <Card.Img className="avatar-img" src={userAvatar} variant="top" />
              <a class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href={`/users/${comment.author}`}>
              <Card.Text>{comment.author}</Card.Text>
              </a>
            </div>
            <Card.Text>{convertTimestampToDate(comment.created_at)}</Card.Text>
          </div>
          <div className="commentBody">
            <Card.Text>{comment.body}</Card.Text>
          </div>
        </Card.Body>
        <CardFooter>
          <div className="commentBottom">
            <div className="commentVotes">
              <p>{displayedVoteCount} votes</p>
              <Button
                onClick={() => handleVoteClick(comment.comment_id, 1, 0)}
                className="btn btn-success"
                disabled={disabledButtonsLogic[0]}
              >
                👍
              </Button>
              <Button
                onClick={() => handleVoteClick(comment.comment_id, -1, 1)}
                className="btn btn-danger"
                disabled={disabledButtonsLogic[1]}
              >
                👎
              </Button>
            </div>
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
