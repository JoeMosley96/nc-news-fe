import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { CardFooter, CardHeader } from "react-bootstrap";
import { convertTimestampToDate } from "../utils/utils";

function ArticleCard({ article }) {
 
  return (
    <li className="articleCard">
      <Card>
        <CardHeader>
          <Card.Title>
              <a
                href={`/articles/${article.article_id}`}
                class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                {article.title}
              </a>
          </Card.Title></CardHeader>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
          <div className="cardFooter">
        <Card.Text> By {article.author}  </Card.Text>
        <Card.Text>Published on {convertTimestampToDate(article.created_at)}</Card.Text>
          </div>
        </Card.Body>
        <CardFooter className="cardFooter">
          <Card.Text>{article.comment_count} comments</Card.Text>
          <Card.Text>{article.votes} votes</Card.Text>
        </CardFooter>
      </Card>
    </li>
  );
}

export default ArticleCard;
