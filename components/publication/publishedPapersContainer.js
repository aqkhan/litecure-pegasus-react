import React, { Component } from "react";
import PublishedPapers from "./publishedPapers";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class PublishedPapersContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, publications, tags}) =>(
                        <PublishedPapers dispatch={dispatch} pages={pages} publications={publications} tags={tags}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default PublishedPapersContainer;