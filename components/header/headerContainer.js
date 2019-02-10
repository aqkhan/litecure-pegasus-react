import React, { Component } from "react";
import Header from "./index";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class HeaderContainer extends Component{

    render(){
        return(
                <PegasusConsumer>
                    {
                        (({dispatch, toggle, navigations, navigationChilds, image, leadText, gtag}) =>(
                            <Header dispatch={dispatch} toggle={toggle} navigations={navigations} image={image} navigationChilds={navigationChilds} leadText={leadText} type={this.props.type} gtag={gtag}/>
                        ))
                    }
                </PegasusConsumer>
        )
    }
}

export default HeaderContainer;