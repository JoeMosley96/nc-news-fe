import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MultiArticlePage from "./components/MultiArticlePage";
import SingleArticlePage from "./components/SingleArticlePage";
import UsersPage from "./components/UsersPage";
import { getTopics } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [topics, setTopics] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getTopics()
      .then(({ topics }) => {
        setErr(null);
        setTopics(topics);
        return topics;
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);


  if (err) {
    return (
      <section>
        <h2>{err.request.status}</h2>
        <p>{err.message}</p>
      </section>
    );
  }


  if(topics.length){
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation key = "navigation" id = "navigation" className="navigation" topics={topics} />
          <Routes key = "routes">
            <Route key = "home" path="/" element={<MultiArticlePage id = "homepage"/>} />
            {topics.map((topic) => {
              return (
                <Route
                  key={topic.slug}
                  path={`/topics/${topic.slug}`}
                  element={<MultiArticlePage id = {`homepage/${topic.slug}`}topicSlug={topic.slug} />}
                />
              );
            })}
            <Route key = "singleArticle" path="/articles/:article_id" element={<SingleArticlePage />} />
            <Route key= "users" path="/users" element={<UsersPage />} />
            {/* <Route path = "/*" element = {<ErrorPage />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    );

  } 


}

export default App;
