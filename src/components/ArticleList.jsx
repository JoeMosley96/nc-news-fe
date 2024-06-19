import {useEffect, useState} from "react"
import {getArticles} from "../api"
import ArticleCard from "./ArticleCard"

function ArticleList({chosenTopic}){
    const [articles, setArticles] = useState([])
    const [err, setErr] = useState(null)

    useEffect(()=>{
        getArticles(chosenTopic)
        .then(({articles})=>{
            setErr(null)
            setArticles(articles)
            return articles
        })
        .catch((err)=>{
            setErr(err)
        })
    }, [chosenTopic])

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
          <ol className = "articleList">
            {articles.map((article,index) => {
              return (
                  <ArticleCard key={article.article_id}  article={article}/>
              );
            })}
          </ol>
        );
      }

    }
    export default ArticleList;