import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import ShowPost from "./components/showpost.component";
import EditPost from "./components/editpost.component";
import CreatePost from "./components/createpost.component";
import './App.css';
import {Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="Container">
      <h2>lol</h2>
      </div>
      <Link to="/">
      <button variant="light">
        home
      </button>
      </Link>
      <Link to="/posts">
      <button variant="dark">
        posts
      </button>
      </Link>
      <Link to="/posts/create">
      <button variant="light">
        create posts
      </button>
      </Link>
      <Route path="/posts" component={ShowPost}/>
      <Route path="/posts/create" component={CreatePost}/>
      <Route path="/posts/edit" component={EditPost}/>
      </BrowserRouter>
    );
  }
}

export default App;
