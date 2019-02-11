import React, { Component } from "react";
import AdvisoryBoardMember from "./index";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class AdvisoryBoardMemberContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, advisoryTeamMembers}) =>(
                        <AdvisoryBoardMember dispatch={dispatch} advisoryTeamMembers={advisoryTeamMembers} slug={this.props.slug}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default AdvisoryBoardMemberContainer;