import React, { Component } from 'react';
import axios from 'axios';


export default class ShowPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentPage:1,
            postsPerPage:2,
            isLoading:true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.setState({
           currentPage:event.target.id
        });
    }
    componentDidMount() {
        axios.get('https://secure-dusk-80764.herokuapp.com/posts/show')
            .then(response => {
                this.setState(
                    { 
                        posts: response.data.reverse(),
                        isLoading:false
                    }
                );
            })
            .catch(function (error){
                console.log(error);
            })
    }
    render() {
        const postStyle={
            borderStyle: 'solid',
            fontSize:'1em',
            width:'30%'    
        }
        const sectionStyle={
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly'
        }
        const titleStyle={
            paddingLeft:'10%',
            paddingTop:'5%',
            color:'#F7F8F9'
          }
        const paginationStyle ={
            display: 'inline-block',
            listStyle: 'none',
            marginTop:'10%'
        }
        const paginationListStyle ={
            color: '#F7F8F9',
            float: 'left',
            padding: '8px' 
        }
        const { posts, currentPage, postsPerPage } = this.state
        const pageNumbers =[];
        for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
            pageNumbers.push(i);
          }
        const renderPageNumbers = pageNumbers.map((number)=>{
            return(
                <li
                key={number}
                id={number}
                onClick={this.handleClick}
                style={paginationListStyle}
                >
                    {number}
                </li>
            )
        })
        const renderPosts = posts.map((posts, index)=>{

            if((index===(currentPage-1)*2)||(index===(currentPage-1)*2+1)){
                return(
                <div key={index} style={postStyle}>
                  <div>{posts.title}</div>
                  <div>{posts.content}</div>
                </div>
                )
            }
            else return (null)
        })
        if (this.state.isLoading){
            return <h6 style={titleStyle}>loading</h6>
        }
        return (
            <div style={titleStyle}>
            <section id="posts" style={sectionStyle}>
                {renderPosts}
            </section>
            <ul id="pagination" style={paginationStyle}>
                {renderPageNumbers}
            </ul>
            </div>
        )
    }
}