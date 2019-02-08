import React, { Component } from "react";
import Home from "./index";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class HomeContainer extends Component{

    render(){
        return(
                <PegasusConsumer>
                    {
                        (({dispatch, pages, products, stories}) =>(
                        <Home dispatch={dispatch} pages={pages} products={products} stories={stories}/>
                        ))
                    }
                </PegasusConsumer>
        )
    }
}

export default HomeContainer;