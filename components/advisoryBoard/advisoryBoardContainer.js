import React, { Component } from "react";
import AdvisoryBoard from "./index";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class AdvisoryBoardContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, pages, advisoryTeamMembers}) =>(
                        <AdvisoryBoard dispatch={dispatch} pages={pages} advisoryTeamMembers={advisoryTeamMembers}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default AdvisoryBoardContainer;