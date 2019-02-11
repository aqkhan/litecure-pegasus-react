import React, { Component } from "react";
import Photobiomodulation from "./index";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class PhotobiomodulationContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages}) =>(
                        <Photobiomodulation dispatch={dispatch} pages={pages}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default PhotobiomodulationContainer;