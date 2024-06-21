import axios from "axios";

const ncNews = axios.create({ baseURL: "https://jm-news.onrender.com/api" });

export const getArticles = (chosenArticleId, topic_slug, sort_by, order) => {
  const url1 = "/articles";
  const url2 = chosenArticleId ? `/${chosenArticleId}` : "";
  console.log(topic_slug);
  console.log(sort_by);

  return ncNews.get(url1 + url2, 
    {params: 
      { topic: topic_slug,
        sort_by: sort_by,
        order: order
      }}
    )
.then(({ data }) => {
  console.log(data)
    return data;
  });
};

export const getComments = (articleId) => {
  return ncNews.get(`articles/${articleId}/comments`).then(({ data }) => {
    return data;
  });
};

export const getUsers = () => {
  return ncNews.get("/users").then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return ncNews.get("/topics").then(({ data }) => {
    return data;
  });
};

export const patchArticle = (articleId, increment) => {
  return ncNews
    .patch(`articles/${articleId}`, {
      inc_votes: increment,
    })
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (articleId, commentObj) => {
  return ncNews
    .post(`/articles/${articleId}/comments`, { comment: commentObj })
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (commentIdToDelete) => {
  return ncNews
  .delete(`/comments/${commentIdToDelete}`);
};
