import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleList from "./ArticleList";
import { useParams } from "react-router-dom";

const MultiArticlePage = ({topicSlug}) => {
  return <ArticleList topicSlug = {topicSlug} />;
};

export default MultiArticlePage;
