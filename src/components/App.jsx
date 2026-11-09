import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import AboutSection from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";


console.log(blogData);

function App() {
  return (
    <div className="App">
    <Header name = {blogData.name}/>
    <AboutSection image = {blogData.image} about = {blogData.about}/>
    <ArticleList posts = {blogData.posts}/>
    <Article/>
    </div>
  ); 
}

export default App;
