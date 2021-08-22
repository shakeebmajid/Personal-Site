import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import AllPosts from "./AllPosts";
import OnePost from "./OnePost";

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/blog" component={AllPosts} />
        <Route path="/blog/:slug" component={OnePost} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
