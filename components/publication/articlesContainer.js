import React, { Component } from "react";
import Articles from "./articles";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class ArticlesContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, publications, tags}) =>(
                        <Articles dispatch={dispatch} pages={pages} publications={publications} tags={tags}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default ArticlesContainer;