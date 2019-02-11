import React, { Component } from "react";
import Posts from "./blogs";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class BlogsContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, posts, tags}) =>(
                        <Posts dispatch={dispatch} pages={pages} posts={posts} tags={tags}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default BlogsContainer;