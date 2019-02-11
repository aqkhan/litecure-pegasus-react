import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import BlogHeader from '../publication/publicationHeader';
import DetailContent from './detailContent';
import axios from "axios";
import {API_PATH} from "../apiconfig";

class post extends Component {
    state = {
        error: null
    };

    componentDidMount() {
        let {dispatch, pages, posts} = this.props;
        if (!pages) {
            axios.get(API_PATH + 'pages')
                .then((res) => {
                    dispatch({
                        type: 'pages',
                        payLoad: {
                            pages: res.data.pages
                        }
                    })
                })
                .catch(err => {
                    console.log("error ", err);
                    this.setState({error: "404 About Us Page Not Found"})
                });
        }
        if(!posts){
            axios.get(API_PATH + 'posts')
                .then((res) => {
                    let duplicate = [...res.data.posts];
                    let reverse = duplicate.reverse();
                    dispatch({
                        type: 'posts',
                        payLoad: {
                            posts: reverse
                        }
                    });
                })
                .catch(err => {
                    console.log("error", err);
                    this.setState({error: "Not Found"})
                })
        }

    };

    render() {
        let {slug, pages, posts } = this.props;
        let {error} = this.state;
        let post = null;
        if(posts){
            post = posts.find(element=> element.slug===slug)
        }
        let one = [];
        let defaults = [];
        if (pages !== null && pages.length > 0) {
            pages.forEach((item, index) => {
                if (item.templateOrder === 'one' && item.type ==="blog") {
                    one = [...one, <BlogHeader publicationCategory={"Post"}
                                               headerImg={item && item.featuredImage && item.featuredImage.url}
                                               heading={"BLOG"} key={index}/>]
                } else if(item.type ==="blog"){
                    defaults = [...defaults,
                        <DefaultComponent featuredImage={item.featuredImage}
                                          headerImageLabel={item.headerImageLabel && item.headerImageLabel}
                                          metaTitle={item.metaTitle && item.metaTitle}
                                          leadText={item.leadText && item.leadText}
                                          content={item.content && item.content}/>
                    ]
                }
            })
        }

        return (<div>
            {
                (one.length > 0 ? one : error ? (<div className="splash">
                    <div className="lds-ellipsis">
                        <h1><strong>{error}</strong></h1>
                    </div>
                </div>) : (<div className="splash">
                    <div className="lds-ellipsis">
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>))
            }
            {defaults.length > 0 && defaults}
            {post && <DetailContent post={post}/>}
            {/*<DetailCard/>*/}
            <RequestDemo/>
        </div>)
    }
}

export default post;
