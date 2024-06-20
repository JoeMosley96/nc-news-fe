import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleList from "./ArticleList";
import { useParams } from "react-router-dom";

const MultiArticlePage = ({ setChosenArticleId }) => {
  return <ArticleList />;
};

export default MultiArticlePage;
