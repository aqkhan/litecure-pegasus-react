import React, { Component } from "react";
import Product from "./index";
import {PegasusConsumer} from "../../../store/context";

// This is where we are fetching data from global store and passed it to App component
// which is responsible for rendering all the components.
class ProductContainer extends Component{

    render(){
        return(
            <PegasusConsumer>
                {
                    (({dispatch, products, stories, pages}) =>(
                        <Product dispatch={dispatch} products={products} stories={stories} slug={this.props.slug} pages={pages}/>
                    ))
                }
            </PegasusConsumer>
        )
    }
}

export default ProductContainer;