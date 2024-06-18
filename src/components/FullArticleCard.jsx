import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function FullArticleCard({ article }) {
  // console.log(article, "<--article inside fullArticleCard");
  return (
    <div className="fullArticleCard">
      <Card>
        <Card.Title><h1>{article.title}</h1></Card.Title>
        <Card.Subtitle>by {article.author}</Card.Subtitle>
        <Card.Body>
          <Card.Img src={article.article_img_url} variant="top" />
          <Card.Text className="articleBody">{article.body}</Card.Text>
          <Card.Text>{article.votes} votes</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FullArticleCard;
