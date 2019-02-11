import React, { Component } from "react";
import Post from "./post";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class PostContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, posts}) =>(
                        <Post dispatch={dispatch} pages={pages} posts={posts} slug={this.props.slug}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default PostContainer;