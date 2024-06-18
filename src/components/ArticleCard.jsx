import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { CardHeader } from "react-bootstrap";

function ArticleCard({ article }) {
  // console.log(article);

  return (
    <li className="articleCard">
      <Card>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
          <Card.Title>
            <p>
              <a
                href={`/articles/${article.article_id}`}
                class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                {article.title}
              </a>
            </p>
          </Card.Title>
          <Card.Text>{article.author}</Card.Text>
          <Card.Text>{article.comment_count} comments</Card.Text>
          <Card.Text>{article.votes} votes</Card.Text>
        </Card.Body>
      </Card>
    </li>
  );
}

export default ArticleCard;
