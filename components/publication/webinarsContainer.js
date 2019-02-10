import React, { Component } from "react";
import Webinars from "./webinars";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class WebinarsContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, webinars, tags}) =>(
                        <Webinars dispatch={dispatch} pages={pages} webinars={webinars} tags={tags}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default WebinarsContainer;