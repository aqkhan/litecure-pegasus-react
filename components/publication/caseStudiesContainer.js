import React, { Component } from "react";
import CaseStudies from "./caseStudies";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class CaseStudiesContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, publications, tags}) =>(
                        <CaseStudies dispatch={dispatch} pages={pages} publications={publications} tags={tags}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default CaseStudiesContainer;