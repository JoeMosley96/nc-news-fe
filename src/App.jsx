import { useState } from 'react'
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Image from "./components/Image"
import Navigation from "./components/Navigation"
import MultiArticlePage from "./components/MultiArticlePage"
import SingleArticlePage from "./components/SingleArticlePage"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <div className = "App">
      {/* <Header /> */}
      <Navigation className = "navigation" />
      <Routes>
        <Route path = "/" element = {<MultiArticlePage />} />
        <Route path = "/topics/:chosenTopic" element = {<MultiArticlePage />} />
        <Route path = "/articles/:article_id" element = {<SingleArticlePage />} />
        {/* <Route path = "/users" element = {<UsersPage />} /> */}
        {/* <Route path = "/*" element = {<ErrorPage />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
