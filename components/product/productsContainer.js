import React, { Component } from "react";
import Products from "./index";
import {PegasusConsumer} from "../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class ProductsContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, products}) =>(
                        <Products dispatch={dispatch} products={products}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default ProductsContainer;