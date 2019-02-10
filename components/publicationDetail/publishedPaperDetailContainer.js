import React, { Component } from "react";
import PublishedPaper from "./publishedPaperDetail";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class PublishedPaperContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, publications}) =>(
                        <PublishedPaper dispatch={dispatch} pages={pages} publications={publications} slug={this.props.slug}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default PublishedPaperContainer;