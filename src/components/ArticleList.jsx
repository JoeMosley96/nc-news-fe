import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

function ArticleList({ topic_slug,sort_by,order, author }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
  
    getArticles(null, topic_slug, sort_by, order, author)
      .then(({ articles }) => {
        setErr(null);
        setIsLoading(false);
        setArticles(articles);
        return articles;
      })
      .catch((err) => {
        setErr(err);
        setIsLoading(false);
      });
  }, [topic_slug, author]);

  if (isLoading) {
    return <h2>Loading!!!</h2>;
  }

  if (err) {
    return (
      <section>
        <h2>{err.request.status}</h2>
        <p>{err.message}</p>
      </section>
    );
  }

  if (articles) {
    return (
      <ol className="articleList">
        {articles.map((article ) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ol>
    );
  }
}
export default ArticleList;
