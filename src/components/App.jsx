import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import AboutSection from "./AboutSection";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
    <Header name = {blogData.name}/>
    <AboutSection image = {blogData.image}/>
    <ArticleList/>
    </div>
  ); 
}

export default App;
