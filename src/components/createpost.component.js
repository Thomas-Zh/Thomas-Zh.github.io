import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content:''
        }
        this.onChangePostTitle=this.onChangePostTitle.bind(this);
        this.onChangePostContent=this.onChangePostContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangePostTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangePostContent(e){
        this.setState({
            content:e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const createPost= {
            title:this.state.title,
            content:this.state.content
        }
        axios.post('https://secure-dusk-80764.herokuapp.com/posts/create', createPost)
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error));
        alert('post submitted')
        this.setState ({
            title: '',
            content:''
        });
    }
    render() {
        const titleStyle={
            paddingLeft:'10%',
            paddingTop:'5%',
            color:'#F7F8F9'
        }
        return (
            <div style={titleStyle}>
                <form onSubmit={this.onSubmit}>
                    <div className="new-post" style={{display:'flex',flexDirection:'column',width:'50%'}}> 
                        <label>Title: </label>
                        <input  type="text"
                                className="new-post-title"
                                value={this.state.title}
                                onChange={this.onChangePostTitle}
                        />
                        <label>Content:</label>
                        <textarea
                                className="new-post-content"
                                value={this.state.content}
                                onChange={this.onChangePostContent}
                        />
                        <input type="submit" value="Create Post" className="create-post" style={{background:'none',color:'#F7F8F9'}}/>
                    </div>
                </form>
            </div>
        )
    }
}