import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function FullArticle({ article }) {
    console.log(article)
  return (
    <div>
      <h1>{article.title}</h1>
      <h2>By {article.author}</h2>
      <img src = {article.article_img_url}/>
      <p>{article.body}</p>
    </div>
  );
}

export default FullArticle;
