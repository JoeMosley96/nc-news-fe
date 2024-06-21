import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleList from "./ArticleList";
import Image from "./Image"
import { useParams } from "react-router-dom";

const MultiArticlePage = ({ topicSlug }) => {
  const imageDescriptor = topicSlug?topicSlug:"home"
  return (
    <ol>
      <Image imageDescriptor={imageDescriptor}/>
      <ArticleList topicSlug={topicSlug} />
    </ol>
  );
};

export default MultiArticlePage;
