import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Products from '../components/product'
class Product extends Component {


    render() {
        return (<Layout>
                <Products/>
            </Layout>
        )
    }
}
export default withRouter(Product);
