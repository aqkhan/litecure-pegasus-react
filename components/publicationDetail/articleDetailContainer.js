import React, { Component } from "react";
import Article from "./articleDetail";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class ArticleContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, publications}) =>(
                        <Article dispatch={dispatch} pages={pages} publications={publications} slug={this.props.slug}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default ArticleContainer;