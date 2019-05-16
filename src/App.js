import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import ShowPost from "./components/showpost.component";
import EditPost from "./components/editpost.component";
import CreatePost from "./components/createpost.component";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="Container">
      <h2>lol</h2>
      </div>
      <Route path="/posts" component={ShowPost}/>
      <Route path="/posts/create" component={CreatePost}/>
      <Route path="/posts/edit" component={EditPost}/>
      </BrowserRouter>
    );
  }
}

export default App;
