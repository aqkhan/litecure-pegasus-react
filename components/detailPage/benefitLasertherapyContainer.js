import React, { Component } from "react";
import BenefitLaserTherapy from "./benefitLaserTherapy";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class BenefitLaserTherapyContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages}) =>(
                        <BenefitLaserTherapy dispatch={dispatch} pages={pages}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default BenefitLaserTherapyContainer;