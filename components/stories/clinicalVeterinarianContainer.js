import React, { Component } from "react";
import ClinicalVeterinarian from "./clinicalVeterinarian";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class ClinicalVeterinarianContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, stories}) =>(
                        <ClinicalVeterinarian dispatch={dispatch} pages={pages} stories={stories}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default ClinicalVeterinarianContainer;