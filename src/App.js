import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
//import ShowPost from "./components/showpost.component";
import ShowPost from"./components/showpost.component";
import EditPost from "./components/editpost.component";
import CreatePost from "./components/createpost.component";
import './App.css';
import {Link} from "react-router-dom";

class App extends Component {
  render() {
    const titleStyle={
      paddingLeft:'10%',
      paddingTop:'5%',
      color:'#F7F8F9'
    }
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div style={titleStyle}>
      <div className="Container">
      <h2>Message Board</h2>
      </div>
      <Link to="/">
      <button style={{background:'none',color:'#F7F8F9'}}>
        home
      </button>
      </Link>
      <Link to="/posts/show">
      <button style={{background:'none',color:'#F7F8F9'}}>
        show posts
      </button>
      </Link>
      <Link to="/posts/create">
      <button style={{background:'none',color:'#F7F8F9'}}>
        create posts
      </button>
      </Link>
      <div style={{width:'50%'}}>
        <h6>Hi! Welcome to Message Board! To create new post, click 'create posts' button and type in your message. To see posts, click 'show posts' button.</h6>
      </div>
      </div>
      <Route path="/posts/show" component={ShowPost}/>
      <Route path="/posts/create" component={CreatePost}/>
      <Route path="/posts/edit" component={EditPost}/>
      </BrowserRouter>
    );
  }
}

export default App;
