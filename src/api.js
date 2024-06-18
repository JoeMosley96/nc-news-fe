import axios from "axios";

const ncNews = axios.create({ baseURL: "https://jm-news.onrender.com/api" });

export const getArticles = (chosenArticleId) => {
    console.log(chosenArticleId, "<--inside api.js")
    const url1 = "/articles"
    const url2 = chosenArticleId ?`/${chosenArticleId}`:""
    console.log(url1+url2)
  return ncNews
    .get(url1+url2)
    .then(({ data }) => {
        // console.log(data, "<--inside then block")
      return data;
    });
};
