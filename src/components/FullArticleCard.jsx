import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { patchArticle, getUser } from "../api";
import { CardFooter } from "react-bootstrap";

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
        <div className="author-username">
          <Card.Subtitle>
            By{" "}
            <a
              class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href={`/users/${article.author}`}
            >
              {article.author}
            </a>
          </Card.Subtitle>
        </div>
        <Card.Body>
          <Card.Img src={article.article_img_url} variant="top" />
          <Card.Text className="articleBody">{article.body}</Card.Text>
          <div className="articleVotes">
            <Button
              onClick={() => handleClick(article.article_id, 1, 0)}
              className="btn btn-success"
              disabled={disabledButtonsLogic[0]}
            >
              👍
            </Button>
            <Button
              onClick={() => handleClick(article.article_id, -1, 1)}
              className="btn btn-danger"
              disabled={disabledButtonsLogic[1]}
            >
              👎
            </Button>
            <p>{displayedVoteCount} votes</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FullArticleCard;
