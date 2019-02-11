import React, { Component } from "react";
import Webinar from "./webinar";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class WebinarContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, webinars, tags}) =>(
                        <Webinar dispatch={dispatch} pages={pages} webinars={webinars} slug={this.props.slug} tags={tags}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default WebinarContainer;