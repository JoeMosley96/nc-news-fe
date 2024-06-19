import axios from "axios";

const ncNews = axios.create({ baseURL: "https://jm-news.onrender.com/api" });

export const getArticles = (chosenArticleId) => {
    const url1 = "/articles"
    const url2 = chosenArticleId ?`/${chosenArticleId}`:""

  return ncNews
    .get(url1+url2)
    .then(({ data }) => {
      return data;
    });
};

export const getComments = (articleId)=>{
    return ncNews
    .get(`articles/${articleId}/comments`)
    .then(({data})=>{
        return data
    })
}

export const patchArticle = (articleId, increment)=>{
    return ncNews
    .patch(`articles/${articleId}`,{
        inc_votes: increment
    })
    .then(({data})=>{
        return data
    })
}
