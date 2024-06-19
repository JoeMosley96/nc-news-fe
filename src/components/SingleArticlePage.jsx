import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";
import FullArticleCard from "./FullArticleCard"
import Button from "react-bootstrap/Button";
import CommentList from "./CommentList"

const SingleArticlePage = () => {
  const [article, setArticle] = useState({});
  const [err, setErr] = useState(null);
  const {article_id} = useParams()

  useEffect(() => {
    getArticles(article_id)
      .then(({article}) => {

        setErr(null);
        setArticle(article);
        return article;
      })
      .catch((err) => {
        setErr(err);
      });
  }, [article_id]);

  if (err) {
    return (
      <section>
        <h2>{err.request.status}</h2>
        <p>{err.message}</p>
      </section>
    );
  }

  if(article){
    return (
      <div>
        <FullArticleCard article = {article}/>
        <CommentList article_id = {article_id} />
      </div>
    
  )}
    
};

export default SingleArticlePage;
