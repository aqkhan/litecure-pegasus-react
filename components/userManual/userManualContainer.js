import React, { Component } from "react";
import Child from "./index";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class Container extends Component{

    render(){
        return(
                <PegasusConsumer>
                    {
                        (({dispatch, pages, products}) =>(
                        <Child dispatch={dispatch} pages={pages} products={products}/>
                        ))
                    }
                </PegasusConsumer>
        )
    }
}

export default Container;