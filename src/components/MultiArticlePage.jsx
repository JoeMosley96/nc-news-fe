import {useEffect, useState} from "react"
import {getArticles} from "../api"
import ArticleList from "./ArticleList"
import {useParams} from "react-router-dom"

// if(Object.keys(useParams()))
// const params = useParams()
// console.log(params)
// const {chosenTopic} = useParams()
const MultiArticlePage = ()=>{
    return (
        <ArticleList />
    )
}

export default MultiArticlePage;