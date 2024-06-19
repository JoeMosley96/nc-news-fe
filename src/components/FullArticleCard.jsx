import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { patchArticle } from "../api";

function FullArticleCard({ article }) {
  const actualVoteCount = article.votes;

  const [displayedVoteCount, setDisplayedVoteCount] = useState(actualVoteCount);
  const [disabledButtonsLogic, setdisabledButtonsLogic] = useState([
    false,
    false,
  ]); //i.e. both buttons are initially not disabled

  useEffect(() => {
    setDisplayedVoteCount(actualVoteCount);
  }, [actualVoteCount]);

  function handleClick(article_id, increment, button_index) {
    patchArticle(article_id, increment);
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
    <div className="fullArticleCard">
      <Card>
        <Card.Title>
          <h1>{article.title}</h1>
        </Card.Title>
        <Card.Subtitle>by {article.author}</Card.Subtitle>
        <Card.Body>
          <Card.Img src={article.article_img_url} variant="top" />
          <Card.Text className="articleBody">{article.body}</Card.Text>
          <Button
            onClick={() => handleClick(article.article_id, 1, 0)}
            className="btn btn-success"
            disabled={disabledButtonsLogic[0]}
          >
            Upvote
          </Button>
          <Button
            onClick={() => handleClick(article.article_id, -1, 1)}
            className="btn btn-danger"
            disabled={disabledButtonsLogic[1]}
          >
            Downvote
          </Button>
          <Card.Text>{displayedVoteCount} votes</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FullArticleCard;
