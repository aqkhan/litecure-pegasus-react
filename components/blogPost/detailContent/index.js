import React, {Component} from 'react';
import Link from 'next/link';
import axios from "axios";
import {API_PATH} from "../../apiconfig";

class detailContent extends Component {
    state = {
        post:null,
        err:null
    }
    componentWillMount() {
        let {slug}= this.props;
        axios.get(API_PATH +'posts/'+slug)
            .then((res) => {
                this.setState({post: res.data.post})
            })
            .catch(err => {
                this.setState({err:err})
            })
    }
    render() {
        let {post,err} = this.state;
        console.log("post",post)
        return (
            <div>
                {post &&<section className="content-dev">
                    <div className="container">
                        <div className="title-dev">
                            <p className="w-text">{post.title}</p>
                        </div>
                        <div className="description-dev">
                            <div className="publication-description"
                                 dangerouslySetInnerHTML={{__html: post.content}}/>

                            <div className="publication-description"
                                 dangerouslySetInnerHTML={{__html: post.moreContent}}/>


                            {/*<div className="authors-details-card">*/}
                                {/*<div className="card">*/}
                                    {/*<div className="card-body">*/}
                                        {/*{post.authorImage &&*/}
                                        {/*<img className="author-img-div" src={post.authorImage.url}/>}*/}
                                        {/*<div>*/}
                                            {/*<p className="author-name">{post.authors}</p>*/}
                                        {/*</div>*/}
                                        {/*{post.Bio && <div>*/}
                                            {/*<div className="author-bio"*/}
                                                 {/*dangerouslySetInnerHTML={{__html: post.bio && post.bio}}/>*/}
                                        {/*</div>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>}
                {
                    err && <section className="content-dev">
                        <div className="container">
                            <div className="title-dev">
                                <h1><b>Invalid post Link</b></h1>
                            </div>
                        </div>
                    </section>
                }
            </div>
        );
    }
}
export default detailContent;