import React, { Component } from "react";
import AboutUs from "./index";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class AboutUsContainer extends Component{

    render(){
        return(
                <PegasusConsumer>
                    {
                        (({dispatch, pages, products}) =>(
                        <AboutUs dispatch={dispatch} pages={pages} products={products}/>
                        ))
                    }
                </PegasusConsumer>
        )
    }
}

export default AboutUsContainer;