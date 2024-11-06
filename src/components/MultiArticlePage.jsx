import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleList from "./ArticleList";
import Image from "./Image";
import SortBy from "./SortBy"
import { useSearchParams, useParams } from "react-router-dom";

const MultiArticlePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort_by = searchParams.get("sort_by")
  const order = searchParams.get("order")

  const { topic_slug } = useParams();
  const imageDescriptor = topic_slug ? topic_slug : "home";
  return (
    <div>
      <Image imageDescriptor={imageDescriptor} />
      <SortBy sort_by = {sort_by}/>
      <ArticleList topic_slug={topic_slug} sort_by={sort_by} order = {order}/>
    </div>
  );
};

export default MultiArticlePage;
